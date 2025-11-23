import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { profissionaisData } from "./../../../data/profissionaisData";
import Screen from "../../../components/Screen";
import { useAgendamento } from "../../../context/AgendamentoContext";

export default function ConsultasScreen({ navigation }) {
  // --- CORREÇÃO 1: Adicionar valor padrão para evitar o erro "undefined" ---
  // Se useAgendamento retornar algo sem 'agendamentos', ele assume []
  const { agendamentos = [], cancelarAgendamento } = useAgendamento() || {};

  const [isManageModalVisible, setManageModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const handleOpenManageModal = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setManageModalVisible(true);
  };

  const handleCloseManageModal = () => {
    setManageModalVisible(false);
    setSelectedAppointmentId(null);
  };

  const handleOpenConfirmModal = () => {
    setManageModalVisible(false);
    setConfirmModalVisible(true);
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
    setManageModalVisible(true);
  };

  const handleDeleteAppointment = () => {
    if (selectedAppointmentId && cancelarAgendamento) {
      cancelarAgendamento(selectedAppointmentId);
    }
    setConfirmModalVisible(false);
    setSelectedAppointmentId(null);
  };

  const renderDataHora = (agendamento) => {
    if (agendamento.horario && !agendamento.dataAgendamento) {
      return `Agendado para ${agendamento.data} às ${agendamento.horario}`;
    }

    if (agendamento.dataAgendamento) {
      const data = new Date(agendamento.dataAgendamento);
      return `Agendado para ${String(data.getDate()).padStart(2, "0")}/${String(
        data.getMonth() + 1
      ).padStart(2, "0")} às ${String(data.getHours()).padStart(
        2,
        "0"
      )}:${String(data.getMinutes()).padStart(2, "0")}`;
    }
    return "Data a definir";
  };

  // Garante que é um array antes de checar length
  const listaAgendamentos = agendamentos || [];

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
          >
            <Feather name="menu" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Meus Agendamentos</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* --- CORREÇÃO: Usar a variável segura 'listaAgendamentos' --- */}
        {listaAgendamentos.length === 0 && (
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Feather name="calendar" size={50} color="#ddd" />
            <Text style={{ color: "#999", marginTop: 10 }}>
              Você ainda não tem agendamentos.
            </Text>
          </View>
        )}

        {listaAgendamentos.map((agendamento) => {
          const profissional = profissionaisData.find(
            (p) =>
              p.nome === agendamento.nomeProfissional ||
              p.id === agendamento.professionalId
          );

          const imagemSource = profissional ? profissional.source : null;

          return (
            <TouchableOpacity
              key={agendamento.id}
              style={styles.cardAgendamento}
            >
              <View style={styles.topRow}>
                {imagemSource && (
                  <Image
                    source={imagemSource}
                    style={styles.imagemProfissional}
                  />
                )}
                <View style={styles.nomeEStatus}>
                  <Text style={styles.nomeProfissional}>
                    {agendamento.nomeProfissional || profissional?.nome}
                  </Text>
                  <View style={styles.statusConfirmado}>
                    <Text style={styles.statusText}>Confirmado</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bottomRow}>
                <Text style={styles.dataAgendamento}>
                  <Feather name="calendar" size={14} color="#8E8E93" />{" "}
                  {renderDataHora(agendamento)}
                </Text>

                <TouchableOpacity
                  style={styles.iconeEditar}
                  onPress={() => handleOpenManageModal(agendamento.id)}
                >
                  <MaterialIcons name="edit" size={20} color="#555" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* --- MODAIS (MANTIDOS IGUAIS) --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isManageModalVisible}
        onRequestClose={handleCloseManageModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={handleCloseManageModal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Gerenciamento</Text>
            <Text style={styles.modalSubtitle}>O que deseja fazer?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleOpenConfirmModal}
              >
                <Text style={styles.buttonTextDanger}>Cancelar Consulta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.keepButton]}
                onPress={handleCloseManageModal}
              >
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isConfirmModalVisible}
        onRequestClose={() => setConfirmModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tem certeza?</Text>
            <Text style={styles.modalSubtitle}>
              Deseja mesmo cancelar este agendamento?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmDeleteButton]}
                onPress={handleDeleteAppointment}
              >
                <Text style={styles.buttonText}>Sim, cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.keepButton]}
                onPress={handleCloseConfirmModal}
              >
                <Text style={styles.buttonText}>Não, voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}
