import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {login} from './slice';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {Container} from './style';
import {Input} from '../../components/input';
import {Button} from '../../components/button';

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = async () => {
    try {
      if (email && password) {
        const {user} = await auth().signInWithEmailAndPassword(email, password);
        if (user.email) {
          dispatch(login(user.email));
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <Input
          placeholder="E-mail"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <Button onPress={handleLogin} label="Login" />
      </ScrollView>
    </Container>
  );
};

export default Auth;
