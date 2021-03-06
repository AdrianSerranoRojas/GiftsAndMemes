import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "../features/users/usersSlice";
import { songsSlice } from "../features/memes/memesSlice";

import { memeApi } from "../services/memeApi";
import { userApi } from "../services/userApi";


import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    usersState: usersSlice,
    songs: songsSlice.reducer,
    [memeApi.reducerPath]: memeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      memeApi.middleware,
      userApi.middleware,
    ),
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
