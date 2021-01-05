import React from 'react';
import Auth from '../src/features/auth';
import Home from '../src/features/home';
import Feature from '../src/features/feature';
import {useSelector} from 'react-redux';
import {RootState} from './store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled, {ThemeProvider} from 'styled-components/native';
import Header from './components/header';
import {StatusBar} from 'react-native';

export default () => {
  const Tab = createBottomTabNavigator();
  const {isLogged} = useSelector((state: RootState) => state).authSlice;
  const {theme} = useSelector((state: RootState) => state).themeSlice;

  if (isLogged) {
    return (
      <ThemeProvider theme={theme}>
        <TopSafeAreaView />
        <BottomSafeAreaView>
          <StatusBar backgroundColor={theme.colors.main} translucent />
          <Header />
          <Tab.Navigator
            tabBarOptions={{style: {backgroundColor: theme.colors.main}}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feature" component={Feature} />
          </Tab.Navigator>
        </BottomSafeAreaView>
      </ThemeProvider>
    );
  }

  return <Auth />;
};

export const TopSafeAreaView = styled.SafeAreaView`
  flex: 0;
  background-color: ${(props) => props.theme.colors.main};
`;
export const BottomSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.main};
`;
