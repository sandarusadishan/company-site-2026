import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Server, 
  Shield, 
  GitBranch, 
  Cloud,
  Building,
  Heart,
  Radio,
  ShoppingCart,
  Landmark,
  CloudCog,
  Settings,
  Lock,
  Brain,
  Boxes,
  BookOpen,
  FileText,
  Video,
  Files,
  Users,
  Briefcase,
  Handshake,
  Info,
  Megaphone,

  Download,
  Camera,
  Utensils,
  BedDouble,
  HeartPulse,
  Wallet,
  GraduationCap
} from "lucide-react";

import busy62 from "@/assets/exe/Busy21-Setup-6.2.exe";
import busy122 from "@/assets/exe/Busy21-Setup-12.2.exe";

const MegaMenu = ({ menuType }) => {
  const menuContent = {
    Products: {
      columns: [
        {
          title: "Smart Industry Suite",
          items: [
            { icon: ShoppingCart, label: "POS Systems", description: "Retail & Sales Management", href: "/products/pos-systems" },
            { icon: Utensils, label: "Restaurant Management", description: "F&B Operations 360", href: "/products/restaurant-management" },
            { icon: BedDouble, label: "Hotel Management", description: "Hospitality & Reservations", href: "/products/hotel-management" },
            { icon: HeartPulse, label: "Hospital Management", description: "Healthcare & Patient Care", href: "/products/hospital-management" },
            { icon: Wallet, label: "Payroll Management", description: "HR & Salary Automation", href: "/products/payroll-management" },
            { icon: GraduationCap, label: "Student Management", description: "Education & Campus Admin", href: "/products/student-management" },
          ],
        },
      ],
    },
    Solutions: {
      columns: [
        {
          title: "By Industry",
          items: [
            { icon: Landmark, label: "Financial", description: "Services solutions", href: "/solutions/banking" },
            { icon: Heart, label: "Healthcare", description: "HIPAA-compliant platforms", href: "/solutions/healthcare" },
            { icon: Radio, label: "Telecom", description: "Network & communication", href: "/solutions/telecom" },
            { icon: ShoppingCart, label: "Retail", description: "E-commerce integration", href: "/solutions/retail" },
            { icon: Building, label: "Government", description: "Public sector solutions", href: "/solutions/government" },
          ],
        },
        {
          title: "By Technology",
          items: [
            { icon: Megaphone, label: "Digital Marketing", description: "Social media & branding", href: "/solutions/digital-marketing" },
            { icon: CloudCog, label: "Cloud", description: "Cloud-native solutions", href: "/solutions/cloud" },
            { icon: Settings, label: "DevOps", description: "CI/CD & automation", href: "/solutions/devops" },
            { icon: Lock, label: "Security", description: "Zero-trust architecture", href: "/solutions/security" },
            { icon: Brain, label: "AI", description: "AI & ML integration", href: "/solutions/ai" },
            { icon: Boxes, label: "Microservices", description: "Distributed systems", href: "/solutions/microservices" },
          ],
        },
      ],
    },
    Resources: {
      columns: [
        {
          title: "Learn",
          items: [
            { icon: BookOpen, label: "Blog", description: "Latest insights & updates", href: "/resources/blog" },
            { icon: Files, label: "Documentation", description: "Technical guides", href: "/resources/documentation" },
            { icon: FileText, label: "Whitepapers", description: "In-depth research", href: "/resources/whitepapers" },
            { icon: Video, label: "Webinars", description: "Live & recorded sessions", href: "/resources/webinars" },
          ],
        },
      ],
    },
    Company: {
      columns: [
        {
          title: "About Us",
          items: [
            { icon: Info, label: "About", description: "Our story & mission", href: "/company/about" },
            { icon: Camera, label: "Gallery", description: "Life at SoftVision", href: "/company/gallery" },
            { icon: Users, label: "Leadership", description: "Meet our executives", href: "/company/leadership" },
            { icon: Briefcase, label: "Careers", description: "Join our team", href: "/company/careers" },
            { icon: Handshake, label: "Partners", description: "Partner ecosystem", href: "/company/partners" },
          ],
        },
      ],
    },
    Busy: {
      columns: [
        {
          title: "Busy21 Accounting Software",
          items: [
            { icon: Download, label: "Busy21 Standard v6.2", description: "Direct setup for version 6.2", href: busy62, isDownload: true },
            { icon: Download, label: "Busy21 Advanced v12.2", description: "Direct setup for version 12.2", href: busy122, isDownload: true },
          ],
        },
      ],
    },
  };

  const content = menuContent[menuType];
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
    >
      <div className="bg-card rounded-2xl shadow-elevated border border-border p-6 min-w-[400px]">
        <div className={`grid gap-8 ${content.columns.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {content.columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {column.title}
              </h3>
              <div className="space-y-1">
                {column.items.map((item) => (
                  item.isDownload ? (
                    <a
                      key={item.label}
                      href={item.href}
                      download
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
