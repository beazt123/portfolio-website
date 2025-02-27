import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  background: string;
  philosophy: string;
}

export default function About({ background, philosophy }: AboutProps) {
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
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">Background</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {background}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {philosophy}
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