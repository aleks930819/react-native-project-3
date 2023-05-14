import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy.data';
import MealDetailsBox from '../components/MealDetailsBox';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

const MealDeatils = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailsBox item={selectedMeal} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDeatils;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 8,
    textAlign: 'center',
  },

  listContainer: {
    width: '80%',
  },

  listOuterContainer: {
    alignItems: 'center',
    width: '100%',
  },
});
