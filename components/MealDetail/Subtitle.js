import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Subtitle = ({ title }) => {
  return <Text style={styles.subtitle}>{title}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 8,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
