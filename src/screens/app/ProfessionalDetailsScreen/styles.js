import { StyleSheet, Platform, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "android" ? StatusBar.currentHeight : 40;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  // --- HEADER ---
  header: {
    backgroundColor: "#4B0082",
    paddingTop: STATUSBAR_HEIGHT + 10, // Espaço seguro para o topo
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Garante distribuição correta
    elevation: 5, // Sombra no Android
    zIndex: 10,
  },
  backButton: {
    padding: 10, // Área de toque maior para acessibilidade
    borderRadius: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Ocupa o espaço central sem usar position absolute
    marginRight: 40, // Compensa o espaço do botão de voltar para centralizar visualmente
  },

  // --- CONTEÚDO (SCROLL) ---
  content: {
    // O segredo está aqui: O paddingBottom deve ser maior que a altura do Footer
    paddingBottom: 160, 
    paddingTop: 20,
  },

  // --- PERFIL ---
  profileContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    color: "#333",
    textAlign: "center",
  },
  specialty: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  rating: {
    marginLeft: 5,
    color: "#444",
    fontSize: 14,
    fontWeight: "600",
  },

  // --- SEÇÕES GERAIS ---
  section: {
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 15,
    marginHorizontal: 15, // Um pouco de margem nas laterais fica mais bonito
    borderRadius: 12,
    elevation: 2, // Sombra leve
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    marginLeft: 20, // Alinhado com o resto fora dos cards
    marginTop: 10,
  },
  description: {
    color: "#555",
    lineHeight: 24,
    fontSize: 15,
    textAlign: "justify",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  infoText: {
    color: "#555",
    marginLeft: 10,
    fontSize: 15,
    flex: 1, // Evita texto cortado se for longo
  },

  // --- AGENDA (DATAS) ---
  dateCard: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 85,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
  },
  selectedDateCard: {
    backgroundColor: "#4B0082",
    borderColor: "#4B0082",
    elevation: 5,
  },
  dateDay: {
    fontSize: 13,
    color: "#888",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  dateNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  selectedText: {
    color: "#fff",
  },

  // --- HORÁRIOS ---
  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    justifyContent: "flex-start", // Alinhamento
  },
  timeChip: {
    paddingVertical: 12, // Mais fácil de clicar
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 6,
    backgroundColor: "#fff",
    minWidth: "28%", // Garante tamanho uniforme
    alignItems: "center",
  },
  selectedTimeChip: {
    backgroundColor: "#4B0082",
    borderColor: "#4B0082",
  },
  timeText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 15,
  },

  // --- FOOTER (FIXO EM BAIXO) ---
  footer: {
    position: "absolute",
    bottom: 0, // Cola no fundo da tela
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    // PaddingBottom maior para telas com barra de gesto (iPhone X+ / Android novos)
    paddingBottom: Platform.OS === 'ios' ? 35 : 20, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
    // Sombra forte para destacar que está "flutuando" sobre o conteúdo
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    elevation: 20, // Sombra Android
    shadowColor: "#000", // Sombra iOS
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footerLabel: {
    color: "#888",
    fontSize: 14,
  },
  footerPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B0082",
  },
  bookButton: {
    backgroundColor: "#4B0082",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    elevation: 0,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});