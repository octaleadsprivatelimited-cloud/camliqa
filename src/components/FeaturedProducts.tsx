import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  { image: product1, name: "Essence Sérum", price: "₹6,499", category: "Skincare" },
  { image: product2, name: "Ritual Balm", price: "₹5,199", category: "Body Care" },
  { image: product3, name: "Noir Crème", price: "₹4,499", category: "Skincare" },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Curated</p>
            <h2 className="text-4xl lg:text-5xl font-display font-light text-foreground">
              Featured <span className="italic">Essentials</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-body border-b border-muted-foreground/30 pb-0.5"
          >
            View All
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
