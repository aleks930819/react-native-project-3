import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy.data';

const MealsOverview = () => {
  return (
    <View style={styles.screen}>
      <Text>MealsOverview</Text>
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
