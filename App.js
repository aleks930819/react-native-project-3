import { StatusBar } from 'expo-status-bar';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDeatils from './screens/MealDeatils';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen name="Meal's Categories" component={Categories} />
          <Stack.Screen name="Meal's Overview" component={MealsOverview} />
          <Stack.Screen name="Meal Details" component={MealDeatils} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
