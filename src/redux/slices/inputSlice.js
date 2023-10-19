import { createSlice } from "@reduxjs/toolkit";

const inputReducer = createSlice({
  name: "input",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLastName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setPassword } =
  inputReducer.actions;

export default inputReducer.reducer;
