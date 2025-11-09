import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { Dimensions } from "react-native"; // <--- Adicione esta importação no topo do seu styles.js

const { width: screenWidth } = Dimensions.get("window"); // <--- Adicione esta linha no topo do seu styles.js

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.backgroundBege,
  },
  title: {
    fontSize: 28,
    fontFamily: "Marcellus-Regular",
    color: "#222",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
  parceirosImage: {
    width: 390,
    height: 118,
  },
  carouselItemContainer: {
    width: screenWidth * 0.9, // <--- ESTA É A CORREÇÃO!
    height: "100%", // Ocupa a altura do carrossel
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
  carouselContainer: {
    width: "90%", // Largura da moldura
    height: 150, // Altura da moldura (TEM QUE SER A MESMA DO CAROUSEL)
    position: "relative", // Diz que ele é o ponto de referência
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  // 2. O ESTILO BASE DAS SETAS ("ADESIVOS")
  arrowButton: {
    position: "absolute", // Faz a seta "flutuar"
    zIndex: 1, // Garante que ela fique NA FRENTE
    // --------------------------

    // Estilos visuais (tamanho, cor, etc)
    top: "50%", // Coloca no meio verticalmente
    marginTop: -15, // Ajuste fino para centralizar (metade da altura de 30)
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  arrowLeft: {
    left: 10, // Distância da borda esquerda
  },
  arrowRight: {
    right: 10, // Distância da borda direita
  },
});
