import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaMobileAlt, FaLaptopCode, FaPaintBrush, FaCloud } from "react-icons/fa";

const defaultSkills = [
  { name: "Frontend Development", icon: FaLaptopCode },
  { name: "Backend Development", icon: FaNodeJs },
  { name: "UI/UX Design", icon: FaPaintBrush },
  { name: "Database Management", icon: FaDatabase },
  { name: "DevOps", icon: FaAws },
  { name: "Mobile Development", icon: FaMobileAlt },
  { name: "Cloud Computing", icon: FaCloud },
  { name: "Machine Learning", icon: FaReact },
];

export default function Skills({ skills = defaultSkills }) {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Technical Expertise</h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-md"
              >
                <skill.icon className="text-lg" />
                <span className="font-medium text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
