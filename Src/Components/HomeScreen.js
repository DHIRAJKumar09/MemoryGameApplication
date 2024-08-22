import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: animation,
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          },
        ]}
      >
        Welcome to Memory Game
      </Animated.Text>
      <Animated.View style={{ marginTop: 20, opacity: animation }}>
        <Button
          title="Start Game"
          onPress={() => navigation.navigate('Difficulty')}
          color="#841584"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default HomeScreen;
