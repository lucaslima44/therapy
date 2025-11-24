import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Screen from "../../../components/Screen";

// --- DADOS DE MAPEAMENTO (A Lógica da Bússola) ---
const guideOptions = [
  {
    id: "1",
    label: "Estou muito ansioso(a) ou com pânico",
    iconLib: Feather,
    iconName: "activity",
    color: "#FF6B6B",
    therapyType: "TCC (Cognitivo-Comportamental)",
    description:
      "Foca em identificar e mudar padrões de pensamento e comportamento que geram sofrimento. Ótima para resultados práticos.",
    searchKey: "cognitiva", // Chave para filtrar na busca depois
  },
  {
    id: "2",
    label: "Quero entender meu passado e quem sou",
    iconLib: MaterialCommunityIcons,
    iconName: "brain",
    color: "#4ECDC4",
    therapyType: "Psicanálise",
    description:
      "Uma jornada profunda de autoconhecimento, explorando o inconsciente, memórias e a infância para ressignificar o presente.",
    searchKey: "psicanalise",
  },
  {
    id: "3",
    label: "Problemas no relacionamento ou família",
    iconLib: FontAwesome5,
    iconName: "user-friends",
    color: "#FFE66D",
    therapyType: "Terapia Sistêmica",
    description:
      "Analisa as interações e dinâmicas entre as pessoas. Ideal para casais, famílias ou entender seu papel nos grupos.",
    searchKey: "sistemica",
  },
  {
    id: "4",
    label: "Sinto um vazio existencial / Busco propósito",
    iconLib: Feather,
    iconName: "sun",
    color: "#1A535C",
    therapyType: "Humanista / Fenomenológica",
    description:
      "Foca no potencial humano, no acolhimento e na busca por sentido na vida e no momento presente.",
    searchKey: "humanista",
  },
];

export default function TherapyGuideScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0)); // Animação simples

  const handleSelect = (item) => {
    setSelected(item);
    // Reinicia e roda a animação de fade in
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleFindProfessionals = () => {
    if (selected) {
      // Navega para a lista filtrando (Você precisará ajustar sua tela de lista para receber esse parametro)
      navigation.navigate("ListedProfessionals", {
        filterArea: selected.searchKey,
      });
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />

        {/* HEADER COM BOTÃO DE PULAR */}
        <View style={styles.header}>
          {/* Botão Voltar (Opcional, se quiser permitir voltar pro login, senão remova) */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Guia Terapêutico</Text>

          {/* BOTÃO IR PARA HOME (PULAR) */}
          <TouchableOpacity
            onPress={() => navigation.replace("MainApp")} // Usa replace para não voltar aqui
            style={styles.skipButton}
          >
            <Text style={styles.skipText}>Pular</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.bigTitle}>
            O que você sente{"\n"}neste momento?
          </Text>
          <Text style={styles.subtitle}>
            Selecione o card que mais combina com sua necessidade atual.
          </Text>

          {/* LISTA DE OPÇÕES */}
          <View style={styles.gridContainer}>
            {guideOptions.map((item) => {
              const isSelected = selected?.id === item.id;
              const Icon = item.iconLib;

              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.optionCard,
                    isSelected && styles.optionCardSelected,
                    { borderColor: isSelected ? item.color : "transparent" },
                  ]}
                  onPress={() => handleSelect(item)}
                  activeOpacity={0.8}
                >
                  <View
                    style={[
                      styles.iconCircle,
                      { backgroundColor: item.color + "20" },
                    ]}
                  >
                    <Icon name={item.iconName} size={24} color={item.color} />
                  </View>
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && { fontWeight: "bold", color: "#333" },
                    ]}
                  >
                    {item.label}
                  </Text>

                  {isSelected && (
                    <View
                      style={[
                        styles.checkBadge,
                        { backgroundColor: item.color },
                      ]}
                    >
                      <Feather name="check" size={12} color="#fff" />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* ÁREA DE RESULTADO (MATCH) */}
          {selected && (
            <Animated.View
              style={[styles.resultContainer, { opacity: fadeAnim }]}
            >
              <LinearGradient
                colors={["#6C63FF", "#4834d4"]} // Roxo bonito do seu tema
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.resultCard}
              >
                <Text style={styles.matchLabel}>
                  A melhor abordagem para você pode ser:
                </Text>
                <Text style={styles.matchTitle}>{selected.therapyType}</Text>
                <Text style={styles.matchDescription}>
                  {selected.description}
                </Text>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleFindProfessionals}
                >
                  <Text style={styles.actionButtonText}>
                    Encontrar especialistas
                  </Text>
                  <Feather name="arrow-right" size={18} color="#6C63FF" />
                </TouchableOpacity>
                {/* BOTÃO FINAL DE PÁGINA (OPCIONAL) */}
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    alignSelf: "center",
                    padding: 15,
                  }}
                  onPress={() => navigation.replace("MainApp")}
                >
                  <Text
                    style={{ color: "#999", textDecorationLine: "underline" }}
                  >
                    Prefiro ir direto para a tela inicial
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animated.View>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    </Screen>
  );
}
