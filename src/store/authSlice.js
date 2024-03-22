import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // state <= object (Current state in store)
      // action <= object/anything (when you call "dispatch for login", at that time you pass this action value)
      console.log("action: ", action);

      // Updating value of state.status = true;
      state.status = true;
      // Updating value of state.userData =
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  }, //can create postSlice for practice
}); //user authentication check

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
