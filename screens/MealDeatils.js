import { View, Text } from 'react-native';

const MealDeatils = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>The Meal Details Screen! - {mealId}</Text>
    </View>
  );
};

export default MealDeatils;
