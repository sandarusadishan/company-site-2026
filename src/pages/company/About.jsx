import React, { useRef } from "react"; // Added React import back if needed, though usually automatic in Vite/Next
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Globe, Award, ArrowRight, Building, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const About = () => {
  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of what's possible in enterprise software.", color: "text-sky-500", bg: "bg-sky-500/10", borderGradient: "from-sky-500 via-sky-400 to-sky-500" },
    { icon: Users, title: "Customer First", description: "Every decision starts with understanding our customer's needs.", color: "text-indigo-500", bg: "bg-indigo-500/10", borderGradient: "from-indigo-500 via-indigo-400 to-indigo-500" },
    { icon: Globe, title: "Global Impact", description: "Empowering enterprises across 20+ countries worldwide.", color: "text-cyan-500", bg: "bg-cyan-500/10", borderGradient: "from-cyan-500 via-cyan-400 to-cyan-500" },
    { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality solutions.", color: "text-emerald-500", bg: "bg-emerald-500/10", borderGradient: "from-emerald-500 via-emerald-400 to-emerald-500" },
  ];

  const milestones = [
    { 
      year: "2005", 
      title: "Genesis in Sri Lanka", 
      description: "SoftVision IT Group was born in Colombo with a clear mission: to engineer software that drives real business growth.", 
      region: "Sri Lanka",
      coordinates: "Headquarters" 
    },
    { 
      year: "2012", 
      title: "Island Expansion", 
      description: "Successfully deployed mission-critical hospitality and POS systems across luxury resorts in the Maldives and Seychelles.", 
      region: "Maldives & Seychelles",
      coordinates: "Hospitality Sector" 
    },
    { 
      year: "2018", 
      title: "Middle East Entry", 
      description: "Partnered with major logistics and retail giants in the Middle East, delivering high-scale ERP and management solutions.", 
      region: "Middle East",
      coordinates: "Enterprise ERP" 
    },
    { 
      year: "2022", 
      title: "European Footprint", 
      description: "Established our presence in the UK market, serving fintech and healthcare enterprises with compliance-first software architectures.", 
      region: "United Kingdom",
      coordinates: "Fintech & Health" 
    },
    { 
      year: "2025", 
      title: "Pan-Asian Growth", 
      description: "Expanding operations to Malaysia, driving digital transformation for Southeast Asian manufacturing hubs.", 
      region: "Malaysia",
      coordinates: "Manufacturing Tech" 
    },
  ];

  const historyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: historyRef,
    offset: ["start center", "end center"]
  });

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about SoftVision IT Group's mission, our global journey from Sri Lanka to the UK, and our 20+ years of enterprise software excellence."
        keywords="About SoftVision, Software Company Sri Lanka, Global Software Solutions, Enterprise IT History"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0c4a6e] text-white">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute -top-[20%] -right-[10%] w-[900px] h-[900px] bg-sky-500/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
           <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
           
           {/* Floating Elements */}
           <motion.div 
             animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl opacity-50"
           />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-sm font-medium mb-6">
                 <Building className="h-4 w-4" />
                 Since 2005
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400">Future</span> <br/>
              of Enterprise Software
            </h1>
            <p className="text-xl text-sky-100/70 mb-8 leading-relaxed max-w-2xl mx-auto">
              We started with a simple belief: Enterprise software doesn't have to be complex. 
              Today, we power the digital infrastructure of the world's leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our DNA</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that every enterprise deserves access to world-class software infrastructure. 
              Our mission is to democratize technology, making it accessible, secure, and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group p-[2px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Electric Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.borderGradient} animate-border-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full bg-white rounded-[22px] p-8 overflow-hidden z-20 border border-slate-100">
                    <div className={`h-14 w-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${value.color}`}>
                        <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-500">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Growth Journey - Redesigned */}
      <section className="py-32 bg-[#020617] relative overflow-hidden text-white">
         {/* Background Map Abstract */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,50 Q25,30 50,50 T100,50" stroke="url(#mapGradient)" strokeWidth="0.5" fill="none" />
               <path d="M0,70 Q25,50 50,70 T100,70" stroke="url(#mapGradient)" strokeWidth="0.5" fill="none" />
               <path d="M0,30 Q25,50 50,30 T100,30" stroke="url(#mapGradient)" strokeWidth="0.5" fill="none" />
               <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="transparent" />
                     <stop offset="50%" stopColor="#38bdf8" />
                     <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
               </defs>
            </svg>
         </div>

         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <motion.div 
               className="text-center mb-24"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Global Expansion</span>
               <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Our Journey Across Borders
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  From our roots in Sri Lanka to serving enterprises in the UK, Middle East, and Southeast Asia. We are building a borderless digital future.
               </p>
            </motion.div>
            
            <div ref={historyRef} className="relative max-w-5xl mx-auto">
               {/* Center Timeline Line */}
               <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />
               <motion.div 
                 style={{ scaleY: scrollYProgress }}
                 className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500 origin-top md:-translate-x-1/2 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
               />

               {milestones.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 mb-20 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                     {/* Timeline Node */}
                     <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#020617] border-4 border-slate-700 md:-translate-x-1/2 flex items-center justify-center z-10 group-hover:border-sky-500 transition-colors duration-300">
                        <div className="w-3 h-3 rounded-full bg-sky-500 animate-pulse" />
                     </div>

                     {/* Content Spacer */}
                     <div className="flex-1 md:w-1/2" />
                     
                     {/* Content Card */}
                     <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                        <div className={`group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] relative overflow-hidden`}>
                           {/* Year Label */}
                           <div className={`absolute top-0 ${index % 2 === 0 ? 'md:left-0' : 'right-0'} bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg ${index % 2 === 0 ? 'rounded-tl-lg' : 'rounded-bl-lg'}`}>
                              {item.year}
                           </div>
                           
                           <div className={`flex items-center gap-2 mb-3 text-sky-400 font-bold uppercase tracking-wider text-xs ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <MapPin className="h-3 w-3" /> {item.region}
                           </div>
                           
                           <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                           <p className="text-slate-400 leading-relaxed mb-4 text-sm">{item.description}</p>
                           
                           <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                              <Globe className="h-3 w-3" /> {item.coordinates}
                           </div>
                           
                           {/* Hover Glow */}
                           <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-50/50" />
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to shape the future together?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            We are always looking for visionary partners and talented individuals to join our mission.
          </p>
          <div className="flex flex-center justify-center gap-4">
             <Button size="lg" className="h-14 px-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold shadow-lg shadow-sky-500/20" asChild>
                <Link to="/company/careers">
                View Careers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
