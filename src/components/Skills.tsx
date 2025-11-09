import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-primary to-accent"
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
    color: "from-accent to-secondary"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, S3)", "Docker", "Git", "CI/CD"],
    color: "from-secondary to-primary"
  },
  {
    title: "Languages & Core",
    icon: Wrench,
    skills: ["C++", "JavaScript", "Python", "DSA", "System Design"],
    color: "from-primary to-secondary"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-2 bg-gradient-to-r from-accent to-secondary rounded-full mb-6"
          />
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Tools and technologies I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, rotate: 1 }}
              className="group"
            >
              <div className="relative h-full bg-card border-2 border-border rounded-2xl p-6 hover:border-foreground transition-all duration-300">
                {/* Gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-black mb-4 text-foreground">
                    {category.title}
                  </h3>
                  
                  {/* Skills list */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-2 group/item"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};