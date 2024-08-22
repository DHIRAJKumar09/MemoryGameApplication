import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width * 0.9 / 4) - 20;

const Card = ({ value, isFlipped, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isFlipped && styles.flipped]}
      onPress={onPress}
    >
      <Text style={styles.cardText}>
        {isFlipped ? value : '?'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  flipped: {
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 30,
  },
});

export default Card;
