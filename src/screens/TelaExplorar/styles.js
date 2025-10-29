import { StyleSheet } from "react-native";

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
    marginRight: 10,
    alignItems: 'center',
    top: 50,
    left: 100,
    position: 'fixed',
  },

  titulo: {
    fontFamily: "Marcellus SC",
    fontSize: 20,
    color: "#000",
    alignItems: 'center',
    top: 60,
    left: 180,
    position: 'fixed',
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16, // espaçamento entre os cards (RN 0.71+)
    marginVertical: 10, // espaço entre as linhas
  },

  card: {
    width: 163,
    height: 194,
    backgroundColor: "#2cbec4",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  title: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
});
