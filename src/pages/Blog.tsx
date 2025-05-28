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
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 max-w-4xl py-12">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-stone-700">Writing</h1>
            <p className="text-lg text-green-700 max-w-2xl">
              Thoughts and insights on technology, society, and the spaces where they intersect
            </p>
          </div>
          
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-green-200/60 pb-8 last:border-b-0 bg-white p-6 rounded-xl hover:bg-green-50/30 transition-all duration-300 shadow-sm">
                <div className="mb-2 flex items-center text-sm text-green-600 space-x-4 font-medium">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-medium mb-4 text-stone-700">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="hover:text-green-700 transition-colors border-b-2 border-transparent hover:border-green-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-green-700 hover:text-green-800 border-b border-green-300 hover:border-green-500 transition-colors text-sm font-medium"
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
