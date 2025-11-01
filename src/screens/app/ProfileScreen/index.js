import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, Therapy Room 👋</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f8f3',
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
