import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Mercer",
    role: "Professional Streamer",
    content: "TechNova built my dual-PC streaming setup and it's absolutely flawless. Cable management is art, and temps stay icy cold during 12-hour streams.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Graphic Designer",
    content: "My workstation crashed right before a major deadline. They recovered my drives and had me back up and running with a new SSD in under 24 hours.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Esports Competitor",
    content: "Upgraded my GPU and cooling loop here. Their attention to detail on the custom waterblock routing is unmatched in the city.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
            Client Success
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Feedback</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl relative"
            >
              <Quote size={40} className="absolute top-6 right-6 text-white/5" />
              
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8 relative z-10 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wider">{t.name}</h5>
                  <p className="text-xs text-primary/80">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}