// Local: src/screens/OnboardingSegundo/index.js

import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
// Importa o MESMO estilo da pasta OnboardingPrimeiro
import styles from "../OnboardingPrimeiro/styles"; 
import { Feather } from "@expo/vector-icons"; // Importa o ícone de seta

export default function OnboardingSegundo({ navigation }) {
  // --- Funções de navegação ---
  const handleOnboardingPrimeiroPress = () => {
    navigation.navigate("OnboardingPrimeiro");
  };
  const handleOnboardingSegundoPress = () => {
    navigation.navigate("OnboardingSegundo");
  };
  const handleOnboardingTerceiroPress = () => {
    navigation.navigate("OnboardingTerceiro"); // Navega para a próxima
  };

  const handlePularPress = () => {
    navigation.navigate("Welcome"); // Pula tudo
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* --- 1. CABEÇALHO --- */}
      <View style={styles.header}>
        {/* Botão de voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pularButton} onPress={handlePularPress}>
          <Text style={styles.pularText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* --- 2. CORPO --- */}
      <View style={styles.body}>
        <Image
          source={require("./../../../assets/onboarding2.png")} // Imagem correta
          style={styles.image}
        />
        <Text style={styles.titulo}>Meditação & Yoga</Text>
        <Text style={styles.text}>
          Aprenda a focar no presente. Deixe a ansiedade de lado e encontre a paz
          interior com sessões guiadas de meditação e yoga. Respire fundo e se
          reconecte consigo mesmo.
        </Text>
      </View>

      {/* --- 3. RODAPÉ (COM A CORREÇÃO) --- */}
      <View style={styles.footer}>
        {/* Pontos de Paginação (Ponto 2 está ativo) */}
        <View style={styles.paginationDots}>
          
          {/* Ponto 1 (Inativo) */}
          <TouchableOpacity onPress={handleOnboardingPrimeiroPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>

          {/* Ponto 2 (Ativo) */}
          <TouchableOpacity onPress={handleOnboardingSegundoPress}>
            <View style={[styles.dot, styles.dotActive]} />
          </TouchableOpacity>

          {/* Ponto 3 (Inativo) */}
          <TouchableOpacity onPress={handleOnboardingTerceiroPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>

        </View>

        {/* Botão Continuar */}
        <TouchableOpacity style={styles.botao} onPress={handleOnboardingTerceiroPress}>
          <Text style={styles.textobotao}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}