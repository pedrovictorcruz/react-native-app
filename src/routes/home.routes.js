import React from 'react';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeRoutes = () => {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

export default HomeRoutes;