import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function AutomassagemScreen({ navigation }) {
  // Substitua o link abaixo pelo link do vídeo que você quiser
  const youtubeLink =
    "https://www.youtube.com/watch?v=oiRZKQ4H2LI&list=PLJuS_E9WOGMkf-Dn_k-Oyb2wNVbrRFeGr&index=1";

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

        <Text style={styles.title}>Automassagem</Text>

        {/* View "fantasma" para centralizar o título (da nossa conversa anterior) */}
        <View style={{ width: 24 }} />
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
        simples que pode ser feito em poucos minutos e traz grandes benefícios
        para o equilíbrio do corpo e da mente.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
        <Text style={styles.buttonText}>▶ Assistir no YouTube</Text>
      </TouchableOpacity>

      <Image
        source={require("../../../../assets/automassagem.jpeg")}
        style={styles.image}
      />
    </ScrollView>
  );
}
