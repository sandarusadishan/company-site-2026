import React from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Users, Key, Star, Coffee, Wifi, ArrowRight, CalendarCheck, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hotel = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* 1. Cinematic Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[#0B1120]/70 z-10" />
           {/* Abstract shapes - Softened */}
           <div className="absolute top-0 right-0 w-[80vw] h-[100vh] bg-gradient-to-l from-emerald-900/10 to-transparent" />
        </div>
        
        <div className="container px-6 relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="inline-flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
                   <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                   <span className="text-emerald-100 uppercase tracking-[0.3em] text-[10px] md:text-xs">The Gold Standard</span>
                   <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 text-white">
                   LUXURY
                </h1>
                <p className="text-lg md:text-xl text-emerald-100/60 font-light max-w-xl mx-auto mb-10 italic">
                   "Hospitality is not just service. It's an art form."
                </p>
                <Button variant="outline" className="h-14 px-10 rounded-none border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs font-bold">
                   Explore The Suite
                </Button>
             </motion.div>
        </div>
      </section>

      {/* 2. Horizontal Scroll Showcase - Native Scroll Friendly */}
      <section className="bg-[#080C14] py-12">
        <div className="container px-6 mx-auto mb-8">
            <h2 className="font-display text-3xl md:text-5xl text-white font-bold">Guest Journey</h2>
            <p className="text-slate-400 mt-2">Swipe to explore the experience.</p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory">
           <div className="flex gap-6 px-6 md:px-20 w-max">
              
              {/* Feature Cards */}
              {[
                { 
                   title: "Digital Key", 
                   icon: Key, 
                   desc: "No more plastic cards. Guests unlock rooms with their phone.", 
                   img: "bg-emerald-900/10"
                },
                { 
                   title: "Smart Room", 
                   icon: Wifi, 
                   desc: "IoT integration for climate, lighting, and entertainment control.", 
                   img: "bg-teal-900/10"
                },
                { 
                   title: "Experiences", 
                   icon: Coffee, 
                   desc: "One-tap booking for spa, dining, and local excursions.", 
                   img: "bg-cyan-900/10"
                },
                { 
                   title: "Concierge", 
                   icon: Users, 
                   desc: "AI-powered chat for instant request fulfillment.", 
                   img: "bg-emerald-900/10"
                }
              ].map((card, i) => (
                 <div key={i} className="relative group w-[85vw] md:w-[400px] h-[500px] bg-[#0F1629] border border-white/5 flex flex-col justify-end p-8 overflow-hidden snap-center rounded-3xl hover:border-emerald-500/30 transition-colors">
                    <div className={`absolute inset-0 ${card.img} opacity-30`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629] via-transparent to-transparent" />
                    
                    <div className="relative z-10">
                       <card.icon className="w-10 h-10 text-emerald-400 mb-6" />
                       <h3 className="font-display text-3xl text-white font-bold mb-4">{card.title}</h3>
                       <p className="text-emerald-100/60 text-lg leading-relaxed">{card.desc}</p>
                    </div>
                 </div>
              ))}

              {/* End Card */}
              <div className="w-[85vw] md:w-[300px] h-[500px] flex flex-col justify-center items-center bg-emerald-900/5 border border-emerald-500/10 snap-center rounded-3xl">
                 <h2 className="font-display text-2xl text-white font-bold mb-6 text-center">Ready to Upgrade?</h2>
                 <Button className="h-12 px-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-none">
                    Request Proposal
                 </Button>
              </div>

           </div>
        </div>
      </section>

      {/* 3. Property Management Grid (Symmetry) */}
      <section className="py-24 bg-[#0B1120]">
         <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
               <span className="text-emerald-500 tracking-widest uppercase text-xs font-bold">Back Office</span>
               <h2 className="font-display text-3xl md:text-5xl text-white mt-4">Command & Control</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-2xl">
               {[
                 { icon: BedDouble, title: "Housekeeping", desc: "Real-time room status updates." },
                 { icon: CalendarCheck, title: "Reservations", desc: "Drag-and-drop calendar." },
                 { icon: MapPin, title: "Multi-Property", desc: "Manage chains from one login." },
                 { icon: Users, title: "Staff Shift", desc: "Automated rostering tools." }
               ].map((item, i) => (
                  <div key={i} className="bg-[#0B1120] p-10 group hover:bg-[#0E1525] transition-colors text-center md:text-left">
                     <item.icon className="w-8 h-8 text-emerald-500 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
                     <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-slate-400">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Hotel;