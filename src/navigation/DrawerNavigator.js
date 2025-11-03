import React, { useState } from "react"; // NOVO: Importar useState
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import BottomTabs from "./BottomTabs";
import SobreNosScreen from "../screens/app/SobreNosScreen";
import HomeScreen from "../screens/app/HomeScreen";

const Drawer = createDrawerNavigator();

// --- Componente de Drawer Customizado ---
function CustomDrawerContent({ navigation }) {
  // NOVO: Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = useState(false);

  // NOVO: Função para lidar com o logout
  const handleLogout = () => {
    setModalVisible(false); // Fecha o modal
    navigation.navigate("Login"); // Navega para o Login
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 50,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.closeDrawer()}
        style={styles.closeDrawerButton}
      >
        <Ionicons name="close" size={30} color="#333" />
      </TouchableOpacity>

      {/* Perfil */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={require("../../assets/logoP.webp")} // avatar do perfil
          style={{
            width: 80,
            height: 80,
            marginBottom: 10,
            resizeMode: "contain",
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Therapy Room</Text>
      </View>

      {/* Seções... (todo o seu conteúdo de links) */}
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "#888", marginBottom: 5, fontWeight: "600" }}>
          Empresa
        </Text>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather
            name="home"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            navigation.navigate("SobreNos");
            navigation.closeDrawer();
          }}
        >
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Sobre nós</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <Feather
            name="users"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Parceiros</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "#888", marginBottom: 5, fontWeight: "600" }}>
          Consultas
        </Text>
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons
            name="people-outline"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <Feather
            name="calendar"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Minhas consultas</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "#888", marginBottom: 5, fontWeight: "600" }}>
          Aplicativo
        </Text>
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons
            name="happy-outline"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Humor diário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons
            name="musical-notes-outline"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Sons relaxantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <MaterialCommunityIcons
            name="meditation"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Meditação</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity
        // MUDANÇA: Abre o modal em vez de navegar direto
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "auto",
          paddingVertical: 10,
        }}
      >
        <Feather name="log-out" size={20} color="red" style={{ width: 28 }} />
        <Text style={{ fontSize: 16, color: "red" }}>Logout</Text>
      </TouchableOpacity>

      {/* NOVO: Modal de Confirmação */}
      <Modal
        animationType="fade" // Animação de fade
        transparent={true} // Fundo transparente
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false); // Permite fechar com o botão "voltar" do Android
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Botão de Fechar o Modal */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeModalButton}
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Tem certeza que deseja sair?</Text>

            <TouchableOpacity
              style={[styles.button, styles.buttonSim]}
              onPress={handleLogout} // Chama a função de logout
            >
              <Text style={styles.buttonText}>Sim, fazer logout</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonNao]}
              onPress={() => setModalVisible(false)} // Apenas fecha o modal
            >
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// --- Drawer Principal ---
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        overlayColor: "rgba(0,0,0,0.3)", // Overlay escuro
        sceneContainerStyle: { backgroundColor: "#fdfbea" },
        drawerStyle: {
          width: 280,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainTabs" component={BottomTabs} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SobreNos" component={SobreNosScreen} />
    </Drawer.Navigator>
  );
}

// NOVO: Estilos para o menu e o modal
const styles = StyleSheet.create({
  // Estilos dos itens do menu (para simplificar o JSX)
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  drawerIcon: {
    width: 28,
  },
  drawerText: {
    fontSize: 16,
  },
  // Botão de fechar o Drawer
  closeDrawerButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1, // Garante que fique por cima
  },
  // Estilos do Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro semi-transparente
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20, // Borda arredondada
    padding: 50,
    paddingTop: 100, // Mais espaço para o botão X
    width: "85%", // Largura do modal
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeModalButton: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 25,
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonSim: {
    backgroundColor: "#2a9d8f", // Um tom de verde/azul (pode mudar)
  },
  buttonNao: {
    backgroundColor: "#e76f51", // Um tom de vermelho/laranja (pode mudar)
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
