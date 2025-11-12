import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBege,
    padding: 20,
  },
  header: {
    position: "absolute",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
});
