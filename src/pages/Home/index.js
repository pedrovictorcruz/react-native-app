import React from 'react';
import { Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {
  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={navigateToProfile}/>
    </View>
  );
}

export default Home;