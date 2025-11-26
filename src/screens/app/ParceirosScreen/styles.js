import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 55,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f0f0",
  },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 17, fontWeight: "600", color: "#000" },

  scrollContent: {
    paddingHorizontal: 20, // Padding Lateral de 20px
    paddingTop: 30,
    paddingBottom: 40,
  },

  introText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },

  partnerCard: {
    backgroundColor: "#FAFAFA",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: { elevation: 2 },
    }),
  },

  image: {
    width: 120,
    height: 80,
    marginBottom: 10,
  },

  nomeParceiro: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },

  categoriaParceiro: {
    fontSize: 13,
    color: "#4B0082",
    fontWeight: "600",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  descricaoParceiro: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  divider: {
    width: "40%",
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 12,
  },
});
