import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Modal,
} from "react-native";
import { useAgendamento } from "../../../context/AgendamentoContext";
import { Feather } from "@expo/vector-icons";

export default function PaymentScreen({ route, navigation }) {
  const { agendarHorario } = useAgendamento();
  const { profissional, data, horario, preco } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmarPagamento = async () => {
    // Salva a consulta no contexto (e no AsyncStorage dentro do contexto)
    await agendarHorario(profissional.nome, data, horario);

    // Abre o modal de sucesso
    setModalVisible(true);
  };

  const fecharModalENavegar = () => {
    setModalVisible(false);

    // Volta para a Home
    navigation.popToTop();

    // Depois navega para a aba de Consultas
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
      {/* --- HEADER --- */}
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

      {/* --- CONTEÚDO --- */}
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

      {/* --- MODAL DE SUCESSO --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModalENavegar}
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    width: "100%",
    backgroundColor: "#4B0082",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: { padding: 5 },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  content: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: { color: "#666", marginTop: 10 },
  value: { fontSize: 18, fontWeight: "bold", color: "#333" },
  total: { fontSize: 22, fontWeight: "bold", color: "#4B0082", marginTop: 5 },
  payButton: {
    marginTop: 30,
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  payText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },
  modalButton: {
    backgroundColor: "#4B0082",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});