import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Sourabh-Upadhyay64" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sourabh-upadhyay-445060243/" },
  { icon: Mail, label: "Email", href: "mailto:sourabhupadhyay899@gmail.com" }
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary/20 to-rose/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-card border-2 border-foreground/10 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Let's work together</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Got a project<br />in mind?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new ideas and opportunities. Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-2 border-border focus:border-foreground text-lg p-6 rounded-2xl"
                />
                
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-2 border-border focus:border-foreground text-lg p-6 rounded-2xl"
                />
                
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card border-2 border-border focus:border-foreground text-lg p-6 rounded-2xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold text-lg py-6 rounded-2xl group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:pl-12"
          >
            {/* Big contact card */}
            <div className="bg-card border-4 border-foreground rounded-3xl p-8 shadow-brutal">
              <h3 className="text-2xl font-black mb-4">Let's connect! 👋</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a project in mind, want to collaborate, 
                or just fancy a chat about tech — I'm all ears!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">sourabhupadhyay899@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-2xl">📍</span>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-14 h-14 bg-card border-2 border-border hover:border-foreground rounded-2xl transition-colors group"
                  >
                    <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun fact card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-br from-primary to-accent text-white border-4 border-foreground rounded-2xl p-6 shadow-brutal"
            >
              <p className="font-bold text-lg mb-2">⚡ Fun Fact</p>
              <p className="opacity-90">
                I debug code faster after a cup of coffee. Coincidence? I think not.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
