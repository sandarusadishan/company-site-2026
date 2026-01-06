import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, BarChart3, Smartphone, Wifi, ShieldCheck, ArrowRight, Zap, Layers, Box } from 'lucide-react';
import { Button } from "@/components/ui/button";

const POS = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-blue-500/30 font-sans">
      
      {/* 1. Split-Screen Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements - Softened */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
                <Zap className="w-3 h-3" />
                <span>Next-Gen Retail OS</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Retail Speed. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Enterprise Scale.
                </span>
              </h1>
              
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                The point-of-sale built for high-volume businesses. Process thousands of transactions without skipping a beat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-12 px-8 text-base rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/20 transition-all hover:scale-105">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="ghost" className="h-12 px-8 text-base rounded-full text-blue-200 hover:text-white hover:bg-white/5 border border-white/5">
                  View Hardware
                </Button>
              </div>
            </motion.div>

            {/* Right Visual (Abstract Terminal) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full aspect-square max-w-md lg:max-w-none mx-auto"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                 {/* Floating Elements simulated - Subtler */}
                 <div className="absolute top-8 right-8 w-24 h-24 bg-blue-500/10 rounded-2xl blur-xl" />
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                       <span className="text-white font-mono text-sm">Terminal_01</span>
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                       </div>
                    </div>
                    {/* Simulated Receipt/Transaction Data */}
                    <div className="space-y-3 font-mono text-sm text-blue-200/60">
                       <div className="flex justify-between"><span className="text-white">Order #88392</span><span>Just Now</span></div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ delay: 1 }} className="h-full bg-blue-500" />
                       </div>
                       <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                          <div className="flex items-center gap-3">
                            <Box className="w-4 h-4 text-indigo-400" />
                            <span>Nike Air Max</span>
                          </div>
                          <span className="text-white">$120.00</span>
                       </div>
                       <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                          <div className="flex items-center gap-3">
                            <Box className="w-4 h-4 text-indigo-400" />
                            <span>Adidas Ultraboost</span>
                          </div>
                          <span className="text-white">$180.00</span>
                       </div>
                       <div className="pt-4 flex justify-between text-lg font-bold text-white border-t border-white/5">
                          <span>Total</span>
                          <span className="text-green-400">$300.00</span>
                       </div>
                    </div>
                 </div>

                 {/* Floating Badge */}
                 <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-600/20 border border-white/10 flex items-center gap-2">
                   <Wifi className="w-4 h-4" />
                   <span className="text-xs font-bold">Online</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Bento Grid Features */}
      <section className="py-24 bg-[#080C14]">
        <div className="container px-6 mx-auto">
          <div className="mb-16 md:flex md:justify-between md:items-end text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
               <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Built for Motion</h2>
               <p className="text-slate-400 text-lg">Everything you need to sell, manage, and grow. All in one place.</p>
            </div>
            <Button variant="link" className="text-blue-400 hover:text-blue-300 mt-4 md:mt-0">View Full Specs <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Big Feature Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-[#0F1629] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
               <Smartphone className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
               <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Mobile Command Center</h3>
               <p className="text-blue-100/60 text-lg relative z-10 leading-relaxed">Untether your staff. Our mobile POS allows you to check out customers anywhere on the floor, check inventory in real-time, and manage staff schedules from your pocket.</p>
            </motion.div>

            {/* Tall Feature Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-[#0F1629] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group"
            >
               <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                    <CreditCard className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Universal Pay</h3>
                  <p className="text-slate-400 text-sm">Accept Apple Pay, Google Pay, Bitcoin, and all major cards.</p>
               </div>
               <div className="w-full h-32 bg-white/5 rounded-xl border border-white/5 mt-6 relative overflow-hidden flex items-center justify-center">
                  <span className="text-2xl font-mono text-white/20">$$$</span>
               </div>
            </motion.div>

            {/* Standard Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-[#0F1629] border border-white/5 rounded-3xl p-6 group hover:border-blue-500/20 transition-colors"
            >
               <BarChart3 className="w-8 h-8 text-green-400 mb-4" />
               <h3 className="text-lg font-bold text-white">Real-time Analytics</h3>
               <p className="text-slate-400 text-sm mt-2">Live dashboard of your sales performance.</p>
            </motion.div>

            {/* Standard Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-[#0F1629] border border-white/5 rounded-3xl p-6 group hover:border-blue-500/20 transition-colors"
            >
               <Wifi className="w-8 h-8 text-cyan-400 mb-4" />
               <h3 className="text-lg font-bold text-white">Offline Mode</h3>
               <p className="text-slate-400 text-sm mt-2">Keep selling even when the internet goes down.</p>
            </motion.div>

             {/* Standard Block */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-[#0F1629] border border-white/5 rounded-3xl p-6 group hover:border-blue-500/20 transition-colors"
            >
               <ShieldCheck className="w-8 h-8 text-purple-400 mb-4" />
               <h3 className="text-lg font-bold text-white">End-to-End Encrypt</h3>
               <p className="text-slate-400 text-sm mt-2">Military-grade protection for every transaction.</p>
            </motion.div>

             {/* Wide Block */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0F1629] border border-white/5 rounded-3xl p-6 flex items-center gap-6"
            >
               <div className="p-4 bg-white/5 rounded-full shrink-0">
                 <Layers className="w-6 h-6 text-white" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-white">Inventory Sync</h3>
                  <p className="text-slate-400 text-sm">Automatically syncs with your e-commerce store (Shopify, WooCommerce).</p>
               </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default POS;