import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function YogaVideoScreen({ navigation }) {
  // Substitua o link abaixo pelo link do vídeo que você quiser
  const youtubeLink =
    "https://www.youtube.com/watch?v=_uuPyvhnQAs&list=PLliphiBhRpFifpASmvmpQtrtFFL0zMGh7&index=1";

  const handleOpenLink = () => {
    Linking.openURL(youtubeLink);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Yoga em vídeo</Text>

        {/* View "fantasma" para centralizar o título (da nossa conversa anterior) */}
        <View style={{ width: 24 }} />
      </View>

    <Text style={styles.subtitle}> 
        O yoga em vídeo é uma forma prática e acessível de aproveitar todos os benefícios da prática, permitindo que você acompanhe movimentos, posturas e respirações guiadas diretamente do conforto da sua casa. 
    </Text> 
    
    <Text style={styles.subtitle}> 
        As aulas podem ser realizadas em diferentes níveis, do iniciante ao avançado, tornando o yoga adaptável para qualquer pessoa. Além disso, os vídeos ajudam a manter o ritmo, corrigir posturas e criar uma rotina mais equilibrada e consciente ao longo do dia. 
    </Text> 
        
    <Text style={styles.subtitle}> 
        A prática regular do yoga em vídeo contribui para reduzir o estresse, aumentar a flexibilidade, melhorar o foco e promover o bem-estar físico e emocional. É um cuidado simples que exige apenas alguns minutos e traz grandes benefícios para a mente, o corpo e a respiração. 
    </Text>

      <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
        <Text style={styles.buttonText}>▶ Assistir no YouTube</Text>
      </TouchableOpacity>

      <Image source={require("../../../../assets/yogavideo.jpeg")} style={styles.image}/>

    </ScrollView>
  );
}