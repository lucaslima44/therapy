import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./../../../assets/logoP.webp")}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>Therapy Room</Text>
      </View>

      {/* 1ª linha */}
      <View style={styles.row}>
        <TouchableOpacity>
          <View style={styles.card}>
            <MaterialIcons name="self-improvement" size={24} color="black" />
            <Text style={styles.title}>Automassagem</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.card}>
            <MaterialIcons name="video-camera-front" size={24} color="black" />
            <Text style={styles.title}>Yoga em vídeo</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 2ª linha */}
      <View style={styles.row}>
        <TouchableOpacity>
          <View style={styles.card}>
            <Feather name="wind" size={24} color="black" />
            <Text style={styles.title}>Aromaterapia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.card}>
            <AntDesign name="team" size={24} color="black" />
            <Text style={styles.title}>Meditação Guiada</Text>
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
