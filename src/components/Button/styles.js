import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonPrimary,
    padding: 10,
    borderRadius: 4,
    margin: 4,
    width: 290,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonProfissional: {
    padding: 10,
    borderRadius: 4,
    margin: 4,
  },
  buttonTextProfissional: {
    color: colors.textLight,
    fontWeight: "regular",
  },
  buttonPrimary: {
    backgroundColor: colors.buttonPrimary,
  },
  buttonSecondary: {
    backgroundColor: colors.buttonSecondary,
  },
});
