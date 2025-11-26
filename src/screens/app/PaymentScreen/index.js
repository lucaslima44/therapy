import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  Modal,
} from "react-native";
import { useAgendamento } from "../../../context/AgendamentoContext";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function PaymentScreen({ route, navigation }) {
  const { agendarHorario } = useAgendamento();
  const { profissional, data, horario, preco } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmarPagamento = async () => {
    await agendarHorario(profissional.nome, data, horario);
    setModalVisible(true);
  };

  const fecharModalENavegar = () => {
    setModalVisible(false);
    navigation.popToTop();

    setTimeout(() => {
      navigation.navigate("MainApp", {
        screen: "MainTabs",
        params: {
          screen: "Consultas",
        },
      });
    }, 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Resumo do Agendamento</Text>
        <View style={{ width: 34 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Confirme seus dados</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Profissional:</Text>
          <Text style={styles.value}>{profissional.nome}</Text>

          <Text style={styles.label}>Data e Hora:</Text>
          <Text style={styles.value}>
            {data} às {horario}
          </Text>

          <Text style={styles.label}>Valor a Pagar:</Text>
          <Text style={styles.total}>R$ {preco.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.payButton}
          onPress={handleConfirmarPagamento}
        >
          <Text style={styles.payText}>Confirmar Pagamento</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModalENavegar}
        statusBarTranslucent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Feather name="check-circle" size={60} color="#28a745" />
            <Text style={styles.modalTitle}>Sucesso!</Text>
            <Text style={styles.modalMessage}>
              Sua consulta com {profissional.nome} foi agendada corretamente.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={fecharModalENavegar}
            >
              <Text style={styles.modalButtonText}>Ver meus Agendamentos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
