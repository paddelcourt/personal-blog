const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-stone-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/personal-blog/profile_photo.jpeg" 
              alt="Tom Mac - Profile Photo" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl mx-auto object-cover shadow-xl ring-4 ring-green-100/50"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-stone-700">
            Tom Mac
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-700 font-light">
            Tech Strategy and Data Engineering
          </p>
          
          <p className="text-lg mb-12 text-stone-600 max-w-2xl mx-auto leading-relaxed">
            I spend most days figuring out what actually matters for companies and for data engineering. I previously worked at Revolut and brief stint in Finance.
          
          <div className="space-y-4">
            <div className="flex justify-center space-x-8">
              <a 
                href="https://github.com/paddelcourt" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-700 hover:text-green-800 border-b-2 border-green-200 hover:border-green-400 transition-all duration-300 pb-1 px-2"
              >
                Github
              </a>
              <a 
                href="https://www.linkedin.com/in/tom-m-651241167/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-700 hover:text-green-800 border-b-2 border-green-200 hover:border-green-400 transition-all duration-300 pb-1 px-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
