import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat';

import 'react-native-gesture-handler';
import { MyStack } from './src/routes/stacks.routes';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular, 
    Montserrat_600SemiBold, 
    Montserrat_700Bold 
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MyStack />
    </NavigationContainer>
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
