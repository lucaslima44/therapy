import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DANGER,
  },
  scollView: {
    flexGrow: 1,
  },
  backButton: {
    left: 20,
    position: "absolute",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "600",
    color: colors.textDark,
  },
  divider: {
    height: 1, // espessura da linha
    backgroundColor: "#ccc", // cor da linha
    width: "100%", // ocupa toda a largura
  },
  list: {
    padding: 16, // Espaçamento da lista nas laterais da tela
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 15,
    padding: 15,
    flexDirection: "row", // Imagem ao lado do texto
    ...Platform.select({
      ios: {
        // Estilos para iPhone
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        // Estilo para Android
        elevation: 5,
      },
      web: {
        // Estilo para Web (corrigindo o erro)
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
    }),
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40, // Deixa a imagem redonda
    marginRight: 15,
    backgroundColor: "#eee", // Cor de fundo caso a imagem não carregue
  },
  textContainer: {
    flex: 1, // Ocupa o espaço restante
    justifyContent: "center",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  // Estilos da Avaliação (Estrela + Nota)
  ratingContainer: {
    flexDirection: "row", // Ícone e texto lado a lado
    alignItems: "center",
    marginTop: 4,
  },
  starIcon: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },

  // Estilos da Área e Descrição
  area: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2a9d8f", // Cor de destaque
    marginTop: 4,
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
  },
});
