const photos = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492681290082-e932934d6a4d?auto=format&fit=crop&w=800&q=80",
];

function PolaroidGallery() {
  return (
    <div className="gallery-grid">
      {photos.map((photo, index) => (
        <div key={index} className="polaroid-card">
          <img src={photo} alt={`Memory ${index + 1}`} className="polaroid-image" />
          <p className="polaroid-caption">Beautiful Memory</p>
        </div>
      ))}
    </div>
  );
}

export default PolaroidGallery;