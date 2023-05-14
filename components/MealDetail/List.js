import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#e2b497',
  },

  itemText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
