import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy.data';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = ({ item }) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const Categories = () => {
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
