import { StatusBar } from "expo-status-bar";
import { styles } from "./App.styles";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "./src/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { gradientProps } from "./src/styles/colors";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scollView}>
        <LinearGradient style={styles.content} {...gradientProps}>
          <StatusBar style="auto" />
          <Text style={styles.subTitle}>Bem vindo, faça seu login</Text>
          <Button variant="primary"></Button>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
