import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBege,
    padding: 20,
  },
  header: {
    paddingTop: 50, // Ajuste para status bar
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Para a view "fantasma" funcionar
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    // padding: 5, // Aumenta área de clique
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
});
