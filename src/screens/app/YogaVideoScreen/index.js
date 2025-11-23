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

export default function YogaVideoScreen({ navigation }) {
  const [playing, setPlaying] = useState(false);

  // Link completo (com a lista) para usar no botão final
  const youtubeLink = "https://www.youtube.com/watch?v=_uuPyvhnQAs&list=PLliphiBhRpFifpASmvmpQtrtFFL0zMGh7&index=1";

  // Função para pegar só o ID para o Player interno
  const getVideoId = (url) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = regex.exec(url);
    return match && match[1] ? match[1] : null;
  };

  const videoId = getVideoId(youtubeLink);

  const onStateChange = useCallback((state) => {
    if (state === "ended") setPlaying(false);
  }, []);

  // Função para abrir a playlist no app do YouTube
  const handleOpenPlaylist = () => {
    Linking.openURL(youtubeLink);
  };

  return (
    <View style={styles.container}>
      
      {/* --- HEADER (Fixo fora do ScrollView) --- */}
      {/* Aplicando o estilo roxo que você pediu */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Yoga em vídeo</Text>
      </View>

      {/* --- CONTEÚDO QUE ROLA --- */}
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
            // Propriedade para evitar erros na web se necessário
            webViewProps={{
              allowsInlineMediaPlayback: true, 
              mediaPlaybackRequiresUserAction: false,
            }}
          />
        </View>

        <Text style={styles.subtitle}>
          O yoga em vídeo é uma forma prática e acessível de aproveitar todos os
          benefícios da prática, permitindo que você acompanhe movimentos,
          posturas e respirações guiadas diretamente do conforto da sua casa.
        </Text>

        <Text style={styles.subtitle}>
          As aulas podem ser realizadas em diferentes níveis, do iniciante ao
          avançado. Além disso, os vídeos ajudam a manter o ritmo, corrigir 
          posturas e criar uma rotina mais equilibrada.
        </Text>

        <Text style={styles.subtitle}>
          A prática regular contribui para reduzir o estresse, aumentar a 
          flexibilidade e melhorar o foco. É um cuidado simples que exige 
          apenas alguns minutos.
        </Text>

        {/* --- CARD DA PLAYLIST (NOVO) --- */}
        <TouchableOpacity style={styles.playlistCard} onPress={handleOpenPlaylist}>
          <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="playlist-play" size={40} color="#fff" />
          </View>
          <View style={styles.cardTextContainer}>
             <Text style={styles.cardTitle}>Ver Playlist Completa</Text>
             <Text style={styles.cardDescription}>
               Clique aqui para acessar a sequência de aulas no YouTube.
             </Text>
          </View>
          <Feather name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Espaço extra no final para não cortar o card */}
        <View style={{ height: 30 }} />

      </ScrollView>
    </View>
  );
}