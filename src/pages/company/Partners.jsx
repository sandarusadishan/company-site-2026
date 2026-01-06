import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Handshake, Globe, Award, Briefcase, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
    
  const tiers = [
    {
       name: "Silver Partner",
       description: "For consultants and boutique agencies implementing our solutions.",
       features: ["Access to Partner Portal", "Standard Support", "Sales Training"],
       color: "border-slate-500",
       glow: "shadow-slate-500/20"
    },
    {
       name: "Gold Partner",
       description: "For regional systems integrators with dedicated practice areas.",
       features: ["Priority Support", "Co-marketing Funds", "Dedicated Partner Manager", "Technical Certification"],
       color: "border-yellow-500",
       glow: "shadow-yellow-500/20"
    },
    {
       name: "Platinum Partner",
       description: "For global SIs driving large-scale digital transformation.",
       features: ["24/7 Elite Support", "Executive Sponsorship", "Product Roadmap Influence", "Revenue Sharing"],
       color: "border-cyan-400",
       glow: "shadow-cyan-400/20"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | SoftVision IT Group</title>
        <meta name="description" content="Join the SoftVision Partner Ecosystem. Enable digital transformation for your clients with our enterprise-grade capabilities." />
      </Helmet>

      {/* Hero Section - Brand Deep Navy */}
      <section className="pt-32 pb-20 bg-[#020617] relative overflow-hidden text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
         
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md">
                   <Handshake className="h-4 w-4" />
                   Partner Ecosystem
               </div>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Grow with <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SoftVision</span>
               </h1>
               <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join our global network of technology partners, system integrators, and consultants. Together, we deliver more value.
               </p>
               <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 h-14 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105">
                  Become a Partner
               </Button>
            </motion.div>
         </div>
      </section>

      {/* Partner Tiers - Modern Cards */}
      <section className="py-24 bg-[#050505] relative">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
         
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Tiers</h2>
                <p className="text-slate-400">Choose the level that fits your business model.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-8 rounded-2xl bg-[#0f172a]/50 backdrop-blur-sm border-t-4 ${tier.color} shadow-2xl ${tier.glow} relative overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300`}
                  >
                     <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     
                     <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                     <p className="text-slate-400 mb-8 h-16 leading-relaxed">{tier.description}</p>
                     <div className="space-y-4 mb-8 flex-1">
                        {tier.features.map((feature) => (
                           <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                              <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 group-hover:bg-blue-500/20 transition-colors`}>
                                 <Check className="h-3 w-3 text-white group-hover:text-blue-400" />
                              </div>
                              {feature}
                           </div>
                        ))}
                     </div>
                     <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">
                        Learn More
                     </Button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Partner - Dark & Sleek */}
      <section className="py-24 bg-[#020617] text-white">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-[#0f172a] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Why partner with us?</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     We don't just sell software; we build ecosystems. Our partners are an extension of our team, and we invest heavily in their success.
                  </p>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                            <Globe className="h-6 w-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-lg">Global Reach</h3>
                           <p className="text-slate-500">Access to markets in 50+ countries.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-lg">Generous Margins</h3>
                           <p className="text-slate-500">Industry-leading revenue share models.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="hidden md:flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full" />
                   <Handshake className="h-48 w-48 text-slate-700 relative z-10" strokeWidth={1} />
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Partners;
