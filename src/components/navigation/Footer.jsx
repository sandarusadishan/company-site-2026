import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Download,
  ChevronRight
} from "lucide-react";

import logo from "@/assets/logo/logo.png";
import busy62 from "@/assets/exe/Busy21-Setup-6.2.exe";
import busy122 from "@/assets/exe/Busy21-Setup-12.2.exe";

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
      { label: "Gallery", href: "/company/gallery" },
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
    <footer className="bg-[#020617] text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Socials Column (Full width on mobile, 4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4 inline-block">
                <img src={logo} alt="SoftVision IT Logo" className="h-10 w-auto object-contain" />
                <span className="font-display font-bold text-xl tracking-tight">SoftVision IT Group</span>
              </Link>
              <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                Empowering enterprises with cutting-edge software solutions. 
                Architecting the future with innovative software and intelligent solutions.
              </p>
            </div>

            {/* Contact Info (Kept as user requested "all options") */}
            <div className="space-y-4 text-sm text-gray-400 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-1 text-blue-500" />
                <span>414/7-1/1, Baseline Road, Colombo-09, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-500" />
                <a href="mailto:info@svg.lk" className="hover:text-white transition-colors">info@svg.lk</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-1 text-blue-500" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+94112670833" className="hover:text-white transition-colors">+94 112670833</a>
                  <a href="tel:+94112671833" className="hover:text-white transition-colors">+94 112671833</a>
                  <a href="tel:+94112670601" className="hover:text-white transition-colors">+94 112670601</a>
                </div>
              </div>
            </div>

            {/* Social Links - Moved here as requested */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section - 2 Column Grid on Mobile (8 cols on desktop to fill rest) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col">
                <h3 className="font-display font-bold text-base text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Downloads Section - Styled to match the grid but act as a column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0" id="busy-downloads">
               <h3 className="font-display font-bold text-base text-white mb-6">Downloads</h3>
               <div className="relative group max-w-sm">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default w-fit min-w-[240px]">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Download className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-white truncate">Busy21</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold truncate">Accounting Software</div>
                    </div>
                    <ChevronRight className="h-4 w-4 ml-3 text-white/20 group-hover:rotate-90 group-hover:text-white transition-all flex-shrink-0" />
                  </div>

                  {/* Version Menu (Hover Reveal) */}
                  <div className="absolute top-full left-0 w-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 min-w-[240px]">
                    <div className="p-2 rounded-xl bg-[#0F172A] border border-white/10 shadow-2xl backdrop-blur-xl">
                      <a 
                        href={busy62} 
                        download
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 group/item transition-colors"
                      >
                        <span className="text-xs font-medium text-gray-400 group-hover/item:text-white">Version 6.2</span>
                        <Download className="h-3 w-3 text-white/20 group-hover/item:text-blue-400" />
                      </a>
                      <div className="h-px bg-white/5 my-1" />
                      <a 
                        href={busy122} 
                        download
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 group/item transition-colors"
                      >
                        <span className="text-xs font-medium text-gray-400 group-hover/item:text-white">Version 12.2</span>
                        <Download className="h-3 w-3 text-white/20 group-hover/item:text-blue-400" />
                      </a>
                      
                      {/* Subtle Label */}
                      <div className="mt-2 px-3 pb-1 text-[8px] font-black text-gray-600 uppercase tracking-[0.2em] text-center">
                        Verified Secure EXE
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SoftVision IT Group (Pvt) Ltd.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
