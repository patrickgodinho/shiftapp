import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../auth/authSlice';

export default () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <View>
      <Text>HOME</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
