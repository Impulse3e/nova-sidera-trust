import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4">
      <div className={`container mx-auto transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "mt-4 rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-lg border border-border" 
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-14 px-4" : "h-16"
        }`}>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Nova Sidera
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Цены
            </a>
            <a href="/#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Функции
            </a>
            <Link to="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Загрузить приложение
            </Link>
            <a href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Вход
            </Button>
            <Button size="sm" asChild>
              <Link to="/download">Купить SafeNet</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Цены
              </a>
              <a href="/#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Функции
              </a>
              <Link to="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Загрузить приложение
              </Link>
              <a href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <Button variant="ghost" size="sm" className="justify-start">
                Вход
              </Button>
              <Button size="sm" asChild>
                <Link to="/download">Купить SafeNet</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
