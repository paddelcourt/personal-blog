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
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">Recent Writing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest thoughts and insights on technology and society
          </p>
        </div>
        
        <div className="space-y-12">
          {recentPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="mb-2">
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                <Link 
                  to={`/blog/${post.id}`}
                  className="hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
                >
                  {post.title}
                </Link>
              </h3>
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
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="text-gray-700 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
