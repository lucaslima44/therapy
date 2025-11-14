import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import das telas
import HomeScreen from "../screens/app/HomeScreen";
import MeditacaoScreen from "../screens/app/MeditacaoScreen";
import ConsultasScreen from "../screens/app/ConsultasScreen";
import ProfileScreen from "../screens/app/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        // tabBarShowLabel: false, // Se você quiser os nomes, deixe essa linha COMENTADA ou remova.

        tabBarStyle: {
          ...styles.tabBarStyle,
          bottom: insets.bottom + 10, // Um pouco mais de espaço embaixo
          height: 60, // Boa altura para ícones e textos
          borderRadius: 20, // Borda arredondada
        },

        tabBarBackground: () => (
          <BlurView
            // --- ALTERAÇÕES CHAVE AQUI ---
            intensity={80} // Aumentar a intensidade do blur (pode ir até 100)
            tint="light" // 'light' ou 'default'. 'dark' se o fundo for muito claro.
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(255, 255, 255, 0.2)" }, // Um overlay branco semi-transparente para clarear
            ]}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Meditação"
        component={MeditacaoScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "meditation" : "meditation"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={ConsultasScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    left: 20,
    right: 20,
    borderRadius: 20, // Ajustei para combinar com o `tabBarStyle` do componente
    height: 60, // Ajustei para combinar com o `tabBarStyle` do componente
    backgroundColor: "transparent",
    overflow: "hidden",

    // --- ALTERAÇÃO NA BORDA ---
    borderWidth: 0.5, // Borda mais fina
    borderColor: "rgba(255, 255, 255, 0.4)", // Borda mais clara e visível
    // -------------------------

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15, // Sombra um pouco mais forte
        shadowRadius: 5, // Sombra mais suave
      },
      android: {
        elevation: 8, // Aumentei a elevação para uma sombra mais perceptível
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Base mais clara para a elevation no Android
      },
      web: {
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)", // Sombra web mais suave
      },
    }),
  },
});
