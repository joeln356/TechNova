import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, MonitorDot } from "lucide-react";
import heroImg from "@/assets/images/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img 
          src={heroImg} 
          alt="High-tech computer background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-20 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Next-Gen Performance
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Power Up</span>
            <span className="block neon-text">Your Setup</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Premium custom builds, cutting-edge hardware, and expert repair services. 
            Elevate your digital experience with TechNova.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow rounded-none h-14 px-8 font-bold tracking-widest uppercase text-sm flex items-center gap-2 group">
              <MonitorDot size={18} />
              Buy PC Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:border-primary/50 hover:bg-primary/10 rounded-none h-14 px-8 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <Wrench size={18} />
              Repair Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwyNDAsMjU1LDAuMSkiLz48L3N2Zz4=')] z-0 opacity-50 [mask-image:linear-gradient(to_top_left,white,transparent)]" />
    </section>
  );
}