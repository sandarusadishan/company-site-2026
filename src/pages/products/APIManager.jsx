import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, Check, ArrowRight, Zap, Shield, BarChart3, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const APIManager = () => {
  const features = [
    { icon: Zap, title: "API Gateway", description: "High-performance gateway with sub-millisecond latency" },
    { icon: Shield, title: "Security", description: "OAuth 2.0, JWT, API keys, and rate limiting" },
    { icon: BarChart3, title: "Analytics", description: "Real-time insights and usage analytics" },
    { icon: Code, title: "Developer Portal", description: "Self-service portal for API consumers" },
  ];

  return (
    <>
      <Helmet>
        <title>API Manager | SoftVision IT Group Products</title>
        <meta name="description" content="Full lifecycle API management platform. Design, publish, secure, and analyze your APIs with enterprise-grade capabilities." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Server className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              API Manager
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Full lifecycle API management platform that enables you to design, publish, secure, and analyze APIs with enterprise-grade capabilities.
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

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Key Benefits</h2>
            <div className="space-y-4">
              {[
                "Process billions of API calls with consistent low latency",
                "Comprehensive security with OAuth 2.0, JWT, and API key management",
                "Real-time analytics and customizable dashboards",
                "Developer portal with interactive API documentation",
                "Version management and lifecycle governance",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl"
                >
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default APIManager;
