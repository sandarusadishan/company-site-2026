import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Radio, Signal, Globe, Zap, ArrowRight, Network, Wifi, TowerControl } from "lucide-react";
import { Button } from "@/components/ui/button";

const Telecom = () => {
  return (
    <>
      <Helmet>
        <title>Telecom Solutions | SoftVision IT Group</title>
        <meta name="description" content="Next-gen telecom solutions. 5G network management, SDN/NFV, and IoT connectivity platforms for modern service providers." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0f0720]">
        {/* Abstract Background - Signals */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-md mb-8">
                <Signal className="h-4 w-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-300">Next-Gen Connectivity</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Unbound <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400">
                  Networks
                </span>
              </h1>
              
              <p className="text-xl text-violet-100/70 mb-10 leading-relaxed max-w-lg">
                Empower your infrastructure with high-performance telecom software. From 5G rollouts to intelligent network management.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-lg shadow-violet-600/20" asChild>
                  <Link to="/company/contact">
                    Connect Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
                 <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
                 <div className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl h-full flex flex-col justify-center items-center text-center">
                    <TowerControl className="h-20 w-20 text-violet-400 mb-6" />
                    <div className="text-3xl font-bold text-white mb-2">5G Ready</div>
                    <p className="text-violet-200">Ultra-low latency architecture</p>
                    
                    <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                       <div className="p-4 rounded-xl bg-violet-950/50 border border-violet-500/30">
                          <Wifi className="h-6 w-6 text-fuchsia-400 mx-auto mb-2" />
                          <div className="text-xs font-bold text-white">IoT</div>
                       </div>
                       <div className="p-4 rounded-xl bg-violet-950/50 border border-violet-500/30">
                          <Network className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xs font-bold text-white">SDN</div>
                       </div>
                       <div className="p-4 rounded-xl bg-violet-950/50 border border-violet-500/30">
                          <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                          <div className="text-xs font-bold text-white">Fast</div>
                       </div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Radio, title: "Network Orchestration", description: "Automate network slicing and resource allocation for 5G cores.", color: "text-violet-500", bg: "bg-violet-500/10" },
              { icon: Globe, title: "Global Connectivity", description: "Seamless roaming and interconnect billing solutions.", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Wifi, title: "IoT Platforms", description: "Manage millions of connected devices with our scalable IoT hub.", color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
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

export default Telecom;
