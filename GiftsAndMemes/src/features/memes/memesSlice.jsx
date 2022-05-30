import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterMeme: "",
};

export const songsSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    setFilterMeme: (state, action) => {
      state.filterMeme = action.payload;
    },
  },
});

export const { setFilterMeme } = songsSlice.actions;

export const memesSelector = (state) => state.songs;
