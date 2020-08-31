import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

import HomeRoutes from './routes/home.routes';

const Routes = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle="light-content"/>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: "#ff2800"}, headerTintColor: "#fff"}}>
				<Stack.Screen name="Home" component={HomeRoutes} />
			</Stack.Navigator>
		</NavigationContainer>
	);
  }
  
export default Routes;