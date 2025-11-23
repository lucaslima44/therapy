import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
// 1. IMPORTANTE: Importar o AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../../../components/Screen";
import styles from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { profissionaisData } from "./../../../data/profissionaisData";
import { agendamentosData } from "./../../../data/agendamentosData";

const { width: screenWidth } = Dimensions.get("window");

const carouselData = [
  { id: "1", source: require("./../../../../assets/wellhub.webp") },
  { id: "2", source: require("./../../../../assets/italo.webp") },
  { id: "3", source: require("./../../../../assets/hospitalSaoPaulo.webp") },
];

export default function HomeScreen({ navigation }) {
  const carouselRef = useRef(null);

  // 2. ESTADO PARA GUARDAR O NOME (Inicia como "Cliente" enquanto carrega)
  const [userName, setUserName] = useState("Cliente");

  // 3. EFEITO QUE BUSCA O DADO DO BANCO (SALVO NA MEMÓRIA)
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("@user_data");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);

          if (parsedUser.name) {
            // LÓGICA DE FORMATAÇÃO (Capitalize)
            const nomeFormatado = parsedUser.name
              .toLowerCase() // 1. Garante que tudo comece minúsculo (ex: "LUCAS" vira "lucas")
              .split(" ") // 2. Separa as palavras (["lucas", "alves"])
              .map((palavra) => {
                // 3. Pega a 1ª letra e joga pra maiúscula + o resto da palavra
                return palavra.charAt(0).toUpperCase() + palavra.slice(1);
              })
              .join(" "); // 4. Junta tudo de novo com espaço ("Lucas Alves")

            setUserName(nomeFormatado);
          }
        }
      } catch (error) {
        console.log("Erro ao carregar nome do usuário:", error);
      }
    };

    loadUserData();
  }, []);

  // Pega apenas os 4 primeiros para a lista horizontal
  const popularesData = profissionaisData.slice(0, 4);

  // Lógica do Agendamento
  const agendamento = agendamentosData[0];
  const profissional = agendamento
    ? profissionaisData.find((prof) => prof.id === agendamento.professionalId)
    : null;

  // --- FUNÇÕES AUXILIARES ---
  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    return `${dia}/${mes} às ${hora}:${minuto}`;
  };

  // --- RENDER ITEMS ---
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

  // --- ESTRUTURA DA TELA ---
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

        {/* 4. AQUI APARECE O NOME QUE VEIO DO BANCO */}
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

        {/* SEÇÃO: PROFISSIONAIS POPULARES */}
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

        {/* CARD DE PRÓXIMO AGENDAMENTO */}
        {agendamento && profissional && (
          <TouchableOpacity
            style={styles.cardAgendamento}
            onPress={() => navigation.navigate("Consultas")}
          >
            <View style={styles.agendamentoHeader}>
              <Image
                source={profissional.source}
                style={styles.agendamentoAvatar}
              />
              <View style={styles.agendamentoInfo}>
                <Text style={styles.agendamentoNome} numberOfLines={1}>
                  {profissional.nome}
                </Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>Confirmado</Text>
                </View>
              </View>
            </View>

            <View style={styles.agendamentoFooter}>
              <Text style={styles.agendamentoData}>
                <Feather name="calendar" size={14} color="#8E8E93" />
                {" " + formatarData(agendamento.dataAgendamento)}
              </Text>
              <TouchableOpacity style={styles.iconeAcao}>
                <MaterialIcons name="edit" size={20} color="#555" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </Screen>
  );
}
