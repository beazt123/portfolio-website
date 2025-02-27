import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { heroConfig, socialMediaConfig, contactConfig, aboutConfig, projectsConfig, skillsConfig } from "@/config";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <main>
        <Hero {...heroConfig} />
        <About background={aboutConfig.background} philosophy={aboutConfig.philosophy} />
        <Projects projects={projectsConfig} />
        <Skills skills={skillsConfig} />
        <Contact
          callToAction={contactConfig.callToAction}
          facebookUrl={socialMediaConfig.facebookUrl}
          twitterUrl={socialMediaConfig.twitterUrl}
          instagramUrl={socialMediaConfig.instagramUrl}
          linkedinUrl={socialMediaConfig.linkedinUrl}
        />
      </main>
      <Footer {...socialMediaConfig} />
    </motion.div>
  );
}
