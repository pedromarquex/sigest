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

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tabs } from './src/routes/tabs.routes';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular, 
    Montserrat_600SemiBold, 
    Montserrat_700Bold,
    Montserrat_500Medium
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tabs />
      </NavigationContainer>
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
