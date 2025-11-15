import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAgendamento } from "../../../context/AgendamentoContext";
import { Feather } from "@expo/vector-icons";

export default function PaymentScreen({ route, navigation }) {
  // Pegando os dados que vieram da tela anterior
  const { agendarHorario } = useAgendamento();
  const { profissional, data, horario, preco } = route.params;
  // --- NOVA FUNÇÃO ---
  const handleConfirmarPagamento = () => {
    // 1. Simula o pagamento... (em um app real, aqui teria o Stripe, etc.)

    // 2. Chama a função do contexto para "sumir" com o horário
    agendarHorario(profissional.nome, data, horario);

    // 3. Avisa o usuário e o envia para a tela de consultas
    Alert.alert("Sucesso!", "Seu agendamento foi confirmado.");

    // 4. Navega de volta ao topo e depois para a lista de consultas
    navigation.popToTop(); // Limpa a pilha de navegação
    navigation.navigate("Consultas"); // Manda para a tela de "Meus Agendamentos"
  };
  // --- FIM DA NOVA FUNÇÃO ---
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
      </View>

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
        onPress={() => alert("Integração de pagamento aqui!")}
      >
        <Text style={styles.payText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 70,
    backgroundColor: "#4B0082",
    padding: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
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
});
