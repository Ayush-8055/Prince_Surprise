import { useState } from "react";

const photos = [
    "/images/PhotoCarousel/1_2.JPG",
    "/images/PhotoCarousel/2.JPG",
    "/images/PhotoCarousel/3.JPG",
    "/images/PhotoCarousel/4.JPG",
    "/images/PhotoCarousel/5.JPG",
    "/images/PhotoCarousel/6.JPG",
    "/images/PhotoCarousel/7.JPG",
    "/images/PhotoCarousel/8.JPG",
    "/images/PhotoCarousel/9.JPG",
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