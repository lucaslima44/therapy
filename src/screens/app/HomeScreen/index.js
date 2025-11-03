import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={28} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Olá,</Text>
      <Text style={styles.subtitle}>Therapy Room</Text>
    </ScrollView>
  );
}
