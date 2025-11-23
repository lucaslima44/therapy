import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  // --- HEADER (Estilo Roxo Solicitado) ---
  header: {
    width: "100%",
    height: Platform.OS === "android" ? 80 : 100, // Ajuste leve para iOS
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    // Removemos justifyContent space-between pois estamos usando absolute no título
  },

  backButton: {
    zIndex: 10, // Importante para ficar clicável acima do título
    padding: 5,
  },

  headerTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute", // Centraliza ignorando a seta
    left: 0,
    right: 0,
    bottom: 20, // Alinha verticalmente com a seta
    zIndex: 1, // Fica abaixo do botão de voltar
  },
  // --- CONTEÚDO ---
  scrollContent: {
    padding: 20,
    paddingBottom: 50,
  },

  videoContainer: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#000",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
    lineHeight: 24,
    textAlign: "justify",
  },

  // --- CARD PLAYLIST (IGUAL AO YOGA) ---
  playlistCard: {
    marginTop: 30,
    backgroundColor: "#1F5656", // Verde Petróleo
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      },
    }),
  },

  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  cardTextContainer: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 12,
    color: "#E0E0E0",
  },
});
