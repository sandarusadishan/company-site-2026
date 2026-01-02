import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Users, Globe, Award, ArrowRight } from "lucide-react";
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

  return (
    <>
      <Helmet>
        <title>About Us | SoftVision IT Group</title>
        <meta name="description" content="Learn about SoftVision IT Group's mission to empower enterprises with cutting-edge software solutions. Our story, values, and global impact." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About SoftVision IT Group
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Empowering enterprises to build the future of digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
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
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every enterprise deserves access to world-class software infrastructure. 
              Our mission is to democratize enterprise technology, making it accessible, secure, and 
              scalable for organizations of all sizes.
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
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for building great software.
          </p>
          <Button size="lg" className="accent-gradient text-accent-foreground" asChild>
            <Link to="/company/careers">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
