import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCurrentUserToken } from "../firebase/firebase";

// Define a service using a base URL and expected endpoints
export const memeApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: async (headers, { getState }) => {
      const userToken = await getCurrentUserToken();
      // If we have a token set in state, let's assume that we should be passing it.
      if (userToken) {
        headers.set("authorization", `Bearer ${userToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMemes: builder.query({
      query: () => `/memes`,
    }),
    getMeme: builder.query({
      query: (id) => `/songs/${id}`,
    }),
    getMemesFiltered: builder.query({
      query: (filter) => `/filterSongs/${filter}`,
    }),
    createMeme: builder.mutation({
      query: (body) => ({
        url: `/memes`,
        method: "POST",
        body,
      }),
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMemesQuery,
  useCreateMemeMutation,
  useGetMemesFilteredQuery,
  useGetMemeQuery,
} = memeApi;
