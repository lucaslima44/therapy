import { StyleSheet, Platform, Dimensions } from "react-native";
import { colors } from "../../../styles/colors";

const { width: screenWidth } = Dimensions.get("window");

// Dica: Centralizar cores repetidas ajuda na manutenção
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
  
  // --- CABEÇALHO (HEADER) ---
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20, // Dá um respiro para o conteúdo abaixo
  },
  menuButton: {
    // position: "absolute" aqui pode ser perigoso se o título for grande. 
    // Se funcionar pra você, ok. Mas prefira Flexbox normal se puder.
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    // margin: "auto" as vezes falha no RN antigo. justifyContent center no pai é mais seguro.
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

  // --- TÍTULOS GERAIS DA PÁGINA ---
  title: {
    fontSize: 28,
    fontFamily: "Karma-Regular",
    color: "#5B5959",
    marginTop: 10,
  },
  subtitle: {
    fontFamily: "Karma-Bold",
    fontSize: 18,
    marginTop: -5, // Ajustei levemente
    color: "#000",
  },

  // --- CARROSSEL / BANNER ---
  parceirosImage: {
    width: "100%", // CORREÇÃO: Usa 100% da largura disponível, não 390px fixo
    height: 118,
    resizeMode: "cover", // ou "contain" dependendo da arte
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
    borderRadius: 12, // 50 era muito oval para um banner retangular, 12 é mais padrão
    overflow: "hidden",
  },
  
  // Setas do Carrossel
  arrowButton: {
    position: "absolute",
    zIndex: 10,
    top: "50%",
    marginTop: -15, // Metade da altura (30/2) para centralizar exato
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    // Sombra para a seta aparecer em fundos claros
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
  },
  arrowLeft: { left: 10 },
  arrowRight: { right: 10 },

  // --- SEÇÃO: PROFISSIONAIS POPULARES (HEADER DA SEÇÃO) ---
  sectionHeader: { // Renomeei para evitar conflito
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 15,
  },
  sectionTitle: { // Título da seção (Ex: "Populares")
    fontSize: 16,
    fontFamily: "Inter-Regular", // CORREÇÃO: Removido espaço inicial
    fontWeight: "bold",
    color: "#000",
  },
  seeAllButton: { // Texto "Ver todos"
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: localColors.purple,
    fontWeight: "600",
  },

  // --- LISTA HORIZONTAL DE PROFISSIONAIS ---
  horizontalList: {
    flexDirection: "row",
    // gap: 10, // Se seu RN for antigo, use marginRight no item
  },
  
  // O Card Individual do Profissional
  cardProfissionalPop: {
    alignItems: "center",
    backgroundColor: localColors.cardBeige,
    padding: 10,
    borderRadius: 8,
    marginRight: 10, // Espaçamento entre cards
    width: 140, // Largura fixa para o card ficar uniforme
  },
  cardProfissionalImage: {
    width: "100%", // Ocupa a largura do card
    height: 120,   // Altura reduzida para caber melhor
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#ddd", // Cor de fundo enquanto carrega
  },
  cardProfissionalName: { // Renomeei para não conflitar com sectionTitle
    fontSize: 15,
    fontFamily: "Inter-Regular",
    fontWeight: "bold",
    color: colors.textDark || "#333",
    textAlign: "center",
  },
  cardProfissionalArea: {
    fontSize: 13,
    fontFamily: "Inter-Regular",
    color: localColors.grayText,
    textAlign: "center",
    marginBottom: 5,
  },
  cardProfissionalDesc: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: localColors.grayText,
    textAlign: "center",
  },
  cardVerMais: {
    color: localColors.purple,
    fontSize: 13,
    marginTop: 5,
    fontWeight: "bold",
  },

  // --- FILTROS (BOTÕES) ---
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
    fontFamily: "Inter-Regular",
  },

  // --- CARD DE AGENDAMENTO (JÁ ESTAVA BOM, SÓ AJUSTEI NOMES) ---
  cardAgendamento: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    marginBottom: 60, // Espaço para a tab bar não cobrir
    // Sombra unificada
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
  agendamentoHeader: { // topRow
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  agendamentoAvatar: { // imagemProfissional
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  agendamentoInfo: { // nomeEStatus
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Melhor flex-start caso o nome quebre linha
  },
  agendamentoNome: {
    fontSize: 16,
    fontFamily: "Karma-Bold",
    color: "#333",
    flex: 1, // Permite que o nome quebre linha sem empurrar o status
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
  agendamentoFooter: { // bottomRow
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
});