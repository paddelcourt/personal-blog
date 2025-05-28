
const Projects = () => {
  const projects = [
    {
      title: "Digital Privacy in the Modern Age",
      description: "A comprehensive analysis of privacy concerns and digital rights in contemporary society. Exploring the balance between convenience and security in our connected world.",
      link: "https://example.com/privacy-research"
    },
    {
      title: "The Future of Remote Work",
      description: "An in-depth study examining how remote work technologies are reshaping professional relationships and organizational structures across industries.",
      link: "https://example.com/remote-work-study"
    },
    {
      title: "AI Ethics Framework",
      description: "Developing practical guidelines for ethical AI implementation in various sectors, with focus on transparency and accountability.",
      link: "https://example.com/ai-ethics"
    },
    {
      title: "Urban Technology Integration",
      description: "Research on how smart city technologies can be implemented responsibly while preserving community values and individual privacy.",
      link: "https://example.com/urban-tech"
    },
    {
      title: "Digital Literacy Initiative",
      description: "A community-focused project aimed at improving digital literacy across different age groups and socioeconomic backgrounds.",
      link: "https://example.com/digital-literacy"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of research projects and initiatives I've been involved with
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
