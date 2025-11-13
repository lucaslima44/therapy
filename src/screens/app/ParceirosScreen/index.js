import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ParceirosScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={28}
            color="black"
            onPress={navigation.goBack}
          />
        </TouchableOpacity>
        <Text style={styles.textoBoasVindas}>Parceiros</Text>
        <Text style={styles.subtitulo}>
          Conheça nossos parceiros que colaboram para promover bem-estar e
          qualidade de vida aos nossos usuários.
        </Text>

        <View style={styles.partnersRow}>
          <View style={styles.parceiroContainer}>
            <Image
              source={require("./../../../../assets/wellhub.webp")}
              style={styles.image}
            />
            <Text style={styles.nomeParceiro}>Wellhub</Text>
          </View>

          <View style={styles.parceiroContainer}>
            <Image
              source={require("./../../../../assets/hospitalSaoPaulo.webp")}
              style={styles.image}
            />
            <Text style={styles.nomeParceiro}>Hospital São Paulo</Text>
          </View>

          <View style={styles.parceiroContainer}>
            <Image
              source={require("./../../../../assets/italo.webp")}
              style={styles.image}
            />
            <Text style={styles.nomeParceiro}>Centro Universitário Ítalo</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
