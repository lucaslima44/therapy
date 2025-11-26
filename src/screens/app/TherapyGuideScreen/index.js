import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  SafeAreaView,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const guideOptions = [
  {
    id: "1",
    label: "Estou muito ansioso(a) ou com pânico",
    iconLib: Feather,
    iconName: "activity",
    color: "#FF6B6B",
    area: "Psicologia",
  },
  {
    id: "2",
    label: "Quero entender meu passado e quem sou",
    iconLib: MaterialCommunityIcons,
    iconName: "brain",
    color: "#4ECDC4",
    area: "Psicoterapia",
  },
  {
    id: "3",
    label: "Problemas no relacionamento ou família",
    iconLib: FontAwesome5,
    iconName: "user-friends",
    color: "#FFE66D",
    area: "Psicologia",
  },
  {
    id: "4",
    label: "Sinto um vazio existencial / Busco propósito",
    iconLib: Feather,
    iconName: "sun",
    color: "#1A535C",
    area: "Psicoterapia",
  },
];

export default function TherapyGuideScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  const handleSelect = (item) => {
    setSelected(item);

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleFindProfessionals = () => {
    if (selected) {
      navigation.navigate("ListedProfessionals", {
        filterArea: selected.area,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F7FA" }}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent={false}
          backgroundColor="#F5F7FA"
        />

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Guia Terapêutico</Text>

          <TouchableOpacity
            onPress={() => navigation.replace("MainApp")}
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

          {/* LISTA DE CARDS */}
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

          {/* RESULTADO */}
          {selected && (
            <Animated.View
              style={[styles.resultContainer, { opacity: fadeAnim }]}
            >
              <LinearGradient
                colors={["#6C63FF", "#4834d4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.resultCard}
              >
                <Text style={styles.matchLabel}>A área recomendada é:</Text>

                {/* MOSTRA SÓ A ÁREA */}
                <Text style={styles.matchTitle}>{selected.area}</Text>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleFindProfessionals}
                >
                  <Text style={styles.actionButtonText}>
                    Encontrar profissionais
                  </Text>
                  <Feather name="arrow-right" size={18} color="#6C63FF" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 20, alignSelf: "center", padding: 15 }}
                  onPress={() => navigation.replace("MainApp")}
                >
                  <Text
                    style={{ color: "#ddd", textDecorationLine: "underline" }}
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
    </SafeAreaView>
  );
}
