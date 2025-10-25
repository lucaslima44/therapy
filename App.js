import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Bem vindo, faça seu login</Text>
      <Button variant="primary"></Button>
    </View>
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
