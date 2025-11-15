// DrawerNavigator.js (ou como se chamar seu arquivo)
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./DrawerNavigator.styles";

import BottomTabs from "./BottomTabs";
import SobreNosScreen from "../screens/app/SobreNosScreen";
import ParceirosScreen from "../screens/app/ParceirosScreen";

const Drawer = createDrawerNavigator();

// --- Componente de Drawer Customizado ---
function CustomDrawerContent({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    navigation.navigate("Login");
  };

  return (
    // 2. Usar os estilos importados
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        onPress={() => navigation.closeDrawer()}
        style={styles.closeDrawerButton}
      >
        <Ionicons name="close" size={30} color="#333" />
      </TouchableOpacity>

      {/* Perfil */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/logoP.webp")}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <Text style={styles.profileName}>Therapy Room</Text>
      </View>

      {/* Seções... */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Empresa</Text>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            navigation.navigate("MainTabs", { screen: "Home" });
            navigation.closeDrawer();
          }}
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
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            navigation.navigate("Parceiros");
            navigation.closeDrawer();
          }}
        >
          <Feather
            name="users"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Parceiros</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Consultas</Text>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("ListedProfessionals")}
        >
          <Ionicons
            name="people-outline"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            // 👇 E aqui o nome da TELA DE CONSULTAS
            navigation.navigate("MainTabs", { screen: "Consultas" });
            navigation.closeDrawer();
          }}
        >
          <Feather
            name="calendar"
            size={20}
            color="#000"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Meus Agendamentos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Aplicativo</Text>
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
        onPress={() => setModalVisible(true)}
        style={styles.logoutButton}
      >
        <Feather name="log-out" size={20} style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Modal de Confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeModalButton}
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Tem certeza que deseja sair?</Text>

            <TouchableOpacity
              style={[styles.button, styles.buttonSim]}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Sim, fazer logout</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonNao]}
              onPress={() => setModalVisible(false)}
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
      // 3. Usar os estilos importados aqui também
      screenOptions={{
        initialRouteName: "MainTabs",
        headerShown: false,
        drawerType: "front",
        overlayColor: "rgba(0,0,0,0.3)",
        sceneContainerStyle: styles.sceneContainer, // <-- AQUI
        drawerStyle: styles.drawerStyle, // <-- E AQUI
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainTabs" component={BottomTabs} />
      <Drawer.Screen name="SobreNos" component={SobreNosScreen} />
      <Drawer.Screen name="Parceiros" component={ParceirosScreen} />
    </Drawer.Navigator>
  );
}
