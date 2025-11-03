import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./src/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Marcellus-Regular": require("./assets/fonts/MarcellusSC-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-Variable.ttf"),
    "Karma-Regular": require("./assets/fonts/Karma-Regular.ttf"),
    "Karma-Bold": require("./assets/fonts/Karma-Bold.ttf"),
    "Karma-Light": require("./assets/fonts/Karma-Light.ttf"),
    "Karma-Medium": require("./assets/fonts/Karma-Medium.ttf"),
    "Karma-SemiBold": require("./assets/fonts/Karma-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onReady={onLayoutRootView}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
