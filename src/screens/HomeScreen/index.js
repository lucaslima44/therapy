import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, Therapy Room 👋</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta!</Text>
    </ScrollView>
  );
}

