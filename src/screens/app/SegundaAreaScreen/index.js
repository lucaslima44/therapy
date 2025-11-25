// D:\testeRN\therapy\src\screens\app\PrimeiraAreaScreen\index.js
// --- CÓDIGO LIMPO ---

import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image, // Certifique-se de que a Imagem está importada
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons"; // Para o botão de voltar e a estrela

// 1. Importe seus dados
import { profissionaisData } from "../../../data/profissionaisData";
// 2. Importe seus estilos
import styles from "./styles";

// 3. Receba 'navigation' (não precisamos de 'route' aqui)
export default function SegundaAreaScreen({ navigation }) {
  // 4. Definimos a área manualmente para esta tela
  const area = "Psicoterapia";

  // 5. FILTRE a lista principal de profissionais
  const profissionaisFiltrados = profissionaisData.filter(
    (profissional) => profissional.area === area
  );

  // 6. O Card de Profissional (Compacto, com imagem)
  const renderProfissionalCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProfessionalDetailsScreen", { nome: item.nome })
      }
    >
      {/* Imagem do lado esquerdo */}
      <Image
        source={item.source}
        style={styles.imagem}
        resizeMode="cover" // Use 'cover' ou 'contain' como prop, não no style
      />

      {/* Container com as informações */}
      <View style={styles.textContainer}>
        {/* Linha 1: Nome e Avaliação */}
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

        {/* Linha 2: Descrição */}
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

        {/* View "fantasma" para centralizar o título (da nossa conversa anterior) */}
        <View style={{ width: 24 }} />
      </View>

      {/* Lista Filtrada */}
      <FlatList
        data={profissionaisFiltrados}
        renderItem={renderProfissionalCard}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list} // Damos o padding de 20px aqui
        // Mensagem para quando o filtro não retornar ninguém
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

// --- FIM DO CÓDIGO ---
