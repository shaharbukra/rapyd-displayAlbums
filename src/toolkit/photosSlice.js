import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  photos: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    getPhotos: (state) => {
      state.loading = true;
    },
    getPhotosByAlbumId: (state, { payload }) => {
      return state.photos.filter((p) => p.albumId === payload.id);
    },
    removePhotoById: (state, { payload }) => {
      state.photos = state.photos.filter((p) => p.id !== payload.id);
    },
    getPhotosSuccess: (state, { payload }) => {
      state.photos = payload;
      state.loading = false;
    },
    getPhotosFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getPhotos,
  getPhotosSuccess,
  getPhotosFailure,
  getPhotosByAlbumId,
  removePhotoById,
} = photosSlice.actions;

export const photosSelector = (state) => state.photos;

// The reducer
export default photosSlice.reducer;

// Asynchronous thunk action
export function fetchPhotos() {
  return async (dispatch) => {
    dispatch(getPhotos());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();

      dispatch(getPhotosSuccess(data));
    } catch (error) {
      dispatch(getPhotosFailure());
    }
  };
}
