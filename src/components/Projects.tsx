import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, BarChart3, Brain, Database, Globe, Lock, MessageSquare, ShoppingCart, Camera, LineChart, FileText, Code, ExternalLink, Github, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideIn, AnimatedDivider } from "./AnimatedSection";

// Import project images
import classificationImage from "@/assets/portfolio/classification_image_cifar-10.jpg";
import energyPredict from "@/assets/portfolio/EnergyPredict.jpg";
import mlpImg from "@/assets/portfolio/mlp_img.jpg";
import projetIa2 from "@/assets/portfolio/projet_ia_2.jpg";
import laptopPrice from "@/assets/portfolio/LaptopPrice-1.jpg";
import fraudeDetection from "@/assets/portfolio/fraudeDetection.png";
import toubaKhelcom from "@/assets/portfolio/toubaKhelcom.jpg";
import fret1 from "@/assets/portfolio/fret_1.jpg";
import ndadjeFoot from "@/assets/portfolio/ndadje-foot-1.jpg";
import samaBitik from "@/assets/portfolio/sama-bitik-1.jpg";
import boutikNuru from "@/assets/portfolio/boutik-nuru-1.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", label: t("projects.filterAll") },
    { id: "ai", label: t("projects.filterAI") },
    { id: "web", label: t("projects.filterWeb") },
    { id: "data", label: t("projects.filterData") },
  ];

  const projects = [
    { icon: Brain, title: t("project1.title"), description: t("project1.description"), detailedDescription: t("project1.detailedDescription"), tags: ["Python", "PyTorch", "Flask", "CNN", "CIFAR-10"], image: classificationImage, github: "https://github.com/seydousy/classification_image_cifar", demo: "#", category: "ai" },
    { icon: BarChart3, title: t("project2.title"), description: t("project2.description"), detailedDescription: t("project2.detailedDescription"), tags: ["Python", "Gradient Boosting", "Energy Prediction", "Africa"], image: energyPredict, github: "https://github.com/seydousy/AfrikaEnergyPredict", demo: "#", category: "ai" },
    { icon: Sparkles, title: t("project3.title"), description: t("project3.description"), detailedDescription: t("project3.detailedDescription"), tags: ["Python", "MLP", "Facial Recognition", "LFW Dataset"], image: mlpImg, github: "https://github.com/seydousy/mlp_faciale_recognition", demo: "#", category: "ai" },
    { icon: Brain, title: t("project4.title"), description: t("project4.description"), detailedDescription: t("project4.detailedDescription"), tags: ["Python", "Deep Learning", "EuroSAT", "Satellite Images"], image: projetIa2, github: "https://github.com/seydousy/Reconnaissance_Images_Satellitaires", demo: "#", category: "ai" },
    { icon: Brain, title: t("project5.title"), description: t("project5.description"), detailedDescription: t("project5.detailedDescription"), tags: ["Python", "Streamlit", "AI", "Price Prediction"], image: laptopPrice, github: "#", demo: "#", category: "ai" },
    { icon: Lock, title: t("project6.title"), description: t("project6.description"), detailedDescription: t("project6.detailedDescription"), tags: ["Python", "Scikit-learn", "Anomaly Detection"], image: fraudeDetection, github: "#", demo: "#", category: "ai" },
    { icon: Globe, title: t("project7.title"), description: t("project7.description"), detailedDescription: t("project7.detailedDescription"), tags: ["WordPress", "E-commerce", "Furniture", "Web Design"], image: toubaKhelcom, github: "#", demo: "#", category: "web" },
    { icon: ShoppingCart, title: t("project8.title"), description: t("project8.description"), detailedDescription: t("project8.detailedDescription"), tags: ["React", "Tailwind CSS", "Laravel", "Logistics"], image: fret1, github: "#", demo: "#", category: "web" },
    { icon: Camera, title: t("project9.title"), description: t("project9.description"), detailedDescription: t("project9.detailedDescription"), tags: ["Football", "Community", "Web Platform"], image: ndadjeFoot, github: "#", demo: "#", category: "web" },
    { icon: ShoppingCart, title: t("project10.title"), description: t("project10.description"), detailedDescription: t("project10.detailedDescription"), tags: ["Retail", "Inventory", "Management"], image: samaBitik, github: "#", demo: "#", category: "web" },
    { icon: ShoppingCart, title: t("project11.title"), description: t("project11.description"), detailedDescription: t("project11.detailedDescription"), tags: ["E-commerce", "Electronics", "Web Store"], image: boutikNuru, github: "#", demo: "#", category: "web" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </SlideIn>
        <AnimatedDivider className="mb-8" />
        
        <SlideIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.div key={category.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Badge
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm transition-all"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Badge>
              </motion.div>
            ))}
          </div>
        </SlideIn>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const directions: ("left" | "right" | "up")[] = ["left", "up", "right"];
              const dir = directions[index % 3];
              const offset = dir === "left" ? { x: -60 } : dir === "right" ? { x: 60 } : { y: 60 };

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, ...offset }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="border-border hover:shadow-elegant transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-36 sm:h-48 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute top-2 right-2 p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <project.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="border-primary/30">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                              <Info className="w-4 h-4 mr-1" />
                              {t("projects.details")}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                              <DialogDescription className="text-base pt-4">{project.detailedDescription}</DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            {t("projects.github")}
                          </a>
                        </Button>
                        <Button variant="default" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            {t("projects.demo")}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
