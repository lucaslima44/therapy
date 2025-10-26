import { StyleSheet } from "react-native";
import { colors } from "./src/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.DANGER,
  },
  scollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },
  subTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
  image: {
    width: 83,
    height: 74,
  },
});
