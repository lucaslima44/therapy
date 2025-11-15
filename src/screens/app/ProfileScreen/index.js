import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// --- IMPORTAÇÃO DOS DADOS ---
// Importamos nossos dados fictícios do novo arquivo
import { userData, moodData, recentData } from "../../../data/mockProfileData";

// --- COMPONENTES AUXILIARES ---
// Movendo a lógica de renderização para fora do componente principal.
// Isso melhora a performance e a legibilidade.

// Helper para cor do humor
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

// Componente para cada item de Humor
// Usamos React.memo para evitar re-renderizações desnecessárias
const MoodDayItem = React.memo(({ item }) => (
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
));

// Componente para cada card Recente
const RecentCardItem = React.memo(({ item }) => (
  <View style={styles.recentCard}>
    <Image source={item.source} style={styles.recentImage} />
  </View>
));

// --- COMPONENTE PRINCIPAL ---
export default function ProfileScreen({ navigation }) {
  const insets = useSafeAreaInsets(); // Hook para pegar a área segura
  
  // Funções de renderização para as FlatLists
  // Elas agora apenas chamam os componentes que criamos
  const renderMoodItem = ({ item }) => <MoodDayItem item={item} />;
  const renderRecentItem = ({ item }) => <RecentCardItem item={item} />;

  return (
    <View style={styles.container}>
      {/* 1. ÁREA SUPERIOR (BRANCA) */}
      <View style={[styles.headerContainer, { paddingTop: insets.top + 10 }]}>
        <View style={styles.topBar}>
          {/* Botão Menu (Esquerda) */}
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={28} color="#333" />
          </TouchableOpacity>

          {/* Nome do Cliente (Centro) - DADO DO "BANCO" */}
          <Text style={styles.clientName}>{userData.name}</Text>

          {/* Avatar (Direita) - DADO DO "BANCO" */}
          <Image source={userData.avatar} style={styles.profileAvatar} />
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
          data={moodData} // <-- Dado importado
          renderItem={renderMoodItem}
          keyExtractor={(item) => item.day}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moodListContent}
        />

        {/* Mais recentes */}
        <Text style={styles.recentTitle}>Mais recentes</Text>
        <FlatList
          data={recentData} // <-- Dado importado
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