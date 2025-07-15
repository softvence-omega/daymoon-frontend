import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: { role: string } | null;
  token?: string | null;
}

const initialState: AuthState = {
  user: { role: "user" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { Logout, setUser } = authSlice.actions;
export const userCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
