// DrawerNavigator.js
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// 1. IMPORTANTE: Importar o hook de insets
import { useSafeAreaInsets } from "react-native-safe-area-context"; 

import styles from "./DrawerNavigator.styles";
import BottomTabs from "./BottomTabs";

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation, insets }) { // Recebendo insets via prop se necessário, ou chamando aqui dentro
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const navigateToHomeStack = (screenName) => {
    navigation.navigate("MainTabs", {
      screen: "Home",
      params: { screen: screenName },
    });
    navigation.closeDrawer();
  };

  const navigateToTab = (tabName) => {
    navigation.navigate("MainTabs", { screen: tabName });
    navigation.closeDrawer();
  };

  return (
    <View style={[styles.drawerContainer, { paddingTop: 20 }]}> 
      {/* Dica: Adicionei um paddingTop simples para segurança ou você pode usar insets.top aqui também */}
      
      <TouchableOpacity
        onPress={() => navigation.closeDrawer()}
        style={styles.closeDrawerButton}
      >
        <Ionicons name="close" size={30} color="#333" />
      </TouchableOpacity>

      {/* Perfil */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/logoColorida.webp")}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <Text style={styles.profileName}>Therapy Room</Text>
      </View>

      {/* Seções - (Mantido igual ao seu código original) */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Empresa</Text>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            navigation.navigate("MainTabs", { screen: "Home" });
            navigation.closeDrawer();
          }}
        >
          <Feather name="home" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToHomeStack("SobreNos")}
        >
          <Ionicons name="information-circle-outline" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Sobre nós</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Parceiros")}
        >
          <Feather name="users" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Parceiros</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Consultas</Text>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("ListedProfessionals")}
        >
          <Ionicons name="people-outline" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            navigation.navigate("MainTabs", { screen: "Consultas" });
            navigation.closeDrawer();
          }}
        >
          <Feather name="calendar" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Meus Agendamentos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Aplicativo</Text>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToTab("Perfil")}
        >
          <Ionicons name="happy-outline" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Humor diário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToHomeStack("SonsRelaxantes")}
        >
          <Ionicons name="musical-notes-outline" size={20} color="#000" style={styles.drawerIcon} />
          <Text style={styles.drawerText}>Sons relaxantes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToTab("Meditação")}
        >
          <MaterialCommunityIcons name="meditation" size={20} color="#000" style={styles.drawerIcon} />
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

      {/* Modal - (Mantido igual) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => setModalVisible(false)}
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

// Drawer Principal
export default function DrawerNavigator() {
  // 2. Usar o hook aqui para pegar as dimensões seguras
  const insets = useSafeAreaInsets(); 

  return (
    <Drawer.Navigator
      screenOptions={{
        initialRouteName: "MainTabs",
        headerShown: false,
        drawerType: "front",
        overlayColor: "rgba(0,0,0,0.3)",
        sceneContainerStyle: styles.sceneContainer,
        
        // 3. APLICAR A CORREÇÃO AQUI
        drawerStyle: {
          ...styles.drawerStyle,
          // Isso empurra a parte inferior do drawer para cima,
          // deixando a área da barra de navegação livre.
          marginBottom: insets.bottom, 
          
          // Opcional: Se quiser garantir que o topo também não pegue a status bar:
          // marginTop: insets.top, 
          
          // Como você usa borderRadius em baixo, o marginBottom é essencial 
          // para o arredondado não ser cortado pela tela.
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
}