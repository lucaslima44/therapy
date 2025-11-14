import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity, // Importado para o botão de menu
} from "react-native";
import styles from "./styles"; // O .js do StyleSheet (logo abaixo)
import AntDesign from "@expo/vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons"; // Importado para o ícone de menu
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Para o padding do "notch"

// --- Dados para as listas ---
const moodData = [
  { day: "DOM", value: 1 },
  { day: "SEG", value: 2 },
  { day: "TER", value: 3 },
  { day: "QUA", value: 4 },
  { day: "QUI", value: 5 },
  { day: "SEX", value: 6 },
  { day: "SAB", value: 7 },
];

const recentData = [
  { id: "1", source: require("../../../../assets/terapia1.jpg") },
  { id: "2", source: require("../../../../assets/terapia2.jpg") },
  { id: "3", source: require("../../../../assets/terapia1.jpg") }, // Exemplo
];
// ------------------------------------

export default function ProfileScreen({ navigation }) {
  // <-- Recebe 'navigation'
  const insets = useSafeAreaInsets(); // Hook para pegar a área segura

  const getMoodColor = (value) => {
    const colors = [
      "#7ED957",
      "#FED93F",
      "#FF9147",
      "#FF4444",
      "#FF4444",
      "#C5A8E0",
      "#69DB7C",
    ];
    return colors[value - 1] || "#CCCCCC";
  };

  // --- Funções de renderização para as FlatLists ---
  const renderMoodItem = ({ item }) => (
    <View style={styles.moodDay}>
      <Text style={styles.dayLabel}>{item.day}</Text>
      <View
        style={[
          styles.moodValueBox,
          { backgroundColor: getMoodColor(item.value) },
        ]}
      >
        <Text style={styles.moodValue}>{item.value}</Text>
      </View>
    </View>
  );

  const renderRecentItem = ({ item }) => (
    <View style={styles.recentCard}>
      <Image source={item.source} style={styles.recentImage} />
    </View>
  );
  // --------------------------------------------------------

  return (
    <View style={styles.container}>
      {/* 1. ÁREA SUPERIOR (BRANCA) - ATUALIZADA */}
      <View style={[styles.headerContainer, { paddingTop: insets.top + 10 }]}>
        {/* Usamos o 'insets' para o padding do topo */}

        <View style={styles.topBar}>
          {/* Botão Menu (Esquerda) */}
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={28} color="#333" />
          </TouchableOpacity>

          {/* Nome do Cliente (Centro) */}
          <Text style={styles.clientName}>Nome do Cliente</Text>

          {/* Avatar (Direita) */}
          <Image
            source={require("../../../../assets/logoP.webp")}
            style={styles.profileAvatar} // <-- Usando o novo estilo de avatar
          />
        </View>
      </View>

      {/* 2. ÁREA INFERIOR (AZUL, ROLA) */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats - Consultas */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <AntDesign
              name="hourglass"
              size={28}
              color="#FFF"
              style={styles.statIcon}
            />
            <Text style={styles.statNumber}>02</Text>
            <Text style={styles.statLabel}>Consultas Agendadas</Text>
          </View>
          <View style={styles.statItem}>
            <AntDesign
              name="check-circle"
              size={28}
              color="#FFF"
              style={styles.statIcon}
            />
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Consultas Realizadas</Text>
          </View>
        </View>

        {/* Humor semanal */}
        <Text style={styles.sectionTitle}>Humor semanal</Text>
        <FlatList
          data={moodData}
          renderItem={renderMoodItem}
          keyExtractor={(item) => item.day}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moodListContent}
        />

        {/* Mais recentes */}
        <Text style={styles.recentTitle}>Mais recentes</Text>
        <FlatList
          data={recentData}
          renderItem={renderRecentItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentListContent}
        />
      </ScrollView>
    </View>
  );
}
