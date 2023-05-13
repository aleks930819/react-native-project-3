import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy.data';
import CategoryGridTile from '../components/CategoryGridTile';

const Categories = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('Meal\'s Overview', { categoryId: item.id });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default Categories;
