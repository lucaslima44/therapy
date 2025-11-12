import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  input: {
    color: "#b40404",
  },

  container: {
    flex: 1,
    padding: 20,
  },
  teste: {
    alignItems: "center",
  },

  fieldContainer: {
    marginBottom: 16, // Cria espaço ENTRE cada campo
  },

  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4, // Espaço entre o rótulo e a caixa de entrada
  },

  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 6,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ccc",
    alignItems: "center",
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#B8D8BA",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  backButton: {
    alignSelf: "flex-start",
  },

  divider: {
    height: 1, // espessura da linha
    backgroundColor: "#ccc", // cor da linha
    width: "100%", // ocupa toda a largura
    marginVertical: 20, // espaço acima e abaixo
  },

  buttonText: {
    color: "#000000ff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2, // Para alinhar com o input
  },

  // Adicione este para destacar o input com erro
  inputError: {
    borderColor: "red", // Muda a cor da borda para vermelho
    borderWidth: 1,
  },

  dropdownBox: {
    // Tente copiar os estilos do seu 'styles.input'
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownInputText: {
    fontSize: 16,
  },
  dropdownList: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 4,
  },
  dropdownListText: {
    fontSize: 16,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: "85%",
    padding: 25,
    backgroundColor: "#006A6A",
    borderRadius: 15,
    alignItems: "center", // --- INÍCIO DA CORREÇÃO --- // O '...' (spread operator) aplica o objeto de

    // estilo correto para a plataforma
    ...Platform.select({
      ios: {
        // Estilos para iPhone
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        // Estilo para Android
        elevation: 5,
      },
      web: {
        // Estilo para Web (corrigindo o erro)
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
    }), // --- FIM DA CORREÇÃO ---
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22, // Melhora a leitura
  },
  modalButton: {
    backgroundColor: "#333", // O botão escuro da imagem
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
  },
  modalButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
