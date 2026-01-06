import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Cpu, Database, Globe, Rocket, Shield, Users, Zap, ArrowRight, CheckCircle2, ShoppingCart, Utensils, BedDouble, HeartPulse, Wallet, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomSoftware = () => {
  return (
    <>
      <Helmet>
        <title>Custom Software Development | SoftVision IT Group</title>
        <meta name="description" content="Tailor-made software solutions designed to streamline operations and drive growth. Enterprise-grade web and desktop applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1120]">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
                <Code2 className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Bespoke Engineering</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Software That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Fits Perfectly
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
                Off-the-shelf solutions have limits. We build software tailored to your specific workflows, ensuring maximum efficiency and competitive advantage.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/25" asChild>
                  <Link to="/company/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* 3D Abstract Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-out font-mono text-xs leading-4 text-blue-100 overflow-hidden">
                   <div className="bg-[#0B1120] rounded-[22px] p-6 h-[400px] overflow-hidden relative">
                       {/* Fake Code Interface */}
                       <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                           <div className="w-3 h-3 rounded-full bg-red-500"/>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                           <div className="w-3 h-3 rounded-full bg-green-500"/>
                           <span className="ml-4 text-slate-500">app.config.ts</span>
                       </div>
                       <div className="space-y-1 opacity-80">
                           <span className="text-purple-400">export const</span> <span className="text-yellow-300">EnterpriseConfig</span> = {"{"} <br/>
                           &nbsp;&nbsp;<span className="text-blue-400">scalability</span>: <span className="text-green-400">"unlimited"</span>,<br/>
                           &nbsp;&nbsp;<span className="text-blue-400">security</span>: <span className="text-green-400">"goved-grade"</span>,<br/>
                           &nbsp;&nbsp;<span className="text-blue-400">integration</span>: [<span className="text-green-400">"AI"</span>, <span className="text-green-400">"Cloud"</span>, <span className="text-green-400">"IoT"</span>],<br/>
                           &nbsp;&nbsp;<span className="text-blue-400">performance</span>: <span className="text-orange-400">100</span>,<br/>
                           {"}"};
                       </div>
                       
                       {/* Floating Elements */}
                       <motion.div 
                          animate={{ y: [0, -20, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute bottom-10 right-10 p-4 bg-blue-600 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                       >
                           <CheckCircle2 className="text-white w-6 h-6" />
                           <span className="font-bold text-white text-sm">Build Passed</span>
                       </motion.div>
                   </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 bg-[#0B1120] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
            <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest">Powered by Modern Technologies</p>
        </div>
        <div className="flex gap-16 items-center animate-marquee" style={{ "--marquee-duration": "40s" }}>
          {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-16 items-center shrink-0">
                {[
                   { name: "React", slug: "react", color: "61DAFB" },
                   { name: "Node.js", slug: "nodedotjs", color: "339933" },
                   { name: "Python", slug: "python", color: "3776AB" },
                   { name: "Java", slug: "java", color: "007396" },
                   { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
                   { name: "Docker", slug: "docker", color: "2496ED" },
                   { name: "Redis", slug: "redis", color: "DC382D" },
                   { name: "GraphQL", slug: "graphql", color: "E10098" }
                ].map((tech, idx) => (
                   <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                      <img 
                        src={tech.slug === "java" 
                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                          : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} 
                        alt={tech.name} 
                        className="w-8 h-8" 
                      />
                      <span className="text-lg font-bold text-slate-300">{tech.name}</span>
                   </div>
                ))}
             </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Why Go Custom?</h2>
             <p className="text-lg text-slate-600">Standard software forces you to adapt. Custom software adapts to you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Efficiency", description: "Automate manual processes and reduce operational costs by up to 40%.", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Shield, title: "Security", description: "Built with security-first architecture to protect your proprietary data.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Rocket, title: "Scalability", description: "Designed to grow with your business, handling millions of users seamlessly.", color: "text-indigo-500", bg: "bg-indigo-50" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                tileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 group"
              >
                <div className={`h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Have a unique challenge?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Our solution architects are ready to design the perfect system for your needs.</p>
            <Button size="lg" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl" asChild>
              <Link to="/company/contact">Get a Free Consultation</Link>
            </Button>
        </div>
      </section>


    </>
  );
};

export default CustomSoftware;
