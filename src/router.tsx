import React from 'react';
import Auth from '../src/features/auth';
import Home from '../src/features/home';
import {useSelector} from 'react-redux';
import {RootState} from './store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default () => {
  const Tab = createBottomTabNavigator();
  const {isLogged} = useSelector((state: RootState) => state).authSlice;

  if (isLogged) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  }

  return <Auth />;
};
