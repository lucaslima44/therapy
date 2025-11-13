import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5DC",
    textAlign: "center",
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 30,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    flex: 1,
  },

  textoBoasVindas: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
    alignItems: "center",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },

  parceiroContainer: {
    marginBottom: 30,
    alignItems: "center",
  },

  nomeParceiro: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
