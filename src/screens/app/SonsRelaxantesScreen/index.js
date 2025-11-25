import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import { BlurView } from "expo-blur";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles"; // Mantenha a importação de seus estilos
import { ScrollView } from "react-native";

// --- URL DO STREAM DE RÁDIO CHILLHOP 24H (MP3) ---
const CHILLHOP_STREAM = "https://channels.fluxfm.de/chillhop/externalembedflxhp/stream.mp3";
const RADIO_TITLE = "ChillHop Radio (FluxFM - 24h Stream)";

export default function SonsRelaxantesScreen({ navigation }) {
  // O Stream não tem um 'index' ou 'tracks', mas mantemos estados de controle
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const soundRef = useRef(null);

  // --- FUNÇÃO PARA FORMATAR O TEMPO (MM:SS) ---
  // Para stream 24h, isso mostrará o tempo de execução desde que o play foi iniciado.
  const formatTime = (millis) => {
    if (!millis) return "00:00";
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Carrega o Stream
  const loadStream = async () => {
    // Garante que parou o anterior, se houver
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    try {
      // Audio.Sound.createAsync aceita a URI remota
      const { sound } = await Audio.Sound.createAsync(
        { uri: CHILLHOP_STREAM }, // Passando a URL do stream
        { shouldPlay: true, volume: volume },
        onPlaybackUpdate
      );
      soundRef.current = sound;
      setIsPlaying(true);
    } catch (error) {
      console.log("Erro ao carregar o Stream:", error);
      // Aqui você pode adicionar um alerta para o usuário
    }
  };

  // Atualiza o status do Stream (tempo, play/pause)
  // Nota: durationMillis será nulo ou indefinido em streams 24h.
  const onPlaybackUpdate = (status) => {
    if (status.isLoaded) {
      // Apenas atualiza a posição e o status de reprodução.
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    } 
    // Não precisamos de lógica 'didJustFinish', pois o stream é infinito.
  };

  // --- CICLO DE VIDA (INICIAR E SAIR) ---
  useEffect(() => {
    
    async function configureAndLoad() {
      try {
        // Configuração essencial para playback em segundo plano
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true, 
          playsInSilentModeIOS: true, 
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
        
        // Carrega o stream ao iniciar o componente
        loadStream();
      } catch (e) {
        console.log("Erro ao configurar ou carregar áudio:", e);
      }
    }

    configureAndLoad();

    // Limpeza: Descarrega o som quando o componente for desmontado
    return () => {
      if (soundRef.current) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  // Play / Pause
  const togglePlay = async () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      // Se não estiver tocando, tente tocar
      await soundRef.current.playAsync(); 
    }
    setIsPlaying(!isPlaying);
  };
  
  // --- CONTROLE DE VOLUME ---
  const handleVolumeChange = async (value) => {
    setVolume(value);
    if (soundRef.current) {
      await soundRef.current.setVolumeAsync(value);
    }
  };
  
  // O componente renderiza.
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Rádio Relaxante 24h</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Background com Blur */}
      <ImageBackground
        source={require("../../../../assets/som.webp")}
        style={styles.blurredBackground}
        resizeMode="cover"
      >
        <BlurView intensity={90} tint="dark" style={styles.blurOverlay} />
      </ImageBackground>

      {/* Capa do Álbum */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/som.webp")}
          style={styles.mainImage}
        />
        {/* Usamos o título fixo da rádio */}
        <Text style={styles.titleText}>{RADIO_TITLE}</Text>
      </View>

      {/* Controles Principais */}
      <View style={styles.controlsContainer}>
        
        {/* Botões Play/Pause (Removemos Next/Prev pois o stream é contínuo) */}
        <View style={styles.buttonsRow}>
          
          {/* Ocultamos o botão Anterior/Prev (apenas para estética, não tem função) */}
          <Icon name="play-skip-back" size={35} color="transparent" /> 

          <TouchableOpacity
            onPress={togglePlay}
            style={styles.playButtonWrapper}
          >
            <Icon
              name={isPlaying ? "pause-circle" : "play-circle"}
              size={75}
              color="#fff"
            />
          </TouchableOpacity>

          {/* Ocultamos o botão Próxima/Next (apenas para estética, não tem função) */}
          <Icon name="play-skip-forward" size={35} color="transparent" /> 
        </View>

 

        {/* --- CONTROLE DE VOLUME --- */}
        <View style={styles.volumeContainer}>
          <MaterialIcons name="volume-down" size={24} color="#ddd" />
          <Slider
            style={styles.volumeSlider}
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={handleVolumeChange}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="rgba(255,255,255,0.3)"
            thumbTintColor="#FFF"
          />
          <MaterialIcons name="volume-up" size={24} color="#ddd" />
        </View>
      </View>
    </ScrollView>
  );
}