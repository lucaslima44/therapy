import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.backgroundBege,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  scrollContent: {
    paddingBottom: 40,
  },

  profileHero: {
    alignItems: "center",
    marginBottom: 25,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  clientName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  clientEmail: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: { elevation: 3 },
    }),
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F5656",
  },
  statLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  verticalDivider: {
    width: 1,
    height: "80%",
    backgroundColor: "#EEE",
    alignSelf: "center",
  },

  // --- SEÇÕES ---
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginLeft: 5,
  },

  // --- HUMOR ---
  moodSection: {
    marginBottom: 30,
  },
  moodDay: {
    alignItems: "center",
    marginRight: 12,
  },
  moodValueBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
      },
      android: { elevation: 2 },
    }),
  },
  dayLabel: {
    fontSize: 12,
    color: "#555",
    fontWeight: "500",
  },

  recentListContent: {
    paddingRight: 20,
  },
  recentCard: {
    width: 160,
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 15,
    backgroundColor: "#eee",
  },
  recentImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileHero: {
    alignItems: "center",
    paddingVertical: 20,
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    marginBottom: 10,
    position: "relative",
  },

  // Estilo da Imagem
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
  },

  // Estilo do Botão da Câmera
  cameraIconButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 8,
    borderWidth: 2,
    borderColor: "#fff",
    zIndex: 10,
  },
});
