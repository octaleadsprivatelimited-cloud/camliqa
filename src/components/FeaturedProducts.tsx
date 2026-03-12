import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import grapeSeedFaceWash from "@/assets/grape-seed-face-wash.jpg";
import redSandalSoap from "@/assets/red-sandal-soap.jpg";
import aloeveraFaceWash from "@/assets/aloevera-face-wash.jpg";
import sunnipindiSoap from "@/assets/sunnipindi-soap.jpg";
import brighteningCream from "@/assets/brightening-cream.jpg";
import moisturizingCream from "@/assets/moisturizing-cream.jpg";
import goldCream from "@/assets/gold-cream.jpg";
import fruitMixCream from "@/assets/fruit-mix-cream.jpg";
import papayaFacePack from "@/assets/papaya-face-pack.jpg";
import scrubPowder from "@/assets/scrub-powder.jpg";

const products = [
  { image: grapeSeedFaceWash, name: "Grape Seed Face Wash", price: "₹299", category: "Face Wash" },
  { image: aloeveraFaceWash, name: "Aloevera & Tea Tree Face Wash", price: "₹299", category: "Face Wash" },
  { image: redSandalSoap, name: "Red Sandal & Olive Oil Soap", price: "₹149", category: "Soap" },
  { image: sunnipindiSoap, name: "Sunnipindi & Olive Oil Soap", price: "₹149", category: "Soap" },
  { image: brighteningCream, name: "Brightening Cream", price: "₹499", category: "Cream" },
  { image: moisturizingCream, name: "Moisturizing Cream", price: "₹499", category: "Cream" },
  { image: goldCream, name: "Gold Cream", price: "₹599", category: "Cream" },
  { image: fruitMixCream, name: "Fruit Mix Cream", price: "₹599", category: "Cream" },
  { image: papayaFacePack, name: "Papaya Face Pack", price: "₹199", category: "Face Pack" },
  { image: scrubPowder, name: "Body Cleansing Scrub Powder", price: "₹149", category: "Scrub" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
