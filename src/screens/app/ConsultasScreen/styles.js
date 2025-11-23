import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    // Padding Padrão da Home (Horizontal 20, Topo 20)
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.backgroundBege,
  },

  // --- HEADER IDÊNTICO AO DA HOME ---
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Espalha Menu - Titulo - Fantasma
    marginBottom: 20, // Respiro padrão
    // Removido paddingVertical e marginTop manual
  },

  menuButton: {
    // Removido position absolute
    padding: 5, // Área de toque
  },

  titulo: {
    fontSize: 20, // Tamanho padrão
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    // Se a Home usa Marcellus, descomente abaixo:
    // fontFamily: "Marcellus-Regular", 
  },

  // --- ESTILOS DOS CARDS E MODAIS (MANTIDOS IGUAIS) ---
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
      android: { elevation: 5 },
      web: { boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" },
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
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: "#e0e0e0",
  },
  nomeEStatus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nomeProfissional: {
    fontSize: 16, // Leve ajuste
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  statusConfirmado: {
    backgroundColor: "#aed581",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  statusText: {
    color: "#33691e",
    fontSize: 11,
    fontWeight: "bold",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 10,
  },
  dataAgendamento: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  iconeEditar: {
    padding: 5,
  },

  // --- MODAIS ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },
  buttonContainer: { width: "100%" },
  modalButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DC3545",
  },
  confirmDeleteButton: { backgroundColor: "#DC3545" },
  keepButton: { backgroundColor: "#4F49EA" },
  buttonTextDanger: {
    color: "#DC3545",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});