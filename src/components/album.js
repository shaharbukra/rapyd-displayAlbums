import React, { useState } from "react";
import LabelSign from "./label-sign";
import Photos from "./photos";
import "./album.css";

export default function Album({ data, setPhotoModal }) {
  const [albumClicked, setAlbumClicked] = useState(false);

  const displayPhotos = (e) => {
    e.preventDefault();
    setAlbumClicked((p) => !p);
  };

  const removePhotoById = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="album-description">
        <LabelSign signClick={displayPhotos} expanded={albumClicked} />
        {data.id},{data.title},{data.photos && data.photos.length}
      </div>
      {albumClicked && (
        <Photos
          photos={data.photos}
          removePhotoById={removePhotoById}
          setPhotoModal={setPhotoModal}
        />
      )}
    </div>
  );
}
