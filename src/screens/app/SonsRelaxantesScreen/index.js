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
import styles from "./styles";
import { ScrollView } from "react-native";

export default function SonsRelaxantesScreen({ navigation }) {
  // Lista de faixas
  const tracks = [
    {
      title: "Cola No Ap 3 - Mc Dena, Mc IG, Mc GP",
      file: require("../../../../assets/audio/audio1.mp3"),
    },
    {
      title:
        "GOODNIGHT 5 - MC IG, MC GP, MC Ryan SP, Aaron Modesto, MC Meno K e MC GH do 7 (Fepache e DJ Oreia)",
      file: require("../../../../assets/audio/audio2.mp3"),
    },
    {
      title: "AMOR E FE",
      file: require("../../../../assets/audio/audio3.mp3"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [volume, setVolume] = useState(0.8);

  const soundRef = useRef(null);
  // --- FUNÇÃO PARA FORMATAR O TEMPO (MM:SS) ---
  const formatTime = (millis) => {
    if (!millis) return "00:00";
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Carrega a música
  const loadTrack = async (index) => {
    // Garante que parou a anterior
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    try {
      const { sound } = await Audio.Sound.createAsync(
        tracks[index].file,
        { shouldPlay: true, volume: volume }, // Já inicia com o volume configurado
        onPlaybackUpdate
      );
      soundRef.current = sound;
      setIsPlaying(true);
    } catch (error) {
      console.log("Erro ao carregar som:", error);
    }
  };

  // Atualiza o status da música (tempo, play/pause)
  const onPlaybackUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis || 1);
      setIsPlaying(status.isPlaying);
    } else if (status.didJustFinish) {
      // Opcional: Ir para próxima música automaticamente quando acabar
      setIsPlaying(false);
      setPosition(0);
    }
  };

  // --- CICLO DE VIDA (INICIAR E SAIR) ---
  useEffect(() => {
    
    async function configureAudio() {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true, // Continua tocando se o app for para background
          playsInSilentModeIOS: true, // <--- O PULO DO GATO PARA IPHONE
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
        loadTrack(currentIndex);
      } catch (e) {
        console.log("Erro config audio", e);
      }
    }

    configureAudio();

    return () => {
      if (soundRef.current) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  // Trocar para próxima música
  const nextTrack = async () => {
    let next = (currentIndex + 1) % tracks.length;
    setCurrentIndex(next);
    await loadTrack(next);
  };

  // Música anterior
  const prevTrack = async () => {
    let prev = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    await loadTrack(prev);
  };

  // Play / Pause
  const togglePlay = async () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      await soundRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  // Mover slider de progresso
  const onSliderChange = async (value) => {
    if (!soundRef.current) return;
    const seekPosition = value * duration;
    await soundRef.current.setPositionAsync(seekPosition);
  };

  // --- CONTROLE DE VOLUME ---
  const handleVolumeChange = async (value) => {
    setVolume(value);
    if (soundRef.current) {
      await soundRef.current.setVolumeAsync(value);
    }
  };
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
        <Text style={styles.title}>Sons Relaxantes</Text>
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
        <Text style={styles.titleText}>{tracks[currentIndex].title}</Text>
      </View>

      {/* Controles Principais */}
      <View style={styles.controlsContainer}>
        {/* Botões Play/Pause/Next */}
        <View style={styles.buttonsRow}>
          <Icon
            name="play-skip-back"
            size={35}
            color="#fff"
            onPress={prevTrack}
          />

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

          <Icon
            name="play-skip-forward"
            size={35}
            color="#fff"
            onPress={nextTrack}
          />
        </View>

        {/* Slider de Progresso */}
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={position / duration}
          onValueChange={onSliderChange}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="rgba(255,255,255,0.3)"
          thumbTintColor="#FFFFFF"
        />

        {/* Tempo Formatado (00:00 / 00:00) */}
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(position)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
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
