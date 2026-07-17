import { useState } from "react";

function Cake() {
  const [blown, setBlown] = useState(false);

  return (
    <div className="cake-card">
      <div className="cake-emoji">🎂</div>

      {!blown && (
        <button onClick={() => setBlown(true)} className="cake-button">
          Blow Candle 🕯️
        </button>
      )}

      {blown && <h2 className="cake-success">🎉 Wish Granted 🎉</h2>}
    </div>
  );
}

export default Cake;