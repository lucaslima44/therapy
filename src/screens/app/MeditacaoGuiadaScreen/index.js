import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function MeditacaoGuiadaScreen({navigation}) {
  // Substitua o link abaixo pelo link do vídeo que você quiser
  const youtubeLink =
    "https://www.youtube.com/watch?v=H9LXHBI9cgg&list=PLKjrHqw60dFHUJEaL2uXEbFwzVlUIIrb1&index=2";

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
      <Text style={styles.title}>Meditacao Guiada</Text>

      <Text style={styles.subtitle}>
        🧘 Meditação Guiada: O Caminho para o Equilíbrio Interior
            A meditação guiada é uma prática em que uma pessoa é conduzida por um instrutor, 
            través das etapas da meditação, 
            com o objetivo de focar a mente e alcançar um estado de relaxamento e consciência plena. 
            Seu propósito é facilitar a concentração e o controle dos pensamentos, 
            tornando a prática mais acessível, especialmente para iniciantes.
      </Text>

      <Text style={styles.subtitle}>
            Nesta modalidade, o guia fornece instruções verbais, que podem incluir foco na respiração, 
            visualizações de cenários relaxantes, ou a repetição de mantras. 
            As sessões podem ser adaptadas para diferentes necessidades, como meditação para dormir, 
            para aliviar a ansiedade ou para cultivar a gratidão, 
            permitindo uma experiência personalizada e eficaz.
      </Text>

      <Text style={styles.subtitle}>
            A prática regular da meditação guiada oferece benefícios como a redução do estresse e da 
            ansiedade, melhora da qualidade do sono, aumento da concentração e do autoconhecimento. 
            Ao dedicar alguns minutos do dia para ouvir e seguir a orientação, você cria um espaço 
            mental de calma, aprendendo a observar seus pensamentos e emoções sem julgamento.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
        <Text style={styles.buttonText}>▶ Assistir no YouTube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}