import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CloudCog, Server, Shield, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CloudSolutions = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions | SoftVision IT Group</title>
        <meta name="description" content="Cloud-native solutions for modern enterprises. Multi-cloud support, containerization, and serverless architectures." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <CloudCog className="h-16 w-16 text-accent mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Accelerate your cloud journey with our cloud-native platform. Multi-cloud, hybrid, or private—we support your architecture.
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
              { icon: Server, title: "Multi-Cloud", description: "Deploy across AWS, Azure, GCP, and private clouds" },
              { icon: Shield, title: "Cloud Security", description: "Zero-trust security for cloud workloads" },
              { icon: Gauge, title: "Performance", description: "Optimized performance with global CDN" },
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

export default CloudSolutions;
