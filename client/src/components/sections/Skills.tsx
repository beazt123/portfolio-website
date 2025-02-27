import { motion } from "framer-motion";

const defaultSkills = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Database Management",
  "DevOps",
  "Mobile Development",
  "Cloud Computing",
  "Machine Learning",
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
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-white dark:bg-card shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="font-medium text-lg">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
