import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef2f3",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40, // espaço entre o título e os cards
  },

  imagem: {
    width: 56,
    height: 50,
    marginRight: 20,
    alignItems: "center",
    resizeMode: "contain",
  },

  titulo: {
    fontFamily: "Marcellus SC",
    fontSize: 20,
    color: "#000",
    alignItems: "center",
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
    backgroundColor: "#2cbec4",
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

  title: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
});
