import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingPrimeiro from '../screens/OnboardingPrimeiro';
import OnboardingSegundo from '../screens/OnboardingSegundo';
import OnboardingTerceiro from '../screens/OnboardingTerceiro';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from './BottomTabs'; // Aqui entra as tabs

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingPrimeiro" component={OnboardingPrimeiro} />
      <Stack.Screen name="OnboardingSegundo" component={OnboardingSegundo} />
      <Stack.Screen name="OnboardingTerceiro" component={OnboardingTerceiro} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="MainApp" component={BottomTabs} />
    </Stack.Navigator>
  );
}
