import { StyleSheet, Platform, StatusBar } from "react-native";
// Se você não estiver usando colors aqui, pode remover a importação.
// import { colors } from "../../../styles/colors"; 

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Fundo branco puro
  },

  // --- HEADER CLEAN ---
  header: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 55,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // Uma linha divisória muito sutil, quase invisível, para separar
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f0f0", 
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 17, // Tamanho padrão iOS para títulos
    fontWeight: "600",
    color: "#000",
  },

  // --- CONTEÚDO ---
  scrollContent: {
    paddingHorizontal: 24, // Margens laterais um pouco maiores para o texto "respirar"
    paddingTop: 30,
    paddingBottom: 50,
  },

  // --- LOGO ---
  logoContainer: {
    alignItems: "center",
    marginBottom: 40, // Espaço generoso entre logo e texto
  },
  logoImage: {
    width: 100,  // Tamanho discreto e elegante
    height: 100, // Assumindo que a logo é quadrada/circular
  },

  // --- TIPOGRAFIA ---
  // O primeiro parágrafo é um pouco mais destacado (introdução)
  introText: {
    fontSize: 18,
    fontWeight: "500", // Semi-bold
    color: "#222", // Preto suave
    lineHeight: 28,
    textAlign: "left", // Alinhado à esquerda fica mais moderno que justificado
    marginBottom: 25,
  },

  // Texto padrão dos parágrafos
  text: {
    fontSize: 16,
    color: "#555", // Cinza médio para não cansar a leitura
    lineHeight: 26, // Bom espaçamento entre linhas
    marginBottom: 20,
    textAlign: "left",
  },

  // Caixa de destaque final (opcional, mas dá um charme)
  highlightBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#F8F8F8", // Um cinza muito clarinho
    borderRadius: 12,
    alignItems: "center",
  },
  textHighlight: {
    fontSize: 16,
    color: "#4B0082", // Roxo da marca para o fechamento
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
    fontStyle: "italic",
  },
});