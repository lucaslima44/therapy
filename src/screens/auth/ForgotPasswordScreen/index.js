import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  ActivityIndicator,
  Modal, // <--- 1. IMPORTANTE: Importar o Modal
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gradientProps } from "./../../../styles/colors";
import styles from "./styles";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";

// --- HEADER (Igual ao anterior) ---
const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <Feather name="arrow-left" size={28} color="white" />
    </TouchableOpacity>
    <View style={styles.logoContainer}>
      <Image
        source={require("./../../../../assets/logoB.webp")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.logoText}>Therapy room</Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.mainTitle}>Recuperar Senha</Text>
      <Text style={styles.subTitle}>
        Informe seu e-mail para receber a nova senha.
      </Text>
    </View>
  </View>
);

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. ESTADO DO MODAL
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSendEmail = async () => {
    if (!email) {
      Alert.alert("Atenção", "Por favor, digite seu e-mail.");
      return;
    }

    setIsLoading(true);

    // Simulação da API
    setTimeout(() => {
      setIsLoading(false);
      // 3. ABRE O MODAL EM VEZ DE DAR ALERT
      setModalVisible(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.goBack(); // Volta para o login ao fechar
  };

  return (
    <LinearGradient style={styles.gradientContainer} {...gradientProps}>
      <KeyboardAvoidingView
        style={styles.kavContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <StatusBar
            barStyle="light-content" // Deixa os ícones (bateria, hora) brancos
            backgroundColor="transparent" // Tira a cor de fundo da barra
            translucent={true} // Permite que o seu Gradiente passe por baixo da barra
          />

          <Header navigation={navigation} />

          <View style={styles.formContainer}>
            <View style={{ height: 20 }} />

            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Digite seu email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                marginTop: 15,
                opacity: 0.8,
                marginBottom: 30,
              }}
            >
              Verifique sua caixa de entrada e spam após enviar.
            </Text>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSendEmail}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.loginButtonText}>Enviar</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* --- 4. CÓDIGO DO MODAL AQUI --- */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                {/* Ícone de Sucesso */}
                <Ionicons
                  name="checkmark-circle-outline"
                  size={60}
                  color="#4CAF50"
                  style={{ marginBottom: 15 }}
                />

                <Text style={styles.modalTitle}>Email Enviado!</Text>

                <Text style={styles.modalMessage}>
                  Uma nova senha para redefinição foi enviada para:
                  {"\n"}
                  <Text style={{ fontWeight: "bold" }}>{email}</Text>
                </Text>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.modalButtonText}>Voltar para Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
