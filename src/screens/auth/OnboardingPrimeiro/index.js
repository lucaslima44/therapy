// Local: src/screens/OnboardingPrimeiro/index.js

import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"; // Importa o NOVO styles.js

export default function OnboardingPrimeiro({ navigation }) {
  // --- Suas funções de navegação (Estão corretas) ---
  const handleOnboardingPrimeiroPress = () => {
    navigation.navigate("OnboardingPrimeiro");
  };
  const handleOnboardingSegundoPress = () => {
    navigation.navigate("OnboardingSegundo"); // Navega para a próxima
  };
  const handleOnboardingTerceiroPress = () => {
    navigation.navigate("OnboardingTerceiro");
  };

  const handlePularPress = () => {
    navigation.navigate("Welcome"); // Pula tudo
  };

  return (
    <View style={styles.container}>
      {/* Mudei o style da StatusBar para "light" 
        para o texto ficar branco no fundo escuro 
      */}
      <StatusBar style="light" />

      {/* --- 1. CABEÇALHO --- */}
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <TouchableOpacity style={styles.pularButton} onPress={handlePularPress}>
          <Text style={styles.pularText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* --- 2. CORPO --- */}
      <View style={styles.body}>
        <Image
          source={require("./../../../assets/onboarding1.webp")}
          style={styles.image}
        />
        <Text style={styles.titulo}>Terapia</Text>
        <Text style={styles.text}>
          Não precisa carregar tudo sozinho. Aqui, você encontra o apoio de
          terapeutas especializados para cada momento da sua vida. Comece sua
          jornada de transformação pessoal.
        </Text>
      </View>

      {/* --- 3. RODAPÉ (COM A CORREÇÃO) --- */}
      <View style={styles.footer}>
        <View style={styles.paginationDots}>
          
          {/* CORREÇÃO: 
            Cada ponto <View> agora é envolvido por um <TouchableOpacity> 
            com o 'onPress' correto.
          */}

          {/* Ponto 1 (Ativo) */}
          <TouchableOpacity onPress={handleOnboardingPrimeiroPress}>
            <View style={[styles.dot, styles.dotActive]} />
          </TouchableOpacity>

          {/* Ponto 2 (Inativo) */}
          <TouchableOpacity onPress={handleOnboardingSegundoPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>

          {/* Ponto 3 (Inativo) */}
          <TouchableOpacity onPress={handleOnboardingTerceiroPress}>
            <View style={[styles.dot, styles.dotInactive]} />
          </TouchableOpacity>

          {/* A linha <Stack.Screen ... /> que estava aqui foi REMOVIDA.
          */}
        </View>

        {/* Botão Continuar */}
        <TouchableOpacity
          style={styles.botao}
          onPress={handleOnboardingSegundoPress} // "Continuar" vai para a próxima tela
        >
          <Text style={styles.textobotao}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}