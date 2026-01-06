import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";

import logo from "@/assets/logo/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const navItems = [
    { label: "Solutions", href: "/solutions", hasMegaMenu: true },
    { label: "Products", href: "/products", hasMegaMenu: true },
    { label: "Resources", href: "/resources", hasMegaMenu: true },
    { label: "Company", href: "/company/about", hasMegaMenu: true },
  ];

  const isContactPage = location.pathname === "/company/contact";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-0 flex-shrink">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 min-w-0 overflow-hidden"
            >
              <img src={logo} alt="SoftVision IT Logo" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
              <span className={`font-display font-bold text-base sm:text-lg md:text-xl truncate ${isScrolled ? "text-foreground" : "text-white"}`}>
                SoftVision IT Group
              </span>
            </motion.div>
          </Link>

           {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {activeMenu === item.label && item.hasMegaMenu && (
                    <MegaMenu menuType={item.label} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                className={`${isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`} 
                asChild
              >
                <Link to="/company/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => document.getElementById('busy-downloads')?.scrollIntoView({ behavior: 'smooth' }), 300);
                  }}
                >
                  Busy Software
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/company/contact">Contact Us</Link>
                </Button>
                <Button className="w-full accent-gradient text-accent-foreground" asChild>
                  <Link to="/company/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
