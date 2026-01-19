import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Play, ExternalLink, Box, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductPageLayout = ({ 
  title, 
  subtitle, 
  description, 
  demoLink, 
  images = [], 
  features = [], 
  colorTheme = "blue"
}) => {
  
  const gradients = {
    blue: "from-blue-400 via-cyan-400 to-indigo-400",
    purple: "from-purple-400 via-pink-400 to-rose-400",
    green: "from-emerald-400 via-teal-400 to-cyan-400",
    orange: "from-orange-400 via-amber-400 to-yellow-400",
    red: "from-red-400 via-rose-400 to-pink-400",
    indigo: "from-indigo-400 via-violet-400 to-purple-400"
  };

  const bgGradients = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    green: "bg-emerald-600",
    orange: "bg-orange-600",
    red: "bg-red-600",
    indigo: "bg-indigo-600"
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-blue-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className={`absolute top-0 right-0 w-[50%] h-[50%] ${bgGradients[colorTheme]}/10 blur-[120px] rounded-full pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 w-[30%] h-[50%] ${bgGradients[colorTheme]}/5 blur-[100px] rounded-full pointer-events-none`} />
        
        <div className="container px-8 md:px-16 lg:px-24 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 text-center lg:text-left"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-${colorTheme}-400 text-xs font-bold tracking-wider uppercase`}>
                <Zap className="w-3 h-3" />
                <span>Enterprise Grade</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                {title} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients[colorTheme]}`}>
                  {subtitle}
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className={`h-14 px-8 text-base rounded-full ${bgGradients[colorTheme]} hover:bg-opacity-90 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20 transition-all hover:scale-105`} asChild>
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 w-5 h-5 fill-current" /> Live Demo
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="h-14 px-8 text-base rounded-full text-slate-200 hover:text-white hover:bg-white/5 border border-white/5">
                  View Documentation
                </Button>
              </div>
            </motion.div>

            {/* Right Visual (Main Image) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full aspect-video lg:max-w-xl mx-auto"
            >
               {images[0] && (
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${gradients[colorTheme]} opacity-20 mix-blend-overlay group-hover:opacity-10 transition-opacity`} />
                    <img src={images[0]} alt={`${title} screenshot 1`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
               )}
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -right-6 bg-[#0F1629] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                  <div className={`w-12 h-12 rounded-full ${bgGradients[colorTheme]} flex items-center justify-center`}>
                    <Box className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Version</div>
                    <div className="text-white font-bold text-lg">v24.0 Ready</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {images.length > 1 && (
        <section className="py-20 bg-[#080C14] border-y border-white/5">
          <div className="container px-8 md:px-16 lg:px-24 mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-display text-3xl font-bold text-white mb-4">Interface Gallery</h2>
               <p className="text-slate-400">Designed for clarity, speed, and efficiency.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {images.slice(1).map((img, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative rounded-2xl -10 overflow-hidden shadow-2xl border border-white/5 hover:border-white/20 transition-all cursor-zoom-in"
                 >
                    <div className="aspect-[16/10] overflow-hidden">
                       <img src={img} alt={`${title} screenshot ${idx + 2}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                          <ExternalLink className="w-4 h-4" /> View Fullscreen
                       </span>
                    </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="py-24">
        <div className="container px-8 md:px-16 lg:px-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-[#0F1629] border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-2xl ${bgGradients[colorTheme]} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${colorTheme}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductPageLayout;
