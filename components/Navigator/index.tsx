import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AboutScreen from '../../screens/AboutScreen';
import HomeScreen from '../../screens/HomeScreen';
import Sidebar from '../Sidebar';

const Drawer = createDrawerNavigator();
const Navigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}>
      <Drawer.Screen name='Main' component={HomeScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default Navigator;
