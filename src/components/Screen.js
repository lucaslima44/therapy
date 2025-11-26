import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export default function Screen({
  children,
  style,
  backgroundColor = colors.backgroundBege,
}) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBege,
    padding: 20,
  },
});
