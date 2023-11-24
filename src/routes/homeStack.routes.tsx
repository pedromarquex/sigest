import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { Definition } from '../screens/Definition';
import { Home } from '../screens/Home';
import { Classification } from '../screens/classification/Classification';
import { Primary } from '../screens/classification/Primary';
import { RootStackParamList } from './homeStack.types';

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Definition" 
        component={Definition}
        options={{
          header: () => <Header title="Definição e etiologia da sífilis" />,
        }}
      />
      <Stack.Screen 
        name="Classification" 
        component={Classification}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
      <Stack.Screen 
        name="Primary" 
        component={Primary}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
    </Stack.Navigator>
  );
}

export { MyStack };
