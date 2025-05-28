
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Finding creative solutions to complex technical challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with designers, developers, and stakeholders"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving my skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I specialize in React, Node.js, and modern web technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
            <p className="text-gray-600 mb-4">
              Started my journey in web development during college, where I discovered my passion for creating 
              digital experiences. Since then, I've worked with startups and established companies, helping 
              them build scalable web applications.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in writing clean, efficient code and staying up-to-date with the latest industry trends. 
              When I'm not coding, you can find me contributing to open source projects or learning new technologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Bachelor's in Computer Science</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">5+ Years Professional Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">50+ Projects Completed</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <highlight.icon className="w-8 h-8 text-purple-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
