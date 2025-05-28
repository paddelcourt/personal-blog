const Projects = () => {
  const projects = [
    {
      title: "Text to SQL Lakehouse",
      description: "A proof of concept on how to utilize text to sql systems with Iceberg",
      link: "https://github.com/paddelcourt/t2sql-lakehouse"
    },
    {
      title: "Postgres RAG For LLMs",
      description: "An implementation of Eric Zakariasson's 'Postgres As A Search Engine' for LLM's.",
      link: "https://github.com/paddelcourt/postgres-rag-llm"
    },
    {
      title: "Berlin Airport Data Pipeline Project",
      description: "Frustrated by the amount of delays at Berlin Airport, I decided to build a data pipeline to tabulate the amount of delays and develop my data engineering skills.",
      link: "https://github.com/paddelcourt/berlin_airport_datapipeline_project"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-stone-700">Projects</h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            A collection of research projects and initiatives I've been involved with
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-green-200/60 pb-8 last:border-b-0 bg-white p-6 rounded-xl hover:bg-green-50/30 transition-all duration-300 shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-stone-700">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition-colors border-b-2 border-transparent hover:border-green-400"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-stone-600 leading-relaxed">
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
