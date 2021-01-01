import { GET_ALBUMS } from "../actions/album";

const initialState = [];

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};
