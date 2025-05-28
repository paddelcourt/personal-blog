
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      id: "digital-ownership-web3",
      title: "Rethinking Digital Ownership in Web3",
      date: "March 15, 2024",
      excerpt: "An exploration of what true digital ownership means and how blockchain technologies are reshaping our relationship with digital assets and content.",
      readTime: "8 min read"
    },
    {
      id: "async-communication",
      title: "The Quiet Revolution of Async Communication",
      date: "February 28, 2024",
      excerpt: "How asynchronous communication tools are changing the way we work and collaborate, with implications for productivity and work-life balance.",
      readTime: "6 min read"
    },
    {
      id: "algorithmic-trust",
      title: "Building Trust in Algorithmic Systems",
      date: "February 10, 2024",
      excerpt: "Examining the challenge of creating trustworthy AI systems and the role of transparency in building public confidence in algorithmic decision-making.",
      readTime: "10 min read"
    },
    {
      id: "convenience-costs",
      title: "The Hidden Costs of Convenience",
      date: "January 22, 2024",
      excerpt: "A reflection on how our pursuit of convenience through technology often comes with unexpected trade-offs in privacy, autonomy, and human connection.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 max-w-4xl py-12">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Writing</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Thoughts and insights on technology, society, and the spaces where they intersect
            </p>
          </div>
          
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="mb-2 flex items-center text-sm text-gray-500 space-x-4">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-medium mb-4 text-gray-800">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors text-sm"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
