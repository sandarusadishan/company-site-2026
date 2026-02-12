import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, GitBranch, Cloud, Check, ChevronRight, Zap, Lock, BarChart3, Headphones, Code2, Smartphone, Globe, Layout, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoBg from "@/assets/video/video.mp4";
import SEO from "@/components/SEO";
import softVisionLogo from "@/assets/companies/icon.png";
import busyLogo from "@/assets/companies/busy.png";
import SkybLogo from "@/assets/companies/skyb.jpg";
import strategicBg from "@/assets/tech_bg_hq.png";

// CountUp Animation Component - Fixed Import
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
    // ... const services declaration ...
  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      description: "Tailor-made software solutions designed to meet your specific business requirements and workflows.",
      href: "/solutions/custom-software",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
      href: "/solutions/mobile-apps",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "High-performance, scalable web applications built with the latest modern web technologies.",
      href: "/solutions/web-development",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure setup, management, and CI/CD automation for modern deployment.",
      href: "/solutions/cloud",
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
      <SEO 
        title="Enterprise Software Solutions in Sri Lanka"
        description="SoftVision IT Group provides top-tier software solutions including POS Systems, Payroll Management, Busy Accounting Software, and custom enterprise applications in Sri Lanka."
        keywords="POS Systems, Payroll Software, Busy Accounting, Enterprise Software, Web Development Sri Lanka, Mobile Apps, Hotel Management System, Restaurant POS"
      />

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

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-20">
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
                <Link to="/solutions">
                  Our Services
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
      <section className="py-12 md:py-20 bg-background/50 border-b border-white/5 overflow-hidden relative">
        { /* Creative ambient glow */ }
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center mb-8 md:mb-12 relative z-10">
          <span className="inline-block py-2 px-6 rounded-full bg-blue-900/5 border border-blue-900/10 text-sm font-display font-medium tracking-[0.2em] text-blue-900 uppercase hover:bg-blue-900/10 transition-colors backdrop-blur-sm">
             Trusted by Leading Enterprises
          </span>
        </div>
        
        <div className="relative flex overflow-hidden group py-8 md:py-12">
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

      {/* Strategic Group Companies Section */}
      <section className="py-32 relative overflow-hidden bg-[#020617]">
        {/* Generated Premium Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={strategicBg} 
            alt="Strategic Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-24"
          >
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]"
             >
                <Globe className="w-3 h-3 animate-pulse" />
                Global Ecosystem
             </motion.div>
             <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
               Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Alliance</span>
             </h2>
             <p className="text-blue-100/60 max-w-2xl mx-auto text-xl leading-relaxed font-light">
               A unified coalition of industry leaders, engineering the future through specialized expertise and collective innovation.
             </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto perspective-2000">
            {[
              {
                name: "Soft Vision Technologies",
                sub: "", 
                desc: "Enterprise-grade Business Management Solutions tailored for scale.",
                logo: softVisionLogo,
                color: "blue",
                link: "https://busy.lk/",
                icon: Shield
              },
              {
                name: "Busy InfoTech",
                sub: "",
                desc: "Next-generation Cloud ERP Systems for modern commerce.",
                logo: busyLogo,
                color: "cyan",
                link: "https://www.busyerp.lk/",
                icon: Cloud
              },
              {
                name: "Skyb Overseas Consultants",
                sub: "",
                desc: "Premier guidance for global education and career pathways.",
                logo: SkybLogo,
                color: "indigo",
                link: "https://skyb.lk/",
                icon: Globe
              }
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[380px] group cursor-pointer"
              >
                  {/* Card Container */}
                  <div className="block h-full relative rounded-[24px]">
                    
                    {/* NEON BORDER GLOW - Matches User Reference */}
                    <div 
                      className="absolute inset-0 rounded-[24px] pointer-events-none transition-all duration-500 group-hover:opacity-100"
                      style={{
                        // Double-layer "Neon Tube" Glow: Inner + Outer
                        boxShadow: `0 0 20px ${company.color === 'blue' ? '#3b82f6' : company.color === 'cyan' ? '#06b6d4' : '#6366f1'}, inset 0 0 20px ${company.color === 'blue' ? '#3b82f6' : company.color === 'cyan' ? '#06b6d4' : '#6366f1'}`,
                        border: `2px solid ${company.color === 'blue' ? '#60a5fa' : company.color === 'cyan' ? '#22d3ee' : '#818cf8'}`,
                        opacity: 0.8,
                      }}
                    />

                    {/* Inner Content - Transparent to show background */}
                    <a 
                      href={company.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-[2px] bg-slate-950/20 backdrop-blur-[2px] rounded-[22px] z-10 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 hover:bg-slate-950/40"
                    >
                        
                        {/* Internal Shine Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[22px]" />

                        {/* Logo Container */}
                        <div className="relative w-24 h-24 mb-6 bg-white/95 rounded-2xl flex items-center justify-center p-4 shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-all duration-300">
                          {company.logo ? (
                            <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                          ) : (
                            <company.icon className="w-10 h-10 text-slate-800" />
                          )}
                        </div>

                        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {company.name}
                        </h3>
                        
                        <p className="text-slate-200 text-sm leading-relaxed mb-6 font-light max-w-[200px] drop-shadow-md">
                          {company.desc}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                           Visit Website <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master Section */}
      <section className="py-24 bg-[#0B1120] overflow-hidden relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Our Tech Stack</span>
             <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
               Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Master</span>
             </h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
               We don't just use tools; we engineer with them. From robust backends to immersive frontends, our expertise spans the entire digital ecosystem.
             </p>
           </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-12 opacity-80">
           {/* Row 1: Frontend & Fullstack (Left Scroll) */}
           <div className="flex gap-16 items-center animate-marquee" style={{ "--marquee-duration": "50s" }}>
              {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex gap-16 items-center shrink-0">
                    {[
                       { name: "React", color: "#61DAFB", slug: "react" },
                       { name: "JavaScript", color: "#F7DF1E", slug: "javascript" },
                       { name: "Angular", color: "#DD0031", slug: "angular" },
                       { name: "Vue.js", color: "#4FC08D", slug: "vuedotjs" },
                       { name: "Next.js", color: "#FFFFFF", slug: "nextdotjs" },
                       { name: "TypeScript", color: "#3178C6", slug: "typescript" },
                       { name: "Tailwind", color: "#38B2AC", slug: "tailwindcss" },
                       { name: "React Native", color: "#61DAFB", slug: "react" },
                       { name: "Flutter", color: "#02569B", slug: "flutter" },
                       { name: "Swift", color: "#F05138", slug: "swift" },
                       { name: "Android", color: "#3DDC84", slug: "android" }
                    ].map((tech, idx) => (
                       <div key={idx} className="flex flex-col items-center gap-3 group cursor-default">
                          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                             <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} alt={tech.name} className="w-10 h-10" />
                          </div>
                          <span className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{tech.name}</span>
                       </div>
                    ))}
                 </div>
              ))}
           </div>

           {/* Row 2: Backend, Cloud & DB (Right Scroll) */}
           <div className="flex gap-16 items-center animate-marquee-reverse" style={{ "--marquee-duration": "55s" }}>
              {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex gap-16 items-center shrink-0">
                    {[
                       { name: "Node.js", color: "#339933", slug: "nodedotjs" },
                       { name: "Express.js", color: "#FFFFFF", slug: "express" },
                       { name: "Java", color: "#007396", isCustom: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                       { name: "Spring Boot", color: "#6DB33F", slug: "springboot" },
                       { name: "Python", color: "#3776AB", slug: "python" },
                       { name: "PHP", color: "#777BB4", slug: "php" },
                       { name: "Go", color: "#00ADD8", slug: "go" },
                       { name: "Docker", color: "#2496ED", slug: "docker" },  
                       { name: "Kubernetes", color: "#326CE5", slug: "kubernetes" },
                       { name: "MongoDB", color: "#47A248", slug: "mongodb" },
                       { name: "PostgreSQL", color: "#4169E1", slug: "postgresql" }
                    ].map((tech, idx) => (
                       <div key={idx} className="flex flex-col items-center gap-3 group cursor-default">
                          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                             <img 
                                src={tech.isCustom ? tech.url : `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} 
                                alt={tech.name} 
                                className="w-10 h-10" 
                             />
                          </div>
                          <span className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors">{tech.name}</span>
                       </div>
                    ))}
                 </div>
              ))}
           </div>
           
           {/* Gradient masks */}
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10" />
        </div>
      </section>



      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative digital solutions to drive your business forward. From concept to deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elevated h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
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
      <section className="py-32 bg-[#050A18] relative overflow-hidden">
        {/* Creative Ambient Background Components (Premium Blue) */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-20" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold backdrop-blur-md">
                <Shield className="h-4 w-4" />
                <span>Enterprise Excellence</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-[1.1]">
                Enterprise-Grade <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-pulse">
                  At Every Layer
                </span>
              </h2>
              <p className="text-base md:text-lg text-blue-100/80 md:text-blue-100/70 mb-10 leading-relaxed max-w-lg">
                Engineered for specialized requirements. We deliver a platform that is not just powerful, but resilient, secure, and rigorously tested for mission-critical operations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: "99.99% Uptime", desc: "Global SLA Guarantee", color: "text-amber-400", bg: "bg-amber-400/10" },
                  { icon: Lock, text: "SOC 2 & HIPAA", desc: "Compliance Ready", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                  { icon: BarChart3, text: "Real-time Metrics", desc: "Full Observability", color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { icon: Headphones, text: "24/7 Support", desc: "Dedicated Team", color: "text-purple-400", bg: "bg-purple-400/10" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ y: -5, background: "rgba(255,255,255,0.05)" }}
                    className={`flex flex-col p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-white uppercase tracking-wider text-sm">{item.text}</span>
                    </div>
                    <span className="text-xs text-blue-200/50 pl-[3.5rem] group-hover:text-blue-100 transition-colors">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-8">
                {/* Creative Primary Button: Magnetic Shimmer */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Button size="lg" className="relative h-12 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all overflow-hidden border border-blue-400/20" asChild>
                    <Link to="/solutions">
                      {/* Shimmer Effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                      <span className="relative flex items-center gap-2">
                        Explore Solutions
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>

                {/* Creative Secondary Link: Animated Underline */}
                <Link to="/contact" className="relative text-blue-200/80 hover:text-white font-bold transition-colors flex items-center gap-1 group py-2">
                  Contact Sales
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex justify-center perspective-[2500px] group relative py-20"
            >
              <motion.div 
                className="relative w-full max-w-2xl h-[500px] flex items-center justify-center transform-style-3d transition-transform duration-500 ease-out"
                whileHover={{ rotateY: 5, rotateX: -5 }}
              >
                
                {/* 3D Depth Particle Field */}
                <div className="absolute inset-0 transform-style-3d pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        z: [Math.random() * -200, Math.random() * 200],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 5 + Math.random() * 5, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="absolute w-1 h-1 bg-blue-400/40 rounded-full blur-[1px]"
                      style={{ 
                        left: `${Math.random() * 100}%`, 
                        top: `${Math.random() * 100}%`,
                        transform: `translateZ(${Math.random() * 200 - 100}px)` 
                      }}
                    />
                  ))}
                </div>

                {/* Interactive Base Container */}
                <div className="relative w-full h-full flex items-center justify-center transform-style-3d rotate-x-12 rotate-y-[-15deg] group-hover:rotate-y-[-5deg] transition-transform duration-1000 ease-out">
                  
                  {/* Visual Depth Particles (Central Axis) */}
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent top-1/2 -translate-y-1/2 blur-md" />

                  {/* Layer 4: Infrastructure (Scale) */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      x: [-90, -100, -90]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-72 h-44 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center z-10 group-hover:translate-x-[-260px] group-hover:translate-y-[-30px] transition-transform duration-700 ease-out"
                    style={{ transform: "translateZ(-160px) translateX(-90px)" }}
                  >
                    <Server className="h-12 w-12 text-blue-400 opacity-40" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-300/40 tracking-[0.3em] uppercase">Scale</div>
                  </motion.div>

                  {/* Layer 3: Network (Connect) */}
                  <motion.div
                    animate={{ 
                      y: [0, 15, 0],
                      x: [-30, -20, -30]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute w-72 h-44 bg-blue-900/40 backdrop-blur-xl rounded-3xl border border-blue-400/20 shadow-2xl flex items-center justify-center z-20 group-hover:translate-x-[-100px] group-hover:translate-y-[40px] transition-transform duration-700 ease-out"
                    style={{ transform: "translateZ(-80px) translateX(-30px)" }}
                  >
                    <GitBranch className="h-12 w-12 text-blue-400/60" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-300/60 tracking-[0.3em] uppercase">Connect</div>
                  </motion.div>

                  {/* Layer 2: Platform (Integrate) */}
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      x: [30, 40, 30]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute w-72 h-44 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(37,99,235,0.3)] flex items-center justify-center z-30 transition-transform duration-700 ease-out group-hover:translate-x-[100px] group-hover:translate-y-[-50px]"
                    style={{ transform: "translateZ(0px) translateX(30px)" }}
                  >
                    <Cloud className="h-14 w-14 text-white" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white tracking-[0.3em] uppercase">Integrate</div>
                  </motion.div>

                  {/* Layer 1: Security (Protect) */}
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      x: [90, 80, 90]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute w-72 h-44 bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-cyan-400/30 shadow-[0_20px_50px_rgba(34,211,238,0.2)] flex items-center justify-center z-40 group-hover:translate-x-[260px] group-hover:translate-y-[20px] transition-transform duration-700 ease-out overflow-hidden"
                    style={{ transform: "translateZ(80px) translateX(90px)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-transparent" />
                    <Shield className="h-16 w-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-cyan-400 tracking-[0.3em] uppercase">Protect</div>
                    <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] animate-pulse" />
                  </motion.div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/50 rounded-full blur-[120px]" 
          />
        </div>

        {/* Floating Creative Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                y: [0, -100],
                x: [0, (Math.random() - 0.5) * 50]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                bottom: "10%" 
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-2 px-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8 uppercase tracking-widest">
              Take the next step
            </span>
            <h2 className="font-display text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Ready to Transform Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                Enterprise?
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ enterprises already building the future with SoftVision IT Group. 
              Deploy mission-critical infrastructure with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Creative Primary CTA: Glow & Sweep */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-500" />
                <Button
                  size="lg"
                  className="relative h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-lg font-black shadow-2xl transition-all overflow-hidden border border-white/10"
                  asChild
                >
                  <Link to="/company/contact">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center gap-3">
                      Start Free Trial
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
              
              {/* Creative Secondary CTA: Neon Glass Border */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-lg font-bold border border-slate-200 transition-all shadow-sm overflow-hidden group"
                  asChild
                >
                  <Link to="/company/contact">
                    <span className="relative z-10">Talk to Sales</span>
                    {/* Animated Border Reveal */}
                    <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-full transition-all duration-300" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-12 grayscale opacity-60">
               {/* Subtle Trust Indicators */}
               <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs">
                  <Shield className="h-4 w-4" /> Secure By Design
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs">
                  <Zap className="h-4 w-4" /> Global Scale
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs">
                  <Cloud className="h-4 w-4" /> Cloud Native
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
