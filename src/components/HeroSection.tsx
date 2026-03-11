import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import GravityParticles from "./GravityParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <GravityParticles />

      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Camliqa luxury collection"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
          >
            New Collection 2026
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[0.9] mb-8 text-foreground"
          >
            Beauty
            <br />
            <span className="italic font-light text-accent">Redefined</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-md font-body font-light"
          >
            Discover our curated collection of premium essentials, crafted with intention and purpose.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-body hover:bg-accent hover:text-accent-foreground transition-all duration-500"
            >
              Explore
            </a>
            <a
              href="#story"
              className="inline-flex items-center px-8 py-3.5 border border-foreground/20 text-foreground text-sm tracking-[0.15em] uppercase font-body hover:border-foreground/60 transition-all duration-500"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
