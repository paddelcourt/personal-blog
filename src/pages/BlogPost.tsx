
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // In a real implementation, you'd fetch this data based on the ID
  const posts = {
    "digital-ownership-web3": {
      title: "Rethinking Digital Ownership in Web3",
      date: "March 15, 2024",
      readTime: "8 min read",
      content: `
        <p>The concept of digital ownership has been fundamentally challenged and reimagined with the advent of Web3 technologies. For decades, our relationship with digital content has been defined by licenses, subscriptions, and platform dependencies that often leave users with little actual control over their digital assets.</p>
        
        <p>Blockchain technology promises to change this paradigm by enabling true digital ownership through cryptographic proof and decentralized networks. But what does this actually mean in practice, and how might it reshape our digital lives?</p>
        
        <h2>The Current State of Digital "Ownership"</h2>
        
        <p>Today, when we "buy" a digital book, movie, or song, we're typically purchasing a license to access that content under specific terms. These licenses can be revoked, platforms can shut down, and our "owned" content can disappear without warning.</p>
        
        <p>This reality became starkly apparent when various digital platforms have removed content from users' libraries, demonstrating the fragile nature of current digital ownership models.</p>
        
        <h2>Web3's Promise</h2>
        
        <p>Web3 technologies, particularly NFTs and blockchain-based systems, propose a different model where ownership is cryptographically verified and stored on decentralized networks. This could enable:</p>
        
        <ul>
          <li>Truly portable digital assets that work across platforms</li>
          <li>Verifiable scarcity and authenticity</li>
          <li>Direct creator-to-consumer relationships</li>
          <li>Programmable ownership with built-in royalties</li>
        </ul>
        
        <h2>Challenges and Considerations</h2>
        
        <p>However, this vision faces significant challenges. Technical barriers, environmental concerns, user experience issues, and regulatory uncertainty all pose obstacles to widespread adoption.</p>
        
        <p>Moreover, the question remains whether true digital ownership is what users actually want, or if the convenience of current systems outweighs the benefits of ownership.</p>
        
        <h2>Looking Forward</h2>
        
        <p>As these technologies mature, we'll likely see hybrid models emerge that balance the benefits of decentralized ownership with the practical needs of everyday users. The future of digital ownership may not be binary but rather a spectrum of options that serve different use cases and preferences.</p>
        
        <p>What's clear is that Web3 has opened important conversations about digital rights, platform power, and user agency that will continue to shape the digital landscape for years to come.</p>
      `
    },
    "async-communication": {
      title: "The Quiet Revolution of Async Communication",
      date: "February 28, 2024",
      readTime: "6 min read",
      content: `
        <p>A quiet revolution is transforming how we work and communicate. Asynchronous communication—where participants don't need to be present at the same time—is reshaping everything from team dynamics to work-life balance.</p>
        
        <p>This shift has been accelerated by remote work trends, but its implications extend far beyond the pandemic response. We're witnessing a fundamental rethinking of when, where, and how work happens.</p>
        
        <h2>The Rise of Async</h2>
        
        <p>Tools like Slack, Discord, Notion, and Loom have made asynchronous collaboration not just possible but often preferable to real-time interaction. Teams are discovering they can maintain productivity and connection without constant synchronous meetings.</p>
        
        <p>This approach offers several advantages: it accommodates different time zones, allows for more thoughtful responses, reduces meeting fatigue, and gives people control over their attention and focus.</p>
        
        <h2>Changing Work Patterns</h2>
        
        <p>Async communication is enabling new work patterns that prioritize deep work and individual productivity rhythms. People can contribute when they're most effective rather than when the calendar demands it.</p>
        
        <p>This shift also democratizes participation—introverts and non-native speakers often find written communication more comfortable than speaking up in meetings, leading to more inclusive collaboration.</p>
        
        <h2>The Challenges</h2>
        
        <p>However, async work isn't without its challenges. Building relationships, maintaining team cohesion, and ensuring alignment can be more difficult when interactions are primarily text-based and time-shifted.</p>
        
        <p>There's also the risk of communication overload as async messages can accumulate quickly, creating new forms of digital stress.</p>
        
        <h2>Finding Balance</h2>
        
        <p>The most successful teams are learning to blend async and sync communication strategically, using each approach where it's most effective. Real-time interaction for relationship building and complex problem-solving, async for updates, documentation, and deep work collaboration.</p>
        
        <p>As these practices mature, we're likely to see async communication become a core competency for knowledge workers, fundamentally changing how organizations operate and how we think about productive collaboration.</p>
      `
    }
    // Add more posts as needed
  };

  const post = posts[id as keyof typeof posts];

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
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
