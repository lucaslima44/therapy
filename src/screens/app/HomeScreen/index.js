import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { FlatList } from "react-native-gesture-handler";

const { width: screenWidth } = Dimensions.get("window");
const carouselData = [
  { id: "1", source: require("./../../../../assets/wellhub.webp") },
  { id: "2", source: require("./../../../../assets/italo.webp") },
  { id: "3", source: require("./../../../../assets/hospitalSaoPaulo.webp") },
];
// --------------------------------------------------

const profissionaisPopularesData = [
  {
    id: 1,
    nome: "Mister",
    source: require("./../../../../assets/doutorH.webp"),
    area: "Psicologia",
    descricao: "Ajudo a cuidar da saúde mental e estabelecer o bem-estar.",
  },
  {
    id: 2,
    nome: "Joe",
    source: require("./../../../../assets/doutoraM.webp"),
    area: "Psicoterapia",
    descricao: "Ajudo a lidar com problemas emocionais e emocionalidade.",
  },
  {
    id: 3,
    nome: "Kamisa",
    source: require("./../../../../assets/doutoraM.webp"),
    area: "Psicoterapia",
    descricao: "Ajudo a lidar com problemas emocionais e emocionalidade.",
  },
  {
    id: 4,
    nome: "Hitstar",
    source: require("./../../../../assets/doutoraM.webp"),
    area: "Psicoterapia",
    descricao: "Ajudo a lidar com problemas emocionais e emocionalidade.",
  },
  // outros profissionais...
];

export default function HomeScreen({ navigation }) {
  const carouselRef = useRef(null); //para controlar o carrossel

  // cada item do carrossel
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

  const renderProfissionalPopularesItem = ({ item }) => (
    <View style={styles.profissionalPopularesItemContainer}>
      <Image
        style={styles.profissionalPopularesImage}
        source={item.source}
        resizeMode="contain"
      />
      <Text style={styles.profissionalPopularesTitle}>{item.nome}</Text>
      <Text style={styles.profissionalPopularesArea}>{item.area}</Text>
      <Text
        style={styles.profissionalPopularesDescricao}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.descricao.substring(0, 30)}...
      </Text>
      <TouchableOpacity onPress={() => handleOpenProfissionalPerfil(item)}>
        <Text style={styles.profissionalPopularesVerMais}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={28} color="#000" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image
            source={require("./../../../../assets/logoP.webp")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Therapy Room</Text>
        </View>
      </View>
      <Text style={styles.title}>Olá,</Text>
      <Text style={styles.subtitle}>Cliente</Text>

      {/* --- CÓDIGO DO CARROSSEL COMEÇA AQUI --- */}
      <View style={styles.carouselContainer}>
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
      {/* --- CÓDIGO DO CARROSSEL TERMINA AQUI --- */}

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
          <TouchableOpacity style={styles.buttonFilterProfissionais}>
            <Text style={styles.buttonFilterProfissionaisText}>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFilterProfissionais}
            onPress={() => navigation.navigate("PrimeiraArea")}
          >
            <Text style={styles.buttonFilterProfissionaisText}>Psicologia</Text>
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
          data={profissionaisPopularesData}
          renderItem={renderProfissionalPopularesItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.profissionaisPopularesList}
        />
      </View>

      <TouchableOpacity style={styles.agendamentoPendente}>
        {/* IMAGEM (Esquerda) */}
        <Image
          source={require("./../../../../assets/doutorH.webp")}
          style={styles.agendamentoPendenteImage}
        />

        {/* CONTAINER DE INFO (Meio) */}
        <View style={styles.infoContainer}>
          <Text style={styles.nomeProfissional}>
            {profissionaisPopularesData[0].nome}
          </Text>
          <Text style={styles.dataAgendamento}>
            Agendado para 29/12/25 às 14:00
          </Text>
        </View>

        {/* CONTAINER DE AÇÕES (Direita) */}
        <View style={styles.actionsContainer}>
          {/* Badge "Confirmado" */}
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Confirmado</Text>
          </View>

          {/* Botão de Editar */}
          <TouchableOpacity style={styles.editButton}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
