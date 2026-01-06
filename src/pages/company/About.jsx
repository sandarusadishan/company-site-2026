import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Users, Globe, Award, ArrowRight, History, Rocket, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of what's possible in enterprise software." },
    { icon: Users, title: "Customer First", description: "Every decision starts with understanding our customer's needs." },
    { icon: Globe, title: "Global Impact", description: "Empowering enterprises across 50+ countries worldwide." },
    { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality solutions." },
  ];

  const stats = [
    { value: "2015", label: "Founded" },
    { value: "500+", label: "Employees" },
    { value: "50+", label: "Countries" },
    { value: "1000+", label: "Customers" },
  ];

  const history = [
    { year: "2015", title: "Inception", description: "Founded in Colombo with a vision to revolutionize enterprise IT." },
    { year: "2018", title: "Regional Expansion", description: "Opened offices in Singapore and Dubai to serve Asian markets." },
    { year: "2021", title: "Cloud Native", description: "Launched our flagship Cloud Platform, redefining scalability." },
    { year: "2024", title: "Global Reach", description: "Crossed 1000+ enterprise customers across 50 countries." },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | SoftVision IT Group</title>
        <meta name="description" content="Learn about SoftVision IT Group's mission to empower enterprises with cutting-edge software solutions. Our story, values, and global impact." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0f172a] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                 <Building className="h-4 w-4" />
                 Since 2015
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Gold Standard</span> <br/>
              of Enterprise Software
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We started with a simple belief: Enterprise software doesn't have to be clunky. 
              Today, we power the digital infrastructure of the world's leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1e293b] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-amber-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-[#0f172a] text-white relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our DNA</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We believe that every enterprise deserves access to world-class software infrastructure. 
              Our mission is to democratize technology, making it accessible, secure, and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <value.icon className="h-10 w-10 text-amber-500 mb-6" />
                <h3 className="font-display text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-[#1e293b] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16 text-center">Our Journey</h2>
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12">
               {history.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                     <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-4 h-4 rounded-full bg-amber-500 border-4 border-[#1e293b]" />
                     <div className="flex-1 md:w-1/2" />
                     <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        <div className="text-amber-500 font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.description}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10" />
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to shape the future together?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
            We are always looking for visionary partners and talented individuals to join our mission.
          </p>
          <div className="flex flex-center justify-center gap-4">
             <Button size="lg" className="h-14 px-8 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold" asChild>
                <Link to="/company/careers">
                View Careers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
