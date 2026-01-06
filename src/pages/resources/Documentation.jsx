import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Book, Code, Terminal, Layers, FileText, ArrowRight, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Documentation = () => {
  return (
    <>
      <Helmet>
        <title>Documentation | SoftVision IT Group</title>
        <meta name="description" content="Technical documentation, API references, and integration guides for SoftVision products." />
      </Helmet>

      {/* Hero Search Section */}
      <section className="pt-32 pb-20 bg-[#0f172a] relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
         
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                  <Terminal className="h-4 w-4" />
                  Developer Hub
               </div>
               <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  How can we help you build?
               </h1>
               <p className="text-xl text-slate-400 mb-10">
                  Explore guides, API references, and code samples.
               </p>

               <div className="relative max-w-2xl mx-auto">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                     <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <Input 
                    type="text" 
                    placeholder="Search documentation..." 
                    className="h-14 pl-12 rounded-full bg-slate-800/50 border-slate-700 text-lg text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                  />
               </div>
            </motion.div>
         </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-background">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* Getting Started */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="group p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 hover:shadow-lg transition-all"
               >
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Book className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Getting Started</h3>
                  <p className="text-muted-foreground mb-6">Quick start guides to set up your environment and make your first API request.</p>
                  <ul className="space-y-3 mb-6">
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Installation
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Authentication
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Quickstart Guide
                     </li>
                  </ul>
               </motion.div>

               {/* API Reference */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="group p-8 rounded-2xl bg-card border border-border hover:border-purple-500/50 hover:shadow-lg transition-all"
               >
                  <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Code className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">API Reference</h3>
                  <p className="text-muted-foreground mb-6">Detailed endpoints, parameters, and response examples for all our APIs.</p>
                  <ul className="space-y-3 mb-6">
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Identity Server API
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Payment Gateway
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> User Management
                     </li>
                  </ul>
               </motion.div>

               {/* SDKs & Libraries */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="group p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-lg transition-all"
               >
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Layers className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">SDKs & Tools</h3>
                  <p className="text-muted-foreground mb-6">Official client libraries for Python, Node.js, Go, and Java.</p>
                  <ul className="space-y-3 mb-6">
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Node.js Client
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> Python SDK
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-500 transition-colors cursor-pointer">
                        <ArrowRight className="h-4 w-4" /> CLI Tool
                     </li>
                  </ul>
               </motion.div>

            </div>

             {/* Deployment Section */}
            <div className="mt-16">
               <h2 className="text-2xl font-bold text-foreground mb-8">Deployment & Infrastructure</h2>
               <div className="grid md:grid-cols-2 gap-6">
                  <a href="#" className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
                     <Server className="h-6 w-6 text-slate-400 mt-1" />
                     <div>
                        <h4 className="font-semibold text-foreground mb-2">On-Premise Deployment</h4>
                        <p className="text-sm text-muted-foreground">Learn how to deploy our stack on your own bare metal or VM infrastructure.</p>
                     </div>
                  </a>
                  <a href="#" className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
                     <Terminal className="h-6 w-6 text-slate-400 mt-1" />
                     <div>
                        <h4 className="font-semibold text-foreground mb-2">Docker & Kubernetes</h4>
                        <p className="text-sm text-muted-foreground">Containerization guides and Helm charts for orchestration.</p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Documentation;
