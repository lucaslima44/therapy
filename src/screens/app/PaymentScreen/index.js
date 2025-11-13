import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PaymentScreen({ route, navigation }) {
  // Pegando os dados que vieram da tela anterior
  const { profissional, data, horario, preco } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Agendamento</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Profissional:</Text>
        <Text style={styles.value}>{profissional.nome}</Text>

        <Text style={styles.label}>Data e Hora:</Text>
        <Text style={styles.value}>{data} às {horario}</Text>

        <Text style={styles.label}>Valor a Pagar:</Text>
        <Text style={styles.total}>R$ {preco.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={() => alert("Integração de pagamento aqui!")}>
        <Text style={styles.payText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3 },
  label: { color: '#666', marginTop: 10 },
  value: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  total: { fontSize: 22, fontWeight: 'bold', color: '#4B0082', marginTop: 5 },
  payButton: { marginTop: 30, backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  payText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});