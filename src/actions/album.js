export const GET_ALBUMS = "GET_ALBUMS";

export const getAlbums = (json) => ({
  type: GET_ALBUMS,
  payload: json,
});

const fetchAlbums = () => (dispatch) => {
  return fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((json) => dispatch(getAlbums(json)));
};

const shouldFetchAlbums = (state) => state.albums.length === 0;

export const fetchAlbumsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchAlbums(getState())) {
    return dispatch(fetchAlbums());
  }
};
