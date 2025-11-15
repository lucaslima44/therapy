import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { profissionaisData } from "./../../../data/profissionaisData";
import { agendamentosData } from "./../../../data/agendamentosData";
import Screen from "../../../components/Screen";

export default function ConsultasScreen({ navigation }) {
  const [agendamentos, setAgendamentos] = useState(
    agendamentosData.slice(0, 5)
  );

  // --- MUDANÇA 2: Estados para os dois modais ---
  const [isManageModalVisible, setManageModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  // ------------------------------------------------

  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  // --- MUDANÇA 3: Funções de controle atualizadas ---

  // Função para ABRIR o primeiro modal (Gerenciar)
  const handleOpenManageModal = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setManageModalVisible(true);
  };

  // Função para FECHAR o primeiro modal (Gerenciar)
  const handleCloseManageModal = () => {
    setManageModalVisible(false);
    setSelectedAppointmentId(null); // Limpamos aqui por via das dúvidas
  };

  // Função para ABRIR o segundo modal (Confirmação)
  // Ela fecha o primeiro e abre o segundo
  const handleOpenConfirmModal = () => {
    setManageModalVisible(false);
    setConfirmModalVisible(true);
  };

  // Função para FECHAR o segundo modal (Confirmação)
  // Ela fecha o segundo e REABRE o primeiro (para o usuário não se perder)
  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
    setManageModalVisible(true);
  };

  // Função para DELETAR o agendamento (só do front)
  const handleDeleteAppointment = () => {
    // Filtramos o estado, removendo o item com o ID selecionado
    setAgendamentos((currentAgendamentos) =>
      currentAgendamentos.filter((ag) => ag.id !== selectedAppointmentId)
    );

    // Fechamos tudo e limpamos o ID
    setConfirmModalVisible(false);
    setSelectedAppointmentId(null);
    console.log("Consulta cancelada com sucesso:", selectedAppointmentId);
  };
  // --- FIM DAS MUDANÇAS NAS FUNÇÕES ---

  // Data para formatar
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
    <Screen>
      {/* 4. O <ScrollView> vai DENTRO do <Screen> */}
      <ScrollView
        // 5. O styles.container (com padding) vai AQUI
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* 6. O Header e a lista vão DENTRO do ScrollView */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
          >
            <Feather name="menu" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Meus Agendamentos</Text>
        </View>

        {agendamentos.map((agendamento) => {
          const profissional = profissionaisData.find(
            (prof) => prof.id === agendamento.professionalId
          );

          if (!profissional) {
            return null;
          }

          return (
            <TouchableOpacity
              key={agendamento.id}
              style={styles.cardAgendamento}
            >
              {/* ... (Todo o seu card JSX ... ) */}
              <View style={styles.topRow}>
                <Image
                  source={profissional.source}
                  style={styles.imagemProfissional}
                />
                <View style={styles.nomeEStatus}>
                  <Text style={styles.nomeProfissional}>
                    {profissional.nome}
                  </Text>
                  <View style={styles.statusConfirmado}>
                    <Text style={styles.statusText}>Confirmado</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.dataAgendamento}>
                  {formatarData(agendamento.dataAgendamento)}
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

      {/* 7. Os Modais ficam FORA do ScrollView, mas DENTRO do Screen */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isManageModalVisible}
        onRequestClose={handleCloseManageModal}
      >
        {/* ... (Seu Modal de Gerenciar) ... */}
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={handleCloseManageModal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Gerenciamento de Consultas</Text>
            <Text style={styles.modalSubtitle}>
              O que você gostaria de fazer?
            </Text>
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
        {/* ... (Seu Modal de Confirmar) ... */}
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.modalTitle}>Tem certeza?</Text>
            <Text style={styles.modalSubtitle}>
              Esta ação não pode ser desfeita. Deseja mesmo cancelar sua
              consulta?
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
          </TouchableOpacity>
        </View>
      </Modal>
    </Screen>
  );
}
