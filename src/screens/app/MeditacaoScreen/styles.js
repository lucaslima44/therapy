import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Padding lateral igual Home
    paddingTop: 20,        // Padding superior igual Home
    backgroundColor: colors.backgroundBege,
  },

  // --- HEADER PADRÃO DA HOME ---
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20, // O "respiro" padrão da Home
    // SEM marginTop aqui, quem cuida disso é o <Screen>
  },

  titulo: {
    fontSize: 20, // Tamanho igual da Home
    fontWeight: "bold", // Fonte igual da Home (ajuste se a Home usa outra)
    color: "#333",
    // fontFamily: "Marcellus-Regular", // Descomente se a Home usa essa fonte
  },

  // ... Resto dos estilos dos cards (card, row, etc) ...
  scrollContent: {
    paddingBottom: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cardWrapper: {
    width: "48%",
  },
  card: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#1F5656",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: { elevation: 6 },
      web: { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" },
    }),
  },
  titleCard: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});