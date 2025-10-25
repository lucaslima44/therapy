import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonPrimary,
    padding: 10,
    borderRadius: 4,
    margin: 4,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: "bold",
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
