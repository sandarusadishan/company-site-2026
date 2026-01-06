import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Play, Calendar, Clock, User, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Webinars = () => {
    
  const upcoming = [
    {
       title: "Deep Dive into Cloud Security Patterns",
       date: "Jan 25, 2026",
       time: "10:00 AM PST",
       speaker: "Sarah Chen, Chief Architect",
       category: "Security"
    },
    {
       title: "Building Real-time Apps with WebSockets",
       date: "Feb 02, 2026",
       time: "11:00 AM PST",
       speaker: "Mike Ross, Lead Developer",
       category: "Engineering"
    }
  ];

  const recordings = [
    {
       title: "Introduction to Microservices Architecture",
       duration: "45 mins",
       speaker: "David Kim",
       views: "1.2k views",
       color: "from-blue-600 to-indigo-600"
    },
    {
       title: "AI in Financial Fraud Detection",
       duration: "55 mins",
       speaker: "Dr. Emily Wei",
       views: "950 views",
       color: "from-emerald-600 to-teal-600"
    },
    {
       title: "DevOps Best Practices for 2026",
       duration: "40 mins",
       speaker: "James Wilson",
       views: "2.1k views",
       color: "from-cyan-600 to-blue-600"
    },
    {
       title: "Mastering Kubernetes Operators",
       duration: "60 mins",
       speaker: "Sarah Chen",
       views: "1.5k views",
       color: "from-purple-600 to-pink-600"
    },
    {
       title: "API Management Strategies",
       duration: "50 mins",
       speaker: "Robert Taylor",
       views: "800 views",
       color: "from-orange-600 to-red-600"
    },
    {
       title: "Serverless vs Containers",
       duration: "45 mins",
       speaker: "Mike Ross",
       views: "3k views",
       color: "from-fuchsia-600 to-violet-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Webinars & Events | SoftVision IT Group</title>
        <meta name="description" content="Join our live webinars and watch past recordings. Expert sessions on cloud, security, and software architecture." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-stone-950 relative overflow-hidden text-white">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
         <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] translate-x-1/2" />
         
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/30 text-red-400 text-sm font-medium mb-6 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Live Sessions
               </div>
               <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  Learn from the <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Experts</span>
               </h1>
               <p className="text-xl text-stone-400 mb-10">
                  Tech talks, deep dives, and live coding sessions from the team providing the solutions.
               </p>
            </motion.div>
         </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-stone-900 border-b border-stone-800">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl font-bold text-white mb-8">Upcoming Webinars</h2>
            <div className="grid md:grid-cols-2 gap-8">
               {upcoming.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-stone-800/50 border border-stone-700 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-stone-800 transition-colors"
                  >
                     <div className="flex-shrink-0 w-full md:w-32 bg-stone-900 rounded-xl p-4 text-center border border-stone-700">
                        <Calendar className="h-6 w-6 text-red-500 mx-auto mb-2" />
                        <div className="text-sm text-stone-400">{event.date}</div>
                        <div className="font-bold text-white">{event.time}</div>
                     </div>
                     <div className="flex-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">{event.category}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center gap-2 text-stone-400 text-sm">
                           <User className="h-4 w-4" /> {event.speaker}
                        </div>
                     </div>
                     <Button className="bg-white text-stone-950 hover:bg-stone-200">Register</Button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Past Recordings */}
      <section className="py-24 bg-stone-950">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl font-bold text-white mb-12">Latest Recordings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {recordings.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                     <div className={`relative aspect-video rounded-xl bg-gradient-to-br ${video.color} mb-4 overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="h-6 w-6 text-white ml-1" />
                           </div>
                        </div>
                        <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black/60 text-xs font-medium text-white backdrop-blur-md">
                           {video.duration}
                        </div>
                     </div>
                     <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {video.title}
                     </h3>
                     <div className="flex items-center justify-between text-stone-500 text-sm">
                        <span>{video.speaker}</span>
                        <span className="flex items-center gap-1"><Video className="h-3 w-3" /> {video.views}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default Webinars;
