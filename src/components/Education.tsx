import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlideIn, AnimatedDivider, FlipIn } from "./AnimatedSection";

const Education = () => {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t("education.master"),
      status: t("education.master.status"),
      description: t("education.master.description"),
      tags: ["Big Data", "Deep Learning", "MLOps", "Data Science"],
    },
    {
      degree: t("education.bachelor"),
      status: t("education.bachelor.status"),
      description: t("education.bachelor.description"),
      tags: ["Développement Web", "Architecture Logicielle", "Bases de Données", "Programmation"],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("education.title")}
          </h2>
        </SlideIn>
        <AnimatedDivider className="mb-12" />
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <FlipIn key={index} delay={index * 0.2}>
              <Card className="border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <SlideIn direction="left" delay={0.3 + index * 0.2}>
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </SlideIn>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{item.degree}</CardTitle>
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="mt-4">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FlipIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
