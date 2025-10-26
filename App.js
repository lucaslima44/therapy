import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./src/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./src/styles/colors";
import { gradientProps } from "./src/styles/colors";

export default function App() {
  return (
    <LinearGradient style={styles.container} {...gradientProps}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Bem vindo, faça seu login</Text>
      <Button variant="primary"></Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d3d3dff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
});
