import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isSmallDevice = width < 380; // Detecta iPhone 6s, SE, etc.

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  
  blurredBackground: {
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: -1,
  },
  
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', // Escureci mais para destacar os ícones brancos
  },

  header: {
    width: "100%",
    // Ajuste dinâmico para telas com e sem notch
    paddingTop: Platform.OS === 'ios' ? (isSmallDevice ? 30 : 60) : 40, 
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },

  title: {
    fontSize: isSmallDevice ? 18 : 20, // Fonte menor em tela pequena
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Karma-Bold",
  },
  
  backButton: {
    padding: 10, // Área de toque maior
  },

  // --- ÁREA CENTRAL (CAPA) ---
  imageContainer: {
    flex: 1, // Ocupa o espaço disponível, empurrando os controles para baixo
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    // Removi margens fixas grandes
  },
  
  mainImage: {
    // Responsividade: 70% da largura da tela, mas com limite máximo
    width: width * 0.7, 
    height: width * 0.7, // Mantém quadrado
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },

  titleText: {
    fontSize: isSmallDevice ? 20 : 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    fontFamily: "Karma-Bold",
    textAlign: "center",
  },

  // --- CONTROLES ---
  controlsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: 'flex-end',
    // MUITO IMPORTANTE: Espaço extra embaixo para não bater na Tab Bar
    paddingBottom: 90, 
  },

  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around", // space-around funciona melhor que evenly aqui
    width: "100%",
    marginBottom: isSmallDevice ? 15 : 25,
  },

  playButtonWrapper: {
    // Se precisar de sombra
  },

  // Ajuste dos tamanhos dos ícones no código JS (veja a dica abaixo)
  
  slider: {
    width: "100%",
    height: 40,
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  
  timeText: {
    color: "#ddd",
    fontSize: 12,
    fontWeight: '500',
  },

  // --- VOLUME ---
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  
  volumeSlider: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
  },
});