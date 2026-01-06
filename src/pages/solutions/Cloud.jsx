import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud, Server, Shield, Zap, ArrowRight, Globe, Layers, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CloudSolutions = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions | SoftVision IT Group</title>
        <meta name="description" content="Enterprise-grade cloud solutions. AWS, Azure, GCP integration, serverless architecture, and Kubernetes orchestration." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0c4a6e]">
        {/* Abstract Background - Cloud/Sky effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[900px] h-[900px] bg-sky-500/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 backdrop-blur-md mb-8">
                <Cloud className="h-4 w-4 text-sky-300" />
                <span className="text-sm font-medium text-sky-200">Cloud Native Architecture</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Infinite <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400">
                  Scalability
                </span>
              </h1>
              
              <p className="text-xl text-sky-100/70 mb-10 leading-relaxed max-w-lg">
                Accelerate your digital transformation with our multi-cloud, hybrid, and serverless solutions. Deploy anywhere, scale everywhere.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold transition-all shadow-lg shadow-sky-500/20" asChild>
                  <Link to="/company/contact">
                    Start Migration <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Creative Server/Cloud Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 p-8 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                 <div className="absolute inset-0 bg-sky-600/10 blur-3xl group-hover:bg-sky-500/20 transition-colors duration-1000" />
                 
                 <div className="grid grid-cols-2 gap-6 relative z-20">
                    <div className="p-6 rounded-2xl bg-sky-950/60 border border-sky-400/30">
                        <Server className="h-8 w-8 text-sky-400 mb-4" />
                        <div className="text-lg font-bold text-white">Hybrid Cloud</div>
                        <div className="text-xs text-sky-300/70">On-Prem + Public</div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <Globe className="h-8 w-8 text-cyan-400 mb-4" />
                        <div className="text-lg font-bold text-white">Global Edge</div>
                        <div className="text-xs text-sky-200/50">Low Latency CDN</div>
                    </div>
                    
                    <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 border border-white/10 shadow-lg flex items-center justify-between">
                        <div>
                            <div className="text-lg font-bold text-white">Kubernetes Ready</div>
                            <div className="text-sm text-sky-100">Container Orchestration</div>
                        </div>
                        <Layers className="h-10 w-10 text-white/80" />
                    </div>
                 </div>
               </div>
               
               {/* Animated Orbiting Elements */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-sky-400/10 rounded-full z-0"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="font-display text-3xl font-bold text-foreground mb-4">Cloud Native Stack</h2>
             <p className="text-lg text-muted-foreground">Modernize your infrastructure with technologies built for the future.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Multi-Cloud Strategy", description: "Avoid vendor lock-in with seamless deployment across AWS, Azure, and Google Cloud.", color: "text-sky-500", bg: "bg-sky-500/10" },
              { icon: Shield, title: "Zero Trust Security", description: "Identity-aware proxies and micro-segmentation to secure your cloud workloads.", color: "text-indigo-500", bg: "bg-indigo-500/10" },
              { icon: Zap, title: "Serverless Computing", description: "Run code without provisioning or managing servers. Pay only for compute time.", color: "text-amber-500", bg: "bg-amber-500/10" },
              { icon: Cpu, title: "Containerization", description: "Docker & Kubernetes experts to help you containerize legacy applications.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
              { icon: Code2, title: "DevOps & CI/CD", description: "Automated pipelines for faster, more reliable software delivery and deployment.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { icon: Server, title: "Disaster Recovery", description: "Robust backup and failover strategies ensuring business continuity.", color: "text-rose-500", bg: "bg-rose-500/10" },
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



      {/* Cloud Platforms Section - Matches User Request */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
           <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Supported Platforms</h2>
              <p className="text-lg text-slate-600">We deploy on the infrastructure that best fits your needs.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AWS */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 text-center">
                 <div className="h-16 w-16 mx-auto mb-6">
                    <img src="https://cdn.simpleicons.org/amazonaws/FF9900" alt="AWS" className="w-full h-full object-contain" />
                 </div>
                 <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Amazon Web Services</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   Leverage the industry-leading scalability and reliability of AWS for your applications.
                 </p>
              </div>

              {/* Google Cloud */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center">
                 <div className="h-16 w-16 mx-auto mb-6">
                    <img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="Google Cloud" className="w-full h-full object-contain" />
                 </div>
                 <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Google Cloud Platform</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   Utilize Google's powerful infrastructure and cutting-edge data analytics and ML services.
                 </p>
              </div>

              {/* Azure */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-600/50 hover:shadow-xl hover:shadow-sky-600/10 transition-all duration-300 text-center">
                 <div className="h-16 w-16 mx-auto mb-6">
                    <img src="https://cdn.simpleicons.org/microsoftazure/0078D4" alt="Azure" className="w-full h-full object-contain" />
                 </div>
                 <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Microsoft Azure</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   Build, deploy, and manage applications with seamless integration into the Microsoft ecosystem.
                 </p>
              </div>

              {/* Private / Open Servers */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 text-center">
                 <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center bg-indigo-50 rounded-2xl">
                    <Server className="w-8 h-8 text-indigo-600" />
                 </div>
                 <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Private & Open Servers</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   Deploy on your own on-premise hardware or any open-source server for maximum control.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Modern Statistics/Partners Section */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-sky-200 rounded-3xl -rotate-3" />
                     <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
                        alt="Global Network" 
                        className="relative rounded-3xl shadow-2xl saturate-0 hover:saturate-100 transition-all duration-700" 
                    />
                </div>
                <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">Designed for high-performance scale</h2>
                    <p className="text-lg text-slate-600 mb-8">Whether you are a startup or a Fortune 500, our cloud solutions grow with you.</p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">1</div>
                           <div>
                              <div className="font-bold text-slate-900">Assessment & Planning</div>
                              <div className="text-sm text-slate-500">We analyze your current infrastructure.</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">2</div>
                           <div>
                              <div className="font-bold text-slate-900">Migration & Optimization</div>
                              <div className="text-sm text-slate-500">Seamless transition with minimal downtime.</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">3</div>
                           <div>
                              <div className="font-bold text-slate-900">24/7 Management</div>
                              <div className="text-sm text-slate-500">Proactive monitoring and support.</div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Ready to move to the cloud?</h2>
            <Button size="lg" className="h-14 px-10 rounded-full bg-sky-950 hover:bg-sky-900 text-white font-bold text-lg shadow-xl" asChild>
              <Link to="/company/contact">Consult Our Architects</Link>
            </Button>
        </div>
      </section>
    </>
  );
};

export default CloudSolutions;
