import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";

//  Auth Imports
import OnboardingPrimeiro from "../screens/auth/OnboardingPrimeiro";
import OnboardingSegundo from "../screens/auth/OnboardingSegundo";
import OnboardingTerceiro from "../screens/auth/OnboardingTerceiro";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ProRegister from "../screens/auth/ProRegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";

// Telas internas
import TherapyGuideScreen from "../screens/app/TherapyGuideScreen";
import ListedProfessionals from "../screens/app/ListedProfessionalsScreen";
import PrimeiraAreaScreen from "../screens/app/PrimeiraAreaScreen";
import SegundaAreaScreen from "../screens/app/SegundaAreaScreen";
import AutomassagemScreen from "../screens/app/AutomassagemScreen";
import AromaterapiaScreen from "../screens/app/AromaterapiaScreen";
import MeditacaoGuiadaScreen from "../screens/app/MeditacaoGuiadaScreen";
import YogaVideoScreen from "../screens/app/YogaVideoScreen";
import ProfessionalDetailsScreen from "../screens/app/ProfessionalDetailsScreen";
import PaymentScreen from "../screens/app/PaymentScreen";
import SobreNosScreen from "../screens/app/SobreNosScreen";
import ParceirosScreen from "../screens/app/ParceirosScreen";
import ConsultasScreen from "../screens/app/ConsultasScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    // Tela inicial
    <Stack.Navigator
      initialRouteName="OnboardingPrimeiro"
      screenOptions={{ headerShown: false }}
    >
      {/*  Fluxo Auth  */}
      <Stack.Screen name="OnboardingPrimeiro" component={OnboardingPrimeiro} />
      <Stack.Screen name="OnboardingSegundo" component={OnboardingSegundo} />
      <Stack.Screen name="OnboardingTerceiro" component={OnboardingTerceiro} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ProRegister" component={ProRegister} />

      <Stack.Screen name="TherapyGuide" component={TherapyGuideScreen} />

      {/* Fluxo Principal (Drawer + Tabs)  */}
      <Stack.Screen name="MainApp" component={DrawerNavigator} />

      {/*  Fluxo Externo / Detalhes */}
      <Stack.Screen
        name="ListedProfessionals"
        component={ListedProfessionals}
      />
      <Stack.Screen
        name="ProfessionalDetailsScreen"
        component={ProfessionalDetailsScreen}
      />
      <Stack.Screen name="SobreNos" component={SobreNosScreen} />
      <Stack.Screen name="Parceiros" component={ParceirosScreen} />
      <Stack.Screen name="Consultas" component={ConsultasScreen} />

      <Stack.Screen name="PrimeiraArea" component={PrimeiraAreaScreen} />
      <Stack.Screen name="SegundaArea" component={SegundaAreaScreen} />
      <Stack.Screen name="Automassagem" component={AutomassagemScreen} />
      <Stack.Screen name="Aromaterapia" component={AromaterapiaScreen} />
      <Stack.Screen name="MeditacaoGuiada" component={MeditacaoGuiadaScreen} />
      <Stack.Screen name="YogaVideo" component={YogaVideoScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
