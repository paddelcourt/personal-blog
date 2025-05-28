import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/markdown";
import { useEffect, useState } from "react";
import { BlogPost } from "@/lib/markdown";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

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
