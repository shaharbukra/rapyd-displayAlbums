import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  albums: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    getAlbums: (state) => {
      state.loading = true;
    },
    getAlbumsSuccess: (state, { payload }) => {
      state.albums = payload;
      state.loading = false;
    },
    getAlbumsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getAlbums,
  getAlbumsSuccess,
  getAlbumsFailure,
} = albumsSlice.actions;

export const albumsSelector = (state) => state.albums;

// The reducer
export default albumsSlice.reducer;

// Asynchronous thunk action
export function fetchAlbums() {
  return async (dispatch) => {
    dispatch(getAlbums());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();

      dispatch(getAlbumsSuccess(data));
    } catch (error) {
      dispatch(getAlbumsFailure());
    }
  };
}
