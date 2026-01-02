import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, GitBranch, Cloud, Check, ChevronRight, Zap, Lock, BarChart3, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoBg from "@/assets/video/video.mp4";

const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 2,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

const Home = () => {
  const products = [
    {
      icon: Server,
      title: "API Manager",
      description: "Full lifecycle API management with analytics, security, and developer portal.",
      href: "/products/api-manager",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Identity Server",
      description: "Enterprise-grade identity and access management for modern applications.",
      href: "/products/identity-server",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: GitBranch,
      title: "Integration Platform",
      description: "Connect, mediate, and transform data across any system or protocol.",
      href: "/products/integration-platform",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Deploy and scale your applications with our cloud-native infrastructure.",
      href: "/products/cloud-platform",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const stats = [
    { value: 20, label: "Years In Operation", suffix: "+" },
    { value: 1000, label: "Customers", suffix: "+" },
    { value: 30, label: "Team Members", suffix: "+" },
    { value: 20, label: "Countries Served", suffix: "+" },
  ];

  return (
    <>
      <Helmet>
        <title>SoftVision IT Group | Enterprise Software Solutions</title>
        <meta name="description" content="Transform your digital infrastructure with enterprise-grade API management, identity solutions, and cloud integration platform. Trusted by Fortune 500 companies." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability without fixing color */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Build the Future of{" "}
              <span className="text-gradient">Enterprise Software</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Transform your digital infrastructure with our enterprise-grade platform. 
              API management, identity solutions, and seamless integration—all in one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="magnetic-button accent-gradient text-accent-foreground px-8 py-6 text-lg"
                asChild
              >
                <Link to="/company/contact">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white px-8 py-6 text-lg border-2 border-white"
                asChild
              >
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* Trusted Enterprises Section */}
      <section className="py-20 bg-background/50 border-b border-white/5 overflow-hidden relative">
        { /* Creative ambient glow */ }
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 text-center mb-12 relative z-10">
          <span className="inline-block py-2 px-6 rounded-full bg-blue-900/5 border border-blue-900/10 text-sm font-display font-medium tracking-[0.2em] text-blue-900 uppercase hover:bg-blue-900/10 transition-colors backdrop-blur-sm">
             Trusted by Leading Enterprises
          </span>
        </div>
        
        <div className="relative flex overflow-hidden group py-12">
          <div
            className="flex gap-16 items-center animate-marquee"
            style={{ "--marquee-duration": "100s" }}
            onMouseEnter={(e) => (e.target.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.target.style.animationPlayState = "running")}
          >
            {/* Duplicated list for seamless infinite scroll */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center shrink-0">
                {Object.values(import.meta.glob('@/assets/customers/*.{jpg,jpeg,png,svg}', { eager: true })).map((module, i) => (
                  <div key={`${setIndex}-${i}`} className="h-24 w-48 bg-white/5 rounded-lg overflow-hidden relative group/logo flex items-center justify-center p-4 hover:scale-[1.2] hover:z-50 transition-transform duration-300 shadow-lg border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-cyan-500/20">
                     <img 
                       src={module.default} 
                       alt={`Customer Logo ${i + 1}`} 
                       className="w-full h-full object-contain"
                     />
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, secure, and scale your enterprise applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={product.href}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elevated h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <span className="inline-flex items-center text-accent font-medium text-sm">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        {/* Subtle mesh pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 drop-shadow-sm">
                Enterprise-Grade at Every Layer
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Built from the ground up to exceed enterprise standards. We deliver a platform that is not just powerful, but resilient, secure, and rigorously tested.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: "99.99% Uptime", desc: "Global SLA Guarantee" },
                  { icon: Lock, text: "SOC 2 & HIPAA", desc: "Compliance Ready" },
                  { icon: BarChart3, text: "Real-time Metrics", desc: "Full Observability" },
                  { icon: Headphones, text: "24/7 Support", desc: "Dedicated Team" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ y: -5 }}
                    className="flex flex-col p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-semibold text-foreground">{item.text}</span>
                    </div>
                    <span className="text-sm text-muted-foreground pl-[3.25rem]">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Button className="accent-gradient text-accent-foreground shadow-lg shadow-blue-500/20" asChild>
                  <Link to="/solutions">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2 flex justify-center perspective-1000">
              <div className="relative w-80 h-96 flex items-center justify-center">
                
                {/* Layer 4: Infrastructure (Bottom) */}
                <motion.div
                   initial={{ opacity: 0, y: 100, scale: 0.8 }}
                   whileInView={{ opacity: 1, y: 120, scale: 0.9 }}
                   viewport={{ once: true }}
                   animate={{ y: [120, 110, 120] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                   className="absolute w-64 h-64 bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl flex items-center justify-center transform -rotate-12 z-0 opacity-80"
                >
                   <Server className="h-20 w-20 text-slate-500" />
                   <div className="absolute bottom-4 text-xs font-mono text-slate-500 uppercase tracking-widest">Infrastructure</div>
                </motion.div>

                {/* Layer 3: Network */}
                <motion.div
                   initial={{ opacity: 0, y: 50, scale: 0.85 }}
                   whileInView={{ opacity: 1, y: 60, scale: 0.95 }}
                   viewport={{ once: true }}
                   animate={{ y: [60, 50, 60] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute w-64 h-64 bg-blue-900 rounded-3xl border border-blue-700 shadow-2xl flex items-center justify-center transform -rotate-6 z-10"
                >
                   <GitBranch className="h-20 w-20 text-blue-400" />
                   <div className="absolute bottom-4 text-xs font-mono text-blue-400 uppercase tracking-widest">Integration</div>
                </motion.div>

                {/* Layer 2: Cloud */}
                <motion.div
                   initial={{ opacity: 0, y: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   viewport={{ once: true }}
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                   className="absolute w-64 h-64 bg-indigo-600 rounded-3xl border border-indigo-400 shadow-2xl flex items-center justify-center transform rotate-0 z-20"
                >
                   <Cloud className="h-20 w-20 text-white" />
                   <div className="absolute bottom-4 text-xs font-mono text-indigo-200 uppercase tracking-widest">Cloud Platform</div>
                </motion.div>

                {/* Layer 1: Security (Top) */}
                <motion.div
                   initial={{ opacity: 0, y: -50, scale: 0.95 }}
                   whileInView={{ opacity: 1, y: -60, scale: 1.05 }}
                   viewport={{ once: true }}
                   animate={{ y: [-60, -70, -60] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                   className="absolute w-64 h-64 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-center transform rotate-6 z-30"
                >
                   <Shield className="h-24 w-24 text-white drop-shadow-glow" />
                   <div className="absolute bottom-4 text-xs font-mono text-white/80 uppercase tracking-widest">Security Layer</div>
                   <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse" />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10">
              Join 500+ enterprises already building the future with SoftVision IT Group. 
              Get started today with our free tier.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="magnetic-button bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/company/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white px-8 py-6 text-lg border-2 border-white"
                asChild
              >
                <Link to="/company/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
