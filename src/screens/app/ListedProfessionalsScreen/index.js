import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import styles from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { profissionaisData } from "./../../../data/profissionaisData";

export default function ListedProfessionalsScreen({ navigation }) {
  const renderProfissionalCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
      }
    >
      <Image source={item.source} style={styles.imagem} />
      <View style={styles.textContainer}>
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
        <Text style={styles.area}>{item.area}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderProfissionalPopularesItem = ({ item }) => (
    <View style={styles.profissionalPopularesItemContainer}>
      <Image
        style={styles.profissionalPopularesImage}
        source={item.source}
        resizeMode="contain"
      />
      <Text style={styles.profissionalPopularesTitle}>{item.nome}</Text>
      <Text style={styles.profissionalPopularesArea}>{item.area}</Text>
      <Text
        style={styles.profissionalPopularesDescricao}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.descricao.substring(0, 30)}...
      </Text>
      <TouchableOpacity
        // Troque a chamada de função antiga pelo navigation direto:
        onPress={() =>
          navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
        }
      >
        <Text style={styles.profissionalPopularesVerMais}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={22} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Todos os Profissionais</Text>
      </View>
      <View style={styles.divider} />
      <FlatList
        data={profissionaisData}
        renderItem={renderProfissionalCard}
        keyExtractor={(item) => item.id.toString()}
        // style={styles.profissionaisPopularesList}
      />
    </View>
  );
}
