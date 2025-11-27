import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./src/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AgendamentoProvider } from "./src/context/AgendamentoContext";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Marcellus-Regular": require("./assets/fonts/MarcellusSC-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-Variable.ttf"),
    "Karma-Regular": require("./assets/fonts/Karma-Regular.ttf"),
    "Karma-Bold": require("./assets/fonts/Karma-Bold.ttf"),
    ...Ionicons.font,
    ...Feather.font,
    ...MaterialCommunityIcons.font,
    ...AntDesign.font,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AgendamentoProvider>
          <NavigationContainer onReady={onLayoutRootView}>
            <AppNavigator />
          </NavigationContainer>
        </AgendamentoProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
