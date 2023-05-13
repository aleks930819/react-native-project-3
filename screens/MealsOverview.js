import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy.data';
import { useEffect } from 'react';
import MealItem from '../components/MealItem';

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const selectedCategory = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useEffect(() => {
    const selectedCategoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: selectedCategoryTitle,
    });
  }, [navigation, categoryId]);

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
