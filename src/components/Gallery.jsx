const videos = [
  {
    title: "Our Little Adventure",
    url: "/videos/gallery.MP4",
  },
  {
    title: "Sweet Memories",
    url: "/videos/gallery.MP4",
  },
];

export default function Gallery({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="gallery-section">
      <div className="gallery-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <h3 className="video-title">{video.title}</h3>
            <video controls className="video-player">
              <source src={video.url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
