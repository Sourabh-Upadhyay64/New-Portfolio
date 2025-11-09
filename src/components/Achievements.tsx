import { motion } from "framer-motion";
import { Trophy, Heart, Medal, Code } from "lucide-react";

const achievements = [
  {
    icon: Heart,
    title: "SDG Club Secretary",
    description: "Led campus sustainability initiatives and awareness programs",
    year: "2023-Present"
  },
  {
    icon: Trophy,
    title: "SIH Internal Selection",
    description: "Secured internal selection for Smart India Hackathon competing against 55+ university teams",
    year: "2025"
  },
  {
    icon: Code,
    title: "450+ Problems Solved",
    description: "Active competitive programmer on GeeksforGeeks, LeetCode, and Codeforces",
    year: "2022-Present"
  },
  {
    icon: Medal,
    title: "Top 20 on GeeksforGeeks",
    description: "University ranked among top 20 on GeeksforGeeks platform",
    year: "2024"
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-2 bg-gradient-to-r from-secondary to-rose rounded-full mb-6"
          />
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Milestones beyond the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, rotate: 2 }}
              className="group"
            >
              <div className="relative h-full bg-card border-2 border-border rounded-2xl p-6 hover:border-foreground hover:shadow-brutal transition-all duration-300">
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent"
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-black mb-2 text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Year badge */}
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-foreground/5 text-foreground rounded-full border border-border">
                    {achievement.year}
                  </span>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};