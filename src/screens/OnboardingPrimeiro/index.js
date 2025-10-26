import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function OnboardingPrimeiro({ navigation }) {
  // navegacao entre telas
  const handleOnboardingPress = () => {
    navigation.navigate("Welcome");
  };

  const handlePularPress = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pular} onPress={handlePularPress}>
        <Text style={styles.pular}>Pular</Text>
      </TouchableOpacity>

      <Image source={require("./../../../assets/onboarding1.png")} />
      <Text style={styles.titulo}>Terapia</Text>
      <Text style={styles.text}>
        Não precisa carregar tudo sozinho. Aqui, você encontra o apoio de
        terapeutas especializados para cada momento da sua vida. Comece sua
        jornada de transformação pessoal.
      </Text>
      <StatusBar style="auto" />

      {/* onpress = {variavel que declarou la em cima, para qual pagina vai} */}
      <TouchableOpacity style={styles.botao} onPress={handleOnboardingPress}>
        <Text style={styles.textobotao}>Continuar</Text>
      </TouchableOpacity>
      <View style={styles.pontobranco}></View>
      <View style={styles.pontobranco2}></View>
      <View style={styles.pontopreto}></View>
    </View>
  );
}
