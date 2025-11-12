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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gradientProps } from "./../../../styles/colors";
import styles from "./styles";

// --- CORREÇÃO AQUI: Importe o Ionicons que estava faltando ---
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
// import { ArrowLeft } from "../../components/ArrowLeft"; // Você importou mas não usou, pode apagar ou usar

// --- ADICIONADO DE VOLTA: O componente Header estava faltando ---
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
      {/* Você pode até fazer este texto mudar junto com o 'activeTab' se quiser */}
      <Text style={styles.mainTitle}>Prossiga e entre na sua conta</Text>
      <Text style={styles.subTitle}>A melhor experiência de gerenciamento</Text>
    </View>
  </View>
);

// --- Componente Limpo: Formulário ---
// (Este é o seu código, agora com o Ionicons funcionando)
const FormBody = ({ navigation }) => {
  // Estado para controlar o toggle (Login ou Cadastrar)
  const [activeTab, setActiveTab] = useState("Login");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEntrarPress = () => {
    // simulação simples de login bem-sucedido
    navigation.replace("MainApp");
  };

  return (
    <View style={styles.formContainer}>
      {/* 1. Toggle Login/Cadastrar (Sem mudanças) */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === "Login" ? styles.toggleActive : styles.toggleInactive,
          ]}
          onPress={() => setActiveTab("Login")}
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
          onPress={() => setActiveTab("Cadastrar")}
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

      {/* 2. Inputs */}
      <View style={styles.inputContainer}>
        {/* // NOVO: Campo "Nome" (só aparece se activeTab for 'Cadastrar') */}
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
              style={styles.input}
              autoCapitalize="words"
            />
          </View>
        )}

        {/* Campo "Email" (aparece em ambos) */}
        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="therapyroom@app.br"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Campo "Senha" (aparece em ambos) */}
        <View style={styles.inputWrapper}>
          <Feather
            name="lock"
            size={20}
            color="#666"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
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

        {/* // NOVO: Campo "Confirmar Senha" (só aparece se activeTab for 'Cadastrar') */}
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
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
            />
          </View>
        )}
      </View>

      {/* 3. Esqueceu a senha */}
      {/* // MODIFICADO: Só aparece se activeTab for 'Login' */}
      {activeTab === "Login" && (
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      )}

      {/* // NOVO: Espaçador para o modo 'Cadastrar' (para manter o botão no lugar) */}
      {activeTab === "Cadastrar" && (
        <View style={{ marginVertical: 15, height: 19 }} /> // Espaço vazio
      )}

      {/* 4. Botão Entrar / Criar conta */}
      <TouchableOpacity style={styles.loginButton} onPress={handleEntrarPress}>
        {/* // MODIFICADO: O texto do botão agora é dinâmico */}
        <Text style={styles.loginButtonText}>
          {activeTab === "Login" ? "Entrar" : "Criar conta"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// --- ADICIONADO DE VOLTA: A TELA PRINCIPAL ESTAVA FALTANDO ---
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
          <StatusBar style="light" />

          <Header navigation={navigation} />
          <FormBody navigation={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
