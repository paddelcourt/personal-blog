
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <About />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
