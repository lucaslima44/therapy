import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { profissionaisData } from "../../../data/profissionaisData";
export default function ProfessionalDetailsScreen({ navigation, route }) {
  const nome = route.params?.nome;

  // 5. FILTRE a lista principal de profissionais
  const profissional = profissionaisData.find((item) => item.nome === nome);
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>{nome}</Text>

        {/* View "fantasma" para centralizar o título (da nossa conversa anterior) */}
        <View style={{ width: 24 }} />
      </View>

      {profissional && (
        <View style={{ padding: 20 }}>
          {/* Agora você pode acessar .especialidade, .descricao, etc. */}
          <Text>Descrição: {profissional.descricao}</Text>
        </View>
      )}
    </View>
  );
}
