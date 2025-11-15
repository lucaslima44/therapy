import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
// REMOVA o import do styles da HomeScreen
// import styles from "../screens/app/HomeScreen/styles"; 

export default function Screen({ children, style }) {
  return (
    // 'styles.container' (plural) vem do StyleSheet logo abaixo.
    // 'style' (singular) vem das props (ex: o styles da HomeScreen)
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

// CRIE UM STYLESHEET LOCAL PARA O COMPONENTE 'Screen'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBege,
    padding: 20,
  },
});