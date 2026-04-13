import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlideIn, AnimatedDivider } from "./AnimatedSection";
import { motion } from "framer-motion";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t("experience.ai-intern.title"),
      company: t("experience.ai-intern.company"),
      location: t("experience.ai-intern.location"),
      period: t("experience.ai-intern.period"),
      description: [
        t("experience.ai-intern.desc1"),
        t("experience.ai-intern.desc2"),
        t("experience.ai-intern.desc3"),
        t("experience.ai-intern.desc4"),
      ],
    },
    {
      title: t("experience.backend.title"),
      company: t("experience.backend.company"),
      location: t("experience.backend.location"),
      period: t("experience.backend.period"),
      description: [
        t("experience.backend.desc1"),
        t("experience.backend.desc2"),
        t("experience.backend.desc3"),
      ],
    },
    {
      title: t("experience.web.title"),
      company: t("experience.web.company"),
      location: t("experience.web.location"),
      period: t("experience.web.period"),
      description: [
        t("experience.web.desc1"),
      ],
    },
  ];

  const cardDirections: ("left" | "right")[] = ["left", "right", "left"];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
        </SlideIn>
        <AnimatedDivider className="mb-12" />

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary origin-top hidden md:block"
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <SlideIn
                key={index}
                direction={cardDirections[index % cardDirections.length]}
                delay={index * 0.2}
              >
                <div className={`w-full md:w-[48%] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                    className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
                    style={{ transform: "translateX(-50%)" }}
                  />

                  <Card className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary"
                        >
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <p className="font-semibold text-foreground italic">{exp.company}</p>
                            <div className="flex flex-wrap gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
