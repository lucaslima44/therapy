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
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { gradientProps } from "./../../../styles/colors";
import styles from "./styles";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";

// --- HEADER ---
const Header = ({ navigation }) => {
  const canGoBack = navigation.canGoBack();

  return (
    <View style={styles.headerContainer}>
      {canGoBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}

      <View style={styles.logoContainer}>
        <Image
          source={require("./../../../../assets/logoB.webp")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Therapy room</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Prossiga e entre na sua conta</Text>
        <Text style={styles.subTitle}>
          A melhor experiência de gerenciamento
        </Text>
      </View>
    </View>
  );
};

// --- FORM BODY (CORRIGIDO) ---
const FormBody = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Login");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Bloqueio Web
  const handleWebContextMenu = (e) => {
    if (Platform.OS === "web") {
      e.preventDefault();
    }
  };

  const noSelectStyle = Platform.OS === "web" ? { userSelect: "none" } : {};

  const handleAuthAction = async () => {
    // 1. Limpa erros
    setErrorMessage(null);

    // --- REMOVI O BLOCO IF(RESPONSE.OK) QUE ESTAVA AQUI ERRADO ---

    // 2. Validações
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (activeTab === "Cadastrar") {
      if (!name) {
        setErrorMessage("Por favor, preencha seu nome.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage("As senhas não conferem.");
        return;
      }
    }

    setIsLoading(true);

    // 3. Configuração da API
    const baseUrl = "https://therapy-api-y4uh.onrender.com";
    const endpoint = activeTab === "Login" ? "/auth/login" : "/auth/register";
    const payload =
      activeTab === "Login" ? { email, password } : { name, email, password };

    try {
      console.log(`Enviando para: ${baseUrl}${endpoint}`);

      // 4. Faz a requisição
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // 5. Verifica sucesso
      if (response.ok) {
        if (activeTab === "Cadastrar") {
          Alert.alert("Sucesso", "Conta criada! Faça login para continuar.");
          setActiveTab("Login");
          setPassword("");
          setConfirmPassword("");
          setErrorMessage(null);
        } else {
          // --- LOGIN COM SUCESSO ---
          console.log("Usuário logado:", data.user);

          // AQUI É O LUGAR CERTO DE SALVAR:
          await AsyncStorage.setItem("@user_data", JSON.stringify(data.user));

          navigation.replace("TherapyGuide");
        }
      } else {
        // Erro da API (ex: senha errada)
        setErrorMessage(data.error || "Ocorreu um erro inesperado.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro de conexão. Verifique sua internet ou o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      {/* TOGGLE */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === "Login" ? styles.toggleActive : styles.toggleInactive,
          ]}
          onPress={() => {
            setActiveTab("Login");
            setErrorMessage(null);
          }}
        >
          <Text
            style={
              activeTab === "Login"
                ? styles.toggleTextActive
                : styles.toggleTextInactive
            }
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === "Cadastrar"
              ? styles.toggleActive
              : styles.toggleInactive,
          ]}
          onPress={() => {
            setActiveTab("Cadastrar");
            setErrorMessage(null);
          }}
        >
          <Text
            style={
              activeTab === "Cadastrar"
                ? styles.toggleTextActive
                : styles.toggleTextInactive
            }
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

      {/* INPUTS */}
      <View style={styles.inputContainer}>
        {activeTab === "Cadastrar" && (
          <View style={styles.inputWrapper}>
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Nome Completo"
              placeholderTextColor="#333"
              style={styles.input}
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />
          </View>
        )}

        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="therapyroom@app.br"
            placeholderTextColor="#333"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* SENHA */}
        <View style={styles.inputWrapper}>
          <Feather
            name="lock"
            size={20}
            color="#666"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#333"
            style={[styles.input, noSelectStyle]}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            contextMenuHidden={true}
            selectTextOnFocus={false}
            onContextMenu={handleWebContextMenu}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* CONFIRMAR SENHA */}
        {activeTab === "Cadastrar" && (
          <View style={styles.inputWrapper}>
            <Feather
              name="lock"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Confirmar senha"
              placeholderTextColor="#333"
              style={[styles.input, noSelectStyle]}
              secureTextEntry={!isPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              contextMenuHidden={true}
              selectTextOnFocus={false}
              onContextMenu={handleWebContextMenu}
            />
          </View>
        )}
      </View>

      {activeTab === "Login" && (
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      )}

      {activeTab === "Cadastrar" && (
        <View style={{ marginVertical: 15, height: 19 }} />
      )}

      {errorMessage && (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={20} color="#FF375B" />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleAuthAction}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.loginButtonText}>
            {activeTab === "Login" ? "Entrar" : "Criar conta"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

// --- TELA PRINCIPAL ---
export default function LoginScreen({ navigation }) {
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
          <FormBody navigation={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
