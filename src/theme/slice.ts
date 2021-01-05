import {createSlice} from '@reduxjs/toolkit';
import {DefaultTheme} from 'styled-components/native';
import {darkTheme, lightTheme} from './themes';

interface ThemeState {
  theme: DefaultTheme;
}
const initialState = {theme: lightTheme} as ThemeState;

const themeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchTheme(state) {
      state.theme = state.theme.mode === 'dark' ? lightTheme : darkTheme;
    },
  },
});

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;
