import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, Heart, Radio, ShoppingCart, Building, CloudCog, Settings, Lock, Brain, Boxes, ArrowRight } from "lucide-react";

const Solutions = () => {
  const industries = [
    { icon: Landmark, title: "Banking & Finance", description: "Secure, compliant financial services", href: "/solutions/banking" },
    { icon: Heart, title: "Healthcare", description: "HIPAA-compliant healthcare platforms", href: "/solutions/healthcare" },
    { icon: Radio, title: "Telecom", description: "Network & communication solutions", href: "/solutions/telecom" },
    { icon: ShoppingCart, title: "Retail", description: "E-commerce & omnichannel solutions", href: "/solutions/retail" },
    { icon: Building, title: "Government", description: "Public sector digital services", href: "/solutions/government" },
  ];

  const technologies = [
    { icon: CloudCog, title: "Cloud", description: "Cloud-native architectures", href: "/solutions/cloud" },
    { icon: Settings, title: "DevOps", description: "CI/CD & automation pipelines", href: "/solutions/devops" },
    { icon: Lock, title: "Security", description: "Zero-trust security frameworks", href: "/solutions/security" },
    { icon: Brain, title: "AI & ML", description: "Intelligent automation", href: "/solutions/ai" },
    { icon: Boxes, title: "Microservices", description: "Distributed architectures", href: "/solutions/microservices" },
  ];

  return (
    <>
      <Helmet>
        <title>Solutions | SoftVision IT Group</title>
        <meta name="description" content="Industry-specific and technology solutions from SoftVision IT Group. Banking, healthcare, cloud, DevOps, and more." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Solutions
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Tailored solutions for your industry and technology needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">By Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {industries.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all h-full"
                >
                  <item.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">By Technology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all h-full"
                >
                  <item.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
