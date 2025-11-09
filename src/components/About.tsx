import { motion } from "framer-motion";
import { Sparkles, Zap, Heart, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    label: "Full-Stack Dev",
    color: "from-primary to-accent"
  },
  {
    icon: Zap,
    label: "450+ DSA Solved",
    color: "from-accent to-secondary"
  },
  {
    icon: Heart,
    label: "SDG Secretary",
    color: "from-secondary to-rose"
  },
  {
    icon: Trophy,
    label: "SIH Selected",
    color: "from-rose to-primary"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-morph" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main card with brutal shadow */}
            <div className="relative bg-card border-4 border-foreground rounded-3xl p-8 shadow-brutal">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl rotate-12 flex items-center justify-center text-4xl shadow-brutal">
                👨‍💻
              </div>
              
              <div className="space-y-6 pt-4">
                <div>
                  <h3 className="text-3xl font-black mb-2">Hey there! 👋</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I'm a proactive Full Stack Software Engineer currently pursuing B.Tech in Computer Science from 
                    <span className="font-semibold text-foreground"> Birla Institute of Applied Sciences</span>. 
                    I specialize in building scalable web applications with React, TypeScript, Node.js, and cloud technologies.
                  </p>
                </div>
                
                <div className="pt-4 border-t-2 border-dashed border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Currently working as a Software Engineer Intern at Dev-Evelopers Software & Solutions, where I've optimized 
                    API performance by ~40% and built modular UI components that reduced development time by ~30%. 
                    When I'm not coding, I'm solving DSA problems on GeeksforGeeks and LeetCode (450+ solved!) or leading 
                    sustainability initiatives as Secretary of SDG Club.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-secondary text-secondary-foreground border-4 border-foreground rounded-2xl p-6 shadow-brutal max-w-xs"
            >
              <p className="font-bold text-lg">Software Engineer Intern</p>
              <p className="text-sm opacity-90">Currently @ Dev-Evelopers Software & Solutions</p>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-4"
              />
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Building ideas into reality
              </h2>
              <p className="text-xl text-muted-foreground">
                One line of code at a time
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group cursor-default"
                >
                  <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-foreground transition-all">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-3`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-foreground">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { num: "8.0", label: "Current GPA" },
                { num: "450+", label: "Problems Solved" },
                { num: "99.2%", label: "Uptime Achieved" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
