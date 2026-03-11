import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">Our Philosophy</p>
            <h2 className="text-4xl lg:text-6xl font-display font-light leading-tight text-foreground mb-8">
              Crafted with
              <br />
              <span className="italic text-accent">Intention</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body font-light text-base lg:text-lg">
              At Camliqa, we believe in the power of simplicity. Every product in our collection is thoughtfully formulated using the finest natural ingredients, designed to elevate your daily rituals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body font-light">
              From sourcing to formulation, we maintain an unwavering commitment to quality, sustainability, and the art of living beautifully.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm tracking-[0.15em] uppercase text-foreground font-body border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-accent/10 via-secondary to-muted flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="font-display text-8xl lg:text-9xl font-light text-foreground/10">C</span>
                </div>
              </motion.div>
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
