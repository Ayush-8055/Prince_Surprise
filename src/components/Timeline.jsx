const memories = [
  {
    year: "2021",
    title: "First Meeting",
    desc: "The day everything started ❤️",
  },
  {
    year: "2022",
    title: "Best Memory",
    desc: "Countless laughs together",
  },
  {
    year: "2023",
    title: "Trip",
    desc: "Our unforgettable adventure",
  },
  {
    year: "2024",
    title: "Special Day",
    desc: "The day I realized how much you mean",
  },
];

function Timeline() {
  return (
    <div className="timeline-list">
      {memories.map((item) => (
        <div key={item.year} className="timeline-card">
          <h2 className="timeline-year">{item.year}</h2>
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;