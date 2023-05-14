import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const MealDetailsBox = ({ item, style }) => {
  return (
    <View style={(styles.details)}>
      <Text style={styles.detailItem}>{item.duration}m</Text>
      <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetailsBox;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  detailItem: {
    width: '30%',
    textAlign: 'center',
    fontSize: 13,
  },
});
