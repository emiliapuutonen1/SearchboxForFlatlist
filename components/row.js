
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = ({ person: { lastname, firstname } }) => (
  <View style={styles.row}>
    <Text style={styles.text}>{lastname}, {firstname}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    padding: 16,
  },
  text: {
    color: 'pink', 
  },
});

export default Row;
