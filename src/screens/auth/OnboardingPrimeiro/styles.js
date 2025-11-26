import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B7278",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  pularButton: {
    marginRight: 28,
  },
  pularText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    justifyContent: "flex-start",
    marginTop: 12,
  },
  image: {
    width: "100%",
    height: 300,
  },
  titulo: {
    fontSize: 40,
    color: "#B8D8BA",
    fontFamily: "Inter",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#DADADA",
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "justify",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  paginationDots: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotActive: {
    backgroundColor: colors.textDark,
  },
  dotInactive: {
    backgroundColor: "#FFFFFF",
  },
  botao: {
    backgroundColor: colors.tiffanyBlue,
    borderRadius: 24,
    width: 128,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  textobotao: {
    fontSize: 16,
    color: colors.textDark,
  },
});
