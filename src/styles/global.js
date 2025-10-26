import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  logoNome: {
    fontFamily: "MarcellusSCRegular",
    color: "#000000",
    fontSize: 36,
  },
  logoSlogan: {
    fontFamily: "MarcellusSCRegular",
    color: colors.ACCENT,
    fontSize: 24,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },

  buttonPrimary: {
    backgroundColor: "#1F5656",
    paddingVertical: 15,
    borderRadius: 4,
    width: 290,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // sombra botao
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    height: 30,
  },
  secondaryButtonText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: "regular",
  },

  logoImage: {
    width: 83,
    height: 74,
  },
});
