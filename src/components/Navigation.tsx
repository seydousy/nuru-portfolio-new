import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsOpen(false);
  };

  const navItems = [
    { label: t("nav.home"), id: "home" },
    { label: t("nav.about"), id: "about" },
    { label: t("nav.education"), id: "education" },
    { label: t("nav.skills"), id: "skills" },
    { label: t("nav.experience"), id: "experience" },
    { label: t("nav.projects"), id: "projects" },
    { label: t("nav.certifications"), id: "certifications" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex flex-col items-center gap-0.5 py-1">
              <img src={logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full" />
              <span className="text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NuruTek
              </span>
              <span className="text-[8px] sm:text-[10px] text-muted-foreground italic -mt-0.5 hidden sm:block">
                La lumière de la technologie
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-primary transition-colors`}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            
            <div className="flex items-center gap-2 ml-2 border-l border-border pl-2">
              <motion.button
                onClick={toggleTheme}
                className="relative p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                whileTap={{ scale: 0.85, rotate: 360 }}
                whileHover={{ scale: 1.1 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun size={18} className="text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon size={18} className="text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <button
                onClick={() => setLanguage("fr")}
                className={`text-2xl transition-opacity ${language === "fr" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                aria-label="Français"
              >
                🇫🇷
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-2xl transition-opacity ${language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                aria-label="English"
              >
                🇬🇧
              </button>
            </div>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? "hover:bg-accent text-foreground" 
                : "hover:bg-white/20 text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
            >
              <div className="flex flex-col gap-2 py-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className="justify-start hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <div className="flex items-center gap-3 pt-2 mt-2 border-t border-border">
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-muted"
                    whileTap={{ scale: 0.85, rotate: 360 }}
                    aria-label="Toggle theme"
                  >
                    {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary" />}
                  </motion.button>
                  <button onClick={() => setLanguage("fr")} className={`text-3xl transition-opacity ${language === "fr" ? "opacity-100" : "opacity-40"}`} aria-label="Français">🇫🇷</button>
                  <button onClick={() => setLanguage("en")} className={`text-3xl transition-opacity ${language === "en" ? "opacity-100" : "opacity-40"}`} aria-label="English">🇬🇧</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
