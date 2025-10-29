import React from "react"; // Removido 'useCallback'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingPrimeiro from "./src/screens/OnboardingPrimeiro";
import OnboardingSegundo from "./src/screens/OnboardingSegundo";
import OnboardingTerceiro from "./src/screens/OnboardingTerceiro";
import LoginScreen from "./src/screens/LoginScreen";
import TelaExplorar from "./src/screens/TelaExplorar";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import TelaConsultas from "./src/screens/TelaConsultas";

// --- PACOTES DE FONTES REMOVIDOS ---
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// --- CHAMADA DO SPLASH REMOVIDA ---
// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  // --- LÓGICA DE CARREGAMENTO REMOVIDA ---
  // const [fontsLoaded, fontError] = useFonts({ ... });
  // const onLayoutRootView = useCallback(...);
  // if (!fontsLoaded && !fontError) { ... }

  // O app agora vai tentar renderizar imediatamente
  return (
    // --- 'onLayout' REMOVIDO DO NAVIGATIONCONTAINER ---
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingPrimeiro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="OnboardingPrimeiro"
          component={OnboardingPrimeiro}
        />
        <Stack.Screen name="OnboardingSegundo" component={OnboardingSegundo} />
        <Stack.Screen
          name="OnboardingTerceiro"
          component={OnboardingTerceiro}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="TelaExplorar" component={TelaExplorar} />   
        <Stack.Screen name="TelaConsultas" component={TelaConsultas} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}