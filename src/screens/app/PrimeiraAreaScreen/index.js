import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { profissionaisData } from "../../../data/profissionaisData";
import styles from "./styles";

export default function PrimeiraAreaScreen({ navigation }) {
  const area = "Psicologia";
  const profissionaisFiltrados = profissionaisData.filter(
    (profissional) => profissional.area === area
  );

  // Card de Profissional
  const renderProfissionalCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
      }
    >
      <Image source={item.source} style={styles.imagem} resizeMode="cover" />

      {/* Container com as informações */}
      <View style={styles.textContainer}>
        {/* Nome e Avaliação */}
        <View style={styles.cardHeader}>
          <Text style={styles.nome}>{item.nome}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons
              name="star"
              size={16}
              color="#FFD700"
              style={styles.starIcon}
            />
            <Text style={styles.ratingText}>{item.avaliacao.toFixed(1)}</Text>
          </View>
        </View>

        {/* Descrição */}
        <Text style={styles.descricao} numberOfLines={2}>
          {item.descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );

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

        <Text style={styles.title}>{area}</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* Lista Filtrada */}
      <FlatList
        data={profissionaisFiltrados}
        renderItem={renderProfissionalCard}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhum profissional encontrado para esta área.
            </Text>
          </View>
        }
      />
    </View>
  );
}
