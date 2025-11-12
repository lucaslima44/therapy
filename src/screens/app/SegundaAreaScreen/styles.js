// D:\testeRN\therapy\src\screens\app\PrimeiraAreaScreen\styles.js
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  // --- Cabeçalho ---
  header: {
    paddingTop: 50, // Ajuste para status bar
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Para a view "fantasma" funcionar
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    // padding: 5, // Aumenta área de clique
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  // --- Lista ---
  list: {
    padding: 20, // O "padding de 20px" da tela
  },

  // --- Card de Profissional ---
  card: {
    width: "100%", // Ocupa 100% (dentro do padding da lista)
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    flexDirection: "row", // Imagem ao lado do texto

    // Sombra
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    }),
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  textContainer: {
    flex: 1, // Ocupa o resto do espaço
    justifyContent: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  nome: {
    flex: 1, // Impede que o nome "empurre" a avaliação
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 3,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  descricao: {
    fontSize: 14,
    color: "#666",
  },

  // --- Caso a lista esteja vazia ---
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});
