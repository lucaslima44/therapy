import React, { useState, useCallback } from "react";
import {
  View, // Adicionado
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform, // Adicionado
} from "react-native";
import styles from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

export default function MeditacaoGuiadaScreen({ navigation }) {
  const [playing, setPlaying] = useState(false);

  // Link original da Meditação
  const youtubeLink =
    "https://www.youtube.com/watch?v=H9LXHBI9cgg&list=PLKjrHqw60dFHUJEaL2uXEbFwzVlUIIrb1&index=2";

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
        
        <Text style={styles.headerTitle}>Meditação Guiada</Text>
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
          🧘 Meditação Guiada: O Caminho para o Equilíbrio Interior
        </Text>

        <Text style={styles.subtitle}>
          A meditação guiada é uma prática em que uma pessoa é conduzida por um instrutor,
          através das etapas da meditação, com o objetivo de focar a mente e alcançar um 
          estado de relaxamento e consciência plena. Seu propósito é facilitar a concentração 
          e o controle dos pensamentos, tornando a prática mais acessível, especialmente para iniciantes.
        </Text>

        <Text style={styles.subtitle}>
          Nesta modalidade, o guia fornece instruções verbais, que podem incluir foco na respiração,
          visualizações de cenários relaxantes, ou a repetição de mantras. As sessões podem ser 
          adaptadas para diferentes necessidades, como meditação para dormir, para aliviar a 
          ansiedade ou para cultivar a gratidão, permitindo uma experiência personalizada e eficaz.
        </Text>

        <Text style={styles.subtitle}>
          A prática regular da meditação guiada oferece benefícios como a redução do estresse e da
          ansiedade, melhora da qualidade do sono, aumento da concentração e do autoconhecimento.
          Ao dedicar alguns minutos do dia para ouvir e seguir a orientação, você cria um espaço
          mental de calma, aprendendo a observar seus pensamentos e emoções sem julgamento.
        </Text>

        {/* --- CARD DA PLAYLIST --- */}
        <TouchableOpacity style={styles.playlistCard} onPress={handleOpenPlaylist}>
          <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="playlist-play" size={40} color="#fff" />
          </View>
          <View style={styles.cardTextContainer}>
             <Text style={styles.cardTitle}>Ver Playlist Completa</Text>
             <Text style={styles.cardDescription}>
               Acesse a série completa de meditações guiadas.
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