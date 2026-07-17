import { useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
];

function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-card">
      <div className="carousel-frame">
        <img
          src={photos[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
        />
      </div>

      <div className="carousel-nav">
        <button onClick={goToPrev} className="carousel-btn">
          ← Prev
        </button>
        <button onClick={goToNext} className="carousel-btn">
          Next →
        </button>
      </div>
    </div>
  );
}

export default PhotoCarousel;