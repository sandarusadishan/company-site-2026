import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ChefHat, Clock, Users, ArrowRight, TrendingUp, BellDot, QrCode, ClipboardCheck, Armchair } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Restaurant = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-orange-500/30 overflow-x-hidden pt-20">
      
      {/* 1. Spotlight Hero - Tamed */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        {/* Spotlight Effect - Softened */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
        
        <div className="container px-6 relative z-10 text-center">
            <motion.div
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="mb-8"
            >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.3)] mb-6">
                    <Utensils className="w-8 h-8 text-white" />
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
                  Taste of <br /> 
                  <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Efficiency</span>
                </h1>
                <p className="text-lg md:text-xl text-orange-100/70 max-w-2xl mx-auto font-light leading-relaxed">
                    Orchestrate your entire restaurant from a single dashboard. <br className="hidden md:block"/> From the first reservation to the final check.
                </p>
            </motion.div>

            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
               <Button className="h-14 px-8 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-base font-bold shadow-lg shadow-orange-600/20">
                 Book Demo
               </Button>
               <Button variant="outline" className="h-14 px-8 rounded-full border-orange-500/20 text-orange-400 hover:bg-orange-950/20 text-base">
                 See Menus
               </Button>
            </motion.div>
        </div>
      </section>

      {/* 2. Zig-Zag Story Flow - Cleaner */}
      <section className="py-24 space-y-24 md:space-y-32">
        
        {/* Step 1: Front of House */}
        <div className="container px-6 mx-auto">
           <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="relative"
                 >
                    <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">01. Front of House</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Flawless Floor Management</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                       Visual table management that updates in real-time. Know exactly which tables are reserved, occupied, or ready for cleaning. Minimize wait times and maximize turnover.
                    </p>
                    <ul className="space-y-4 inline-block text-left">
                       <li className="flex items-center gap-3 text-orange-100/80">
                         <div className="p-2 bg-orange-500/10 rounded-lg"><Armchair className="w-5 h-5 text-orange-400"/></div>
                         <span>Visual Floor Plan Editor</span>
                       </li>
                       <li className="flex items-center gap-3 text-orange-100/80">
                         <div className="p-2 bg-orange-500/10 rounded-lg"><Users className="w-5 h-5 text-orange-400"/></div>
                         <span>Waitlist Management with SMS</span>
                       </li>
                    </ul>
                 </motion.div>
              </div>
              <div className="flex-1 w-full">
                 {/* Visual representation - Simpler */}
                 <div className="relative w-full aspect-video bg-[#0F1629] rounded-3xl border border-white/10 overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    {/* Simulated Tables */}
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-500 text-sm font-mono font-bold">12</div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-500 text-lg font-mono font-bold">08</div>
                    <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-500 text-xs font-mono font-bold">04</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Step 2: The Kitchen (Reversed) */}
        <div className="container px-6 mx-auto">
           <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                    <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">02. Back of House</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Kitchen Sync</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                       Fire tickets directly to kitchen display systems (KDS). Route drinks to the bar and food to specific stations. No more lost paper tickets or shouting.
                    </p>
                    <ul className="space-y-4 inline-block text-left">
                       <li className="flex items-center gap-3 text-orange-100/80">
                         <div className="p-2 bg-red-500/10 rounded-lg"><ChefHat className="w-5 h-5 text-red-400"/></div>
                         <span>Station-based Routing</span>
                       </li>
                       <li className="flex items-center gap-3 text-orange-100/80">
                         <div className="p-2 bg-red-500/10 rounded-lg"><Clock className="w-5 h-5 text-red-400"/></div>
                         <span>Prep Time Analytics</span>
                       </li>
                    </ul>
                 </motion.div>
              </div>
              <div className="flex-1 w-full">
                  <div className="relative w-full aspect-video bg-[#0F1629] rounded-3xl border border-white/10 p-6 flex gap-4 overflow-hidden shadow-2xl">
                      {/* Simulated KDS Tickets */}
                      <div className="w-1/3 bg-yellow-900/10 border border-yellow-500/30 rounded-xl p-3 flex flex-col gap-2">
                         <div className="h-1.5 w-1/2 bg-yellow-500/40 rounded" />
                         <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                         <div className="mt-auto h-6 bg-yellow-500/10 rounded flex items-center justify-center text-yellow-500 text-[10px] font-bold tracking-wider">PREPARING</div>
                      </div>
                      <div className="w-1/3 bg-green-900/10 border border-green-500/30 rounded-xl p-3 flex flex-col gap-2">
                         <div className="h-1.5 w-1/2 bg-green-500/40 rounded" />
                         <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                         <div className="mt-auto h-6 bg-green-500/10 rounded flex items-center justify-center text-green-500 text-[10px] font-bold tracking-wider">READY</div>
                      </div>
                      <div className="w-1/3 bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col gap-2 opacity-30">
                          <div className="h-1.5 w-1/2 bg-white/20 rounded" />
                      </div>
                  </div>
              </div>
           </div>
        </div>

        {/* Step 3: Analytics (Normal) */}
        <div className="container px-6 mx-auto">
           <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                    <span className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">03. Intelligence</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Menu Engineering</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                       Understand your food costs down to the ingredient. Identify star dishes and dogs. Optimize your menu for maximum profitability using data, not guesses.
                    </p>
                     <ul className="space-y-4 inline-block text-left">
                       <li className="flex items-center gap-3 text-orange-100/80">
                         <div className="p-2 bg-amber-500/10 rounded-lg"><TrendingUp className="w-5 h-5 text-amber-400"/></div>
                         <span>Profit Margin Analysis</span>
                       </li>
                       <li className="flex items-center gap-3 text-orange-100/80">
                         <div className="p-2 bg-amber-500/10 rounded-lg"><ClipboardCheck className="w-5 h-5 text-amber-400"/></div>
                         <span>Automated Inventory Depletion</span>
                       </li>
                    </ul>
                 </motion.div>
              </div>
              <div className="flex-1 w-full">
                 <div className="relative w-full aspect-square max-w-sm mx-auto bg-gradient-to-t from-orange-500/10 to-transparent rounded-full border border-orange-500/20 flex items-end justify-center pb-0 overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "60%" }}
                      className="w-16 bg-orange-600 mx-2 rounded-t-lg opacity-80" 
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "80%" }}
                      transition={{ delay: 0.2 }}
                      className="w-16 bg-amber-500 mx-2 rounded-t-lg opacity-90" 
                    />
                     <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "40%" }}
                      transition={{ delay: 0.4 }}
                      className="w-16 bg-red-600 mx-2 rounded-t-lg opacity-80" 
                    />
                 </div>
              </div>
           </div>
        </div>

      </section>
    </div>
  );
};

export default Restaurant;