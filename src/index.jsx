import * as React from "react";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { getAlbums } from "./actions/album";
import Album from "./components/album";
import Albums from "./components/albums";
import PhotoModal from "./components/photoModal";

import { configureStore } from "./store";
import "./styles.css";

const store = configureStore();

function App() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [photoModal, setPhotoModal] = useState(null);

  const [theme, setTheme] = useState("theme-light");

  const changeTheme = () => {
    setTheme((p) => (p === "theme-light" ? "theme-dark" : "theme-light"));
  };

  useEffect(() => {
    async function getAlbums() {
      const albumRes = await fetch(
        "http://jsonplaceholder.typicode.com/albums"
      );
      const allAlbums = await albumRes.json();
      const albums = allAlbums.slice(0, 25);
      const photosRes = await fetch(
        "http://jsonplaceholder.typicode.com/photos"
      );
      const allPhotos = await photosRes.json();
      for (let index = 1; index <= albums.length; index++) {
        const albumPhotos = allPhotos.filter((p) => p.albumId === index);
        const album = albums.find((a) => a.id === index);
        album.photos = albumPhotos;
      }

      setAlbums(albums);
      setIsLoading(false);
    }

    getAlbums();
  }, []);

  useEffect(() => {
    document.querySelector("body").className = theme;
  }, [theme]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Provider store={store}>
      <button onClick={changeTheme}>Change Theme</button>
      <div>
        {albums.map((album) => {
          return (
            <Album key={album.id} data={album} setPhotoModal={setPhotoModal} />
          );
        })}
        {photoModal && (
          <PhotoModal data={photoModal} setPhotoModal={setPhotoModal} />
        )}
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
