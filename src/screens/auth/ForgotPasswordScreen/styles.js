import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  kavContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 20,
    gap: 30,
  },
  backButton: {
    alignSelf: "flex-start",
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
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  errorMessage: {
    color: "#FF375B",
    fontSize: 12,
    marginLeft: 8,
    fontFamily: "Inter",
    textAlign: "center",
    fontWeight: "bold",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
