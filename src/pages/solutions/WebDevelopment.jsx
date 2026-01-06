import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Layout, Search, Zap, Code, Database, ArrowRight, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services | SoftVision IT Group</title>
        <meta name="description" content="Modern web application development. React, Next.js, and PWA solutions optimized for performance, SEO, and scalability." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1120]">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-100px] left-[-100px] w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Global Reach</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Websites That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400">
                  Perform & Convert
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
                We build blazing fast, SEO-optimized web applications. From corporate portals to complex SaaS platforms, we deliver excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/25" asChild>
                  <Link to="/company/contact">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* 3D Browser Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block perspective-[1000px] group"
            >
               <div className="relative w-full aspect-video bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden transform group-hover:rotate-y-[-5deg] transition-transform duration-700 ease-out">
                   {/* Browser Chrome */}
                   <div className="bg-slate-800 p-3 flex items-center gap-2 border-b border-slate-700">
                       <div className="flex gap-1.5">
                           <div className="w-3 h-3 rounded-full bg-red-500" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500" />
                           <div className="w-3 h-3 rounded-full bg-green-500" />
                       </div>
                       <div className="flex-1 bg-slate-900 rounded-md h-6 mx-4 flex items-center px-3 text-xs text-slate-500 font-mono">
                           https://your-business.com
                       </div>
                   </div>
                   
                   {/* Viewport Content */}
                   <div className="p-8 relative h-full">
                       <div className="grid grid-cols-3 gap-4 mb-8">
                           <motion.div 
                             animate={{ width: ["0%", "100%"] }}
                             transition={{ duration: 1.5, delay: 0.5 }}
                             className="h-4 bg-slate-700 rounded col-span-2" 
                           />
                           <motion.div 
                             animate={{ width: ["0%", "100%"] }}
                             transition={{ duration: 1.5, delay: 0.7 }}
                             className="h-4 bg-slate-800 rounded col-span-1" 
                           />
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4">
                           <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 1 }}
                              className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center"
                           >
                               <Zap className="w-12 h-12 text-blue-500" />
                           </motion.div>
                           <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 1.2 }}
                              className="space-y-3"
                           >
                               <div className="h-2 bg-slate-800 rounded w-full" />
                               <div className="h-2 bg-slate-800 rounded w-5/6" />
                               <div className="h-2 bg-slate-800 rounded w-4/6" />
                               <div className="h-8 w-24 bg-blue-600 rounded-md mt-4" />
                           </motion.div>
                       </div>
                   </div>
                   
                   {/* Floating Lighthouse Score */}
                   <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 1.5 }}
                      className="absolute bottom-6 right-6 w-20 h-20 bg-slate-800 rounded-full border-4 border-green-500 flex items-center justify-center shadow-lg z-20"
                   >
                       <span className="text-2xl font-bold text-green-500 font-mono">100</span>
                   </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-[#0B1120] border-t border-white/5">
         <div className="container mx-auto px-6">
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
                 {[
                    { slug: "nextdotjs", color: "FFFFFF" },
                    { slug: "react", color: "61DAFB" },
                    { slug: "angular", color: "DD0031" },
                    { slug: "vuedotjs", color: "4FC08D" },
                    { slug: "tailwindcss", color: "38B2AC" },
                    { slug: "typescript", color: "3178C6" },
                 ].map((t, i) => (
                    <img key={i} src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} className="h-10 w-10 grayscale hover:grayscale-0 transition-all cursor-pointer hover:scale-110" alt="Tech" />
                 ))}
             </div>
         </div>
      </section>

      {/* Features Accordion Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
           <div className="text-center mb-16">
               <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Modern Web Excellence</h2>
               <p className="text-slate-500 max-w-xl mx-auto">We don't build websites from 2010. We build modern digital experiences.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
               <div className="p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Zap className="w-6 h-6 text-blue-600" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                   <p className="text-slate-600">Core Web Vitals optimized. We aim for sub-second load times using advanced caching and CDN strategies.</p>
               </div>

               <div className="p-8 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-colors group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Search className="w-6 h-6 text-cyan-600" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Native</h3>
                   <p className="text-slate-600">Built with semantic HTML5 and server-side rendering (SSR) to ensure Google loves your content.</p>
               </div>

               <div className="p-8 bg-slate-50 rounded-2xl hover:bg-sky-50 transition-colors group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Layout className="w-6 h-6 text-sky-600" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Responsive Design</h3>
                   <p className="text-slate-600">Fluid layouts that adapt perfectly to mobile, tablet, and desktop screens. Mobile-first approach.</p>
               </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B1120]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Need a High-Performance Website?</h2>
            <Button size="lg" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl" asChild>
              <Link to="/company/contact">Lets Talk</Link>
            </Button>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
