import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const cvFile = language === 'en' ? 'My-Resume.pdf' : 'Cv-Seydou-Nourou-SY.pdf';
    const link = document.createElement('a');
    link.href = `/${cvFile}`;
    link.download = cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            initial={{ x: `${20 + i * 15}%`, y: "110%" }}
            animate={{ y: "-10%", opacity: [0, 1, 0] }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          {/* Greeting - slides from LEFT */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-xl md:text-2xl mb-2 text-gray-300"
          >
            {t("hero.greeting")}
          </motion.p>

          {/* Name - scales up with spring */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.3, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80, damping: 12 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent"
            style={{ perspective: 1000 }}
          >
            Seydou Nourou SY
          </motion.h1>

          {/* Title - slides from RIGHT */}
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-2xl md:text-3xl mb-4 text-gray-100"
          >
            {t("hero.title")}
          </motion.p>

          {/* Description - slides from BOTTOM */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="text-sm sm:text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto px-2"
          >
            {t("hero.description")}
          </motion.p>

          {/* Buttons - each from different direction */}
          <div className="flex gap-2 sm:gap-4 justify-center flex-wrap px-2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4, type: "spring", stiffness: 120 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300"
              >
                {t("hero.cta")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6, type: "spring", stiffness: 120 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-primary/50 hover:bg-primary/10"
              >
                {t("hero.projects")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8, type: "spring", stiffness: 120 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
                className="border-secondary/50 hover:bg-secondary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.downloadCV")}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
