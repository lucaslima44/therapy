import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5DC",
  },
  
  // --- Cabeçalho ---
  header: {
    paddingTop: 50, // Ajuste para status bar
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Para a view "fantasma" funcionar
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    // padding: 5, // Aumenta área de clique
  },
  title: {
    fontSize: 20,
    fontFamily: "Marcellus-Regular",
    color: "#333",  
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
    lineHeight: 26,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#B8D8BA",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
      web: {
        // Esta é a correção para a web
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      },
    }),
  },
  buttonText: {
    fontSize: 18,
    color: "#000000ff",
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 40,
    alignSelf: "center",
  },
});