
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-800">
            John Smith
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-light">
            Researcher, Writer, and Problem Solver
          </p>
          
          <p className="text-lg mb-12 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I explore ideas at the intersection of technology and society, 
            documenting insights through research and writing.
          </p>
          
          <div className="space-y-4">
            <a 
              href="#about" 
              className="inline-block text-gray-700 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-1"
            >
              Learn more about my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
