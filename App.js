import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingPrimeiro from "./src/screens/OnboardingPrimeiro";
import OnboardingSegundo from "./src/screens/OnboardingSegundo";
import OnboardingTerceiro from "./src/screens/OnboardingTerceiro";
import LoginScreen from "./src/screens/LoginScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Marcellus-Regular": require("./assets/fonts/MarcellusSC-Regular.ttf"),
    "Inter": require("./assets/fonts/Inter-Variable.ttf"),
    "Karma-Regular": require("./assets/fonts/Karma-Regular.ttf"),
    "Karma-Bold": require("./assets/fonts/Karma-Bold.ttf"),
    "Karma-Light": require("./assets/fonts/Karma-Light.ttf"),
    "Karma-Medium": require("./assets/fonts/Karma-Medium.ttf"),
    "Karma-SemiBold": require("./assets/fonts/Karma-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName="OnboardingPrimeiro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnboardingPrimeiro" component={OnboardingPrimeiro} />
        <Stack.Screen name="OnboardingSegundo" component={OnboardingSegundo} />
        <Stack.Screen name="OnboardingTerceiro" component={OnboardingTerceiro} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
