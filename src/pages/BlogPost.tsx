import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostById } from "@/lib/markdown";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/markdown";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const postData = await getPostById(id);
        setPost(postData);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20 container mx-auto px-6 max-w-4xl py-12">
          <h1 className="text-2xl font-light mb-4 text-gray-800">Post Not Found</h1>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <article className="container mx-auto px-6 max-w-3xl py-12">
          <div className="mb-8">
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors text-sm mb-6 inline-block">
              ← Back to Blog
            </Link>
          </div>
          
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4 text-gray-800 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
