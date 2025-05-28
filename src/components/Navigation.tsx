
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', isExternal: false },
    { name: 'Projects', href: '#projects', isExternal: false },
    { name: 'Contact', href: '#contact', isExternal: false },
    { name: 'Writing', href: '/blog', isExternal: true },
  ];

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsOpen(false);
    if (!isExternal) {
      if (location.pathname !== '/') {
        // Navigate to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="text-xl font-light text-gray-800"
            >
              The Matcha Layer
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="text-gray-600 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
