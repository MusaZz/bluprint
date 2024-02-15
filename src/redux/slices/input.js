import { createSlice } from "@reduxjs/toolkit";

const input = createSlice({
  name: "input",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    search: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setPassword, setSearch } =
  input.actions;

export default input.reducer;
