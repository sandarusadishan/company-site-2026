import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, FileText, UserPlus, HeartPulse, Building2, ArrowRight, Shield, Syringe, Ambulance, Brain, Microscope } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hospital = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-cyan-500/30 font-sans">
      
      {/* 1. Hero: The "Life Shield" Interface */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center">
         {/* Background Grid - Fainter */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
         
         <div className="container px-6 relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10 relative inline-block"
            >
               {/* Pulse Rings - Slower & Fainter */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-cyan-500/10 rounded-full animate-[ping_4s_linear_infinite]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/5 rounded-full animate-[ping_5s_linear_infinite_1s]" />
               
               <div className="relative z-10 bg-gradient-to-tr from-cyan-600 to-blue-700 p-6 rounded-3xl shadow-xl shadow-cyan-500/20">
                  <HeartPulse className="w-12 h-12 text-white" />
               </div>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Heartbeat</span> of <br/> Modern Care
            </h1>
            <p className="text-lg md:text-xl text-cyan-100/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Integrated Hospital Management System (HMS) designed for accuracy, speed, and patient safety. 
              Zero downtime. 100% Compliance.
            </p>
            
            <div className="flex justify-center gap-4">
               <Button className="h-12 px-8 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg shadow-cyan-600/20 text-base font-medium">
                 Explore Modules
               </Button>
            </div>
         </div>
      </section>

      {/* 2. Feature Grid: Connected Nodes */}
      <section className="py-24 bg-[#080C14] relative">
         <div className="container px-6 mx-auto">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
               {[
                 { title: "Admission & Discharge", icon: UserPlus, color: "text-cyan-400", border: "border-cyan-500/20" },
                 { title: "Clinical Modules", icon: Stethoscope, color: "text-blue-400", border: "border-blue-500/20" },
                 { title: "Pharmacy & Store", icon: Syringe, color: "text-emerald-400", border: "border-emerald-500/20" },
                 { title: "Laboratory", icon: Microscope, color: "text-purple-400", border: "border-purple-500/20" },
                 { title: "Radiology (PACS)", icon: Brain, color: "text-pink-400", border: "border-pink-500/20" },
                 { title: "Ambulance Mgt.", icon: Ambulance, color: "text-red-400", border: "border-red-500/20" },
                 { title: "Electronic Records", icon: FileText, color: "text-sky-400", border: "border-sky-500/20" },
                 { title: "Insurance Claims", icon: Shield, color: "text-orange-400", border: "border-orange-500/20" },
                 { title: "Multi-Location", icon: Building2, color: "text-indigo-400", border: "border-indigo-500/20" }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.02)" }}
                    className={`bg-[#0F1629] p-6 rounded-2xl border ${item.border} flex flex-col items-center text-center cursor-default transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/10`}
                  >
                     <div className={`p-3 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                     <div className={`w-8 h-1 rounded-full bg-current ${item.color} opacity-20 mt-auto`} />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. The Trust Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#050912]">
         <div className="container px-6 mx-auto flex flex-col items-center">
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-12">Security & Compliance</h2>
            <div className="flex flex-wrap justify-center gap-6">
               {['HIPAA Certified', 'GDPR Compliant', 'ISO 27001', 'HL7 Standards'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 bg-cyan-900/10 text-cyan-300 font-bold tracking-wide uppercase text-sm">
                     <Shield className="w-4 h-4" />
                     {badge}
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Hospital;