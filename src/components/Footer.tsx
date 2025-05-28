
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <p className="text-gray-500">
            © {currentYear} John Smith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
