import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, Landmark, ShieldCheck, FileText, ArrowRight, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Government = () => {
  return (
    <>
      <Helmet>
        <title>Government Solutions | SoftVision IT Group</title>
        <meta name="description" content="Secure digital solutions for the public sector. E-governance, digital identity, and smart city infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/2 w-[900px] h-[900px] bg-blue-900/20 rounded-full blur-[120px] translate-x-1/2" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/30 border border-slate-600/30 backdrop-blur-md mb-8">
                <Landmark className="h-4 w-4 text-slate-300" />
                <span className="text-sm font-medium text-slate-200">Public Sector Innovation</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-blue-200 to-indigo-200">
                  Governance
                </span>
              </h1>
              
              <p className="text-xl text-slate-300/70 mb-10 leading-relaxed max-w-lg">
                Building trust through technology. Secure, accessible, and efficient digital services for citizens and agencies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 font-bold transition-all shadow-lg" asChild>
                  <Link to="/company/contact">
                    Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 p-10 rounded-2xl bg-[#1e293b] border border-slate-700 shadow-2xl skew-y-3">
                 <div className="absolute -left-4 -top-4 w-20 h-20 border-l-4 border-t-4 border-blue-500 rounded-tl-xl" />
                 <div className="grid gap-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700">
                       <Users className="h-8 w-8 text-blue-400" />
                       <div>
                          <div className="text-lg font-bold text-white">Citizen Services</div>
                          <div className="text-slate-400 text-sm">Portal Access</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700">
                       <ShieldCheck className="h-8 w-8 text-emerald-400" />
                       <div>
                          <div className="text-lg font-bold text-white">National Security</div>
                          <div className="text-slate-400 text-sm">Protected Infrastructure</div>
                       </div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "E-Governance", description: "Digitize paper workflows and improve administrative efficiency.", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Lock, title: "Digital Identity", description: "Secure ID verification systems for citizen access to services.", color: "text-slate-500", bg: "bg-slate-500/10" },
              { icon: Building, title: "Smart Cities", description: "IoT infrastructure for urban management and sustainability.", color: "text-indigo-500", bg: "bg-indigo-500/10" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Government;
