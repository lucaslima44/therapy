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
import { profissionaisData } from "../../../data/profissionaisData";

export default function ProfessionalDetailsScreen({ navigation, route }) {
  const nome = route.params?.nome;
  const profissional = profissionaisData.find((item) => item.nome === nome);

  // Dados de agendamento
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  if (!profissional) return null;

  // Função para agendar
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
      {/* Header com Imagem de Fundo ou Cor */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* 1. Perfil Principal */}
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

        {/* 2. Informações Completas */}
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

        {/* 3. Seletor de DATAS (Horizontal) */}
        <Text style={styles.sectionTitle}>Escolha uma Data</Text>
        <FlatList
          data={profissional.agenda}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.data}
          renderItem={({ item }) => {
            const isSelected = dataSelecionada?.data === item.data;
            return (
              <TouchableOpacity
                style={[styles.dateCard, isSelected && styles.selectedDateCard]}
                onPress={() => {
                  setDataSelecionada(item);
                  setHorarioSelecionado(null); // Reseta horário ao mudar data
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

        {/* 4. Seletor de HORÁRIOS (Só aparece se tiver data selecionada) */}
        {dataSelecionada && (
          <>
            <Text style={styles.sectionTitle}>Horários Disponíveis</Text>
            <View style={styles.timeContainer}>
              {dataSelecionada.horarios.map((hora) => {
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
          </>
        )}
      </ScrollView>

      {/* 5. Botão de Ação (Footer fixo) */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Total</Text>
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
