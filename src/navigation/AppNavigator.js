import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";
// auth
import OnboardingPrimeiro from "../screens/auth/OnboardingPrimeiro";
import OnboardingSegundo from "../screens/auth/OnboardingSegundo";
import OnboardingTerceiro from "../screens/auth/OnboardingTerceiro";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ProRegister from "../screens/auth/ProRegisterScreen";

// demais telas sem o drawer
import ListedProfessionals from "../screens/app/ListedProfessionalsScreen";
import PrimeiraAreaScreen from "../screens/app/PrimeiraAreaScreen";
import SegundaAreaScreen from "../screens/app/SegundaAreaScreen";
import AutomassagemScreen from "../screens/app/AutomassagemScreen";
import AromaterapiaScreen from "../screens/app/AromaterapiaScreen";
import MeditacaoGuiadaScreen from "../screens/app/MeditacaoGuiadaScreen";
import YogaVideoScreen from "../screens/app/YogaVideoScreen";
import ProfessionalDetailsScreen from "../screens/app/ProfessionalDetailsScreen";
import PaymentScreen from "../screens/app/PaymentScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{ headerShown: false }}
    >
      {/* Fluxo auth */}
      <Stack.Screen name="OnboardingPrimeiro" component={OnboardingPrimeiro} />
      <Stack.Screen name="OnboardingSegundo" component={OnboardingSegundo} />
      <Stack.Screen name="OnboardingTerceiro" component={OnboardingTerceiro} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProRegister" component={ProRegister} />

      {/* Fluxo principal*/}
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
      {/* Fluxo externo */}
      <Stack.Screen
        name="ListedProfessionals"
        component={ListedProfessionals}
      />
      <Stack.Screen
        name="ProfessionalDetailsScreen"
        component={ProfessionalDetailsScreen}
      />

      <Stack.Screen name="PrimeiraArea" component={PrimeiraAreaScreen} />
      <Stack.Screen name="SegundaArea" component={SegundaAreaScreen} />
      <Stack.Screen name="Automassagem" component={AutomassagemScreen} />
      <Stack.Screen name="Aromaterapia" component={AromaterapiaScreen} />
      <Stack.Screen
        name="MeditacaoGuiada"
        component={MeditacaoGuiadaScreen}
      />
      <Stack.Screen name="YogaVideo" component={YogaVideoScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
