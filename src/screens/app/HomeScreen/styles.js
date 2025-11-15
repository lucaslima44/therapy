import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20, // Controla o espaçamento lateral da TELA TODA
    backgroundColor: colors.backgroundBege,
  },
  title: {
    fontSize: 28,
    fontFamily: "Karma-Regular",
    color: "#5B5959",
  },
  menuButton: {
    left: 0,
    position: "absolute",
  },
  subtitle: {
    fontFamily: "Karma-Bold",
    fontSize: 18,
    marginTop: -10,
    color: "#000",
  },
  logo: {
    width: 40,
    height: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
    gap: 10,
  },
  logoText: {
    fontSize: 20,
    fontFamily: "Marcellus-Regular",
  },
  parceirosImage: {
    width: 390,
    height: 118,
  },
  carouselItemContainer: {
    width: screenWidth * 0.9,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
  carouselContainer: {
    width: "100%",
    height: 120,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 8,
  },

  // SETAS DE NAVEGAÇÃO
  arrowButton: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    marginTop: -15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeft: {
    left: 10,
  },
  arrowRight: {
    right: 10,
  },

  // profissionais populares
  profissionaisPopularesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  profissionaisPopularesTitle: {
    fontSize: 16,
    fontFamily: " Inter",
    color: "#000",
  },
  profissionaisPopularesSeeAll: {
    fontSize: 16,
    fontFamily: " Inter",
    color: "#4F49EA",
  },
  profissionalPopularesImage: {
    width: 140,
    height: 170,
  },

  // filtros de profissionais
  profissionaisPopularesList: {
    marginTop: 20,
    flexDirection: "row",
    gap: 5,
  },
  profissionalPopularesTitle: {
    fontSize: 16,
    fontFamily: " Inter",
    color: colors.textDark,
  },
  profissionalPopularesArea: {
    fontSize: 14,
    fontFamily: " Inter",
    color: "#585858",
  },
  buttonFilterProfissionais: {
    backgroundColor: "#4F49EA",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonFilterProfissionaisText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: " Inter",
  },
  profissionalPopularesItemContainer: {
    alignItems: "center",
    backgroundColor: "#EAEACF",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    gap: 4,
  },
  profissionalPopularesVerMais: {
    color: "#4F49EA",
    fontSize: 14,
    fontFamily: " Inter",
    fontWeight: "600",
  },
  profissionalPopularesDescricao: {
    fontSize: 14,
    fontFamily: " Inter",
    color: "#585858",
  },

  // Estilos do Card de Agendamento (unificados)
  cardAgendamento: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 60,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Karma-Bold", // <-- Unificado
  },
  statusConfirmado: {
    backgroundColor: "#aed581",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  statusText: {
    color: "#33691e",
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
    fontFamily: "Karma-Regular", // <-- Unificado (escolhi o de 15px)
  },
  iconeEditar: {
    padding: 5,
  },
});
