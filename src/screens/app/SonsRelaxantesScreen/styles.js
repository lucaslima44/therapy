import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isSmallDevice = width < 380;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },

  blurredBackground: {
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: -1,
  },

  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  header: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? (isSmallDevice ? 30 : 60) : 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },

  title: {
    fontSize: isSmallDevice ? 18 : 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Karma-Bold",
  },

  backButton: {
    padding: 10,
  },

  // CAPA
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  mainImage: {
    width: width * 0.7,
    height: width * 0.7,
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  titleText: {
    fontSize: isSmallDevice ? 20 : 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    fontFamily: "Karma-Bold",
    textAlign: "center",
  },

  // --- CONTROLES ---
  controlsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 90,
  },

  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: isSmallDevice ? 15 : 25,
  },
  slider: {
    width: "100%",
    height: 40,
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 10,
  },

  timeText: {
    color: "#ddd",
    fontSize: 12,
    fontWeight: "500",
  },

  // --- VOLUME ---
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 5,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
  },

  volumeSlider: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
  },
});
