import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {login} from './authSlice';
import {useDispatch} from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const handleLogin = () => dispatch(login());

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Button title="Login" onPress={handleLogin} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Auth;
