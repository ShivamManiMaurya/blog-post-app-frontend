// src/store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setAuthToken } = authSlice.actions;
export default authSlice.reducer;
