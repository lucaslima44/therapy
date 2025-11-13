import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet } from "react-native";

// Import das telas
import HomeScreen from "../screens/app/HomeScreen";
import MeditacaoScreen from "../screens/app/MeditacaoScreen";
import ConsultasScreen from "../screens/app/ConsultasScreen";
import ProfileScreen from "../screens/app/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <BlurView
            intensity={30}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Meditação"
        component={MeditacaoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="meditation" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={ConsultasScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    borderRadius: 16,
    height: 52,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
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
});
