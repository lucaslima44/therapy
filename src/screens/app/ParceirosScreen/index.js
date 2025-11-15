import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Removido (não utilizado)

export default function ParceirosScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        {/* --- CORRIGIDO --- */}
        {/* O título foi atualizado para "Parceiros" */}
        <Text style={styles.title}>Parceiros</Text>
        {/* View "fantasma" para centralizar o título */}
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitulo}>
        Conheça nossos parceiros que colaboram para promover bem-estar e
        qualidade de vida aos nossos usuários.
      </Text>

      <View style={styles.partnersRow}>
        <View style={styles.parceiroContainer}>
          <Image
            source={require("./../../../../assets/wellhub.webp")}
            style={styles.image}
            resizeMode="contain" // Adicionado para a imagem não cortar
          />
          <Text style={styles.nomeParceiro}>Wellhub</Text>
        </View>

        <View style={styles.parceiroContainer}>
          <Image
            source={require("./../../../../assets/hospitalSaoPaulo.webp")}
            style={styles.image}
            resizeMode="contain" // Adicionado
          />
          <Text style={styles.nomeParceiro}>Hospital São Paulo</Text>
        </View>

        <View style={styles.parceiroContainer}>
          <Image
            source={require("./../../../../assets/italo.webp")}
            style={styles.image}
            resizeMode="contain" // Adicionado
          />

          <Text style={styles.nomeParceiro}>Centro Universitário Ítalo</Text>
        </View>
      </View>
      {/* --- CORRIGIDO --- */}
      {/* Removida a tag <View> extra que estava sobrando aqui */}
    </ScrollView>
  );
}
