import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export { MyStack };
