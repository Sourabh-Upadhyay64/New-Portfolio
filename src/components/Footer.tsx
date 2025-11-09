import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-foreground text-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Name & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-2">
              Sourabh Upadhyay
            </h3>
            <p className="text-background/70 flex items-center gap-2 justify-center md:justify-start">
              Built with
              
              <span>&</span>
              <span className="font-semibold">lots of coffee</span>
            </p>
          </motion.div>

          {/* Center - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            <a href="#about" className="hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors font-medium">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </motion.div>

          {/* Right - Scroll to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            className="flex items-center justify-center w-12 h-12 bg-background text-foreground rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60"
        >
          <p>© {new Date().getFullYear()} Sourabh Upadhyay. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
