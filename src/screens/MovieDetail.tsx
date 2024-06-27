import React from 'react';
import { View, Text, Button } from 'react-native';

const MovieDetail = ({ navigation }: { navigation: any }): JSX.Element => {
  const goToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie Detail Screen</Text>
      <Button title="Go to Home" onPress={goToHome} />
    </View>
  );
};

export default MovieDetail;
