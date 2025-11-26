// DrawerNavigator.styles.js
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  drawerStyle: {
    width: 280,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  sceneContainer: {
    backgroundColor: "#fdfbea",
  },

  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 20,
  },
  closeDrawerButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },

  //  Perfil
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

  // Seções do Menu
  menuSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    color: "#888",
    marginBottom: 5,
    fontWeight: "600",
  },

  // Menu
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

  //  Botão de Logout
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  logoutIcon: {
    width: 28,
    color: "red",
  },
  logoutText: {
    fontSize: 16,
    color: "red",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 50,
    paddingTop: 100,
    width: "85%",
    alignItems: "center",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
      web: {
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
    backgroundColor: "#4F49EA",
  },
  buttonNao: {
    backgroundColor: "#ff3300ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
