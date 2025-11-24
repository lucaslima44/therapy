import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA", // Um fundo cinza bem clarinho para destacar os cards brancos
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Garante que fique um na esquerda, um no centro, um na direita
    paddingHorizontal: 20,
    paddingTop: 50, // Ajuste conforme Platform.OS se necessário
    paddingBottom: 10,
  },

  // ... estilos existentes ...

  // Adicione estes novos:
  skipButton: {
    padding: 5,
  },
  skipText: {
    color: "#6C63FF", // Cor roxa do seu tema
    fontWeight: "600",
    fontSize: 14,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  backButton: {
    padding: 5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bigTitle: {
    fontSize: 28,
    fontFamily: "Inter", // Se tiver a fonte, senão use padrão
    fontWeight: "bold",
    color: "#2D3436",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#636E72",
    lineHeight: 22,
    marginBottom: 30,
  },

  // --- GRID DE OPÇÕES ---
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  optionCard: {
    width: (width - 55) / 2, // Metade da tela menos margens
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 15,
    height: 160,
    justifyContent: "space-between",

    // Sombra suave
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,

    borderWidth: 2,
    borderColor: "transparent",
  },
  optionCardSelected: {
    backgroundColor: "#FFF",
    // A borda colorida é controlada inline no componente
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  checkBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  // --- CARD DE RESULTADO ---
  resultContainer: {
    marginTop: 30,
    width: "100%",
  },
  resultCard: {
    borderRadius: 20,
    padding: 25,
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  matchLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 5,
  },
  matchTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  matchDescription: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    opacity: 0.95,
  },
  actionButton: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  actionButtonText: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
