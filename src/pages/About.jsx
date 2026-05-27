import "./About.css";

function About() {
  //  
  //    Authentication (JWT, OAuth), MVC Architecture
// 
  const skills = [
    "React.js",
    "Vite",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "REST APIs",
    "Responsive Design",
    "MVC Architecture",
  ];

  return (
    <section className="about-page">
      <div className="about-header">
        <h1>About Me</h1>

        <p>
          Passionate full-stack developer focused on building responsive,
          scalable, and user-friendly web applications with clean UI and
          efficient backend architecture.
        </p>
      </div>

      <div className="about-container">
        {/* CARD 1 */}

        <div className="about-card">
          <h2>Who I Am</h2>

          <p>
            I’m a passionate coder who enjoys turning ideas into real-world web
            applications. I like building interfaces that feel smooth,
            responsive, and intuitive while also working on backend systems
            that are structured and scalable.
          </p>

          <p>
            I enjoy learning modern technologies, and improving both the performance and user experience of the
            products I build.
          </p>
        </div>

        {/* CARD 2 */}

        <div className="about-card">
          <h2>Skills & Technologies</h2>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        {/* CARD 3 */}

        <div className="about-card">
          <h2>Educational Background</h2>

          <div className="education-item">
            <h3>Bachelor of Technology</h3>

            <p>National Institute of Technology, Arunachal Pradesh<br/>
              Computer Science and Engineering<br/>
              2021-2025
            </p>
            

          </div>

          <div className="education-item">
            <h3>Relevant Courses</h3>
            <p>
              Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks
            </p>
          </div>
        </div>

        {/* FULL WIDTH CARD */}

        <div className="about-card full-width">
          <h2>Why Hire Me?</h2>

          <p>
            I focus on writing clean, maintainable code and building projects
            that solve real problems instead of just looking visually good.
          </p>

          <p>
            Beyond technical skills, I bring consistency, curiosity, and a
            strong willingness to learn — which matters a lot in fast-moving
            development environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;