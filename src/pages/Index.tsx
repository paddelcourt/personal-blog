import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Projects />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
