import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  index: number;
}

const ProductCard = ({ image, name, price, category, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden mb-5 bg-secondary aspect-[3/4]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-foreground/10 flex items-end justify-center pb-6"
        >
          <span className="px-6 py-2.5 bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-[0.2em] uppercase font-body">
            Quick View
          </span>
        </motion.div>
      </div>
      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1 font-body">{category}</p>
      <h3 className="font-display text-xl font-light text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground font-body">{price}</p>
    </motion.div>
  );
};

export default ProductCard;
