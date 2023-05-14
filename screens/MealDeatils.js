import { useLayoutEffect } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { MEALS } from '../data/dummy.data';
import MealDetailsBox from '../components/MealDetailsBox';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDeatils = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <IconButton onPress={headerButtonPressHandler} 
          icon="ios-star"
          size={30}
          color="white"
          />
        </View>
      ),
    });
  }, [navigation, selectedMeal]);

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
