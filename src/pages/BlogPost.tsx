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
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-20 container mx-auto px-6 max-w-4xl py-12">
          <h1 className="text-2xl font-light mb-4 text-stone-700">Post Not Found</h1>
          <Link to="/blog" className="text-green-700 hover:text-green-800 border-b border-green-300 hover:border-green-500 transition-colors">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <article className="container mx-auto px-6 max-w-3xl py-12">
          <div className="mb-8">
            <Link to="/blog" className="text-green-700 hover:text-green-800 border-b border-green-300 hover:border-green-500 transition-colors text-sm mb-6 inline-block">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-2xl">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-light mb-4 text-stone-700 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-green-600 space-x-4 font-medium">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div 
              className="prose prose-lg max-w-none text-stone-600 leading-relaxed prose-headings:text-stone-700 prose-links:text-green-700 prose-links:border-b prose-links:border-green-300 hover:prose-links:border-green-500 prose-strong:text-stone-700"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
