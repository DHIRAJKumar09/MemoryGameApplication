import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Alert, Text } from 'react-native';
import Card from './Card';

const { width } = Dimensions.get('window');

const VEGETABLES = [
  '🥕', '🍅', '🌽', '🍆', '🥒', '🧅', '🧄', '🍠',
  '🥕', '🍅', '🌽', '🍆', '🥒', '🧅', '🧄', '🍠'
];

const getMoveLimit = (level) => {
  switch (level) {
    case 'Easy':
      return 30;
    case 'Medium':
      return 20;
    case 'Hard':
      return 15;
    default:
      return 25;
  }
};

const getCardsForLevel = (level) => {
  let cards = [];
  switch (level) {
    case 'Easy':
      cards = VEGETABLES.slice(0, 6); // 3 pairs (6 cards)
      break;
    case 'Medium':
      cards = VEGETABLES.slice(0, 12); // 6 pairs (12 cards)
      break;
    case 'Hard':
      cards = VEGETABLES.slice(0, 16); // 8 pairs (16 cards)
      break;
    default:
      cards = VEGETABLES.slice(0, 16); // 8 pairs (16 cards)
      break;
  }
  return [...cards, ...cards].sort(() => Math.random() - 0.5); // Double the cards to make pairs
};

const GameScreen = ({ route, navigation }) => {
  const { level } = route.params;
  const [cards, setCards] = useState(getCardsForLevel(level));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [win, setWin] = useState(false);
  const moveLimit = getMoveLimit(level);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
      }

      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);

      setMoves(moves + 1);
    }
  }, [flippedIndices]);

  useEffect(() => {
    if (matchedIndices.length === cards.length) {
      setWin(true);
      Alert.alert('Congratulations!', 'You won the game!', [{ text: 'OK', onPress: () => navigation.navigate('Home') }]);
    } else if (moves >= moveLimit) {
      Alert.alert('Game Over', 'You have reached the move limit!', [{ text: 'OK', onPress: () => navigation.navigate('Home') }]);
    }
  }, [matchedIndices, moves]);

  const handleCardPress = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.movesText}>Moves: {moves} / {moveLimit}</Text>
      <View style={styles.board}>
        {cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            value={card}
            isFlipped={flippedIndices.includes(index) || matchedIndices.includes(index)}
            onPress={() => handleCardPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  movesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default GameScreen;
