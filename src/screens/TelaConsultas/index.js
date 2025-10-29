import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles"; 



export default function TelaConsultas() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../../assets/logopequena.png")}/>
        <Text>Therapy Room</Text>
        <Text>Minhas Consultas</Text>
      </View>
      <Text>
        Consultas finalizadas
      </Text>
    </View>
  );
}