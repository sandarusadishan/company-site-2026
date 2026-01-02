import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

import logo from "@/assets/logo/logo.png";

const Footer = () => {
  const footerLinks = {
    Products: [
      { label: "API Manager", href: "/products/api-manager" },
      { label: "Identity Server", href: "/products/identity-server" },
      { label: "Integration Platform", href: "/products/integration-platform" },
      { label: "Cloud Platform", href: "/products/cloud-platform" },
    ],
    Solutions: [
      { label: "Banking", href: "/solutions/banking" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Cloud", href: "/solutions/cloud" },
      { label: "Security", href: "/solutions/security" },
    ],
    Resources: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Webinars", href: "/resources/webinars" },
    ],
    Company: [
      { label: "About Us", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="SoftVision IT Logo" className="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-xl">SoftVision IT Group (Pvt) Ltd</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Empowering enterprises with cutting-edge software solutions.
              Build, integrate, and scale with confidence.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>414/7-1/1, Baseline Road, Colombo-09, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@svg.lk" className="hover:text-primary-foreground transition-colors">
                  info@svg.lk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+94112670833" className="hover:text-primary-foreground transition-colors">
                    +94 112670833
                  </a>
                  <a href="tel:+94112671833" className="hover:text-primary-foreground transition-colors">
                    +94 112671833
                  </a>
                  <a href="tel:+94112670601" className="hover:text-primary-foreground transition-colors">
                    +94 112670601
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SoftVision IT Group (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-lg text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
