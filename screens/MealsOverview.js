import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy.data';
import MealItem from '../components/MealItem';

const MealsOverview = ({ route }) => {
  const { categoryId } = route.params;

  const selectedCategory = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({ item }) => {
    return <MealItem item={item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={selectedCategory}
        key={(item) => item.id}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
});
