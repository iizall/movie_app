// src/screens/Home.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }: { navigation: any }): JSX.Element => {
  const goToMovieDetail = () => {
    navigation.navigate('MovieDetail');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Movie Detail" onPress={goToMovieDetail} />
    </View>
  );
};

export default Home;
