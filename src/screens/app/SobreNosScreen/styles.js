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
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 50,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoImage: {
    width: 100,
    height: 100,
  },

  introText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#222",
    lineHeight: 28,
    textAlign: "left",
    marginBottom: 25,
  },

  text: {
    fontSize: 16,
    color: "#555",
    lineHeight: 26,
    marginBottom: 20,
    textAlign: "left",
  },

  highlightBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    alignItems: "center",
  },
  textHighlight: {
    fontSize: 16,
    color: "#4B0082",
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
    fontStyle: "italic",
  },
});
