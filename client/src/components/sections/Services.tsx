import { motion } from "framer-motion";
import { Cpu, HardDrive, ShieldAlert, Wrench } from "lucide-react";

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Diagnostic & Repair",
    description: "Comprehensive hardware and software diagnostics. Fast, reliable repairs for all major brands."
  },
  {
    icon: <Cpu size={32} />,
    title: "Custom PC Builds",
    description: "Tailor-made systems optimized for gaming, content creation, or professional workstation needs."
  },
  {
    icon: <HardDrive size={32} />,
    title: "Data Recovery",
    description: "Advanced data retrieval from failing drives, corrupted arrays, and accidentally deleted partitions."
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Virus & Malware",
    description: "Deep system cleaning, threat removal, and installation of robust security protocols."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10 border-t border-white/5">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBoLTQweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0zOS41IDB2NDBINDBWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] z-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
            Expert Technicians
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Services</span>
          </h3>
          <p className="text-muted-foreground">
            From basic troubleshooting to extreme custom water-cooled builds, our certified engineers have the expertise to handle any technological challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-white/5 hover:border-primary/40 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}