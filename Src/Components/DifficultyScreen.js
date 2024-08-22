import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

function DifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Difficulty Level</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Easy"
          onPress={() => navigation.navigate('Game', { level: 'Easy' })}
          color="#4CAF50"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Medium"
          onPress={() => navigation.navigate('Game', { level: 'Medium' })}
          color="#FFC107"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Hard"
          onPress={() => navigation.navigate('Game', { level: 'Hard' })}
          color="#F44336"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C34',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default DifficultyScreen;
