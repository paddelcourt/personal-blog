const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-green-200/60">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <p className="text-stone-600 font-light">
            © {currentYear} Tom Mac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
