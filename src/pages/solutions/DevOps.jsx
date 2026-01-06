import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GitBranch, Repeat, Settings, Command, ArrowRight, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const DevOps = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Solutions | SoftVision IT Group</title>
        <meta name="description" content="Streamline your software delivery with DevOps. CI/CD pipelines, infrastructure automation, and container orchestration." />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#082f49]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[1000px] h-[400px] bg-cyan-500/20 rounded-[100%] blur-[100px] -translate-x-1/2 -translate-y-1/2 rotate-12" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-8">
                <Settings className="h-4 w-4 text-cyan-300 animate-spin-slow" />
                <span className="text-sm font-medium text-cyan-200">Continuous Integration</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Automate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400">
                  Everything
                </span>
              </h1>
              
              <p className="text-xl text-cyan-100/70 mb-10 leading-relaxed max-w-lg">
                Accelerate delivery cycles and improve reliability. We build robust CI/CD pipelines that get your code to production faster.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-600/20" asChild>
                  <Link to="/company/contact">
                    Optimize Workflow <ArrowRight className="ml-2 h-5 w-5" />
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
               <div className="relative z-10 p-8 rounded-3xl bg-black/40 border border-cyan-900/50 backdrop-blur-xl">
                  {/* Pipeline Visualization */}
                  <div className="flex items-center justify-between gap-2 overflow-x-auto p-4">
                     <div className="flex flex-col items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
                           <Code2 className="h-6 w-6 text-cyan-400" />
                        </div>
                        <span className="text-xs text-cyan-300 uppercase font-bold">Code</span>
                     </div>
                     <div className="h-1 flex-1 bg-cyan-500/30 rounded-full" />
                     <div className="flex flex-col items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
                           <Terminal className="h-6 w-6 text-cyan-400" />
                        </div>
                        <span className="text-xs text-cyan-300 uppercase font-bold">Build</span>
                     </div>
                     <div className="h-1 flex-1 bg-cyan-500/30 rounded-full" />
                     <div className="flex flex-col items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
                           <Repeat className="h-6 w-6 text-cyan-400" />
                        </div>
                        <span className="text-xs text-cyan-300 uppercase font-bold">Deploy</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: GitBranch, title: "CI/CD Pipelines", description: "Automated build, test, and deployment workflows.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
              { icon: Command, title: "Infrastructure as Code", description: "Manage infrastructure using Terraform and Ansible.", color: "text-sky-500", bg: "bg-sky-500/10" },
              { icon: Repeat, title: "Automation", description: "Eliminate manual tasks with intelligent scripting and bots.", color: "text-blue-500", bg: "bg-blue-500/10" },
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

export default DevOps;
