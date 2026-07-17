import { Typewriter } from "react-simple-typewriter";

export default function Letter() {
  return (
    <div className="letter-card">
      <div className="letter-inner">
        <Typewriter
          words={[
            "Every moment with you is special.",
            "You are the most beautiful chapter of my life.",
            "Happy Birthday ❤️",
          ]}
          loop={1}
          cursor
        />
      </div>
    </div>
  );
}