
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">About</h2>
        </div>
        
        <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
          <p className="mb-6">
            I'm passionate about understanding how technology shapes our world and society. 
            My work spans research, analysis, and writing on topics ranging from digital culture 
            to emerging technologies and their implications.
          </p>
          
          <p className="mb-6">
            With a background in research and a curiosity for complex problems, I enjoy 
            diving deep into subjects that matter. Whether it's through detailed analysis, 
            thoughtful writing, or collaborative projects, I aim to contribute meaningful 
            insights to important conversations.
          </p>
          
          <p>
            When I'm not working, you can find me reading, exploring new ideas, or 
            engaging with communities of like-minded thinkers and creators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
