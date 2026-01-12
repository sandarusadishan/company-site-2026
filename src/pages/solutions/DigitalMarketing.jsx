import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Zap, MessageCircle, Heart, Share2, Play, PenTool, UserPlus, Search, Mail, Users, ShieldAlert, Rocket, Crown, Gem, TrendingUp, Sparkles } from "lucide-react";

// Brand Logos (Inline SVGs for precise coloring)
const FacebookLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="#1877F2" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const InstagramLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><rect width="24" height="24" fill="url(#insta_gradient)" rx="6"/><defs><linearGradient id="insta_gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD600"/><stop offset="0.5" stopColor="#FF0100"/><stop offset="1" stopColor="#D800B9"/></linearGradient></defs><path fill="#fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.892 3.892 0 110-7.784 3.892 3.892 0 010 7.784zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const WhatsAppLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="#25D366" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);
const TikTokLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="#000000" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z" fill="#fff"/></svg>
);

const LinkedInLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="#0A66C2" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const XLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="#000000" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#fff"/></svg>
);

const DigitalMarketing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Floating animation configuration
  const floatAnim = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const packages = [
      {
          name: "Starter Spark",
          price: "Inquire",
          description: "Perfect for new businesses establishing a digital footprint.",
          features: ["2 Social Platforms", "8 Posts / Month", "Basic Graphics", "Community Monitoring"],
          gradient: "from-blue-500 to-cyan-500",
          icon: Zap,
          popular: false
      },
      {
          name: "Growth Catalyst",
          price: "Inquire",
          description: "Accelerate your presence with consistent content and engagement.",
          features: ["3 Social Platforms", "12 Posts / Month", "4 Reels / Shorts", "Monthly Performance Report", "Ad Campaign Setup"],
          gradient: "from-purple-500 to-pink-500",
          icon: Rocket,
          popular: true
      },
      {
          name: "Brand Authority",
          price: "Inquire",
          description: "Dominate your niche with high-quality video and paid strategy.",
          features: ["4 Social Platforms", "20 Posts / Month", "8 Reels / Shorts", "Bi-Weekly Strategy Calls", "Paid Ad Management ($1k Spend)"],
          gradient: "from-orange-500 to-red-500",
          icon: Crown,
          popular: false
      },
      {
          name: "Market Leader",
          price: "Inquire",
          description: "Full-scale digital takeover for established brands.",
          features: ["All Platforms", "Daily Posting", "15 Reels / Shorts", "Influencer Outreach", "Paid Ad Management ($5k+ Spend)"],
          gradient: "from-green-500 to-emerald-500",
          icon: TrendingUp,
          popular: false
      },
      {
          name: "Viral Enterprise",
          price: "Inquire",
          description: "Custom, high-volume production for maximum impact.",
          features: ["Unlimited Platforms", "Daily Video Content", "Dedicated Team (3 Member)", "24/7 Crisis Management", "Custom Viral Campaigns"],
          gradient: "from-blue-600 via-indigo-600 to-purple-600",
          icon: Gem,
          popular: false
      }
  ];

  return (
    <div ref={containerRef} className="bg-background min-h-screen">
      <Helmet>
        <title>Digital Marketing & Social Media | SoftVision IT</title>
        <meta name="description" content="Expert social media management, content creation, and digital marketing strategies for platforms like Facebook, Instagram, TikTok, LinkedIn, X, and WhatsApp." />
      </Helmet>

      {/* 3D HERO SECTION - Dark Theme Maintained for Impact */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020617] to-[#020617] opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-300 font-mono text-sm tracking-widest uppercase">Trending Now</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1.1] text-white tracking-tight mb-8">
              DIGITAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 animate-gradient-x">IMPACT</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10">
              We don't just post. We ignite conversations. From viral TikToks to high-ROI Meta ads, we engineer your brand's digital dominance.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-slate-200 text-lg font-bold transition-transform hover:scale-105" asChild>
                 <Link to="/company/contact">Start Growing</Link>
               </Button>
               <Button variant="outline" className="h-14 px-8 rounded-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 text-lg font-bold" asChild>
                 <Link to="/company/gallery">See Results</Link>
               </Button>
            </div>
          </motion.div>

          {/* 3D Floating Icons Universe */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
             {/* Floating Elements using Framer Motion */}
             <motion.div 
               variants={floatAnim}
               animate="animate"
               className="absolute top-0 right-10 w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-[0_0_50px_rgba(24,119,242,0.3)] z-20"
               style={{ y: y1 }}
             >
               <FacebookLogo className="w-full h-full drop-shadow-lg" />
             </motion.div>

             <motion.div 
               variants={floatAnim}
               animate="animate"
               transition={{ delay: 0.5 }}
               className="absolute top-40 left-0 w-28 h-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 shadow-[0_0_50px_rgba(217,46,127,0.3)] z-30"
               style={{ y: y2 }}
             >
               <InstagramLogo className="w-full h-full drop-shadow-lg" />
             </motion.div>

             <motion.div 
               variants={floatAnim}
               animate="animate"
               transition={{ delay: 1 }}
               className="absolute bottom-20 right-32 w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-[0_0_50px_rgba(37,211,102,0.3)] z-20"
             >
               <WhatsAppLogo className="w-full h-full drop-shadow-lg" />
             </motion.div>

             <motion.div 
               variants={floatAnim}
               animate="animate"
               transition={{ delay: 0.8 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[2rem] p-6 shadow-2xl z-10 flex items-center justify-center group"
             >
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl -z-10 group-hover:bg-purple-600/30 transition-colors duration-500"/>
                <Globe className="w-16 h-16 text-white opacity-80" />
             </motion.div>

             <motion.div 
                variants={floatAnim}
                animate="animate"
                transition={{ delay: 1.2 }}
                className="absolute -bottom-10 left-20 w-20 h-20 bg-black border border-white/20 rounded-2xl p-4 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                style={{ y: y1 }}
             >
               <TikTokLogo className="w-full h-full" />
             </motion.div>

             <motion.div 
               variants={floatAnim}
               animate="animate"
               transition={{ delay: 1.5 }}
               className="absolute top-10 left-48 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_0_30px_rgba(10,102,194,0.3)] z-10"
             >
               <LinkedInLogo className="w-full h-full" />
             </motion.div>

             <motion.div 
               variants={floatAnim}
               animate="animate"
               transition={{ delay: 1.8 }}
               className="absolute bottom-40 right-10 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] z-10"
             >
               <XLogo className="w-full h-full" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive Content Sections */}
      
      {/* 1. IDENTITY & SETUP - Light Theme */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-white border border-slate-200 p-10 rounded-3xl shadow-xl">
                   <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <PenTool className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                        <h4 className="font-bold text-slate-900">Logo Design</h4>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <UserPlus className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                        <h4 className="font-bold text-slate-900">Account Setup</h4>
                      </div>
                   </div>
                   <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Identity & Architecture</h3>
                   <ul className="space-y-4 text-slate-600">
                     <li className="flex items-center gap-3"><div className="w-2 h-2 bg-indigo-500 rounded-full"/> Professional Logo & Brand Guidelines Creation</li>
                     <li className="flex items-center gap-3"><div className="w-2 h-2 bg-indigo-500 rounded-full"/> Business Page Creation (FB, Insta, LinkedIn, X, TikTok)</li>
                     <li className="flex items-center gap-3"><div className="w-2 h-2 bg-indigo-500 rounded-full"/> Bio Optimization & SEO-friendly Setup</li>
                   </ul>
                </div>
             </div>
             <div>
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Step 01</span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mt-2 mb-6 text-slate-900">The Foundation.</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                   You can't build a skyscraper on quicksand. We start by forging a striking brand identity and setting up professional, optimized accounts across all relevant platforms. We ensure you look like an industry leader from Day 1.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGY - Dark Theme */}
      <section className="py-24 bg-[#0B1120] relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
             <div className="order-2 lg:order-1">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Step 02</span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mt-2 mb-6 text-white">The Blueprint.</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                   Before we post, we plan. We dissect your industry trends and audience psychology to build a roadmap that guarantees attention. No guessing, just data-backed precision.
                </p>
             </div>
             <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
                   <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                      <Zap className="h-8 w-8 text-blue-400" />
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-4 text-white">Strategic Branding</h3>
                   <ul className="space-y-4 text-slate-300">
                     <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Identifying your unique brand voice</li>
                     <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Competitor analysis & market positioning</li>
                     <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Cross-platform visual identity systems</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CONTENT - Light Theme */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative bg-white border border-slate-200 p-10 rounded-3xl shadow-xl">
                   <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                      <Play className="h-8 w-8 text-pink-600 ml-1" />
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">Content Production</h3>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl text-center hover:bg-slate-100 transition-colors border border-slate-200">
                        <InstagramLogo className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm font-medium text-slate-700">Reels</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl text-center hover:bg-slate-100 transition-colors border border-slate-200">
                        <TikTokLogo className="h-8 w-8 mx-auto mb-2 fill-black" />
                        <span className="text-sm font-medium text-slate-700">TikTok</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl text-center hover:bg-slate-100 transition-colors border border-slate-200">
                        <Share2 className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                        <span className="text-sm font-medium text-slate-700">Graphics</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl text-center hover:bg-slate-100 transition-colors border border-slate-200">
                        <Globe className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                        <span className="text-sm font-medium text-slate-700">Web</span>
                      </div>
                   </div>
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <span className="text-pink-600 font-bold tracking-widest uppercase text-sm">Step 03</span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mt-2 mb-6 text-slate-900">Visual Alchemy.</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                   Scroll-stopping graphic design and high-retention video editing. From cinematic Reels to viral TikToks, we create content that people actually <i>want</i> to watch.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE MARKETING - Dark Theme */}
      <section className="py-24 bg-[#0B1120] relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
             <div className="order-2 lg:order-1">
                <span className="text-green-500 font-bold tracking-widest uppercase text-sm">Step 04</span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mt-2 mb-6 text-white">Scalable Growth.</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                   Organic reach is great, but paid traffic is scalable. We run hyper-targeted campaigns on Meta and Google to flood your funnel with qualified leads, not just likes.
                </p>
             </div>
             <div className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-25 animate-pulse" />
                <div className="relative bg-slate-900 border border-white/10 p-10 rounded-3xl overflow-hidden">
                   <div className="absolute top-0 right-0 p-6 opacity-10">
                      <BarChart3 className="h-40 w-40" />
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-8 text-white">Paid Media ROI</h3>
                   
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="flex justify-between text-sm font-medium">
                            <span className="text-slate-400">Campaign Reach</span>
                            <span className="text-green-400">+450%</span>
                         </div>
                         <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "85%" }}
                              transition={{ duration: 1.5 }}
                              className="h-full bg-green-500 rounded-full" 
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between text-sm font-medium">
                            <span className="text-slate-400">Lead Conversion</span>
                            <span className="text-green-400">+120%</span>
                         </div>
                         <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "65%" }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                              className="h-full bg-emerald-500 rounded-full" 
                            />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FULL DIGITAL SUITE - Light Theme */}
      <section className="py-24 bg-slate-50 relative">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
               <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">360° Vision</span>
               <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6 text-slate-900">The Full Suite</h2>
               <p className="max-w-2xl mx-auto text-slate-600">Everything else you need to succeed online. If it's digital, we master it.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { icon: Search, title: "SEO Optimization", desc: "Ranking you #1 on Google for keywords that matter to your bottom line." },
                  { icon: Mail, title: "Email Marketing", desc: "Automated flows that nurture leads and turn one-time buyers into loyal environments." },
                  { icon: Users, title: "Influencer Marketing", desc: "Connecting your brand with voices that your audience already trusts." },
                  { icon: MessageCircle, title: "Community Management", desc: "Real-time engagement, comment moderation, and audience building." },
                  { icon: ShieldAlert, title: "Crisis Management", desc: "Protective strategies to handle PR issues and maintain brand reputation." },
                  { icon: Globe, title: "Web Development", desc: "High-performance landing pages designed to convert traffic into sales." }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
                  >
                     <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <item.icon className="h-6 w-6" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* PACKAGES SECTION - Dark Theme for Contrast */}
      <section className="py-24 bg-[#020617] relative border-t border-white/5">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
               <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">Pricing Models</span>
               <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4 text-white">Choose Your Growth Engine</h2>
               <p className="text-slate-400">Transparent packages tailored to your speed of growth.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
               {packages.map((pkg, index) => (
                  <motion.div
                     key={pkg.name}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     className={`relative p-6 rounded-2xl border ${pkg.popular ? 'border-purple-500/50 bg-slate-900/80 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-white/10 bg-white/5'} backdrop-blur-sm flex flex-col group hover:border-purple-500/30 transition-all hover:bg-slate-900 hover:-translate-y-2`}
                  >
                     {pkg.popular && (
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                           <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">POPULAR</span>
                        </div>
                     )}
                     
                     <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <pkg.icon className="h-6 w-6 text-white" />
                     </div>
                     
                     <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                     <p className="text-xs text-slate-400 mb-6 flex-grow leading-relaxed">{pkg.description}</p>
                     
                     <div className="text-2xl font-bold text-white mb-6">{pkg.price}</div>
                     
                     <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                           <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                              {feature}
                           </li>
                        ))}
                     </ul>
                     
                     <Button className="w-full bg-white text-black hover:bg-blue-500 hover:text-white transition-all font-bold shadow-lg" asChild>
                        <Link to="/company/contact">Select Plan</Link>
                     </Button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL CTA - Final Dark Section */}
      <section className="py-24 bg-black border-t border-white/10">
         <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
               Ready to go <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Viral?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
               Your audience is scrolling right now. Let's give them something to stop for.
            </p>
            <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-full bg-white text-black hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]" asChild>
               <Link to="/company/contact">Start Your Campaign</Link>
            </Button>
         </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
