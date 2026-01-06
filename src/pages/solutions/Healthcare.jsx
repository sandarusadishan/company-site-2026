import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Shield, Database, Users, ArrowRight, Activity, Stethoscope, TabletSmartphone, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Healthcare = () => {
  return (
    <>
      <Helmet>
        <title>Healthcare Solutions | SoftVision IT Group</title>
        <meta name="description" content="Next-gen healthcare technology solutions. HIPAA-compliant, interoperable, and AI-powered platforms for patient care." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#022c22]">
        {/* Abstract Background - DNA/Pulse effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          {/* Grid pattern specific to healthcare precision */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-8">
                <Activity className="h-4 w-4 text-emerald-400 animate-bounce" />
                <span className="text-sm font-medium text-emerald-300">MedTech Innovations</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Healthcare
                </span>
              </h1>
              
              <p className="text-xl text-emerald-100/70 mb-10 leading-relaxed max-w-lg">
                Revolutionizing patient care with secure, compliant, and intelligent digital health platforms. Bridging the gap between technology and human touch.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-600/20" asChild>
                  <Link to="/company/contact">
                    Transform Care <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Creative Heart/Health Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
                 <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
                 
                 <div className="grid grid-cols-2 gap-6 relative z-20">
                    <div className="col-span-2 p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Heart className="h-6 w-6 text-emerald-400 fill-emerald-400/20 animate-pulse" />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">Patient Vitals</div>
                                <div className="text-emerald-400 text-sm">Monitoring Active</div>
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-white">98%</div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <Shield className="h-8 w-8 text-teal-400 mb-4" />
                        <div className="text-lg font-bold text-white">HIPAA</div>
                        <div className="text-xs text-emerald-200/50">Compliant Data</div>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <Database className="h-8 w-8 text-cyan-400 mb-4" />
                        <div className="text-lg font-bold text-white">FHIR</div>
                        <div className="text-xs text-emerald-200/50">Interoperability</div>
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
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="font-display text-3xl font-bold text-foreground mb-4">Digital Health Ecosystem</h2>
             <p className="text-lg text-muted-foreground">From hospital management to remote patient monitoring, we engineer solutions that save lives.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Data Privacy & Security", description: "End-to-end encryption ensuring complete HIPAA & GDPR compliance for sensitive patient records.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { icon: Database, title: "Interoperability (FHIR)", description: "Seamless data exchange between EMRs, labs, and pharmacies using modern HL7 FHIR standards.", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: TabletSmartphone, title: "Telehealth Platforms", description: "Secure high-quality video consultation platforms with integrated scheduling and prescription.", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: BrainCircuit, title: "AI Diagnostics", description: "Machine learning models to assist radiologists and doctors in early disease detection.", color: "text-amber-500", bg: "bg-amber-500/10" },
              { icon: Users, title: "Patient Portals", description: "Empower patients with secure access to their health records, appointments, and lab results.", color: "text-pink-500", bg: "bg-pink-500/10" },
              { icon: Stethoscope, title: "Clinical Support Systems", description: "Intelligent workflows that reduce burnout and improve clinical decision making.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${feature.bg}`} />
                
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

      {/* Modern Statistics Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">Empowering healthcare providers worldwide</h2>
                    <p className="text-lg text-slate-600 mb-8">Our technology serves millions of patients, ensuring critical systems are always online and accurate.</p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Uptime Capability</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">ISO</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">27001 Certified</div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-emerald-200 rounded-3xl rotate-3" />
                    <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
                        alt="Medical Technology" 
                        className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your medical infrastructure?</h2>
            <Button size="lg" className="h-14 px-10 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-lg shadow-xl" asChild>
              <Link to="/company/contact">Contact Our Specialists</Link>
            </Button>
        </div>
      </section>
    </>
  );
};

export default Healthcare;
