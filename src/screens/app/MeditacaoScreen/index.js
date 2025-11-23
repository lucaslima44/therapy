import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import Screen from "../../../components/Screen";

export default function ExploreScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        {/* --- HEADER ALINHADO --- */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
          >
            <Feather name="menu" size={28} color="#333" />
          </TouchableOpacity>

          <Text style={styles.titulo}>Meditação</Text>

          {/* View Fantasma para centralizar */}
          <View style={{ width: 28 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 1ª linha */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.cardWrapper}
              onPress={() => navigation.navigate("Automassagem")}
            >
              <View style={styles.card}>
                {/* Ícone Branco para contraste */}
                <MaterialIcons name="self-improvement" size={32} color="#fff" />
                <Text style={styles.titleCard}>Automassagem</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardWrapper}
              onPress={() => navigation.navigate("YogaVideo")}
            >
              <View style={styles.card}>
                <MaterialIcons
                  name="video-camera-front"
                  size={32}
                  color="#fff"
                />
                <Text style={styles.titleCard}>Yoga em vídeo</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 2ª linha */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.cardWrapper}
              onPress={() => navigation.navigate("Aromaterapia")}
            >
              <View style={styles.card}>
                <Feather name="wind" size={32} color="#fff" />
                <Text style={styles.titleCard}>Aromaterapia</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardWrapper}
              onPress={() => navigation.navigate("MeditacaoGuiada")}
            >
              <View style={styles.card}>
                <AntDesign name="team" size={32} color="#fff" />
                <Text style={styles.titleCard}>Meditação Guiada</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}
