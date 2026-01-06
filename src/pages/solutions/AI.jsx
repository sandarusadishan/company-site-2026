import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Sparkles, Bot, LineChart, ArrowRight, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const AI = () => {
  return (
    <>
      <Helmet>
        <title>AI & ML Solutions | SoftVision IT Group</title>
        <meta name="description" content="Unlock the power of Artificial Intelligence. Machine learning models, predictive analytics, and intelligent automation." />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1a0b2e]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mb-8">
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Artificial Intelligence</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Intelligent <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
                  Automation
                </span>
              </h1>
              
              <p className="text-xl text-purple-100/70 mb-10 leading-relaxed max-w-lg">
                Transform data into actionable insights. Leveraging machine learning and neural networks to drive smarter business decisions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-lg shadow-purple-600/20" asChild>
                  <Link to="/company/contact">
                    Deploy AI <ArrowRight className="ml-2 h-5 w-5" />
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
               <div className="relative z-10">
                  <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
                  <div className="relative w-96 h-96 mx-auto grid grid-cols-3 gap-4 rotate-45">
                     {[...Array(9)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0.2 }}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                          className="rounded-2xl bg-white/5 border border-purple-500/30 backdrop-blur-md"
                        />
                     ))}
                     <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                        <Brain className="h-32 w-32 text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
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
              { icon: Brain, title: "Machine Learning", description: "Custom models trained on your data to predict outcomes and optimize processes.", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Bot, title: "AI Assistants", description: "Intelligent chatbots and virtual assistants to enhance customer support.", color: "text-pink-500", bg: "bg-pink-500/10" },
              { icon: LineChart, title: "Predictive Analytics", description: "Forecast trends and behaviors with high accuracy.", color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
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

export default AI;
