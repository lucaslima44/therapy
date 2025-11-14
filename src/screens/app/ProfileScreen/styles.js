import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Fundo geral branco
  },

  // --- Header (Top Section) ---
  headerContainer: {
    backgroundColor: "#FFFFFF", // Fundo do header branco
    // paddingTop é aplicado dinamicamente no componente
    paddingBottom: 10,
  },

  // Novo estilo para a barra superior
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20, // Espaçamento nas laterais
  },

  // Estilo do nome do cliente (antigo 'title')
  clientName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333", // Cor escura para fundo branco
  },

  // Estilo do avatar (antigo 'profileImage')
  profileAvatar: {
    width: 44, // Tamanho de avatar
    height: 44,
    borderRadius: 22, // Metade do tamanho para ser redondo
  },

  // --- Scrollable Content (Bottom Section) ---
  contentContainer: {
    flex: 1,
    backgroundColor: "#2cbec4", // Cor azul
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 40, // Espaço no fim do scroll
  },

  // --- Stats Section ---
  statsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statIcon: {
    fontSize: 28,
    marginBottom: 8,
    color: "#FFFFFF",
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 13,
    color: "#FFFFFF",
    textAlign: "center",
  },

  // --- Mood Section ---
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  moodListContent: {
    flexDirection: "row", // (Necessário para FlatList horizontal)
    gap: 8,
    marginBottom: 25,
    paddingHorizontal: 5, // Adiciona um respiro nas pontas
  },
  moodDay: {
    alignItems: "center",
  },
  dayLabel: {
    fontSize: 11,
    color: "#FFFFFF",
    marginBottom: 8,
    fontWeight: "500",
  },
  moodValueBox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  moodValue: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  // --- 'Recent' Section ---
  recentTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  recentListContent: {
    gap: 16, // Espaçamento de 16px entre os cards
    paddingHorizontal: 5, // Adiciona um respiro nas pontas
  },
  recentCard: {
    width: 160,
    height: 140,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#E0E0E0", // Cor de placeholder
  },
  recentImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
