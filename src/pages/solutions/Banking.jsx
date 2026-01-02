import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banking = () => {
  return (
    <>
      <Helmet>
        <title>Financial Services | SoftVision IT Group Solutions</title>
        <meta name="description" content="Enterprise solutions for banking and financial services. PCI DSS compliant, real-time processing, and secure APIs." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Landmark className="h-16 w-16 text-accent mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Banking & Financial Services
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Build secure, compliant, and scalable financial platforms that meet the demands of modern banking.
            </p>
            <Button size="lg" className="accent-gradient text-accent-foreground" asChild>
              <Link to="/company/contact">
                Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "PCI DSS Compliant", description: "Meet the highest security standards for payment processing" },
              { icon: Zap, title: "Real-time Processing", description: "Process millions of transactions per second" },
              { icon: TrendingUp, title: "Open Banking", description: "Enable open banking with secure API frameworks" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
