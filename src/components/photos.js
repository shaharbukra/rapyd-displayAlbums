import React from "react";
import "./photos.css";

export default function Photos({ photos, removePhotoById, setPhotoModal }) {
  return (
    <div className="photos-area">
      <div>Total photos : {photos.length}</div>
      <div className="photos-section">
        {photos.slice(0, 12).map((photo, i) => {
          return (
            <div key={photo.id} className="photo-container">
              <button
                onClick={() => removePhotoById(photo.id)}
                className="photo-close"
              >
                X
              </button>

              <img
                key={i}
                src={photo.thumbnailUrl}
                alt={photo.title}
                title={photo.title}
                onClick={() => setPhotoModal(photo)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
