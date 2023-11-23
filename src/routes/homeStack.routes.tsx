import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { Definition } from '../screens/Definition';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
}

export { MyStack };
