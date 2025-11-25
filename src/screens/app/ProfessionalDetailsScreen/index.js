import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import styles from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
// Certifique-se de que o caminho para o contexto está correto
import { useAgendamento } from "../../../context/AgendamentoContext";

export default function ProfessionalDetailsScreen({ navigation, route }) {
  const nome = route.params?.nome;
  // Desestruturando `profissionais` e `agendamentos` do contexto
  const {
    profissionais,
    agendamentos = [],
    handleAgendarSessao,
  } = useAgendamento();
  const profissional = profissionais.find((item) => item.nome === nome);

  // Estados
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  if (!profissional) return null; // Retorna nulo se o profissional não for encontrado

  // --- FUNÇÃO PARA FILTRAR HORÁRIOS DISPONÍVEIS ---
  const getHorariosDisponiveis = () => {
    if (!dataSelecionada) return [];

    // 1. Encontra os agendamentos já feitos para ESTE profissional nesta data
    const agendamentosFeitos = agendamentos.filter(
      (ag) =>
        ag.nomeProfissional === profissional.nome &&
        ag.data === dataSelecionada.data
    );

    // 2. Extrai apenas os horários que já foram preenchidos
    const horariosReservados = agendamentosFeitos.map((ag) => ag.horario);

    // 3. Filtra a lista completa de horários do profissional
    const horariosLivres = dataSelecionada.horarios.filter(
      (hora) => !horariosReservados.includes(hora)
    );

    return horariosLivres;
  };
  // --------------------------------------------------------

  // Função para lidar com a navegação de agendamento (Pagamento)
  const handleAgendar = () => {
    if (!dataSelecionada || !horarioSelecionado) {
      Alert.alert("Atenção", "Selecione um dia e um horário.");
      return;
    }

    // Navega para a tela de pagamento levando TODOS os dados
    navigation.navigate("Payment", {
      profissional: profissional,
      data: dataSelecionada.data,
      horario: horarioSelecionado,
      preco: profissional.preco,
    });
  };

  return (
    <View style={styles.container}>
      {/* 1. Header Fixo */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          {/* ✅ AJUSTE: Cor do ícone para branco */}
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes</Text>
        {/* View Fantasma para centralizar o título */}
        <View style={{ width: 44 }} />
      </View>

      {/* 2. ScrollView (Conteúdo que rola) */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Perfil Principal */}
        <View style={styles.profileContainer}>
          <Image source={profissional.source} style={styles.avatar} />
          <Text style={styles.name}>{profissional.nome}</Text>
          <Text style={styles.specialty}>
            {profissional.especialidade} • {profissional.area}
          </Text>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>
              {profissional.avaliacao} (120 reviews)
            </Text>
          </View>
          <Text style={styles.price}>R$ {profissional.preco.toFixed(2)}</Text>
        </View>

        {/* Informações Completas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <Text style={styles.description}>
            {profissional.sobre || profissional.descricao}
          </Text>

          <Text style={styles.sectionTitle}>Localização</Text>
          <View style={styles.row}>
            <Feather name="map-pin" size={16} color="#666" />
            <Text style={styles.infoText}> {profissional.endereco}</Text>
          </View>
          <View style={styles.row}>
            <Feather name="check-circle" size={16} color="#666" />
            <Text style={styles.infoText}> CRM: {profissional.crm}</Text>
          </View>
        </View>

        {/* Seletor de DATAS */}
        <Text style={styles.sectionTitle}>Escolha uma Data</Text>
        <FlatList
          data={profissional.agenda}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.data}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 10 }}
          renderItem={({ item }) => {
            const isSelected = dataSelecionada?.data === item.data;
            return (
              <TouchableOpacity
                style={[styles.dateCard, isSelected && styles.selectedDateCard]}
                onPress={() => {
                  setDataSelecionada(item);
                  setHorarioSelecionado(null); // Reseta horário
                }}
              >
                <Text
                  style={[styles.dateDay, isSelected && styles.selectedText]}
                >
                  {item.diaSemana}
                </Text>
                <Text
                  style={[styles.dateNumber, isSelected && styles.selectedText]}
                >
                  {item.data}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Seletor de HORÁRIOS */}
        {dataSelecionada && (
          <>
            <Text style={styles.sectionTitle}>Horários Disponíveis</Text>
            <View style={styles.timeContainer}>
              {getHorariosDisponiveis().map((hora) => {
                const isSelected = horarioSelecionado === hora;
                return (
                  <TouchableOpacity
                    key={hora}
                    style={[
                      styles.timeChip,
                      isSelected && styles.selectedTimeChip,
                    ]}
                    onPress={() => setHorarioSelecionado(hora)}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        isSelected && styles.selectedText,
                      ]}
                    >
                      {hora}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Aviso de Nenhum Horário */}
            {getHorariosDisponiveis().length === 0 && (
              <Text style={styles.noTimeAvailableText}>
                Nenhum horário disponível para esta data.
              </Text>
            )}
          </>
        )}
      </ScrollView>

      {/* 3. Botão de Ação (Footer fixo) */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Preço da Sessão</Text>
          <Text style={styles.footerPrice}>
            R$ {profissional.preco.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.bookButton,
            (!dataSelecionada || !horarioSelecionado) && styles.disabledButton,
          ]}
          onPress={handleAgendar}
          disabled={!dataSelecionada || !horarioSelecionado}
        >
          <Text style={styles.bookButtonText}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
