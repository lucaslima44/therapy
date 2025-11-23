import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

import styles from "./styles";

export default function HumorModal({ visible, onClose, onSelectMood }) {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Como você está se sentindo hoje?</Text>
          <Text style={styles.subtitle}>Escolha um humor abaixo:</Text>

          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => onSelectMood("feliz")}>
              <AntDesign name="smile" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelectMood("chorando")}>
              <FontAwesome5 name="sad-cry" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelectMood("raiva")}>
              <FontAwesome5 name="angry" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelectMood("triste")}>
              <Entypo name="emoji-sad" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelectMood("normal")}>
              <FontAwesome5 name="meh" size={40} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onClose} style={styles.laterButton}>
            <Text style={styles.laterButtonText}>Responder mais tarde</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
