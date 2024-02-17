import { createSlice } from "@reduxjs/toolkit";

const size = createSlice({
  name: "size",
  initialState: [],
  reducers: {
    addSize: (state, action) => {
      const size = action.payload;

      if (state.includes(size)) {
        const index = state.findIndex((s) => s === size);
        state.splice(index, 1);
      } else {
        state.push(size);
      }
    },
    removeSize: (state, action) => {
      const size = action.payload;

      if (!state.includes(size)) return;

      const index = state.findIndex((s) => s === size);
      state.splice(index, 1);
    },
    clearSizes: (state) => {
      state.length = 0;
    },
  },
});

export const {addSize, removeSize, clearSizes} = size.actions;

export default size.reducer;
