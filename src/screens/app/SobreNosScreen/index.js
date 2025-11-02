import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../auth/OnboardingPrimeiro/styles";
import { Feather } from "@expo/vector-icons";

export default function SobreNosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={28} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.text}>
        A Therapy Room foi criada em 2023, com o objetivo de ajudar pessoas a
        terem uma melhor qualidade de vida, atraves dos seus estudos e
        exercícios.
      </Text>
    </View>
  );
}
