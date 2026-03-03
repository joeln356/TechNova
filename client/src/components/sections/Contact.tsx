import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
              System Interface
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Contact</span>
            </h3>
            <p className="text-muted-foreground mb-10 max-w-md">
              Need a custom quote, have a repair inquiry, or want to check part availability? Ping our network.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-none border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Location</h4>
                  <p className="text-lg">2048 Cyber Avenue, Neon District</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-none border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Comm Link</h4>
                  <p className="text-lg">+1 (555) 888-NOVA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-none border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Data Stream</h4>
                  <p className="text-lg">ping@technova.sys</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-10 rounded-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">ID / Name</label>
                  <Input className="bg-black/50 border-white/10 focus-visible:ring-primary/50 rounded-none h-12" placeholder="User designation..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email / Node</label>
                  <Input className="bg-black/50 border-white/10 focus-visible:ring-primary/50 rounded-none h-12" placeholder="Return address..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Subject / Query</label>
                <Input className="bg-black/50 border-white/10 focus-visible:ring-primary/50 rounded-none h-12" placeholder="Diagnostic request..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Message / Data</label>
                <Textarea className="bg-black/50 border-white/10 focus-visible:ring-primary/50 rounded-none min-h-[150px] resize-none" placeholder="Provide system specs or error codes..." />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow rounded-none h-14 font-bold tracking-widest uppercase text-sm">
                Transmit Data
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}