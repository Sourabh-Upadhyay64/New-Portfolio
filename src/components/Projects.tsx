import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Dev-Circle",
    subtitle: "Event/Hackathon Platform",
    description: "Full-stack MERN platform with event creation, registration, submission tracking, and JWT-based role-based access control (organizers/judges/participants). Features real-time updates via WebSockets, deployed on AWS, and containerized with Docker.",
    tech: ["React", "Node.js", "MongoDB", "WebSockets", "Docker", "AWS"],
    gradient: "from-primary to-accent",
    emoji: "🚀",
    githubUrl: "https://github.com/Sourabh-Upadhyay64/Dev",
    liveUrl: "https://devcircles.netlify.app/"
  },
  {
    title: "Quick Serve",
    subtitle: "QR Code Ordering System",
    description: "QR-based ordering platform with separate customer, kitchen, and admin interfaces. Real-time order tracking using Node.js event emitters and WebSockets. Includes inventory management with low-stock alerts and automated menu availability.",
    tech: ["Node.js", "WebSockets", "QR", "Express.js"],
    gradient: "from-accent to-secondary",
    emoji: "🍕",
    githubUrl: "https://github.com/Sourabh-Upadhyay64/Project0",
    liveUrl: "https://project0-2upk.vercel.app/customer"
  },
  {
    title: "AI Resume Guide",
    subtitle: "HR Tech",
    description: "AI-powered tool analyzing resumes against job descriptions, providing match scores and generating interview questions automatically.",
    tech: ["React", "Python", "OpenAI"],
    gradient: "from-secondary to-rose",
    emoji: "📊",
    githubUrl: "https://github.com/Sourabh-Upadhyay64/Resume-Guide",
    liveUrl: "https://resume-guide-ai.vercel.app/"
  },
  {
    title: "Crypto Engine",
    subtitle: "Cryptocurrency Matching Engine",
    description: "High-performance cryptocurrency matching engine with order book management and real-time trade execution capabilities.",
    tech: ["TypeScript", "Redis", "WebSocket"],
    gradient: "from-rose to-primary",
    emoji: "₿",
    githubUrl: "https://github.com/Sourabh-Upadhyay64/REG_Engine"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-muted relative overflow-hidden">
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
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6"
          />
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of projects I'm proud of — each solving real problems with clean code
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`relative bg-card border-4 border-foreground rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-brutal transition-all duration-300 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10 grid md:grid-cols-[1fr,2fr] gap-8 items-start">
                  {/* Left - Visual */}
                  <div>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className="text-8xl mb-4"
                    >
                      {project.emoji}
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background border border-border rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-4xl font-black mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-3 pt-4">
                      {project.liveUrl && (
                        <Button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="bg-foreground text-background hover:bg-foreground/90 font-semibold group/btn"
                        >
                          View Live
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          variant="outline"
                          className="border-2 border-foreground hover:bg-foreground hover:text-background font-semibold"
                        >
                          <Github className="mr-2 w-4 h-4" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
