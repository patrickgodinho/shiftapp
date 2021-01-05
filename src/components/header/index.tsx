import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {switchTheme} from '../../theme/slice';
import {Container} from './style';

export default () => {
  const dispatch = useDispatch();
  const handleSwitchTheme = () => dispatch(switchTheme());

  return (
    <SafeAreaView>
      <Container>
        <Button title="Switch Theme" onPress={handleSwitchTheme} />
      </Container>
    </SafeAreaView>
  );
};
