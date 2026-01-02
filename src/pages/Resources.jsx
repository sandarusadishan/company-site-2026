import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Video, Files } from "lucide-react";

const Resources = () => {
  const resources = [
    { icon: BookOpen, title: "Blog", description: "Latest insights, tutorials, and company updates", href: "/resources/blog", count: "150+ Articles" },
    { icon: Files, title: "Documentation", description: "Technical guides and API references", href: "/resources/documentation", count: "Comprehensive" },
    { icon: FileText, title: "Whitepapers", description: "In-depth research and analysis", href: "/resources/whitepapers", count: "25+ Papers" },
    { icon: Video, title: "Webinars", description: "Live and recorded expert sessions", href: "/resources/webinars", count: "Weekly" },
  ];

  return (
    <>
      <Helmet>
        <title>Resources | SoftVision IT Group</title>
        <meta name="description" content="Access SoftVision IT Group's library of blog posts, documentation, whitepapers, and webinars." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Resources
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Learn, grow, and stay ahead with our comprehensive resource library.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="group block p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <item.icon className="h-12 w-12 text-accent" />
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {item.count}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
