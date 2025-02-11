import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Database Management", level: 85 },
  { name: "DevOps", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">
            Technical Expertise
          </h2>
          <div className="mt-12 space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2.5 bg-accent/20 dark:bg-muted border dark:border-accent"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}