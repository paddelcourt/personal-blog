
const Blog = () => {
  const posts = [
    {
      title: "Rethinking Digital Ownership in Web3",
      date: "March 15, 2024",
      excerpt: "An exploration of what true digital ownership means and how blockchain technologies are reshaping our relationship with digital assets and content.",
      link: "https://example.com/blog/digital-ownership"
    },
    {
      title: "The Quiet Revolution of Async Communication",
      date: "February 28, 2024",
      excerpt: "How asynchronous communication tools are changing the way we work and collaborate, with implications for productivity and work-life balance.",
      link: "https://example.com/blog/async-communication"
    },
    {
      title: "Building Trust in Algorithmic Systems",
      date: "February 10, 2024",
      excerpt: "Examining the challenge of creating trustworthy AI systems and the role of transparency in building public confidence in algorithmic decision-making.",
      link: "https://example.com/blog/algorithmic-trust"
    },
    {
      title: "The Hidden Costs of Convenience",
      date: "January 22, 2024",
      excerpt: "A reflection on how our pursuit of convenience through technology often comes with unexpected trade-offs in privacy, autonomy, and human connection.",
      link: "https://example.com/blog/convenience-costs"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">Writing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on technology, society, and the spaces where they intersect
          </p>
        </div>
        
        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="mb-2">
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
                >
                  {post.title}
                </a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
