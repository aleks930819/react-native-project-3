import { StatusBar } from 'expo-status-bar';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={Categories} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
