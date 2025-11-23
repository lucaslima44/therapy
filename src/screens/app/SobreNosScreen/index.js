import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function SobreNosScreen({ navigation }) {
  // --- MANTER O BLOCO DE CORREÇÃO DO GESTO ---
  // (Isso ainda é necessário para o iPhone não bugar o "voltar")
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ swipeEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ swipeEnabled: true });
    };
  }, [navigation]);
  // -------------------------------------------

  return (
    <View style={styles.container}>
      
      {/* --- HEADER FIXO --- */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sobre Nós</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* --- CONTEÚDO LIMPO --- */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* LOGO NO TOPO CENTRALIZADA */}
        <View style={styles.logoContainer}>
          <Image
            // ATENÇÃO: Verifique se este é o caminho correto da sua logo
            source={require("../../../../assets/logoColorida.webp")} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* TEXTO COM NOVA ESTILIZAÇÃO */}
        <Text style={styles.introText}>
          A Therapy Room nasceu em 2025 com o propósito de transformar o cuidado
          com a saúde mental em algo acessível, acolhedor e conectado à rotina das
          pessoas.
        </Text>

        <Text style={styles.text}>
          Nosso objetivo é ajudar cada usuário a conquistar mais
          equilíbrio emocional e qualidade de vida por meio de terapia online,
          meditação guiada e exercícios de relaxamento.
        </Text>

        <Text style={styles.text}>
          Acreditamos que cuidar da mente deve ser algo natural e possível para
          todos. Por isso, unimos tecnologia e empatia em um aplicativo completo,
          onde você pode encontrar profissionais qualificados, registrar suas
          emoções e acessar conteúdos de bem-estar quando e onde quiser.
        </Text>

        {/* Destaque final sutil */}
        <View style={styles.highlightBox}>
           <Text style={styles.textHighlight}>
             Mais do que uma plataforma, somos um espaço de apoio e autodescoberta. 🌿
           </Text>
        </View>
        
        <View style={{ marginBottom: 40 }} />
      </ScrollView>
    </View>
  );
}