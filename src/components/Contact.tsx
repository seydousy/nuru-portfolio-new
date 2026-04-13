import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlideIn, AnimatedDivider } from "./AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.success"),
      description: t("contact.success"),
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SlideIn direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-center text-muted-foreground mb-8">{t("contact.subtitle")}</p>
        </SlideIn>
        <AnimatedDivider className="mb-12" />

        <SlideIn direction="up" delay={0.2} className="max-w-2xl mx-auto">
          <Card className="border-border shadow-elegant">
            <CardHeader>
              <SlideIn direction="left" delay={0.3}>
                <CardTitle>{t("contact.info")}</CardTitle>
                <CardDescription>{t("contact.subtitle")}</CardDescription>
              </SlideIn>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <SlideIn direction="right" delay={0.35}>
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input id="name" placeholder={t("contact.name")} required />
                  </div>
                </SlideIn>
                <SlideIn direction="left" delay={0.4}>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input id="email" type="email" placeholder={t("contact.email")} required />
                  </div>
                </SlideIn>
                <SlideIn direction="right" delay={0.45}>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea id="message" placeholder={t("contact.message")} className="min-h-[120px]" required />
                  </div>
                </SlideIn>
                <SlideIn direction="up" delay={0.5}>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300">
                    {t("contact.send")}
                  </Button>
                </SlideIn>
              </form>
              <SlideIn direction="up" delay={0.55}>
                <div className="flex justify-center gap-4 mt-6 pt-6 border-t">
                  {[
                    { href: "mailto:seydou.sy@example.com", icon: Mail, label: "Email" },
                    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com", icon: Github, label: "GitHub" },
                  ].map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={link.label}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      whileTap={{ scale: 0.85 }}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </SlideIn>
            </CardContent>
          </Card>
        </SlideIn>
      </div>
    </section>
  );
};

export default Contact;
