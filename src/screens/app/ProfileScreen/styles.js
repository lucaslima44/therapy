import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBege,
  },

  // --- Header (Top Section) ---
  headerContainer: {
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  clientName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  // --- Scrollable Content (Bottom Section) ---
  contentContainer: {
    backgroundColor: "#4F49EA",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 40,
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
    flexDirection: "row",
    gap: 8,
    marginBottom: 25,
    paddingHorizontal: 5,
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
    gap: 16,
    paddingHorizontal: 5,
  },
  recentCard: {
    width: 160,
    height: 140,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
  },
  recentImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  moodListContent: {
    flexDirection: "row",
    gap: 10, // Aumentei um pouco o gap para ficar bonito
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  moodDay: {
    alignItems: "center",
  },
  dayLabel: {
    fontSize: 12,
    color: "#FFFFFF",
    marginBottom: 6,
    fontWeight: "500",
    fontFamily: "Inter", // Se tiver a fonte
  },
  moodValueBox: {
    width: 45, // Um pouco maior para caber o icone confortavelmente
    height: 45,
    borderRadius: 12, // Bordas um pouco mais arredondadas
    justifyContent: "center",
    alignItems: "center",
    // Sombra suave
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  // moodValue não é mais necessário se só usar ícones, 
  // mas se quiser colocar texto dentro, mantenha.
});
