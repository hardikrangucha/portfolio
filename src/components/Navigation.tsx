import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: faGithub, href: "https://github.com/hardikrangucha", label: "GitHub" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/hardik-rangucha/", label: "LinkedIn" },
    { icon: faEnvelope, href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-card m-4 rounded-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between md:grid md:grid-cols-3">
            {/* Logo */}
            <div className="text-xl font-bold text-glow">HR</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-all duration-500 ease-out relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center justify-end space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-foreground/60 hover:text-primary transition-all duration-500 ease-out transform hover:scale-110"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-all duration-500 ease-out transform hover:scale-110"
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-light text-foreground hover:text-primary transition-all duration-500 ease-out transform hover:scale-105"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Social Links */}
          <div className="flex items-center space-x-6 mt-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 text-foreground/60 hover:text-primary transition-all duration-500 ease-out transform hover:scale-110"
                aria-label={social.label}
                style={{ transitionDelay: `${(index + 4) * 75}ms` }}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;