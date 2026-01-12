import React from "react";
import { Helmet } from "react-helmet-async";
import { animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Globe, Award, ArrowRight, Building, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";



const About = () => {
  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of what's possible in enterprise software.", color: "text-sky-500", bg: "bg-sky-500/10", borderGradient: "from-sky-500 via-sky-400 to-sky-500" },
    { icon: Users, title: "Customer First", description: "Every decision starts with understanding our customer's needs.", color: "text-indigo-500", bg: "bg-indigo-500/10", borderGradient: "from-indigo-500 via-indigo-400 to-indigo-500" },
    { icon: Globe, title: "Global Impact", description: "Empowering enterprises across 20+ countries worldwide.", color: "text-cyan-500", bg: "bg-cyan-500/10", borderGradient: "from-cyan-500 via-cyan-400 to-cyan-500" },
    { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality solutions.", color: "text-emerald-500", bg: "bg-emerald-500/10", borderGradient: "from-emerald-500 via-emerald-400 to-emerald-500" },
  ];



  const history = [
    { year: "2005", title: "Inception", description: "Founded with a vision to revolutionize enterprise IT." },
    { year: "2010", title: "Regional Expansion", description: "Expanded operations to serve key Asian markets." },
    { year: "2018", title: "Cloud Native", description: "Launched our flagship Cloud Platform, redefining scalability." },
    { year: "2024", title: "Global Reach", description: "Celebrating 1000+ enterprise customers worldwide." },
  ];

  const historyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: historyRef,
    offset: ["start center", "end center"]
  });

  return (
    <>
      <Helmet>
        <title>About Us | SoftVision IT Group</title>
        <meta name="description" content="Learn about SoftVision IT Group's mission, 20+ years of experience, and global impact." />
      </Helmet>

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
             className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"
           />
           <motion.div 
             animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
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
            <p className="text-xl text-sky-100/70 mb-8 leading-relaxed">
              We started with a simple belief: Enterprise software doesn't have to be clunky. 
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

      {/* History Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Journey</h2>
            
            <div ref={historyRef} className="relative ml-4 md:ml-1/2 space-y-12">
               {/* Animated Line */}
               <div className="absolute top-0 bottom-0 left-[-1px] md:-left-[1px] w-[2px] bg-sky-100" />
               <motion.div 
                 style={{ scaleY: scrollYProgress }}
                 className="absolute top-0 bottom-0 left-[-1px] md:-left-[1px] w-[2px] bg-sky-500 origin-top"
               />

               {history.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                     <div className="absolute left-[-9px] md:left-0 md:-ml-[9px] w-4 h-4 rounded-full bg-white border-4 border-sky-500 z-10" />
                     <div className="flex-1 md:w-1/2" />
                     <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        <div className="text-sky-500 font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.description}</p>
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
