import { useState } from "react";

const quotes = [
  {
    text: "Every love story is beautiful, but ours is my favorite.",
    image: "/images/PolaroidGallery/1_2.JPG",
  },
  {
    text: "You make ordinary days feel like a fairytale.",
    image: "/images/PolaroidGallery/1.JPG",
  },
];

export default function Quote() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const item = quotes[activeIndex];

  return (
    <div className="quote-carousel">
      <div
        className="quote-card"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="quote-overlay">
          <p className="quote-text">“{item.text}”</p>
        </div>
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
