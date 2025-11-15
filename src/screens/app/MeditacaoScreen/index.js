import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Feather name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Meditação</Text>
      </View>

      {/* 1ª linha */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("Automassagem")}>
          <View style={styles.card}>
            <MaterialIcons name="self-improvement" size={24} color="black" />
            <Text style={styles.titleCard}>Automassagem</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.card}>
            <MaterialIcons name="video-camera-front" size={24} color="black" />
            <Text style={styles.titleCard}>Yoga em vídeo</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 2ª linha */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("Aromaterapia")}>
          <View style={styles.card}>
            <Feather name="wind" size={24} color="black" />
            <Text style={styles.titleCard}>Aromaterapia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.card}>
            <AntDesign name="team" size={24} color="black" />
            <Text style={styles.titleCard}>Meditação Guiada</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#f9f8f3",
//   },
//   title: {
//     fontSize: 28,
//     fontFamily: "Marcellus-Regular",
//     color: "#222",
//   },
//   subtitle: {
//     fontSize: 18,
//     color: "#555",
//     marginTop: 10,
//   },
// });
