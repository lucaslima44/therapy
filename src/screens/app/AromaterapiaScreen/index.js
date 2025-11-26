import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import styles from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

export default function AromaterapiaScreen({ navigation }) {
  const [playing, setPlaying] = useState(false);

  // Link original da Aromaterapia
  const youtubeLink =
    "https://www.youtube.com/watch?v=jfysVM4z_gQ&list=PLyxPafvd4nh8vFLNqngQ0FUWCaeh63FAi&index=1";

  // Função para pegar o ID
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
      
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Aromaterapia</Text>
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
          A aromaterapia é uma prática terapêutica que utiliza óleos essenciais
          naturais extraídos de plantas, flores, frutas e ervas para promover o
          bem-estar físico e emocional. Seu objetivo é equilibrar corpo e mente
          por meio dos aromas, que estimulam diferentes respostas no organismo.
        </Text>

        <Text style={styles.subtitle}>
          Os óleos essenciais podem ser aplicados de diversas formas, como em
          difusores, massagens ou banhos aromáticos. Cada aroma possui
          propriedades específicas — alguns ajudam a relaxar e aliviar o estresse,
          enquanto outros estimulam a energia e a concentração, proporcionando uma
          sensação de harmonia.
        </Text>

        <Text style={styles.subtitle}>
          A prática regular da aromaterapia contribui para reduzir a ansiedade,
          melhorar a qualidade do sono e fortalecer o sistema imunológico. Além
          disso, cria um ambiente mais agradável e acolhedor, transformando
          pequenos momentos do dia em experiências de cuidado e equilíbrio
          interior.
        </Text>

        {/* --- CARD DA PLAYLIST --- */}
        <TouchableOpacity style={styles.playlistCard} onPress={handleOpenPlaylist}>
          <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="playlist-play" size={40} color="#fff" />
          </View>
          <View style={styles.cardTextContainer}>
             <Text style={styles.cardTitle}>Ver Playlist Completa</Text>
             <Text style={styles.cardDescription}>
               Confira mais vídeos sobre Aromaterapia no YouTube.
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