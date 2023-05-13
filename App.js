import { StatusBar } from 'expo-status-bar';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meal's Categories" component={Categories} />
          <Stack.Screen name="Meal's Overview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
