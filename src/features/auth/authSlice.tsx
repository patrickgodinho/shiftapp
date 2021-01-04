import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  isLogged: boolean;
}

const initialState = {isLogged: false} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLogged = true;
      console.log('pasdpaksdkoaks');
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
