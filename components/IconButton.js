import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, size = 24, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.pressed]}
    >
      <Ionicons name={icon} size={size} color={color}></Ionicons>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {},
});
