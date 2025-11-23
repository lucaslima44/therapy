import React, { useState, useCallback } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Platform 
} from "react-native";
import styles from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

export default function AutomassagemScreen({ navigation }) {
  const [playing, setPlaying] = useState(false);

  // Link específico da Automassagem
  const youtubeLink = "https://www.youtube.com/watch?v=oiRZKQ4H2LI&list=PLJuS_E9WOGMkf-Dn_k-Oyb2wNVbrRFeGr&index=1";

  // Função para extrair o ID
  const getVideoId = (url) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = regex.exec(url);
    return match && match[1] ? match[1] : null;
  };

  const videoId = getVideoId(youtubeLink);

  const onStateChange = useCallback((state) => {
    if (state === "ended") setPlaying(false);
  }, []);

  const handleOpenPlaylist = () => {
    Linking.openURL(youtubeLink);
  };

  return (
    <View style={styles.container}>
      
      {/* --- HEADER ROXO FIXO --- */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Automassagem</Text>
      </View>

      {/* --- CONTEÚDO --- */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Player de Vídeo */}
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={220}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
            webViewProps={{
              allowsInlineMediaPlayback: true, 
              mediaPlaybackRequiresUserAction: false,
            }}
          />
        </View>

        <Text style={styles.subtitle}>
          A automassagem é uma técnica simples e eficaz que consiste em aplicar
          toques, pressões e movimentos suaves no próprio corpo, com o objetivo de
          aliviar tensões, melhorar a circulação e promover o bem-estar físico e
          mental.
        </Text>

        <Text style={styles.subtitle}>
          Ela pode ser realizada em diferentes partes do corpo, como pescoço,
          ombros, mãos e pés, ajudando a reduzir o estresse e a fadiga do dia a
          dia. Além disso, estimula o relaxamento muscular e auxilia na melhora da
          qualidade do sono.
        </Text>

        <Text style={styles.subtitle}>
          A prática regular da automassagem também pode aumentar a consciência
          corporal, melhorar o humor e favorecer a concentração. É um cuidado
          simples que pode ser feito em poucos minutos.
        </Text>

        {/* --- CARD DA PLAYLIST --- */}
        <TouchableOpacity style={styles.playlistCard} onPress={handleOpenPlaylist}>
          <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="playlist-play" size={40} color="#fff" />
          </View>
          <View style={styles.cardTextContainer}>
             <Text style={styles.cardTitle}>Ver Playlist Completa</Text>
             <Text style={styles.cardDescription}>
               Acesse a sequência de vídeos de automassagem no YouTube.
             </Text>
          </View>
          <Feather name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Espaço extra */}
        <View style={{ height: 30 }} />

      </ScrollView>
    </View>
  );
}