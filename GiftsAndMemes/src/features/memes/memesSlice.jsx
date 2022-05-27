import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filterSong: "",
  newSong: {
    songFile: "",
    songImage: "",
    songName: "",
    songArtist: "",
    songAlbum: "",
    songGenre: "",
    userSong: "",
  },
  currentSong: [
    {
      isPlaying: false,
      audio: "",
      songName: "",
      songArtist: "",
      songGenre: ""
    },
  ],
  trackIndex: 0,
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setFilterMeme: (state, action) => {
      state.filterSong = action.payload;
    },
  },
});

export const {
setFilterMeme,
} = songsSlice.actions;

export const memesSelector = (state) => state.songs;
