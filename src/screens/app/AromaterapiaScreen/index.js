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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function AromaterapiaScreen({ navigation }) {
  // Substitua o link abaixo pelo link do vídeo que você quiser
  const youtubeLink =
    "https://www.youtube.com/watch?v=jfysVM4z_gQ&list=PLyxPafvd4nh8vFLNqngQ0FUWCaeh63FAi&index=1";

  const handleOpenLink = () => {
    Linking.openURL(youtubeLink);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Aromaterapia</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
        <Text style={styles.buttonText}>▶ Assistir no YouTube</Text>
      </TouchableOpacity>

      <Image
        source={require("../../../../assets/aroma.webp")}
        style={styles.image}
      />
    </ScrollView>
  );
}
