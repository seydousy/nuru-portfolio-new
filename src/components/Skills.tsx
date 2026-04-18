import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlideIn, AnimatedDivider, StaggerContainer, StaggerItem, RotateIn } from "./AnimatedSection";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    { category: t("skills.ai.title"), skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"] },
    { category: t("skills.data.title"), skills: ["Apache Spark", "Hadoop", "Kafka", "ETL", "Data Warehousing", "SQL/NoSQL"] },
    { category: t("skills.programming.title"), skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "R"] },
    { category: t("skills.web.title"), skills: ["React", "Node.js", "Laravel","Django", "Flask", "FastAPI", "REST APIs"] },
    { category: t("skills.cloud.title"), skills: ["AWS", "Docker", "CI/CD", "Git", "Linux"] },
    { category: t("skills.datascience.title"), skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Analytics"] },
  ];

  const directions: ("left" | "right" | "up" | "down")[] = ["left", "up", "right", "left", "down", "right"];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
        </SlideIn>
        <AnimatedDivider className="mb-12" />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index} direction={directions[index % directions.length]}>
              <RotateIn delay={index * 0.05}>
                <Card className="border-border hover:shadow-elegant transition-all duration-300 bg-card hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-primary/20 hover:bg-primary/10 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </RotateIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
