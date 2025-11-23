import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from "expo-navigation-bar";

// --- SEUS IMPORTS MANTIDOS ---
import HomeScreen from "../screens/app/HomeScreen";
import MeditacaoScreen from "../screens/app/MeditacaoScreen";
import ConsultasScreen from "../screens/app/ConsultasScreen";
import ProfileScreen from "../screens/app/ProfileScreen";
import SobreNosScreen from "../screens/app/SobreNosScreen";
import ParceirosScreen from "../screens/app/ParceirosScreen";
import SonsRelaxantesScreen from "../screens/app/SonsRelaxantesScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SobreNos" component={SobreNosScreen} />
      <HomeStack.Screen name="Parceiros" component={ParceirosScreen} />
      <HomeStack.Screen
        name="SonsRelaxantes"
        component={SonsRelaxantesScreen}
      />
    </HomeStack.Navigator>
  );
}

export default function BottomTabs() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (Platform.OS === "android") {
      // Força a cor preta na API do Android
      NavigationBar.setBackgroundColorAsync("#000000");
      NavigationBar.setButtonStyleAsync("light");
    }
  }, []);

  const iosHeight = 75 + insets.bottom;
  const androidHeight = 60;

  return (
    // 1. Envolvemos tudo em uma View com flex: 1
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#999",
          tabBarShowLabel: true,

          tabBarItemStyle: {
            paddingVertical: Platform.OS === "ios" ? 0 : 2,
          },

          tabBarLabelStyle: {
            fontSize: 10,
            paddingBottom: Platform.OS === "ios" ? 0 : 5,
          },

          tabBarStyle: {
            position: "absolute",
            left: 0,
            right: 0,
            // No Android, a barra sobe (insets.bottom).
            // Isso deixa um espaço vazio embaixo dela.
            bottom: Platform.OS === "android" ? insets.bottom : 0,
            height: Platform.OS === "android" ? androidHeight : iosHeight,

            backgroundColor: "#FFFFFF", // Fundo BRANCO da TabBar
            borderTopWidth: 1,
            borderTopColor: "#E0E0E0",
            elevation: 0,
            paddingTop: Platform.OS === "ios" ? 5 : 0,
            paddingBottom: Platform.OS === "ios" ? insets.bottom : 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Meditação"
          component={MeditacaoScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "meditation" : "meditation"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Consultas"
          component={ConsultasScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>

      {/* 2. O TRUQUE VISUAL (FIX):
         Adicionamos uma View PRETA no rodapé do Android.
         Ela preenche exatamente o espaço que o 'bottom: insets.bottom' deixou vazio.
      */}
      {Platform.OS === "android" && insets.bottom > 0 && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: insets.bottom, // Altura exata da barra de navegação do sistema
            backgroundColor: "#000000", // AQUI FICA O PRETO
            zIndex: 100, // Garante que fique visível sobre o conteúdo, mas abaixo da TabBar (visualmente)
          }}
        />
      )}
    </View>
  );
}
