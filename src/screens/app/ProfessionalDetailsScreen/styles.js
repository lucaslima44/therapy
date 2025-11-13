import { StyleSheet } from "react-native";

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
});
