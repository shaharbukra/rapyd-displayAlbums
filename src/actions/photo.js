export const GET_PHOTOS = "GET_PHOTOS";
export const REMOVE_PHOTO_BY_ID = "REMOVE_PHOTO_BY_ID";
export const GET_PHOTOS_BY_ALBUM_ID = "GET_PHOTOS_BY_ALBUM_ID";

export const getPhotos = (json) => ({
  type: GET_PHOTOS,
  payload: json,
});

export const removePhotoById = (id) => ({
  type: REMOVE_PHOTO_BY_ID,
  payload: id,
});

export const getPhotosByAlbumId = (id) => ({
  type: GET_PHOTOS_BY_ALBUM_ID,
  payload: id,
});

const fetchPhotos = () => (dispatch) => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => dispatch(getPhotos(json)));
};

const shouldFetchPhothos = (state) => state.photos.length === 0;

export const fetchPhotosIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPhothos(getState())) {
    return dispatch(fetchPhotos());
  }
};
