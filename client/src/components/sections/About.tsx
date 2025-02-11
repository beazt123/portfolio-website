import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-card dark:shadow-lg dark:shadow-primary/10 dark:hover:shadow-xl dark:hover:shadow-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">Background</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With a deep passion for technology and design, I've spent years honing my skills
                    in software development. My journey began with a curiosity about how things work,
                    leading me to explore various programming languages and frameworks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-card dark:shadow-lg dark:shadow-primary/10 dark:hover:shadow-xl dark:hover:shadow-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in creating software that not only functions flawlessly but also
                    provides an exceptional user experience. Every project is an opportunity to
                    combine technical expertise with creative problem-solving.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}