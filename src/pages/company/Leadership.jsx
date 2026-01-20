import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Quote, Sparkles } from "lucide-react";
import Boss from "../../assets/boss.png";

const Leadership = () => {
    
  // Single leader profile
  const leader = {
     name: "Mr. Bawan Shivanandarajah",
     role: "Founder & CEO",
     image: Boss,
     bio: "With over a decade of experience in enterprise software architecture, Mr. Shivanandarajah founded SoftVision with a singular mission: to simplify the complex. His vision drives our innovation, pushing boundaries in AI, Cloud, and Fintech solutions.",
     quote: "We don't just build software; we architect the future of business intelligence."
  };

  return (
    <>
      <Helmet>
        <title>Leadership | SoftVision IT Group</title>
        <meta name="description" content="Meet our visionary leadership driving innovation at SoftVision IT Group." />
      </Helmet>

      {/* Hero Section - Brand Navy */}
      <section className="pt-32 pb-20 bg-[#020617] relative overflow-hidden text-white min-h-[60vh] flex items-center justify-center">
         
         {/* Abstract Background Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-black" />
         <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
         
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] border border-white/5 border-dashed"
         />

         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Leading with Purpose
               </div>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Visionary <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-slate-500">Leadership</span>
               </h1>
            </motion.div>
         </div>
      </section>

      {/* Leader Profile - Creative Layout */}
      <section className="py-24 bg-[#050505] relative">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
               {/* Image Side - Creative Frame */}
               <div className="relative group max-w-sm mx-auto w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 z-10" />
                     <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                     />
                     
                     {/* Floating Name Card */}
                     <div className="absolute bottom-8 left-8 z-20">
                         <h2 className="text-2xl font-bold text-white mb-1">{leader.name}</h2>
                         <p className="text-blue-400 font-medium">{leader.role}</p>
                     </div>
                  </div>
               </div>

               {/* Content Side */}
               <div className="relative">
                  <Quote className="absolute -top-12 -left-8 h-24 w-24 text-white/5" />
                  
                  <blockquote className="text-2xl md:text-3xl font-display font-medium text-white leading-tight mb-8 relative z-10">
                     <span className="text-blue-500">"</span>
                     {leader.quote}
                     <span className="text-blue-500">"</span>
                  </blockquote>

                  <p className="text-lg text-slate-400 leading-relaxed mb-10 border-l-2 border-blue-500/30 pl-6">
                     {leader.bio}
                  </p>
                  
                  <div className="flex gap-4">
                     <a href="#" className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all">
                        <Linkedin className="h-5 w-5" />
                     </a>
                     <a href="#" className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all">
                        <Twitter className="h-5 w-5" />
                     </a>
                  </div>
               </div>

            </motion.div>
         </div>
      </section>
    </>
  );
};

export default Leadership;
