import React, { useRef } from "react"; // <-- ADICIONADO 'useRef'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions, // <-- ADICIONADO
} from "react-native";
import styles from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel"; // <-- ADICIONADO

// Pega a largura da tela para o carrossel
const { width: screenWidth } = Dimensions.get("window");

// --- ADICIONADO: Seus dados para o carrossel ---
const carouselData = [
  { id: "1", source: require("./../../../../assets/wellhub.webp") },
  { id: "2", source: require("./../../../../assets/italo.webp") }, // Exemplo
  { id: "3", source: require("./../../../../assets/hospitalSaoPaulo.webp") }, // Exemplo
];
// --------------------------------------------------

export default function HomeScreen({ navigation }) {
  const carouselRef = useRef(null); // <-- ADICIONADO: Referência para controlar o carrossel

  // --- ADICIONADO: Função que renderiza cada item do carrossel ---
  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItemContainer}>
      <Image
        style={styles.parceirosImage} // Usando seu estilo original
        source={item.source}
        resizeMode="contain" // 'contain' é melhor para logos
      />
    </View>
  );
  // ------------------------------------------------------------

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={28} color="#000" />
      </TouchableOpacity>

      <Image
        source={require("./../../../../assets/logoP.webp")}
        style={styles.logo}
      />

      <Text style={styles.title}>Olá,</Text>
      <Text style={styles.subtitle}>Therapy Room</Text>

      {/* --- CÓDIGO DO CARROSSEL COMEÇA AQUI --- */}
      {/* O seu TouchableOpacity original foi substituído por este Bloco.
        Este View 'carouselContainer' é essencial para posicionar as setas.
      */}
      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          loop // Faz o carrossel ser infinito
          width={screenWidth * 0.9} // O carrossel ocupa 90% da tela
          height={150} // Defina uma altura (ex: 150)
          autoPlay={true}
          autoPlayInterval={5000} // 5 segundos
          data={carouselData}
          renderItem={renderCarouselItem} // Função que criamos acima
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
    </ScrollView>
  );
}
