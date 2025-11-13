import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5DC",
  },
  title: {
    fontSize: 28,
    fontFamily: "Marcellus-Regular",
    color: "#222",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
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
