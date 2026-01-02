import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GitBranch, Workflow, Database, Webhook, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const IntegrationPlatform = () => {
  const features = [
    { icon: Workflow, title: "Visual Designer", description: "Drag-and-drop integration builder" },
    { icon: Database, title: "200+ Connectors", description: "Pre-built connectors for popular services" },
    { icon: Webhook, title: "Event Streaming", description: "Real-time event-driven architecture" },
    { icon: RefreshCw, title: "Data Transform", description: "Powerful data mapping and transformation" },
  ];

  return (
    <>
      <Helmet>
        <title>Integration Platform | SoftVision IT Group Products</title>
        <meta name="description" content="Connect any application, data source, or API with our powerful integration engine supporting 200+ connectors." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
              <GitBranch className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Integration Platform
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Connect any application, data source, or API with our powerful integration engine supporting 200+ connectors and protocols.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="accent-gradient text-accent-foreground" asChild>
                <Link to="/company/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

export default IntegrationPlatform;
