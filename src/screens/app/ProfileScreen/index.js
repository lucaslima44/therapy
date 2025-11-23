import React, { useState, useEffect } from "react"; // <--- Adicionado useEffect
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // <--- Adicionado
import styles from "./styles";
import { AntDesign, Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import HumorModal from "./../HumorModal";
import { userData, recentData } from "../../../data/mockProfileData";

// --- MAPA DE HUMORES ---
const MOOD_MAP = {
  feliz: { lib: AntDesign, icon: "smile", color: "#7ED957" },
  chorando: { lib: FontAwesome5, icon: "sad-cry", color: "#6CCDFF" },
  raiva: { lib: FontAwesome5, icon: "angry", color: "#FF4444" },
  triste: { lib: Entypo, icon: "emoji-sad", color: "#C5A8E0" },
  surpreso: { lib: FontAwesome5, icon: "surprise", color: "#FED93F" },
  default: { lib: AntDesign, icon: "plus", color: "#E0E0E0" },
};

// --- COMPONENTES AUXILIARES ---

const MoodDayItem = React.memo(({ item, onPress }) => {
  const currentMood = item.mood ? MOOD_MAP[item.mood] : MOOD_MAP["default"];
  const IconLib = currentMood.lib;

  return (
    <TouchableOpacity style={styles.moodDay} onPress={() => onPress(item)}>
      <View style={[styles.moodValueBox, { backgroundColor: currentMood.color }]}>
        <IconLib
          name={currentMood.icon}
          size={24}
          color={item.mood ? "#fff" : "#888"}
        />
      </View>
      <Text style={styles.dayLabel}>{item.day}</Text>
    </TouchableOpacity>
  );
});

const RecentCardItem = React.memo(({ item }) => (
  <View style={styles.recentCard}>
    <Image source={item.source} style={styles.recentImage} />
  </View>
));

// --- TELA PRINCIPAL ---
export default function ProfileScreen({ navigation }) {
  
  // 1. ESTADO PARA O NOME DO USUÁRIO
  const [userName, setUserName] = useState("Cliente");

  // Estados do Humor
  const [weeklyMoods, setWeeklyMoods] = useState([
    { id: 1, day: "Seg", mood: null },
    { id: 2, day: "Ter", mood: null },
    { id: 3, day: "Qua", mood: null },
    { id: 4, day: "Qui", mood: null },
    { id: 5, day: "Sex", mood: null },
    { id: 6, day: "Sáb", mood: null },
    { id: 7, day: "Dom", mood: null },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDayId, setSelectedDayId] = useState(null);

  // 2. BUSCAR DADOS DO ASYNC STORAGE (IGUAL NA HOME)
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("@user_data");
        
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          
          if (parsedUser.name) {
            // Lógica de Formatação (Capitalize)
            const nomeFormatado = parsedUser.name
              .toLowerCase()
              .split(" ")
              .map((palavra) => {
                return palavra.charAt(0).toUpperCase() + palavra.slice(1);
              })
              .join(" ");

            setUserName(nomeFormatado);
          }
        }
      } catch (error) {
        console.log("Erro ao carregar perfil:", error);
      }
    };

    loadUserData();
  }, []);

  const handleOpenModal = (item) => {
    setSelectedDayId(item.id);
    setModalVisible(true);
  };

  const handleSelectMood = (moodKey) => {
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
      
      {/* --- HEADER PADRÃO --- */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Feather name="menu" size={28} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        
        <View style={{ width: 28 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        {/* --- PERFIL HERO (Avatar + Nome) --- */}
        <View style={styles.profileHero}>
          {/* Mantivemos o avatar do mock, mas você pode mudar depois */}
          <Image source={userData.avatar} style={styles.profileAvatar} />
          
          {/* 3. AQUI ESTÁ A VARIÁVEL COM O NOME DO BANCO */}
          <Text style={styles.clientName}>{userName}</Text>
          
          <Text style={styles.clientEmail}>Cliente Premium</Text>
        </View>

        {/* --- STATS CARD --- */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>02</Text>
            <Text style={styles.statLabel}>Agendadas</Text>
          </View>
          
          <View style={styles.verticalDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Realizadas</Text>
          </View>
        </View>

        {/* --- HUMOR SEMANAL --- */}
        <Text style={styles.sectionTitle}>Humor Semanal</Text>
        <View style={styles.moodSection}>
          <FlatList
            data={weeklyMoods}
            renderItem={({ item }) => (
              <MoodDayItem item={item} onPress={handleOpenModal} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* --- MODAL --- */}
      <HumorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectMood={handleSelectMood}
      />
    </View>
  );
}