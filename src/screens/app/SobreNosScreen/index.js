import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  // StyleSheet, // Removido - não estava sendo usado
  Image,
  ScrollView, // Mantido
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function SobreNosScreen({ navigation }) {
  return (
    // --- ERRO 1 CORRIGIDO ---
    // A View principal foi trocada por um ScrollView.
    // O 'style' foi movido para 'contentContainerStyle'
    // para que o padding e outros estilos do container funcionem.
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        {/* --- ERRO 2 CORRIGIDO --- */}
        {/* A variável 'area' foi trocada por um texto estático */}
        <Text style={styles.title}>Sobre Nós</Text>

        {/* View "fantasma" para centralizar o título */}
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.text}>
        A Therapy Room nasceu em 2025 com o propósito de transformar o cuidado
        com a saúde mental em algo acessível, acolhedor e conectado à rotina das
        pessoas. Nosso objetivo é ajudar cada usuário a conquistar mais
        equilíbrio emocional e qualidade de vida por meio de terapia online,
        meditação guiada e exercícios de relaxamento.
      </Text>

      <Text style={styles.text}>
        Acreditamos que cuidar da mente deve ser algo natural e possível para
        todos. Por isso, unimos tecnologia e empatia em um aplicativo completo,
        onde você pode encontrar profissionais qualificados, registrar suas
        emoções e acessar conteúdos de bem-estar quando e onde quiser.
      </Text>

      <Text style={styles.text}>
        Mais do que uma plataforma, somos um espaço de apoio e autodescoberta.
        Na Therapy Room, cada sessão, cada respiração e cada momento de pausa é
        um passo em direção a uma vida mais leve e saudável. 🌿
      </Text>

      <Image
        style={styles.image}
        source={require("../../../../assets/sobrenos.webp")}
      />
    </ScrollView> // <-- ERRO 3 CORRIGIDO: Esta tag agora fecha o ScrollView
  );
}
