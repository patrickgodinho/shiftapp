import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isLogged: boolean;
  email: string;
}
const initialState = {isLogged: false} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLogged = true;
      state.email = action.payload;
    },
    logout(state) {
      state.isLogged = false;
      state.email = '';
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
