import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Key, ArrowRight, ShieldCheck, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Security Solutions | SoftVision IT Group</title>
        <meta name="description" content="Zero-trust security architecture. Enterprise-grade encryption, threat detection, and identity management solutions." />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 backdrop-blur-md mb-8">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Zero Trust Architecture</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Uncompromised <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400">
                  Security
                </span>
              </h1>
              
              <p className="text-xl text-emerald-100/70 mb-10 leading-relaxed max-w-lg">
                Protect your digital assets with military-grade encryption and intelligent threat detection. Security built into every layer.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-600/20" asChild>
                  <Link to="/company/contact">
                    Secure Your Business <ArrowRight className="ml-2 h-5 w-5" />
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
               <div className="relative z-10 w-80 h-96 mx-auto bg-gradient-to-b from-emerald-900/40 to-black border border-emerald-500/20 rounded-[3rem] flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-[3rem]" />
                  <Lock className="h-32 w-32 text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  
                  <div className="absolute -right-12 top-12 py-2 px-4 bg-black border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-mono">
                    Encryption: AES-256
                  </div>
                  <div className="absolute -left-12 bottom-24 py-2 px-4 bg-black border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-mono">
                    Status: Secure
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
              { icon: Shield, title: "Zero Trust", description: "Never trust, always verify. Strict identity verification for every user and device.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { icon: Eye, title: "Threat Detection", description: "AI-powered monitoring to detect and stop attacks in real-time.", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: Key, title: "Identity Mgmt", description: "Seamless and secure access control with SSO and MFA.", color: "text-lime-500", bg: "bg-lime-500/10" },
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

export default Security;
