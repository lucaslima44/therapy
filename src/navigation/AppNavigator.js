import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingPrimeiro from "../screens/auth/OnboardingPrimeiro";
import OnboardingSegundo from "../screens/auth/OnboardingSegundo";
import OnboardingTerceiro from "../screens/auth/OnboardingTerceiro";

import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ProRegister from "../screens/auth/ProRegisterScreen";
// telas que eu tenho que criar (auth)

import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingPrimeiro"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnboardingPrimeiro" component={OnboardingPrimeiro} />
      <Stack.Screen name="OnboardingSegundo" component={OnboardingSegundo} />
      <Stack.Screen name="OnboardingTerceiro" component={OnboardingTerceiro} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProRegister" component={ProRegister} />
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
