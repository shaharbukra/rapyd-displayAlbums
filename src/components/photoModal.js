import React, { useRef } from "react";
import "./photoModal.css";

export default function PhotoModal({ data, setPhotoModal }) {
  console.log(data);
  const ref = useRef(null);
  return (
    <div className="photo-modal-container">
      <div className="photo-modal">
        <span
          onClick={() => setPhotoModal(null)}
          className="photomodal-close-btn"
        >
          &times;
        </span>
        <img ref={ref} src={data.url} alt={data.title} />
        <div className="photomodal-slider">
          <label htmlFor="phothoRotation">Rotate Image</label>

          <input
            type="range"
            id="phothoRotation"
            min="0"
            max="360"
            onChange={(e) => {
              const scale = e.target.value > 10 ? 0.7 : 1;
              ref.current.style.transform = `rotate(${e.target.value}deg) scale(${scale})`;
            }}
          />
        </div>
      </div>
    </div>
  );
}
