import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Layers, Wifi, Zap, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileApps = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development | SoftVision IT Group</title>
        <meta name="description" content="Native and cross-platform mobile app development. iOS, Android, React Native, and Flutter solutions for seamless user experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1120]">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px]" />
          {/* Hex Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-5" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
                <Smartphone className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">iOS & Android Solutions</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Apps That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400">
                  Users Love
                </span>
              </h1>
              
              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-lg">
                We design and build mobile experiences that look beautiful on every device. Native performance with cross-platform efficiency.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/25" asChild>
                  <Link to="/company/contact">
                    Build Your App <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* 3D Floating Mobile Representation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative w-[300px] h-[600px] mx-auto bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                   {/* Notch */}
                   <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-40 mx-auto z-20" />
                   
                   {/* Screen Content */}
                   <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-slate-900 flex flex-col p-6 pt-16">
                       {/* Header */}
                       <div className="flex justify-between items-center mb-8">
                           <div className="w-8 h-8 rounded-full bg-white/20" />
                           <div className="w-8 h-8 rounded-full bg-white/20" />
                       </div>
                       
                       {/* Cards */}
                       <div className="space-y-4">
                           <motion.div 
                              animate={{ x: [0, 10, 0] }}
                              transition={{ duration: 5, repeat: Infinity }}
                              className="h-32 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg p-4"
                           >
                               <div className="w-12 h-12 rounded-full bg-white/20 mb-2"/>
                               <div className="w-20 h-2 rounded bg-white/40"/>
                           </motion.div>
                           
                           <motion.div 
                              animate={{ x: [0, -10, 0] }}
                              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                              className="h-24 rounded-2xl bg-slate-800/80 p-4 border border-white/10"
                           >
                               <div className="w-full h-2 rounded bg-white/10 mb-2"/>
                               <div className="w-2/3 h-2 rounded bg-white/10"/>
                           </motion.div>

                           <motion.div 
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                              className="h-24 rounded-2xl bg-slate-800/80 p-4 border border-white/10"
                           >
                               <div className="w-full h-2 rounded bg-white/10 mb-2"/>
                               <div className="w-2/3 h-2 rounded bg-white/10"/>
                           </motion.div>
                       </div>
                       
                       {/* Floating Button */}
                       <div className="mt-auto flex justify-center">
                           <div className="w-16 h-16 rounded-full bg-blue-500 shadow-lg glow-blue animate-bounce" />
                       </div>
                   </div>
               </div>
               
               {/* Decorative Circles */}
               <div className="absolute top-1/2 -right-12 w-24 h-24 rounded-full bg-cyan-500 blur-2xl opacity-50 animate-pulse" />
               <div className="absolute bottom-12 -left-12 w-32 h-32 rounded-full bg-blue-600 blur-3xl opacity-40 animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 bg-[#0B1120] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
            <p className="text-center text-blue-200/60 text-sm font-semibold uppercase tracking-widest">Built with Best-in-Class Tech</p>
        </div>
        <div className="flex gap-16 items-center animate-marquee" style={{ "--marquee-duration": "30s" }}>
          {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-16 items-center shrink-0">
                {[
                   { name: "Swift", slug: "swift", color: "F05138" },
                   { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
                   { name: "React Native", slug: "react", color: "61DAFB" },
                   { name: "Flutter", slug: "flutter", color: "02569B" },
                   { name: "Firebase", slug: "firebase", color: "FFCA28" },
                   { name: "GraphQL", slug: "graphql", color: "E10098" },
                   { name: "SQLite", slug: "sqlite", color: "003B57" }
                ].map((tech, idx) => (
                   <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                      <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} alt={tech.name} className="w-8 h-8" />
                      <span className="text-lg font-bold text-white">{tech.name}</span>
                   </div>
                ))}
             </div>
          ))}
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
           <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="md:w-1/2 sticky top-24">
                   <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Why Mobile Matters?</h2>
                   <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                       Mobile traffic accounts for over 58% of global web traffic. If you're not on mobile, you're missing the majority of your audience.
                       We build apps that keep users coming back.
                   </p>
                   <Button variant="outline" size="lg" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
                       <Link to="/company/partners">See Our Partners</Link>
                   </Button>
               </div>
               
               <div className="md:w-1/2 grid gap-6">
                   {[
                       { title: "Native Performance", desc: "Silky smooth 60fps animations and rapid load times." },
                       { title: "Offline Capabilities", desc: "Apps that work even when the internet doesn't." },
                       { title: "Push Notifications", desc: "Re-engage users with timely, relevant updates." },
                       { title: "Device Features", desc: "Access camera, GPS, and biometrics securely." }
                   ].map((item, i) => (
                       <motion.div 
                         key={i}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.1 }}
                         className="p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-300 transition-colors"
                       >
                           <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                               <Check className="w-5 h-5 text-blue-600" /> {item.title}
                           </h3>
                           <p className="text-slate-600 pl-7">{item.desc}</p>
                       </motion.div>
                   ))}
               </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B1120] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%)]" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Got an App Idea?</h2>
            <p className="text-xl text-slate-400 mb-10">Let's turn that sketch into a store-ready masterpiece.</p>
            <Button size="lg" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-900/20" asChild>
              <Link to="/company/contact">Start Building</Link>
            </Button>
        </div>
      </section>
    </>
  );
};

export default MobileApps;
