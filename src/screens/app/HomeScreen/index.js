import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView, // <-- O ScrollView AINDA é necessário!
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Screen from "../../../components/Screen"; // Import 1
import styles from "./styles";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { profissionaisData } from "./../../../data/profissionaisData";
import { agendamentosData } from "./../../../data/agendamentosData";

const { width: screenWidth } = Dimensions.get("window");
const carouselData = [
  { id: "1", source: require("./../../../../assets/wellhub.webp") },
  { id: "2", source: require("./../../../../assets/italo.webp") },
  { id: "3", source: require("./../../../../assets/hospitalSaoPaulo.webp") },
];
// --------------------------------------------------

export default function HomeScreen({ navigation }) {
  const carouselRef = useRef(null); //para controlar o carrossel
  const popularesData = profissionaisData.slice(0, 4);

  const agendamento = agendamentosData[0];
  const profissional = agendamento
    ? profissionaisData.find((prof) => prof.id === agendamento.professionalId)
    : null;

  // Função para formatar a data (copiada da ConsultasScreen)
  const formatarData = (dataISO) => {
    if (!dataISO) return ""; // Proteção caso dataISO seja nulo
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = String(data.getFullYear()).slice(-2);
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    return `Agendado para ${dia}/${mes}/${ano} às ${hora}:${minuto}`;
  };

  // --- CONTEÚDO DE VOLTA AQUI ---
  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItemContainer}>
      <Image
        style={styles.parceirosImage}
        source={item.source}
        resizeMode="contain"
      />
    </View>
  );
  // ------------------------------------------------------------

  // --- CONTEÚDO DE VOLTA AQUI ---
  const renderProfissionalPopularesItem = ({ item }) => (
    <TouchableOpacity
      style={styles.profissionalPopularesItemContainer}
      onPress={() =>
        navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
      }
    >
      <Image
        style={styles.profissionalPopularesImage}
        source={item.source}
        resizeMode="contain"
      />
      <Text style={styles.profissionalPopularesTitle}>{item.nome}</Text>
      <Text style={styles.profissionalPopularesArea}>{item.area}</Text>
      <Text
        style={styles.profissionalPopularesDescricao}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {item.descricao.substring(0, 30)}...
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
        }
      >
        <Text style={styles.profissionalPopularesVerMais}>Ver mais</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* --- CONTEÚDO DE VOLTA AQUI --- */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.menuButton}
          >
            <Feather name="menu" size={28} color="#000" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={require("./../../../../assets/Group (1).png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>Therapy Room</Text>
          </View>
        </View>

        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.subtitle}>Cliente</Text>

        {/* --- CONTEÚDO DE VOLTA AQUI --- */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Parceiros")}>
            <Carousel
              ref={carouselRef}
              loop
              width={screenWidth * 0.9}
              height={150}
              autoPlay={true}
              autoPlayInterval={5000}
              data={carouselData}
              renderItem={renderCarouselItem}
              style={styles.carousel}
            />
          </TouchableOpacity>

          {/* --- Seta Esquerda --- */}
          <TouchableOpacity
            style={[styles.arrowButton, styles.arrowLeft]}
            onPress={() => carouselRef.current?.prev()} // Manda o carrossel voltar
          >
            <Feather name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>

          {/* --- Seta Direita --- */}
          <TouchableOpacity
            style={[styles.arrowButton, styles.arrowRight]}
            onPress={() => carouselRef.current?.next()} // Manda o carrossel avançar
          >
            <Feather name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* --- CONTEÚDO DE VOLTA AQUI --- */}
        <View style={styles.profissionaisPopularesContainer}>
          <View style={styles.profissionaisPopularesHeader}>
            <Text style={styles.profissionaisPopularesTitle}>
              Profissionais Populares
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ListedProfessionals")}
            >
              <Text style={styles.profissionaisPopularesSeeAll}>Ver tudo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profissionaisPopularesList}>
            <TouchableOpacity
              style={styles.buttonFilterProfissionais}
              onPress={() => navigation.navigate("ListedProfessionals")}
            >
              <Text style={styles.buttonFilterProfissionaisText}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFilterProfissionais}
              onPress={() => navigation.navigate("PrimeiraArea")}
            >
              <Text style={styles.buttonFilterProfissionaisText}>
                Psicologia
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFilterProfissionais}
              onPress={() => navigation.navigate("SegundaArea")}
            >
              <Text style={styles.buttonFilterProfissionaisText}>
                Psicoterapia
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={popularesData}
            renderItem={renderProfissionalPopularesItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.profissionaisPopularesList}
          />
        </View>

        {/* --- CONTEÚDO DE VOLTA AQUI --- */}
        {agendamento && profissional && (
          <TouchableOpacity
            style={styles.cardAgendamento}
            onPress={() => navigation.navigate("Consultas")}
          >
            <View style={styles.topRow}>
              {/* Imagem do profissional */}
              <Image
                source={profissional.source}
                style={styles.imagemProfissional}
              />
              <View style={styles.nomeEStatus}>
                <Text style={styles.nomeProfissional}>{profissional.nome}</Text>
                {/* Botão Confirmado */}
                <View style={styles.statusConfirmado}>
                  <Text style={styles.statusText}>Confirmado</Text>
                </View>
              </View>
            </View>

            <View style={styles.bottomRow}>
              <Text style={styles.dataAgendamento}>
                {formatarData(agendamento.dataAgendamento)}
              </Text>
              {/* Ícone de Lápis (Editar) */}
              <TouchableOpacity style={styles.iconeEditar}>
                <MaterialIcons name="edit" size={20} color="#555" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </Screen>
  );
}
