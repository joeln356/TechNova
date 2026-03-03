import { motion } from "framer-motion";
import { ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import pcImg from "@/assets/images/product-pc.png";
import laptopImg from "@/assets/images/product-laptop.png";
import gpuImg from "@/assets/images/product-gpu.png";

const products = [
  {
    id: 1,
    name: "NovaX Pro Gaming Desktop",
    category: "Custom Build",
    price: "$2,499",
    image: pcImg,
    specs: ["RTX 4080 Super", "Intel Core i9", "32GB DDR5"],
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Aero Stealth Book",
    category: "Ultrabook",
    price: "$1,299",
    image: laptopImg,
    specs: ["M2 Pro Chip", "16GB Unified", "1TB SSD"],
  },
  {
    id: 3,
    name: "RTX 4090 Phantom",
    category: "Components",
    price: "$1,599",
    image: gpuImg,
    specs: ["24GB GDDR6X", "DLSS 3.0", "Ray Tracing"],
    badge: "New"
  },
  {
    id: 4,
    name: "NovaX Elite Workstation",
    category: "Workstation",
    price: "$3,199",
    image: pcImg,
    specs: ["Threadripper", "128GB ECC", "2TB NVMe"],
  }
];

export function FeaturedProducts() {
  return (
    <section id="products" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2 flex items-center gap-2">
              <Zap size={16} /> Featured Gear
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Hardware</span>
            </h3>
          </div>
          <Button variant="outline" className="rounded-none border-primary/30 text-primary hover:bg-primary hover:text-black font-bold tracking-widest uppercase text-xs px-6">
            View All Store
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-panel rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-square p-6 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center">
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-2">
                  {product.category}
                </div>
                <h4 className="text-lg font-bold mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
                
                <ul className="space-y-1 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-black font-display">{product.price}</span>
                  <Button size="icon" className="rounded-full bg-white/5 hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}