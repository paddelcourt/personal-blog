import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/markdown";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/markdown";

const BlogPreview = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setRecentPosts(allPosts.slice(0, 3));
    };
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-stone-700">Recent Writing</h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Latest thoughts and insights on technology and society
          </p>
        </div>
        
        <div className="space-y-12">
          {recentPosts.map((post) => (
            <article key={post.id} className="border-b border-green-200/60 pb-8 last:border-b-0 bg-white p-6 rounded-xl hover:bg-green-50/30 transition-all duration-300 shadow-sm">
              <div className="mb-2">
                <time className="text-sm text-green-600 font-medium">{post.date}</time>
              </div>
              <h3 className="text-xl font-medium mb-4 text-stone-700">
                <Link 
                  to={`/blog/${post.id}`}
                  className="hover:text-green-700 transition-colors border-b-2 border-transparent hover:border-green-400"
                >
                  {post.title}
                </Link>
              </h3>
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
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="text-green-700 hover:text-green-800 border-b-2 border-green-300 hover:border-green-500 transition-colors font-medium"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
