import React from 'react';
import {Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../auth/slice';
import {Container} from './style';
import {RootState} from '../../store';

export default () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const {email} = useSelector((state: RootState) => state).authSlice;

  return (
    <Container>
      <Text>Hi {email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
};
