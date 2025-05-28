
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">Contact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in connecting with fellow researchers, writers, and thinkers
          </p>
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-gray-600">
            The best way to reach me is via email:
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:john.smith@example.com" 
              className="inline-block text-gray-700 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-1"
            >
              john.smith@example.com
            </a>
          </div>
          
          <div className="pt-8 space-x-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
