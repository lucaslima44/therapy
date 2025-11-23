import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { AntDesign, Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Importamos o seu componente de Modal (certifique-se que o caminho está certo)
import HumorModal from "./../HumorModal";

// Importamos dados (apenas userData e recentData, pois o moodData agora será dinâmico)
import { userData, recentData } from "../../../data/mockProfileData";

// --- CONFIGURAÇÃO DOS HUMORES (MAPA) ---
// Isso liga a string do modal ("feliz") ao Ícone e Cor do perfil
const MOOD_MAP = {
  feliz: { lib: AntDesign, icon: "smile", color: "#7ED957" },
  chorando: { lib: FontAwesome5, icon: "sad-cry", color: "#6CCDFF" }, // Azul claro
  raiva: { lib: FontAwesome5, icon: "angry", color: "#FF4444" },
  triste: { lib: Entypo, icon: "emoji-sad", color: "#C5A8E0" }, // Roxo
  surpreso: { lib: FontAwesome5, icon: "surprise", color: "#FED93F" },
  default: { lib: AntDesign, icon: "plus", color: "#E0E0E0" }, // Estado vazio
};

// --- COMPONENTES AUXILIARES ---

const MoodDayItem = React.memo(({ item, onPress }) => {
  // Descobre qual configuração usar baseada no humor salvo (ou default se for null)
  const currentMood = item.mood ? MOOD_MAP[item.mood] : MOOD_MAP["default"];
  const IconLib = currentMood.lib;

  return (
    <TouchableOpacity style={styles.moodDay} onPress={() => onPress(item)}>
      <Text style={styles.dayLabel}>{item.day}</Text>
      <View
        style={[styles.moodValueBox, { backgroundColor: currentMood.color }]}
      >
        {/* Renderiza o ícone dinamicamente */}
        <IconLib
          name={currentMood.icon}
          size={20}
          color={item.mood ? "#000" : "#888"}
        />
      </View>
    </TouchableOpacity>
  );
});

const RecentCardItem = React.memo(({ item }) => (
  <View style={styles.recentCard}>
    <Image source={item.source} style={styles.recentImage} />
  </View>
));

// --- COMPONENTE PRINCIPAL ---
export default function ProfileScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  // 1. ESTADO DOS DIAS (Inicializa 7 dias vazios)
  // Como é front-end puro, ao recarregar o app isso reseta.
  const [weeklyMoods, setWeeklyMoods] = useState([
    { id: 1, day: "Seg", mood: null },
    { id: 2, day: "Ter", mood: null },
    { id: 3, day: "Qua", mood: null },
    { id: 4, day: "Qui", mood: null },
    { id: 5, day: "Sex", mood: null },
    { id: 6, day: "Sáb", mood: null },
    { id: 7, day: "Dom", mood: null },
  ]);

  // 2. ESTADOS DO MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDayId, setSelectedDayId] = useState(null);

  // Ação ao clicar na bolinha do dia
  const handleOpenModal = (item) => {
    setSelectedDayId(item.id);
    setModalVisible(true);
  };

  // Ação ao escolher o humor no Modal
  const handleSelectMood = (moodKey) => {
    // Atualiza apenas o dia que foi clicado
    const updatedWeek = weeklyMoods.map((dayItem) => {
      if (dayItem.id === selectedDayId) {
        return { ...dayItem, mood: moodKey };
      }
      return dayItem;
    });

    setWeeklyMoods(updatedWeek);
    setModalVisible(false);
    setSelectedDayId(null);
  };

  return (
    <View style={styles.container}>
      {/* ÁREA SUPERIOR */}
      <View style={[styles.headerContainer, { paddingTop: insets.top + 10 }]}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.clientName}>{userData.name}</Text>
          <Image source={userData.avatar} style={styles.profileAvatar} />
        </View>
      </View>

      {/* ÁREA INFERIOR */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats */}
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

        {/* Humor semanal INTERATIVO */}
        <Text style={styles.sectionTitle}>Humor semanal</Text>
        <FlatList
          data={weeklyMoods} // Usamos o estado local agora
          renderItem={({ item }) => (
            <MoodDayItem item={item} onPress={handleOpenModal} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moodListContent}
        />

        {/* Mais recentes */}
        <Text style={styles.recentTitle}>Mais recentes</Text>
        <FlatList
          data={recentData}
          renderItem={({ item }) => <RecentCardItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentListContent}
        />
      </ScrollView>

      {/* MODAL DE HUMOR */}
      <HumorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectMood={handleSelectMood}
      />
    </View>
  );
}
