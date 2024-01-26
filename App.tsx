import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat';

import * as SplashScreen from 'expo-splash-screen';

import { useCallback } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider, Portal } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes';

void SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular, 
    Montserrat_600SemiBold, 
    Montserrat_700Bold,
    Montserrat_500Medium
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView 
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          <Portal.Host>
            <NavigationContainer>
              <StatusBar style="dark" />
              <Routes />
            </NavigationContainer>
          </Portal.Host>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
