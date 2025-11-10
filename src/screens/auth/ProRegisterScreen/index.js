import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal, // <-- ADICIONADO
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import MaskInput, { Masks } from "react-native-mask-input";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./styles";

export default function ProRegisterScreen({ navigation }) {
  // --- Estados das Imagens ---
  const [profileImage, setProfileImage] = useState(null);
  const [documento, setDocumento] = useState(null);

  // --- Estado do Modal ---
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  // --- Estados do Formulário ---
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [cpfSemMascara, setCpfSemMascara] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [genero, setGenero] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("");
  const [crp, setCrp] = useState("");

  // --- Opções para o SelectList (Dropdowns) ---
  const generosOptions = [
    { key: "feminino", value: "Feminino" },
    { key: "masculino", value: "Masculino" },
    { key: "nao-binario", value: "Não-binário" },
    { key: "outro", value: "Outro" },
    { key: "nao-informar", value: "Prefiro não informar" },
  ];

  const areasOptions = [
    { key: "clinica", value: "Psicologia Clínica" },
    { key: "cognitiva", value: "Terapia Cognitiva" },
    { key: "infantil", value: "Psicologia Infantil" },
    { key: "organizacional", value: "Psicologia Organizacional" },
    { key: "hospitalar", value: "Psicologia Hospitalar" },
    { key: "outra", value: "Outra" },
  ];

  // -----------------------------------------------------------------
  // Função de validação de data
  // -----------------------------------------------------------------
  const validateBirthDate = (dateString) => {
    if (!dateString) {
      setBirthDateError("");
      return;
    }
    if (dateString.length !== 10) {
      setBirthDateError("Data incompleta.");
      return;
    }
    const [day, month, year] = dateString.split("/").map(Number);
    const parsedDate = new Date(year, month - 1, day);
    if (
      parsedDate.getDate() !== day ||
      parsedDate.getMonth() !== month - 1 ||
      parsedDate.getFullYear() !== year
    ) {
      setBirthDateError("Data inválida.");
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (parsedDate > today) {
      setBirthDateError("Data inválida. Tente novamente.");
      return;
    }
    const adultThresholdDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    if (parsedDate > adultThresholdDate) {
      setBirthDateError("Somente maior de 18 anos.");
      return;
    }
    setBirthDateError("");
  };

  // -----------------------------------------------------------------
  // Funções de Imagem e Documento
  // -----------------------------------------------------------------
  const requestMediaLibraryPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permissão negada",
        "Você precisa permitir o acesso à galeria."
      );
      return false;
    }
    return true;
  };

  const pickProfileImage = async () => {
    const hasPermission = await requestMediaLibraryPermissions();
    if (!hasPermission) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/jpeg", "image/png"],
        copyToCacheDirectory: true,
      });
      console.log(result);
      if (!result.canceled) {
        setDocumento(result.assets[0]);
      }
    } catch (err) {
      Alert.alert("Erro", "Não foi possível abrir o seletor de arquivos.");
      console.error("Erro ao selecionar documento:", err);
    }
  };

  // -----------------------------------------------------------------
  // Função de Envio
  // -----------------------------------------------------------------
  const handleSubmit = async () => {
    // 1. Validar campos
    validateBirthDate(birthDate);
    if (birthDateError) {
      Alert.alert("Erro", "Por favor, corrija os erros no formulário.");
      return;
    }
    if (
      !nomeCompleto ||
      !cpfSemMascara ||
      !email ||
      !crp ||
      !genero ||
      !areaAtuacao ||
      !documento // para deixar o documento obrigatorio
    ) {
      Alert.alert("Campos incompletos", "Por favor, preencha todos os campos.");
      return;
    }

    // 2. Montar dados
    const dadosParaApi = {
      nome: nomeCompleto,
      cpf: cpfSemMascara,
      email: email,
      datadenascimento: birthDate,
      genero: genero,
      area: areaAtuacao,
      numerocrp: crp,
    };

    const urlDaApi = "http://192.168.3.157:3000/profissionais";
    console.log("--- ENVIANDO PARA A API ---");
    console.log("URL:", urlDaApi);
    console.log("DADOS (JSON):", JSON.stringify(dadosParaApi, null, 2));

    // 3. Enviar para a API usando fetch
    try {
      const response = await fetch(urlDaApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaApi),
      });

      // 4. Lidar com a resposta da API
      if (response.ok) {
        // Se deu certo (status 201), mostre o modal de sucesso
        console.log("SUCESSO! Resposta da API:", await response.json());
        setSuccessModalVisible(true);
      } else {
        // Se a API deu erro (ex: CPF duplicado, status 400)
        const erroData = await response.json();
        console.error("--- ERRO DA API (bloco ELSE) ---");
        console.error("Status da Resposta:", response.status);
        console.error("Mensagem da API:", erroData);
        Alert.alert(
          "Erro ao cadastrar",
          `Erro: ${erroData.erro || "Verifique os dados e tente novamente."}`
        );
      }
    } catch (err) {
      // Erro de rede (API desligada, IP errado, sem internet)
      console.error("--- ERRO DE REDE (bloco CATCH) ---");
      console.error(err);
      Alert.alert(
        "Erro de conexão",
        "Não foi possível conectar ao servidor. Verifique sua rede e se a API está ligada."
      );
    }
  };

  // -----------------------------------------------------------------
  // --- JSX (Formulário Atualizado) ---
  // -----------------------------------------------------------------
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left-circle" size={28} color="black" />
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* FOTO DE PERFIL */}
      <View style={styles.teste}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../../../../assets/profile.jpg") // Ajuste o caminho se necessário
          }
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon} onPress={pickProfileImage}>
          <Ionicons name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* --- Início do Formulário --- */}

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>CPF</Text>
        <MaskInput
          value={cpf}
          style={styles.input}
          placeholder="000.000.000-00"
          keyboardType="numeric"
          mask={Masks.BRL_CPF}
          onChangeText={(maskedValue, unmaskedValue) => {
            setCpf(maskedValue);
            setCpfSemMascara(unmaskedValue);
          }}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <MaskInput
          value={birthDate}
          style={[styles.input, birthDateError ? styles.inputError : null]}
          placeholder="DD/MM/AAAA"
          keyboardType="numeric"
          mask={Masks.DATE_DDMMYYYY}
          onChangeText={(maskedValue) => {
            setBirthDate(maskedValue);
            if (birthDateError) setBirthDateError("");
          }}
          onBlur={() => validateBirthDate(birthDate)}
        />
        {birthDateError ? (
          <Text style={styles.errorText}>{birthDateError}</Text>
        ) : null}
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Gênero</Text>
        <SelectList
          setSelected={(val) => setGenero(val)}
          data={generosOptions}
          save="key"
          placeholder="Selecione seu gênero..."
          arrowicon={
            <FontAwesome name="chevron-down" size={12} color={"#555"} />
          }
          searchicon={<FontAwesome name="search" size={12} color={"#555"} />}
          searchPlaceholder="Pesquisar..."
          boxStyles={styles.dropdownBox}
          inputStyles={styles.dropdownInputText}
          dropdownStyles={styles.dropdownList}
          dropdownTextStyles={styles.dropdownListText}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Área de atuação</Text>
        <SelectList
          setSelected={(val) => setAreaAtuacao(val)}
          data={areasOptions}
          save="key"
          placeholder="Selecione a área de atuação..."
          arrowicon={
            <FontAwesome name="chevron-down" size={12} color={"#555"} />
          }
          searchicon={<FontAwesome name="search" size={12} color={"#555"} />}
          searchPlaceholder="Pesquisar..."
          boxStyles={styles.dropdownBox}
          inputStyles={styles.dropdownInputText}
          dropdownStyles={styles.dropdownList}
          dropdownTextStyles={styles.dropdownListText}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Número CRP</Text>
        <TextInput
          style={styles.input}
          placeholder="00/000000"
          keyboardType="numeric"
          value={crp}
          onChangeText={setCrp}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Anexar a carteirinha</Text>
        <TouchableOpacity style={styles.input} onPress={pickDocument}>
          <Text
            style={
              documento ? styles.documentoAnexado : styles.placeholderTexto
            }
          >
            {documento ? documento.name : "Selecionar arquivo..."}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar para análise</Text>
        </TouchableOpacity>
      </View>

      {/* // ---------------------------------------------------- 
      // --- CÓDIGO DO MODAL DE SUCESSO ---
      // ---------------------------------------------------- 
      */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isSuccessModalVisible}
        onRequestClose={() => {
          setSuccessModalVisible(false);
          navigation.navigate("Login"); // Mude "Login" para o nome da sua tela de login
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enviado para análise</Text>
            <Text style={styles.modalMessage}>
              Aguarde retorno no email com a aprovação ou reprovação,
              retornaremos em até 72 horas.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSuccessModalVisible(false);
                navigation.navigate("Login"); // Mude "Login" para o nome da sua tela de login
              }}
            >
              <Text style={styles.modalButtonText}>Voltar para login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
