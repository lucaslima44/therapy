// DrawerNavigator.styles.js
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  // --- Estilos do Navigator (screenOptions) ---
  drawerStyle: {
    width: 280,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  sceneContainer: {
    backgroundColor: "#fdfbea",
  },

  // --- Estilos do Conteúdo Customizado ---
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 20,
  },
  closeDrawerButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1, // Garante que fique por cima
  },

  // --- Perfil ---
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
  },

  // --- Seções do Menu ---
  menuSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    color: "#888",
    marginBottom: 5,
    fontWeight: "600",
  },

  // --- Itens do Menu ---
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

  // --- Botão de Logout ---
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  logoutIcon: {
    width: 28, // Mantém alinhamento com outros ícones
    color: "red",
  },
  logoutText: {
    fontSize: 16,
    color: "red",
  },

  // --- Estilos do Modal de Logout ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 50, // Espaçamento interno geral
    paddingTop: 100, // Mais espaço no topo
    width: "85%",
    alignItems: "center",

    ...Platform.select({
      // Estilos para iOS (iPhone)
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }, // Estilo para Android
      android: {
        elevation: 5,
      }, // Estilo para Web (corrigindo o erro)
      web: {
        // "0px 2px" (offset) "4px" (radius) "rgba(0,0,0,0.25)" (color+opacity)
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
    }),
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
    backgroundColor: "#2a9d8f",
  },
  buttonNao: {
    backgroundColor: "#e76f51",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
