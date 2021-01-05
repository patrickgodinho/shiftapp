import React from 'react';
import {Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../auth/authSlice';
import {Container} from './style';

export default () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <Container>
      <Text>HOME</Text>
      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
};
