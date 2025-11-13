import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.backgroundBege,
  },
  title: {
    fontSize: 28,
    fontFamily: "Karma-Regular",
    color: "#5B5959",
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
    marginBottom: 20,
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
    position: "relative", // ponto de referência
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
  agendamentoPendente: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    marginTop: 24,
    backgroundColor: "#FBFBF4",
    borderWidth: 1,
    borderColor: colors.textDark,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 80,
    marginBottom: 70,
  },
  agendamentoPendenteImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    flexShrink: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 8,
  },
  nomeProfissional: {
    fontSize: 18,
    fontFamily: "Karma-Bold",
    fontWeight: "bold",
  },
  dataAgendamento: {
    fontSize: 16,
    fontFamily: "Karma-Regular",
    color: "#636363",
  },
  actionsContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  statusBadge: {
    backgroundColor: colors.SUCCESS,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    color: colors.textDark,
    fontFamily: "Karma-Regular",
  },
  editButton: {
    padding: 4,
  },
  profissionalPopularesDescricao: {
    fontSize: 14,
    fontFamily: " Inter",
    color: "#585858",
  },
});
