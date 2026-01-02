import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of API Management in 2025",
      excerpt: "Explore the latest trends in API management and how enterprises are adapting to new paradigms.",
      date: "Dec 28, 2025",
      readTime: "8 min read",
      category: "API Management",
    },
    {
      title: "Zero Trust Architecture: A Complete Guide",
      excerpt: "Learn how to implement zero trust security across your enterprise infrastructure.",
      date: "Dec 20, 2025",
      readTime: "12 min read",
      category: "Security",
    },
    {
      title: "Microservices at Scale: Lessons Learned",
      excerpt: "Real-world insights from running microservices at Fortune 500 companies.",
      date: "Dec 15, 2025",
      readTime: "10 min read",
      category: "Architecture",
    },
    {
      title: "Identity Management Best Practices",
      excerpt: "Essential practices for secure and scalable identity management.",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      category: "Identity",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | SoftVision IT Group Resources</title>
        <meta name="description" content="Latest insights, tutorials, and updates from the SoftVision IT Group team on API management, security, and enterprise software." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Insights, tutorials, and updates from our engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to="#" className="block p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all h-full">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-foreground mt-4 mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
