import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, FileCheck, Shield, PieChart, Landmark, ArrowRight, Wallet, Users, Clock, Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Payroll = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-green-500/30 overflow-hidden font-sans">
      
      {/* 1. Hero: Data Flow Dashboard */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Animated Digital Rain - Very Subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
           {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: '100vh', opacity: [0, 0.3, 0] }}
                transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
                className="absolute text-green-500/20 font-mono text-[10px] select-none"
                style={{ left: `${Math.random() * 100}%` }}
              >
                 {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
           ))}
        </div>

        <div className="container px-6 mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6 text-center lg:text-left">
               <div className="inline-block px-3 py-1.5 rounded-lg bg-green-500/10 border-l-2 border-green-500 text-green-400 font-mono font-bold text-xs">
                  $ STATUS: PRECISE
               </div>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Payroll That <br/>
                  <span className="text-green-500">Makes Sense.</span>
               </h1>
               <p className="text-lg text-green-100/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Automate calculations, tax filings, and compliance. Turn complex spreadsheets into a single click operation.
               </p>
               <Button className="h-12 px-8 bg-green-600 hover:bg-green-500 text-white rounded-lg font-mono text-base shadow-lg shadow-green-900/20 border border-green-500 transition-all hover:-translate-y-1">
                  RUN_PAYROLL() <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </div>

            {/* Hero Visual: The "Dashboard" Card Stack */}
            <div className="relative h-[400px] w-full perspective-[1000px] mx-auto max-w-md lg:max-w-none">
               {/* Card 2 (Back) */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.5 }}
                 className="absolute top-8 left-8 right-8 h-[300px] bg-slate-800 rounded-2xl border border-white/5"
               />
               {/* Card 1 (Front - Main Dashboard) */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="absolute top-12 left-0 right-0 h-[320px] bg-[#0F1629] rounded-2xl border border-green-500/20 p-6 shadow-2xl flex flex-col gap-4 overflow-hidden"
               >
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                     </div>
                     <span className="text-[10px] font-mono text-slate-500">Payroll_Wizard.exe</span>
                  </div>
                  
                  {/* Simulated Chart/Stats */}
                  <div className="flex gap-4">
                     <div className="bg-green-500/5 p-3 rounded-lg flex-1 border border-green-500/10">
                        <span className="text-[10px] text-green-400 font-mono">NET PAY</span>
                        <div className="text-xl font-bold text-white">$142k</div>
                     </div>
                     <div className="bg-blue-500/5 p-3 rounded-lg flex-1 border border-blue-500/10">
                        <span className="text-[10px] text-blue-400 font-mono">TAXES</span>
                        <div className="text-xl font-bold text-white">$38.5k</div>
                     </div>
                  </div>

                  {/* Simulated Profile List */}
                  <div className="space-y-2 mt-auto">
                     {[1,2].map((_, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-slate-700" />
                              <div className="h-1.5 w-20 bg-slate-700 rounded" />
                           </div>
                           <div className="h-1.5 w-10 bg-green-500/30 rounded" />
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>

        </div>
      </section>

      {/* 2. Features: The Widget Grid */}
      <section className="py-24 bg-[#080C14]">
         <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               
               {[
                 { title: "Auto-Calculations", icon: Calculator, desc: "Allowances, deductions, and overtime automatically computed.", col: "" },
                 { title: "Compliance Shield", icon: Shield, desc: "Built-in tax laws and labor regulations.", col: "" },
                 { title: "Cost Analytics", icon: PieChart, desc: "Visualize labor costs by department, project, or location.", col: "md:col-span-2 lg:col-span-1" },
                 { title: "Direct Deposit", icon: Wallet, desc: "One-click disbursements to bank accounts globally.", col: "" },
                 { title: "Leave Sync", icon: Calendar, desc: "Integrates with leave management automatically.", col: "" },
                 { title: "Employee Portal", icon: Users, desc: "Self-service payslips and tax forms.", col: "" }
               ].map((item, i) => (
                   <div key={i} className={`bg-[#0F1629] rounded-xl p-1 border border-white/5 hover:border-green-500/30 transition-colors ${item.col}`}>
                      <div className="bg-[#0B1120] rounded-lg p-6 h-full flex flex-col items-start">
                         <div className="w-10 h-10 bg-green-900/10 rounded-lg flex items-center justify-center mb-4">
                            <item.icon className="w-5 h-5 text-green-500" />
                         </div>
                         <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                         <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
               ))}

            </div>
         </div>
      </section>

    </div>
  );
};

export default Payroll;
