import React from 'react';
import { Text, View, Button } from 'react-native';

const Profile = ({ navigation }) => {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go to Home" onPress={ navigateToHome } />
    </View>
  )
}

export default Profile;