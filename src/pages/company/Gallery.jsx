import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, MapPin, Calendar, Heart, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Events", "Office", "Team", "Awards"];

  const images = [
    {
      id: 1,
      category: "Office",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      title: "Global HQ Lobby",
      location: "Colombo, Sri Lanka",
      size: "large"
    },
    {
      id: 2,
      category: "Team",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      title: "Engineering Brainstorm",
      location: "Meeting Room A",
      size: "normal"
    },
    {
      id: 3,
      category: "Events",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      title: "Tech Summit 2025",
      location: "Main Auditorium",
      size: "tall"
    },
    {
      id: 4,
      category: "Office",
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      title: "Open Workspace",
      location: "Zone B",
      size: "normal"
    },
    {
      id: 5,
      category: "Team",
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      title: "Friday Happy Hour",
      location: "Rooftop Lounge",
      size: "tall"
    },
    {
      id: 6,
      category: "Awards",
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800",
      title: "Best Workplace Award",
      location: "Gala Dinner",
      size: "normal"
    },
    {
      id: 7,
      category: "Events",
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      title: "Annual Hackathon",
      location: "Innovation Lab",
      size: "large"
    },
    {
      id: 8,
      category: "Team",
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      title: "Client Success Team",
      location: "Collaboration Hub",
      size: "normal"
    }
  ];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Gallery | SoftVision IT Group</title>
        <meta name="description" content="A glimpse into life at SoftVision IT Group. Explore our workspace, events, and vibrant company culture." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#050505] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />

         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8">
                  <Camera className="h-4 w-4" />
                  Life at SoftVision
               </div>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                  Capturing our <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Best Moments</span>
               </h1>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-12">
               {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                      activeFilter === cat 
                        ? "text-white" 
                        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                    )}
                  >
                     {activeFilter === cat && (
                        <motion.div
                           layoutId="activeFilter"
                           className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                           initial={false}
                           transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                     )}
                     <span className="relative z-10">{cat}</span>
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#050505]">
         <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <motion.div 
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[300px]"
            >
               <AnimatePresence mode="popLayout">
                  {filteredImages.map((img) => (
                     <motion.div
                        layout
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className={cn(
                           "relative group rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/5",
                           img.size === "large" ? "md:col-span-2 md:row-span-2" : 
                           img.size === "tall" ? "row-span-2" : "col-span-1"
                        )}
                     >
                        <img 
                           src={img.src} 
                           alt={img.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                           <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">{img.category}</div>
                              <h3 className="text-xl font-bold text-white mb-1">{img.title}</h3>
                              <div className="flex items-center gap-2 text-slate-400 text-sm">
                                 <MapPin className="h-3 w-3" /> {img.location}
                              </div>
                           </div>
                           <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              <ZoomIn className="h-5 w-5 text-white" />
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0f1c] text-center border-t border-white/5">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to be part of the picture?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
               We're always looking for new faces to join our growing team. Check out our open roles.
            </p>
            <a href="/company/careers" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-sky-600 rounded-full hover:bg-sky-500 shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:shadow-[0_0_30px_rgba(2,132,199,0.5)]">
               View Open Positions <Heart className="ml-2 h-5 w-5" />
            </a>
         </div>
      </section>
    </>
  );
};

export default Gallery;
