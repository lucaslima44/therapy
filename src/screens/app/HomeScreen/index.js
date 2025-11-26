import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../../../components/Screen";
import styles from "./styles";
import { Feather, AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { profissionaisData } from "./../../../data/profissionaisData";

const { width: screenWidth } = Dimensions.get("window");

const carouselData = [
  { id: "1", source: require("./../../../../assets/wellhub.webp") },
  { id: "2", source: require("./../../../../assets/italo.webp") },
  { id: "3", source: require("./../../../../assets/hospitalSaoPaulo.webp") },
];

export default function HomeScreen({ navigation }) {
  const carouselRef = useRef(null);

  // Estados
  const [userName, setUserName] = useState("Cliente");
  const [isLoading, setIsLoading] = useState(true);

  // Carrega dados do usuário
  useEffect(() => {
    const loadUserData = async () => {
      try {
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
        console.log("Erro ao carregar usuário:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };
    loadUserData();
  }, []);

  const popularesData = profissionaisData.slice(0, 4);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItemContainer}>
      <Image
        style={styles.parceirosImage}
        source={item.source}
        resizeMode="cover"
      />
    </View>
  );

  const renderProfissionalCard = ({ item }) => (
    <TouchableOpacity
      style={styles.cardProfissionalPop}
      onPress={() =>
        navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
      }
    >
      <Image
        style={styles.cardProfissionalImage}
        source={item.source}
        resizeMode="cover"
      />
      <Text style={styles.cardProfissionalName} numberOfLines={1}>
        {item.nome}
      </Text>
      <Text style={styles.cardProfissionalArea} numberOfLines={1}>
        {item.area}
      </Text>
      <Text
        style={styles.cardProfissionalDesc}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {item.descricao}
      </Text>
      <Text style={styles.cardVerMais}>Ver mais</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5F7FA",
        }}
      >
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  // --- TELA PRINCIPAL ---
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.menuButton}
          >
            <Feather name="menu" size={28} color="#333" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={require("./../../../../assets/logoColorida.webp")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>Therapy Room</Text>
          </View>
          <View style={{ width: 28 }} />
        </View>

        {/* SAUDAÇÃO */}
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.subtitle}>{userName}</Text>

        {/* CARROSSEL */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Parceiros")}>
            <Carousel
              ref={carouselRef}
              loop
              width={screenWidth * 0.9}
              height={120}
              autoPlay={true}
              autoPlayInterval={5000}
              data={carouselData}
              renderItem={renderCarouselItem}
              scrollAnimationDuration={1000}
            />
          </TouchableOpacity>

          {/* Setas do Carrossel */}
          <TouchableOpacity
            style={[styles.arrowButton, styles.arrowLeft]}
            onPress={() => carouselRef.current?.prev()}
          >
            <Feather name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.arrowButton, styles.arrowRight]}
            onPress={() => carouselRef.current?.next()}
          >
            <Feather name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* PROFISSIONAIS POPULARES */}
        <View style={{ marginTop: 10 }}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Profissionais Populares</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ListedProfessionals")}
            >
              <Text style={styles.seeAllButton}>Ver tudo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.filterListContainer}>
            <TouchableOpacity
              style={styles.buttonFilter}
              onPress={() => navigation.navigate("ListedProfessionals")}
            >
              <Text style={styles.buttonFilterText}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFilter}
              onPress={() => navigation.navigate("PrimeiraArea")}
            >
              <Text style={styles.buttonFilterText}>Psicologia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFilter}
              onPress={() => navigation.navigate("SegundaArea")}
            >
              <Text style={styles.buttonFilterText}>Psicoterapia</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={popularesData}
            renderItem={renderProfissionalCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 15, paddingRight: 20 }}
          />
        </View>

        {/* CHECK-IN DE HUMOR (Redireciona para o Perfil) */}
        <View
          style={[
            styles.cardAgendamento,
            {
              flexDirection: "column",
              alignItems: "flex-start",
              paddingVertical: 20,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 15,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
                Como se sente hoje?
              </Text>
              <Text style={{ fontSize: 12, color: "#666" }}>
                Registe o seu humor diário
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Text
                style={{ color: "#6C63FF", fontSize: 12, fontWeight: "bold" }}
              >
                Ver histórico
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.moodRow}>
            <TouchableOpacity
              style={styles.moodButton}
              onPress={() => navigation.navigate("Perfil")}
            >
              <View style={[styles.moodIconBg, { backgroundColor: "#E8F5E9" }]}>
                <AntDesign name="smile" size={32} color="#4CAF50" />
              </View>
              <Text style={styles.moodText}>Bem</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moodButton}
              onPress={() => navigation.navigate("Perfil")}
            >
              <View style={[styles.moodIconBg, { backgroundColor: "#E3F2FD" }]}>
                <FontAwesome5 name="meh" size={32} color="#2196F3" />
              </View>
              <Text style={styles.moodText}>Normal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moodButton}
              onPress={() => navigation.navigate("Perfil")}
            >
              <View style={[styles.moodIconBg, { backgroundColor: "#FFF3E0" }]}>
                <Entypo name="emoji-sad" size={32} color="#FF9800" />
              </View>
              <Text style={styles.moodText}>Mal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moodButton}
              onPress={() => navigation.navigate("Perfil")}
            >
              <View style={[styles.moodIconBg, { backgroundColor: "#FFEBEE" }]}>
                <FontAwesome5 name="angry" size={32} color="#F44336" />
              </View>
              <Text style={styles.moodText}>Raiva</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
