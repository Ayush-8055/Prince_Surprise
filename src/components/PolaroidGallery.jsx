const photos = [
  "/images/PolaroidGallery/1_2.JPG",
  "/images/PolaroidGallery/2.JPG",
  "/images/PolaroidGallery/3.JPG",
  "/images/PolaroidGallery/4.JPG",
  "/images/PolaroidGallery/5.JPG",
  "/images/PolaroidGallery/6.JPG",
  "/images/PolaroidGallery/7.JPG",
  "/images/PolaroidGallery/8.JPG",
  "/images/PolaroidGallery/9.JPG",
  "/images/PolaroidGallery/11.JPG",
  "/images/PolaroidGallery/12.JPG",
  "/images/PolaroidGallery/13.JPG",
  "/images/PolaroidGallery/14.JPG",
  "/images/PolaroidGallery/15.JPG",
  "/images/PolaroidGallery/16.JPG",
  "/images/PolaroidGallery/17.JPG",
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