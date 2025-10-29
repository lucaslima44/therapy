import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons"; 
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function TelaExplorar({ navigation }) {  // <--- adiciona aqui
  const handleTelaConsultasPress = () => {
    navigation.navigate("TelaConsultas");  // agora funciona
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./../../../assets/logopequena.png")}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>Therapy Room</Text>
      </View>

      {/* 1ª linha */}
      <View style={styles.row}>
        <TouchableOpacity onPress={handleTelaConsultasPress}>
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
