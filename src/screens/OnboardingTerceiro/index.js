import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../OnboardingPrimeiro/styles";
import { Feather } from "@expo/vector-icons";

export default function OnboardingTerceiro({ navigation }) {
  const handleOnboardingPrimeiroPress = () => {
    navigation.navigate("OnboardingPrimeiro");
  };
  const handleOnboardingSegundoPress = () => {
    navigation.navigate("OnboardingSegundo");
  };
  const handleOnboardingTerceiroPress = () => {
    navigation.navigate("OnboardingTerceiro");
  };
  
  const handleExplorarPress = () => {
    navigation.navigate("TelaExplorar");
  };

  const handleContinuePress = () => {
    navigation.navigate("Welcome");
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
          source={require("./../../../assets/onboarding3.png")}
          style={styles.image}
        />
        <Text style={styles.titulo}>Relaxamento</Text>
        <Text style={styles.text}>
          Recupere suas energias. Uma seleção de sons suaves e calmantes para te
          ajudar a reduzir o estresse e dormir melhor. Um pequeno oásis de
          tranquilidade no seu dia.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.paginationDots}>
          <TouchableOpacity onPress={handleOnboardingPrimeiroPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOnboardingSegundoPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOnboardingTerceiroPress}>
            <View style={[styles.dot, styles.dotActive]} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleExplorarPress}>
          <Text style={styles.textobotao}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
