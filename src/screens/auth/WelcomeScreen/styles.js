import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "ios" ? 60 : 50,
    paddingBottom: 40,
  },

  boxTop: {
    alignItems: "center",
  },
  boxMid: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  boxBottom: {
    alignItems: "center",
    gap: 16,
  },
  logoImage: {
    width: 330,
    height: 295,
  },
  logoNome: {
    fontFamily: "Marcellus-Regular",
    color: colors.textDark,
    fontSize: 36,
  },
  logoSlogan: {
    fontFamily: "Marcellus-Regular",
    color: colors.textLight,
    fontSize: 24,
    textAlign: "center",
  },
  buttonPrimary: {
    width: 290,
    height: 50,
    backgroundColor: colors.buttonPrimary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // Sombra botao
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    }),
  },
  buttonPrimaryText: {
    color: colors.textLight,
    fontSize: 18,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  buttonSecondary: {
    width: 290,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.textLight,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: colors.textLight,
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "600",
  },
});
