import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, Share2, Layers, Cpu, ArrowRight, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Microservices = () => {
  return (
    <>
      <Helmet>
        <title>Microservices Solutions | SoftVision IT Group</title>
        <meta name="description" content="Modernize your legacy applications with microservices. Decoupled architecture, independent scaling, and fault tolerance." />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1e1b4b]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-8">
                <Boxes className="h-4 w-4 text-indigo-300" />
                <span className="text-sm font-medium text-indigo-200">Distributed Systems</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Modular <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-orange-400">
                  Architecture
                </span>
              </h1>
              
              <p className="text-xl text-indigo-100/70 mb-10 leading-relaxed max-w-lg">
                Break free from monoliths. Build scalable, resilient, and agile applications composed of independent microservices.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/20" asChild>
                  <Link to="/company/contact">
                    Decompose Monoliths <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 grid grid-cols-2 gap-4 max-w-sm mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="p-6 rounded-2xl bg-indigo-500/20 border border-indigo-500/50 flex flex-col items-center gap-2">
                     <div className="h-3 w-3 rounded-full bg-green-400 self-end mb-2" />
                     <Share2 className="h-8 w-8 text-indigo-300" />
                     <span className="text-xs font-bold text-white">API Gateway</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/50 flex flex-col items-center gap-2 mt-8">
                     <div className="h-3 w-3 rounded-full bg-green-400 self-end mb-2" />
                     <Users className="h-8 w-8 text-orange-300" />
                     <span className="text-xs font-bold text-white">Auth Service</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-violet-500/10 border border-violet-500/50 flex flex-col items-center gap-2 -mt-8">
                     <div className="h-3 w-3 rounded-full bg-green-400 self-end mb-2" />
                     <Boxes className="h-8 w-8 text-violet-300" />
                     <span className="text-xs font-bold text-white">Inventory</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/50 flex flex-col items-center gap-2">
                     <div className="h-3 w-3 rounded-full bg-green-400 self-end mb-2" />
                     <CreditCard className="h-8 w-8 text-blue-300" />
                     <span className="text-xs font-bold text-white">Payment</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Decoupling", description: "Isolate faults and scale individual components independently.", color: "text-indigo-500", bg: "bg-indigo-500/10" },
              { icon: Zap, title: "Agility", description: "Deploy features faster with smaller, focused development teams.", color: "text-orange-500", bg: "bg-orange-500/10" },
              { icon: Server, title: "Resilience", description: "Ensure system availability even if individual services fail.", color: "text-violet-500", bg: "bg-violet-500/10" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
import { CreditCard, Users } from "lucide-react"; // Import missing icons

export default Microservices;
