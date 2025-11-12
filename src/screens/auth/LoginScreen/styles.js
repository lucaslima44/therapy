import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  // --- Containers Principais ---
  gradientContainer: {
    flex: 1,
  },
  kavContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, // Permite que o scroll funcione
  },

  // --- 1. Header ---
  headerContainer: {
    paddingTop: Platform.OS === "ios" ? 60 : 40, // Espaço para status bar
    paddingHorizontal: 20,
    gap: 30, // Espaçamento entre os elementos do header
  },
  backButton: {
    alignSelf: "flex-start", // Alinha o botão à esquerda
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  logo: {
    width: 83,
    height: 74,
  },
  logoText: {
    fontFamily: "Marcellus-Regular",
    fontSize: 30,
    color: colors.textDark,
  },
  titleContainer: {
    alignItems: "center",
    gap: 8,
  },
  mainTitle: {
    fontFamily: "Inter",
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: 12,
    color: "#E8E8E8",
  },

  // --- 2. Formulário ---
  formContainer: {
    flex: 1, // Faz o form crescer e ocupar o resto da tela
    backgroundColor: colors.cardLogin,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    marginTop: 30,
  },

  // Toggle
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#A2A2A2",
    borderRadius: 25,
    marginBottom: 30,
    height: 50,
    alignItems: "center",
  },
  toggleButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  toggleActive: {
    backgroundColor: "#FFFFFF",

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
  toggleInactive: {
    backgroundColor: "transparent",
  },
  toggleText: {
    fontSize: 16,
  },
  toggleTextActive: {
    color: colors.buttonPrimary,
    fontWeight: "bold",
    fontSize: 18,
  },
  toggleTextInactive: {
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 18,
  },

  // Inputs
  inputContainer: {
    gap: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2F2",
    borderRadius: 6,
    paddingHorizontal: 15,
    height: 55,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: "#686868ff",
  },

  // Botões do Form
  forgotPasswordText: {
    color: colors.textLight,
    textAlign: "left",
    marginVertical: 15,
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: colors.buttonPrimary,
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
