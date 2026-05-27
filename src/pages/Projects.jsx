import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "HavenStay",
      description:
        "A full-stack rental booking platform featuring secure login/signup, CRUD operations for listings and reviews,server-side validation, and role-based access control.",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js"],

      github: "https://github.com/singhisha40/HavenStay",
      live: "#",
    },

    {
      title: "BataoGPT",
      description:
        "AI chatbot application inspired by ChatGPT with real-time conversational workflows, persistent chat history, and structured backend integration using OpenRouter APIs.",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenRouter API", "Vite"],

      github: "https://github.com/singhisha40/GPT-Project",
      live: "#",
    },

    {
      title: "StockCheck",
      description:
        "Developed a full-stack trading platform with portfolio tracking, holdings management, and order processing functionalities through interactive dashboard workflows",

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

      tech: ["React.js", "Node.js", "Express.js", "MongoDB","Material UI", "Chart.js"],

      github: "https://github.com/singhisha40/StockCheck",
      live: "#",
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>Projects</h1>

        <p>
          Here are some projects I’ve built focusing on clean UI,
          responsiveness, and real-world functionality.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.github} target="_blank">
                  GitHub
                </a>

                <a href={project.live} target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;