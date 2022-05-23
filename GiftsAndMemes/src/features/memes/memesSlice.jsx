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
    addSongFile: (state, action) => {
      state.newSong.songFile = action.payload;
      return state;
    },
    updateSongFile: (state, action) => {
      state.newSong.push = action.payload;
      return state;
    },
    addFirstCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      return state;
    },
    addCurrentSong: (state, action) => {
      state.currentSong = [...state.currentSong, action.payload];
      return state;
    },
    addPlayQueue: (state, action) =>{
      let actualSong = state.currentSong[state.trackIndex]
      state.currentSong[state.trackIndex] = action.payload;
      state.currentSong = [...state.currentSong, actualSong];
    },
    setFilterSong: (state, action) => {
      state.filterSong = action.payload;
    },
    setTrackIndex: (state, action) => {
      state.trackIndex = action.payload;
    }
  },
});

export const {
  addCurrentSong,
  addSongFile,
  updateSongFile,
  addFirstCurrentSong,
  setFilterSong,
  setTrackIndex,
  addPlayQueue,
} = songsSlice.actions;

export const songsSelector = (state) => state.songs;
