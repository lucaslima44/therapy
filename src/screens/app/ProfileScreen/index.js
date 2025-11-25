import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import { AntDesign, Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import HumorModal from "./../HumorModal";
import { useAgendamento } from "../../../context/AgendamentoContext";

// Imagem padrão correta
const DEFAULT_AVATAR = require("../../../../assets/profile.webp");

// Chave para salvar a foto
const PROFILE_IMAGE_KEY = "@user_profile_image";

// Mapa de humores
const MOOD_MAP = {
  feliz: { lib: AntDesign, icon: "smile", color: "#7ED957" },
  chorando: { lib: FontAwesome5, icon: "sad-cry", color: "#6CCDFF" },
  raiva: { lib: FontAwesome5, icon: "angry", color: "#FF4444" },
  triste: { lib: Entypo, icon: "emoji-sad", color: "#C5A8E0" },
  surpreso: { lib: FontAwesome5, icon: "surprise", color: "#FED93F" },
  default: { lib: AntDesign, icon: "plus", color: "#E0E0E0" },
};

const MoodDayItem = React.memo(({ item, onPress }) => {
  const currentMood = item.mood ? MOOD_MAP[item.mood] : MOOD_MAP["default"];
  const IconLib = currentMood.lib;

  return (
    <TouchableOpacity style={styles.moodDay} onPress={() => onPress(item)}>
      <View
        style={[styles.moodValueBox, { backgroundColor: currentMood.color }]}
      >
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

// ---------------------------------------------------------------------
// TELA PRINCIPAL
// ---------------------------------------------------------------------

export default function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState("Cliente");
  const [profileImageUri, setProfileImageUri] = useState(null);

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

  // Agendamentos dinâmicos
  const { agendamentos = [] } = useAgendamento() || {};
  const totalAgendadas = agendamentos.length;
  const totalRealizadas = 0;

  // ---------------------------------------------------------------------
  // PERMISSÕES
  // ---------------------------------------------------------------------
  const requestMediaLibraryPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permissão negada",
        "Você precisa permitir o acesso à galeria para alterar a foto."
      );
      return false;
    }
    return true;
  };

  // Selecionar nova foto do perfil
  const pickProfileImage = async () => {
    const hasPermission = await requestMediaLibraryPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      const newUri = result.assets[0].uri;
      setProfileImageUri(newUri);

      try {
        await AsyncStorage.setItem(PROFILE_IMAGE_KEY, newUri);
      } catch (error) {
        console.error("Erro ao salvar imagem:", error);
      }
    }
  };

  // ---------------------------------------------------------------------
  // LOAD INICIAL (NOME E FOTO)
  // ---------------------------------------------------------------------
  useEffect(() => {
    const loadData = async () => {
      try {
        // Carrega nome
        const storedUser = await AsyncStorage.getItem("@user_data");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser.name) {
            const nomeFormatado = parsedUser.name
              .toLowerCase()
              .split(" ")
              .map(
                (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)
              )
              .join(" ");
            setUserName(nomeFormatado);
          }
        }
      } catch (error) {
        console.log("Erro ao carregar nome:", error);
      }

      // Carrega foto
      try {
        const storedUri = await AsyncStorage.getItem(PROFILE_IMAGE_KEY);
        if (storedUri) {
          setProfileImageUri(storedUri);
        }
      } catch (error) {
        console.log("Erro ao carregar URI da foto:", error);
      }
    };

    loadData();
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

  // ---------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------

  return (
    <View style={styles.container}>
      {/* HEADER */}
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
        {/* PERFIL HERO */}
        <View style={styles.profileHero}>
          <View style={styles.avatarWrapper}>
            <Image
              source={
                profileImageUri ? { uri: profileImageUri } : DEFAULT_AVATAR
              }
              style={styles.profileAvatar}
            />

            <TouchableOpacity
              style={styles.cameraIconButton}
              onPress={pickProfileImage}
            >
              <Feather name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.clientName}>{userName}</Text>
          <Text style={styles.clientEmail}>Cliente Premium</Text>
        </View>

        {/* STATS */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {String(totalAgendadas).padStart(2, "0")}
            </Text>
            <Text style={styles.statLabel}>Agendadas</Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {String(totalRealizadas).padStart(2, "0")}
            </Text>
            <Text style={styles.statLabel}>Realizadas</Text>
          </View>
        </View>

        {/* HUMOR */}
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

      {/* MODAL */}
      <HumorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectMood={handleSelectMood}
      />
    </View>
  );
}
