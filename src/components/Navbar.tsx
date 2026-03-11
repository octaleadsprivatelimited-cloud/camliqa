import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground"
        >
          <Menu size={22} />
        </button>

        <div className="hidden lg:flex items-center gap-8 text-sm tracking-widest uppercase font-body text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors duration-300">Shop</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Collections</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">About</a>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2 font-display text-2xl lg:text-3xl font-light tracking-[0.2em] text-foreground">
          CAMLIQA
        </a>

        <div className="flex items-center gap-6 text-sm tracking-widest uppercase font-body text-muted-foreground">
          <a href="#" className="hidden lg:block hover:text-foreground transition-colors duration-300">Journal</a>
          <button className="hover:text-foreground transition-colors duration-300 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center">0</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
        >
          <div className="flex flex-col px-6 py-6 gap-4 text-sm tracking-widest uppercase font-body text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Shop</a>
            <a href="#" className="hover:text-foreground transition-colors">Collections</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Journal</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
