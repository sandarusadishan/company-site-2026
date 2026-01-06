import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBag, CreditCard, Box, ArrowRight, Store, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Retail = () => {
  return (
    <>
      <Helmet>
        <title>Retail Solutions | SoftVision IT Group</title>
        <meta name="description" content="Omnichannel retail solutions. E-commerce integration, POS systems, and inventory management for modern retailers." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1c1002]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md mb-8">
                <ShoppingCart className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Modern Commerce</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Retail <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                  Reimagined
                </span>
              </h1>
              
              <p className="text-xl text-orange-100/70 mb-10 leading-relaxed max-w-lg">
                Bridge the gap between online and offline. Unified commerce platforms that delight customers and streamline operations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold transition-all shadow-lg shadow-orange-600/20" asChild>
                  <Link to="/company/contact">
                    Start Selling <ArrowRight className="ml-2 h-5 w-5" />
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
               <div className="relative z-10 p-8 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-orange-500/10 blur-3xl" />
                 
                 <div className="grid grid-cols-2 gap-6 relative z-20">
                    <div className="col-span-2 p-6 rounded-2xl bg-orange-950/60 border border-orange-500/30 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                            <Store className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-white">Omnichannel</div>
                            <div className="text-orange-300 text-sm">Online + In-Store Sync</div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center">
                        <ShoppingBag className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                        <div className="text-lg font-bold text-white">E-Commerce</div>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center">
                        <CreditCard className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                        <div className="text-lg font-bold text-white">Payments</div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Store, title: "POS Solutions", description: "Cloud-based Point of Sale systems that work on any device.", color: "text-orange-500", bg: "bg-orange-500/10" },
              { icon: Box, title: "Inventory Management", description: "Real-time stock tracking across multiple warehouses and stores.", color: "text-amber-500", bg: "bg-amber-500/10" },
              { icon: Truck, title: "Logistics", description: "Integrated shipping and fulfillment solutions to get products to customers faster.", color: "text-yellow-500", bg: "bg-yellow-500/10" },
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

export default Retail;
