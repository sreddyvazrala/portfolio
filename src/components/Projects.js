import { useState } from "react";

const projects = [
  {
    title: "Project Gallery",
    github: "https://github.com/sreddyvazrala/projectgallery",
    live: "https://sreddyvazrala.github.io/projectgallery",
    description: "A dynamic project gallery showcasing class works using JavaScript and JSON.",
  },
  {
    title: "Calculator",
    github: "https://github.com/sreddyvazrala/projectgallery",
    live: "https://sreddyvazrala.github.io/projectgallery",
    description: "A simple calculator using HTML, CSS, and JavaScript.",
  },

];

const buttonStyle = {
  padding: "8px 14px",
  marginRight: "10px",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.2s"
};

const githubButton = {
  ...buttonStyle,
  backgroundColor: "#333",
  color: "#fff"
};

const liveButton = {
  ...buttonStyle,
  backgroundColor: "#28a745",
  color: "#fff"
};

const ProjectCard = ({ proj }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: isHovered ? "#f0f8ff" : "#fff",
    boxShadow: isHovered
      ? "0 4px 12px rgb(51, 84, 230)"
      : "0 2px 5px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <h3>{proj.title}</h3>
      <p style={{ fontSize: "14px" }}>{proj.description}</p>
      <div>
        <a
          href={proj.github}
          target="_blank"
          rel="noreferrer"
          style={{
            ...githubButton,
            backgroundColor: isHovered ? "#555" : "#333"
          }}
        >
          GitHub
        </a>
        <a
          href={proj.live}
          target="_blank"
          rel="noreferrer"
          style={{
            ...liveButton,
            backgroundColor: isHovered ? "#218838" : "#28a745"
          }}
        >
          Live
        </a>
      </div>
    </div>
  );
};

const Projects = () => (
  <section style={{ padding: "2rem" }}>
    <h2>📂 Projects</h2>
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
      {projects.map((proj, i) => (
        <ProjectCard key={i} proj={proj} />
      ))}
    </div>
  </section>
);

export default Projects;
