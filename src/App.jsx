import { useState } from "react";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";

import GiftBox from "./components/GiftBox";
import FloatingHearts from "./components/FloatingHearts";
import TypewriterLetter from "./components/TypewriterLetter";
import Timeline from "./components/Timeline";
import PolaroidGallery from "./components/PolaroidGallery";
import PhotoCarousel from "./components/PhotoCarousel";
import Cake from "./components/Cake";
import ShareButton from "./components/ShareButton";

function App() {
  const [opened, setOpened] = useState(false);

  const handleOpenGift = () => {
    setOpened(true);

    confetti({
      particleCount: 300,
      spread: 180,
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <div className="birthday-app">
      {!opened && <FloatingHearts />}

      {opened && <Confetti recycle={false} />}

      {opened && (
        <audio autoPlay loop>
          <source src="/song.mp3" type="audio/mpeg" />
        </audio>
      )}

      {!opened ? (
        <div className="intro-screen">
          <div className="intro-card">
            <p className="eyebrow">A little surprise for you</p>
            <h1 className="intro-title">Happy Birthday ❤️</h1>
            <p className="intro-subtitle">
              A special surprise is waiting for you...
            </p>

            <div className="gift-wrapper">
              <GiftBox openGift={handleOpenGift} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <section className="hero-section">
            <p className="eyebrow">Today is all about celebrating YOU</p>
            <h1 className="hero-title">Happy Birthday Priya 🎂</h1>
            <p className="hero-subtitle">
              Every moment with you feels like a beautiful memory. ❤️
            </p>
          </section>

          <section className="section-shell">
            <div className="section-card">
              <h2 className="section-title">A Letter For You 💌</h2>
              <TypewriterLetter />
            </div>
          </section>

          <section className="section-shell">
            <div className="section-card">
              <h2 className="section-title">Our Journey Together ✨</h2>
              <Timeline />
            </div>
          </section>

          <section className="section-shell">
            <div className="section-card">
              <h2 className="section-title">Beautiful Memories 📸</h2>
              <PolaroidGallery />
            </div>
          </section>

          <section className="section-shell">
            <div className="section-card">
              <h2 className="section-title">Favorite Moments ❤️</h2>
              <PhotoCarousel />
            </div>
          </section>

          <section className="section-shell">
            <div className="section-card">
              <h2 className="section-title">Our Song 🎵</h2>
              <div className="iframe-shell">
                <iframe
                  src="https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="spotify"
                />
              </div>
            </div>
          </section>

          <section className="section-shell">
            <div className="section-card">
              <h2 className="section-title">Make A Birthday Wish 🎂</h2>
              <Cake />
            </div>
          </section>

          <section className="section-shell">
            <div className="section-card final-card">
              <h2 className="section-title">
                I Hope This Day Brings You Endless Happiness ❤️
              </h2>
              <p className="final-text">
                Thank you for all the wonderful memories, laughter, and beautiful moments.
                May your life always be filled with joy, success, and love.
              </p>
            </div>
          </section>

          <section className="section-shell">
            <ShareButton />
          </section>
        </>
      )}
    </div>
  );
}

export default App;