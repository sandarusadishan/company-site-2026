import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, Shield, GitBranch, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: Server,
      title: "API Manager",
      description: "Full lifecycle API management platform that enables you to design, publish, secure, and analyze APIs with enterprise-grade capabilities.",
      features: ["API Gateway", "Developer Portal", "Analytics Dashboard", "Rate Limiting"],
      href: "/products/api-manager",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Identity Server",
      description: "Comprehensive identity and access management solution with support for modern authentication protocols and enterprise federation.",
      features: ["SSO & Federation", "MFA Support", "User Management", "RBAC"],
      href: "/products/identity-server",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: GitBranch,
      title: "Integration Platform",
      description: "Connect any application, data source, or API with our powerful integration engine supporting 200+ connectors and protocols.",
      features: ["200+ Connectors", "Visual Designer", "Event Streaming", "Data Transform"],
      href: "/products/integration-platform",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Deploy and manage your applications on our cloud-native infrastructure with automatic scaling, monitoring, and security.",
      features: ["Auto Scaling", "Container Orchestration", "CI/CD Pipelines", "Monitoring"],
      href: "/products/cloud-platform",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Products | SoftVision IT Group</title>
        <meta name="description" content="Explore SoftVision IT Group's enterprise software products including API Manager, Identity Server, Integration Platform, and Cloud Platform." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Enterprise-grade software solutions designed to transform your digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="accent-gradient text-accent-foreground" asChild>
                    <Link to={product.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br ${product.color} opacity-10 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <product.icon className="h-32 w-32 text-foreground opacity-20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Not sure which product is right for you?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our solutions team can help you find the perfect combination of products for your enterprise needs.
          </p>
          <Button size="lg" className="accent-gradient text-accent-foreground" asChild>
            <Link to="/company/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Products;
