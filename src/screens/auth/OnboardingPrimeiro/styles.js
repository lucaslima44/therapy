import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  // O Container Principal ---
  container: {
    flex: 1,
    backgroundColor: "#1B7278", // A cor de fundo do seu design
    paddingHorizontal: 20, // Espaçamento nas laterais
    paddingTop: Platform.OS === "ios" ? 50 : 30, // Espaço para status bar
    paddingBottom: 30, // Espaço seguro na base
  },

  // --- 2. O Cabeçalho (Pular, Voltar) ---
  header: {
    flexDirection: "row", // Alinha "Voltar" e "Pular" na horizontal
    justifyContent: "space-between", // Joga um para cada lado
    alignItems: "center",
    width: "100%",
    height: 40, // Altura fixa para alinhar
  },
  backButton: {
    // Área de clique do botão "Voltar"
    width: 40, // Dê uma área de clique fixa
    height: 40,
    justifyContent: "center",
  },
  pularButton: {
    // Área de clique do botão "Pular"
    marginRight: 28,
  },
  pularText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter",
  },

  // --- 3. O Corpo (Imagem, Título, Texto) ---
  body: {
    flex: 1, // Faz o corpo ocupar TODO o espaço do meio
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    gap: 20, // Espaço entre a imagem, título e texto
    padding: 20,
    justifyContent: "flex-start",
    marginTop: 12,
  },
  image: {
    width: "100%",
    height: 300,
  },
  titulo: {
    fontSize: 40,
    color: "#B8D8BA",
    fontFamily: "Inter",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#DADADA",
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "justify",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  paginationDots: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotActive: {
    backgroundColor: colors.textDark,
  },
  dotInactive: {
    backgroundColor: "#FFFFFF",
  },
  botao: {
    backgroundColor: colors.tiffanyBlue,
    borderRadius: 24,
    width: 128,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  textobotao: {
    fontSize: 16,
    color: colors.textDark,
  },
});
