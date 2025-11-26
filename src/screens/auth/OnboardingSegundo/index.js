import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../OnboardingPrimeiro/styles";
import { Feather } from "@expo/vector-icons";

export default function OnboardingSegundo({ navigation }) {
  const handleOnboardingPrimeiroPress = () => {
    navigation.navigate("OnboardingPrimeiro");
  };
  const handleOnboardingSegundoPress = () => {
    navigation.navigate("OnboardingSegundo");
  };
  const handleOnboardingTerceiroPress = () => {
    navigation.navigate("OnboardingTerceiro");
  };

  const handlePularPress = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pularButton} onPress={handlePularPress}>
          <Text style={styles.pularText}>Pular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image
          source={require("./../../../../assets/onboarding2.webp")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>Meditação & Yoga</Text>
        <Text style={styles.text}>
          Aprenda a focar no presente. Descanse e deixe a ansiedade de lado e
          encontre a paz interior com sessões guiadas de meditação e yoga.
          Respire fundo e se reconecte consigo mesmo e com o mundo.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.paginationDots}>
          <TouchableOpacity onPress={handleOnboardingPrimeiroPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnboardingSegundoPress}>
            <View style={[styles.dot, styles.dotActive]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnboardingTerceiroPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.botao}
          onPress={handleOnboardingTerceiroPress}
        >
          <Text style={styles.textobotao}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
