import { StyleSheet } from "react-native";
import { colors } from "./../../styles/colors";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.backgroundBege,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Marcellus-Regular',
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
});

