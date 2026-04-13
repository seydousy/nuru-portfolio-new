import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, BarChart3, Brain, Database, Globe, Lock, MessageSquare, ShoppingCart, Camera, LineChart, FileText, Code, ExternalLink, Github, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideIn, AnimatedDivider } from "./AnimatedSection";

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
    { icon: Brain, title: t("project1.title"), description: t("project1.description"), detailedDescription: t("project1.detailedDescription"), tags: ["Python", "TensorFlow", "Collaborative Filtering"], image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "ai" },
    { icon: BarChart3, title: t("project2.title"), description: t("project2.description"), detailedDescription: t("project2.detailedDescription"), tags: ["Apache Spark", "Hadoop", "SQL"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "data" },
    { icon: Sparkles, title: t("project3.title"), description: t("project3.description"), detailedDescription: t("project3.detailedDescription"), tags: ["NLP", "PyTorch", "API REST"], image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "ai" },
    { icon: Database, title: t("project4.title"), description: t("project4.description"), detailedDescription: t("project4.detailedDescription"), tags: ["SQL", "ETL", "Data Modeling"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "data" },
    { icon: Globe, title: t("project5.title"), description: t("project5.description"), detailedDescription: t("project5.detailedDescription"), tags: ["React", "Node.js", "MongoDB"], image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "web" },
    { icon: Lock, title: t("project6.title"), description: t("project6.description"), detailedDescription: t("project6.detailedDescription"), tags: ["Python", "Scikit-learn", "Anomaly Detection"], image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "ai" },
    { icon: MessageSquare, title: t("project7.title"), description: t("project7.description"), detailedDescription: t("project7.detailedDescription"), tags: ["NLP", "Twitter API", "Classification"], image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "ai" },
    { icon: ShoppingCart, title: t("project8.title"), description: t("project8.description"), detailedDescription: t("project8.detailedDescription"), tags: ["React", "Django", "Recommender System"], image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "web" },
    { icon: Camera, title: t("project9.title"), description: t("project9.description"), detailedDescription: t("project9.detailedDescription"), tags: ["PyTorch", "OpenCV", "CNN"], image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "ai" },
    { icon: LineChart, title: t("project10.title"), description: t("project10.description"), detailedDescription: t("project10.detailedDescription"), tags: ["React", "D3.js", "Kafka"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "data" },
    { icon: FileText, title: t("project11.title"), description: t("project11.description"), detailedDescription: t("project11.detailedDescription"), tags: ["NLP", "BERT", "Transformers"], image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "ai" },
    { icon: Code, title: t("project12.title"), description: t("project12.description"), detailedDescription: t("project12.detailedDescription"), tags: ["FastAPI", "Docker", "AWS"], image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop", github: "https://github.com/seydounousy", demo: "https://demo.example.com", category: "web" },
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
