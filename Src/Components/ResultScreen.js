import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { win } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{win ? 'Congratulations!' : 'Game Over'}</Text>
      <Text style={styles.message}>
        {win ? 'You matched all the pairs!' : 'Try again!'}
      </Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C34',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  message: {
    fontSize: 24,
    color: '#FFFFFF',
    marginVertical: 20,
  },
});

export default ResultScreen;
