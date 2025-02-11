import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { useTimeGreeting } from "@/hooks/useTimeGreeting";

export default function Hero() {
  const greeting = useTimeGreeting();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551554781-c46200ea959d?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            {greeting}! I'm [Your Name]
            <span className="text-primary block mt-2">Passionate About Code</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            A developer who loves creating and tinkering with technology.
            Always excited to learn new things and share what I've built.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="group"
            >
              <a href="#projects">
                See What I've Built
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <a href="/resume.pdf" download className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                My Resume
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
                <Github className="mr-2 h-4 w-4" />
                My GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}