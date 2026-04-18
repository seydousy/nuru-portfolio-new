import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { SlideIn, AnimatedDivider } from "./AnimatedSection";
import { motion } from "framer-motion";

// Import certification images
import cert1 from "@/assets/certifications/certificat-force-n-ia.jpg";
import cert2 from "@/assets/certifications/analyste-cybersec-force-n.jpg";
import cert3 from "@/assets/certifications/certificat-ia.jpg";
import cert4 from "@/assets/certifications/certif-ap-sta-objet-connecte.jpg";
import cert5 from "@/assets/certifications/certif-aws.jpg";
import cert6 from "@/assets/certifications/certif-data-science-objet-connecte.jpg";
import cert7 from "@/assets/certifications/certif-eval-perf-machine-learning.jpg";
import cert8 from "@/assets/certifications/certif-flask.jpg";
import cert9 from "@/assets/certifications/certif-git github.jpg";
import cert10 from "@/assets/certifications/certif-tcp-ip.jpg";

const Certifications = () => {
  const { t } = useLanguage();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  
  const certifications = [
    { title: t("cert1.title"), institution: t("cert1.institution"), date: t("cert1.date"), description: t("cert1.description"), image: cert1 },
    { title: t("cert2.title"), institution: t("cert2.institution"), date: t("cert2.date"), description: t("cert2.description"), image: cert2 },
    { title: t("cert3.title"), institution: t("cert3.institution"), date: t("cert3.date"), description: t("cert3.description"), image: cert3 },
    { title: t("cert4.title"), institution: t("cert4.institution"), date: t("cert4.date"), description: t("cert4.description"), image: cert4 },
    { title: t("cert5.title"), institution: t("cert5.institution"), date: t("cert5.date"), description: t("cert5.description"), image: cert5 },
    { title: t("cert6.title"), institution: t("cert6.institution"), date: t("cert6.date"), description: t("cert6.description"), image: cert6 },
    { title: t("cert7.title"), institution: t("cert7.institution"), date: t("cert7.date"), description: t("cert7.description"), image: cert7 },
    { title: t("cert8.title"), institution: t("cert8.institution"), date: t("cert8.date"), description: t("cert8.description"), image: cert8 },
    { title: t("cert9.title"), institution: t("cert9.institution"), date: t("cert9.date"), description: t("cert9.description"), image: cert9 },
    { title: t("cert10.title"), institution: t("cert10.institution"), date: t("cert10.date"), description: t("cert10.description"), image: cert10 },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("certifications.title")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("certifications.subtitle")}
          </p>
        </SlideIn>
        <AnimatedDivider className="mb-12" />
        
        <SlideIn direction="up" delay={0.2}>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="border-border hover:shadow-elegant transition-all duration-300 h-full overflow-hidden">
                      <div className="relative h-32 sm:h-40 overflow-hidden">
                        <motion.img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                        <motion.div
                          className="absolute top-2 right-2 p-2 rounded-lg bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-sm"
                          whileHover={{ rotate: 15, scale: 1.2 }}
                        >
                          <Award className="w-5 h-5 text-primary-foreground" />
                        </motion.div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-primary font-semibold">{cert.institution}</CardDescription>
                        <CardDescription className="text-sm">{cert.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </SlideIn>
      </div>
    </section>
  );
};

export default Certifications;
