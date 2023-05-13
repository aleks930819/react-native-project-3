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
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default Categories;
