import "./Internships.css";

function Internships() {
  const internships = [
    {
      company: "Bhabha Atomic Research Center(BARC), Mumbai, Maharashtra",
      role: "Intern",

      duration: "Jun - July 2024",

      description:
        "Built a scalable machine learning prediction system with a user-friendly GUI to analyze and predict real-time air pollution levels using environmental data.",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },

    {
      company: "Bolt IoT",

      role: "Intern",

      duration: "Jun - July 2023",

      description:
        " Engaged in web application development projects under the supervision of senior developers, while contributing to various aspects of front-end development.",

      

      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      company: "Harcourt Butler Technical University",

      role: "Research Intern",

      duration: "Jan - Feb 2023",

      description:
        "Assisted in dashboard development, optimized frontend performance, and worked on prediction of early PCOS in women, using medical statistics.",

      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="internships-page">
      <div className="internships-header">
        <h1>Internships</h1>

        <p>
          My internship experiences where I worked on real-world applications,
          improved development workflows, and strengthened my skills.
        </p>
      </div>

      <div className="internships-grid">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <div className="internship-image-container">
              <img
                src={internship.image}
                alt={internship.company}
              />
            </div>

            <div className="internship-content">
              <h2>{internship.role}</h2>

              <h3>{internship.company}</h3>

              <span className="duration">
                {internship.duration}
              </span>

              <p>{internship.description}</p>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internships;