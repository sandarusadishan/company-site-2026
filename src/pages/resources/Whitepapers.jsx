import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FileText, Download, ArrowRight, TrendingUp, ShieldCheck, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const Whitepapers = () => {
    
  const papers = [
    {
       title: "The Future of Open Banking APIs",
       category: "Financial Services",
       date: "March 2026",
       description: "An in-depth analysis of how PSD2 and open banking standards are reshaping the global financial landscape.",
       icon: TrendingUp
    },
    {
       title: "Zero Trust Security in a Hybrid Cloud World",
       category: "Security",
       date: "February 2026",
       description: "Implementation strategies for securing enterprise data across on-premise and multi-cloud environments.",
       icon: ShieldCheck
    },
    {
       title: "Migrating Legacy Monoliths to Microservices",
       category: "Architecture",
       date: "January 2026",
       description: "A practical guide to decomposing legacy systems using the strangler fig pattern.",
       icon: Cloud
    },
    {
       title: "AI Ethics and Governance",
       category: "Artificial Intelligence",
       date: "December 2025",
       description: "Frameworks for deploying responsible AI systems in regulated industries.",
       icon: FileText
    },
    {
       title: "5G Netowrk Slicing Strategies",
       category: "Telecom",
       date: "November 2025",
       description: "Optimizing network resources for IoT and high-bandwidth applications.",
       icon: TrendingUp
    },
    {
       title: "Retail Digital Transformation 2026 Report",
       category: "Retail",
       date: "October 2025",
       description: "Consumer behavior trends and the rise of phygital retail experiences.",
       icon: FileText
    }
  ];

  return (
    <>
      <Helmet>
        <title>Whitepapers & Research | SoftVision IT Group</title>
        <meta name="description" content="In-depth research, case studies, and industry reports on cloud computing, security, and digital transformation." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0a0f1c] relative overflow-hidden text-white">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
         
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
               <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  Research & <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Insights</span>
               </h1>
               <p className="text-xl text-slate-400 mb-8 max-w-2xl">
                  Deep dives into the technologies shaping our future. Backed by data, engineering expertise, and real-world implementations.
               </p>
            </motion.div>
         </div>
      </section>

      {/* Featured Paper */}
      <section className="py-16 bg-[#0f1623] border-b border-white/5">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center"
            >
               <div className="absolute inset-0 bg-blue-600/10 blur-3xl opacity-50" />
               <div className="relative z-10 flex-1">
                   <div className="text-blue-400 font-bold tracking-wider text-sm mb-4 uppercase">Featured Report</div>
                   <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">State of Enterprise Cloud 2026</h2>
                   <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                       Our annual comprehensive survey of 500+ CTOs and IT leaders reveals the top priorities, challenges, and investment areas for the coming year.
                   </p>
                   <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200" asChild>
                       <a href="#"><Download className="mr-2 h-4 w-4" /> Download Full Report</a>
                   </Button>
               </div>
               <div className="relative z-10 w-full md:w-1/3 aspect-[3/4] bg-white rounded-lg shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500 hidden md:flex items-center justify-center">
                   <div className="text-center p-8">
                      <div className="h-16 w-16 bg-slate-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <FileText className="h-8 w-8 text-white" />
                      </div>
                      <div className="font-display font-bold text-2xl text-slate-900 mb-2">2026</div>
                      <div className="text-slate-500 uppercase tracking-widest text-sm">Annual Report</div>
                   </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Papers Grid */}
      <section className="py-24 bg-[#0a0f1c]">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl font-bold text-white mb-12">Latest Publications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {papers.map((paper, index) => (
                  <motion.div
                    key={paper.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                     <div className="p-8 flex items-start justify-between border-b border-white/5 bg-white/5">
                         <div className="p-3 bg-white/10 rounded-lg border border-white/5">
                             <paper.icon className="h-6 w-6 text-blue-400" />
                         </div>
                         <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{paper.category}</span>
                     </div>
                     <div className="p-8 flex-1 flex flex-col">
                        <div className="text-sm text-slate-500 mb-3">{paper.date}</div>
                        <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                            {paper.title}
                        </h3>
                        <p className="text-slate-400 mb-6 line-clamp-3">
                            {paper.description}
                        </p>
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                Read Paper <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default Whitepapers;
