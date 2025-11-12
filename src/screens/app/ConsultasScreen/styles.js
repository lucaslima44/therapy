import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8", // Cor de fundo suave para a tela
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
  cardAgendamento: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
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
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imagemProfissional: {
    width: 60,
    height: 60,
    borderRadius: 30, // Metade da largura/altura para um círculo
    marginRight: 15,
    backgroundColor: "#e0e0e0", // Fundo para imagens que podem não carregar
  },
  nomeEStatus: {
    flex: 1, // Faz com que o nome e status ocupem o espaço restante
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nomeProfissional: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statusConfirmado: {
    backgroundColor: "#aed581", // Verde suave
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  statusText: {
    color: "#33691e", // Verde mais escuro para o texto
    fontSize: 12,
    fontWeight: "bold",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  dataAgendamento: {
    fontSize: 15,
    color: "#555",
  },
  iconeEditar: {
    padding: 5, // Aumenta a área de toque do ícone
  },
});
