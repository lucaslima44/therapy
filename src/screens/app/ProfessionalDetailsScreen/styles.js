import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    height: 80,
    backgroundColor: "#4B0082",
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  backButton: {
    zIndex: 10,
    padding: 5,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20, // Ajuste conforme necessário para alinhar verticalmente com o ícone
    // (Ou remova o bottom e confie no alignItems do header, mas absolute costuma pedir alinhamento manual)
  },

  content: { paddingBottom: 100 },

  profileContainer: { alignItems: "center", marginTop: 20, marginBottom: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  specialty: { fontSize: 14, color: "#666" },
  ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  rating: { marginLeft: 5, color: "#666", fontSize: 12 },
  price: { fontSize: 18, color: "#4B0082", fontWeight: "bold", marginTop: 5 },

  section: { padding: 20, backgroundColor: "#fff", marginBottom: 10 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  description: { color: "#555", lineHeight: 20 },
  row: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  infoText: { color: "#555", marginLeft: 5 },

  // Estilos da Agenda
  dateCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    alignItems: "center",
    minWidth: 70,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedDateCard: { backgroundColor: "#4B0082", borderColor: "#4B0082" },
  dateDay: { fontSize: 12, color: "#888" },
  dateNumber: { fontSize: 16, fontWeight: "bold", color: "#333" },
  selectedText: { color: "#fff" },

  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
  },
  timeChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    backgroundColor: "#fff",
  },
  selectedTimeChip: { backgroundColor: "#4B0082", borderColor: "#4B0082" },
  timeText: { color: "#333" },

  // Footer
  footer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  footerLabel: { color: "#888", fontSize: 12 },
  footerPrice: { fontSize: 20, fontWeight: "bold", color: "#333" },
  bookButton: {
    backgroundColor: "#4B0082",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  disabledButton: { backgroundColor: "#ccc" },
  bookButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
