import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#eef2f3",
    backgroundColor: colors.backgroundBege,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  menuButton: {
    left: 0,
    position: "absolute",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  imagem: {
    width: 56,
    height: 50,
    marginRight: 20,
    alignItems: "center",
    resizeMode: "contain",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16, // espaçamento entre os cards (RN 0.71+)
    marginVertical: 10, // espaço entre as linhas
  },

  card: {
    width: 160,
    height: 150,
    // backgroundColor: "#2cbec4",
    backgroundColor: "#4F49EA",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
    }),
  },

  titleCard: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: "center",
  },
});
