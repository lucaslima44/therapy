import { StyleSheet, Platform, Dimensions } from "react-native";
import { colors } from "../../../styles/colors";

const { width: screenWidth } = Dimensions.get("window");

const localColors = {
  purple: "#4F49EA",
  darkText: "#333",
  grayText: "#585858",
  cardBeige: "#EAEACF",
  greenBg: "#aed581",
  greenText: "#33691e",
};

export default StyleSheet.create({
  // --- ESTRUTURA GERAL ---
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.backgroundBege,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuButton: {
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 20,
    fontFamily: "Marcellus-Regular",
    color: localColors.darkText,
  },
  title: {
    fontSize: 28,
    fontFamily: "Karma-Regular",
    color: "#5B5959",
    marginTop: 10,
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "600",
    marginTop: -5,
    color: "#000",
  },

  // --- CARROSSEL / BANNER ---
  parceirosImage: {
    width: "100%",
    height: 118,
    resizeMode: "contain", // contain ou cover
    borderRadius: 8,
  },
  carouselContainer: {
    width: "100%",
    height: 120,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItemContainer: {
    width: screenWidth * 0.9,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
  },

  // Setas do Carrossel
  arrowButton: {
    position: "absolute",
    zIndex: 10,
    top: "50%",
    marginTop: -15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
  },
  arrowLeft: { left: 10 },
  arrowRight: { right: 10 },

  // --- SEÇÃO DE PROFISSIONAIS ---
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "bold",
    color: "#000",
  },
  seeAllButton: {
    fontSize: 14,
    fontFamily: "Inter",
    color: localColors.purple,
    fontWeight: "600",
  },
  horizontalList: {
    flexDirection: "row",
  },
  cardProfissionalPop: {
    alignItems: "center",
    backgroundColor: localColors.cardBeige,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 140,
  },
  cardProfissionalImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#ddd",
  },
  cardProfissionalName: {
    fontSize: 15,
    fontFamily: "Inter",
    fontWeight: "bold",
    color: colors.textDark || "#333",
    textAlign: "center",
  },
  cardProfissionalArea: {
    fontSize: 13,
    fontFamily: "Inter",
    color: localColors.grayText,
    textAlign: "center",
    marginBottom: 5,
  },
  cardProfissionalDesc: {
    fontSize: 12,
    fontFamily: "Inter",
    color: localColors.grayText,
    textAlign: "center",
  },
  cardVerMais: {
    color: localColors.purple,
    fontSize: 13,
    marginTop: 5,
    fontWeight: "bold",
  },

  filterListContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 8,
  },
  buttonFilter: {
    backgroundColor: colors.buttonPrimary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonFilterText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter",
  },
  cardAgendamento: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    marginBottom: 60,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: { elevation: 4 },
      web: { boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" },
    }),
  },
  agendamentoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  agendamentoAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  agendamentoInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  agendamentoNome: {
    fontSize: 16,
    fontFamily: "Karma-Bold",
    color: colors.textDark,
    flex: 1,
    marginRight: 10,
  },
  statusBadge: {
    backgroundColor: localColors.greenBg,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    color: localColors.greenText,
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  agendamentoFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 10,
    marginTop: 5,
  },
  agendamentoData: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Karma-Regular",
    flexDirection: "row",
    alignItems: "center",
  },
  iconeAcao: {
    padding: 5,
  },
  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    marginTop: 5,
  },
  moodButton: {
    alignItems: "center",
    gap: 8,
  },
  moodIconBg: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  moodText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
});
