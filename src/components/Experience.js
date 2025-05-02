const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Ideya Labs, Hyderabad",
      duration: "Apr 2022-Apr-2023 ",
      description: [
        "Developed and maintained web applications using C#, .NET, and SQL Server.",
        "Implemented RESTful APIs and integrated them with front-end components.",
        "Worked on bug fixes, performance optimization, and deployment."
      ]
    },

  ];
  
  const Experience = () => (
    <section style={{ padding: "2rem" }}>
      <h2>💼 Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.2rem" }}>{exp.role} - <span style={{ color: "#555" }}>{exp.company}</span></h3>
          <p style={{ fontSize: "14px", color: "#777" }}>{exp.duration}</p>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
            {exp.description.map((point, i) => (
              <li key={i} style={{ fontSize: "15px" }}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
  
  export default Experience;
  