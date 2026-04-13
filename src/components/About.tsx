import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlideIn, AnimatedDivider, StaggerContainer, StaggerItem, PopIn } from "./AnimatedSection";

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    { icon: Brain, title: t("about.highlight1.title"), description: t("about.highlight1.description") },
    { icon: Database, title: t("about.highlight2.title"), description: t("about.highlight2.description") },
    { icon: Code, title: t("about.highlight3.title"), description: t("about.highlight3.description") },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
        </SlideIn>
        <SlideIn direction="right" delay={0.1}>
          <p className="text-center text-muted-foreground mb-8 text-lg italic">
            {t("about.intro")}
          </p>
        </SlideIn>
        <AnimatedDivider className="mb-12" />

        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <SlideIn direction="left" delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.p1")}</p>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          </SlideIn>
          <SlideIn direction="left" delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.p3")}</p>
          </SlideIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const directions: ("left" | "up" | "right")[] = ["left", "up", "right"];
            return (
              <StaggerItem key={index} direction={directions[index]}>
                <Card className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <PopIn delay={0.1 * index}>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                        <item.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </PopIn>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
