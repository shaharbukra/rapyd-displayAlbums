import {
  GET_PHOTOS,
  GET_PHOTOS_BY_ALBUM_ID,
  REMOVE_PHOTO_BY_ID,
} from "../actions/photo";

const initialState = [];

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case GET_PHOTOS_BY_ALBUM_ID:
      return state.photos.find((p) => p.albumId === action.payload);
    case REMOVE_PHOTO_BY_ID:
      return state.photos.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
};
