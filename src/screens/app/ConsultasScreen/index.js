import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { profissionaisData } from "./../../../data/profissionaisData";
import { agendamentosData } from "./../../../data/agendamentosData";

export default function ConsultasScreen({ navigation }) {
  const ultimosAgendamentos = agendamentosData.slice(0, 5);

  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa do 0
    const ano = String(data.getFullYear()).slice(-2);
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    return `Agendado para ${dia}/${mes}/${ano} às ${hora}:${minuto}`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Feather name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Meus Agendamentos</Text>
      </View>

      {ultimosAgendamentos.map((agendamento) => {
        const profissional = profissionaisData.find(
          (prof) => prof.id === agendamento.professionalId
        );

        if (!profissional) {
          return null;
        }

        return (
          <View key={agendamento.id} style={styles.cardAgendamento}>
            <View style={styles.topRow}>
              {/* Imagem do profissional */}
              <Image
                source={profissional.source}
                style={styles.imagemProfissional}
              />

              <View style={styles.nomeEStatus}>
                <Text style={styles.nomeProfissional}>{profissional.nome}</Text>
                {/* Botão Confirmado */}
                <View style={styles.statusConfirmado}>
                  <Text style={styles.statusText}>Confirmado</Text>
                </View>
              </View>
            </View>

            <View style={styles.bottomRow}>
              <Text style={styles.dataAgendamento}>
                {formatarData(agendamento.dataAgendamento)}
              </Text>
              {/* Ícone de Lápis (Editar) */}
              <TouchableOpacity style={styles.iconeEditar}>
                {/* Se estiver usando @expo/vector-icons */}
                <MaterialIcons name="edit" size={20} color="#555" />
                {/* Se estiver usando react-native-vector-icons
                    <Icon name="pencil" size={20} color="#555" /> */}
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
