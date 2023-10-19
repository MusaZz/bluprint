import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.userName;
      state.lastName = action.payload.fullName;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
