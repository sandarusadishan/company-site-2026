import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

import awsLogo from "@/assets/cloud/Amazon_Web_Services_Logo.svg";
import gcpLogo from "@/assets/cloud/Google_Cloud_logo.svg";
import azureLogo from "@/assets/cloud/Microsoft_Azure_Logo.svg";
import privateServerLogo from "@/assets/cloud/images.png";

const CloudPlatform = () => {

  return (
    <>
      <Helmet>
        <title>Cloud Platform | SoftVision IT Group Products</title>
        <meta name="description" content="Deploy and manage your applications on our cloud-native infrastructure with automatic scaling, monitoring, and security." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Cloud Platform
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Deploy and manage your applications on our cloud-native infrastructure with automatic scaling, monitoring, and security.
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
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Flexible & Scalable Cloud Hosting
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deploy your solutions on the world's most trusted platforms, ensuring performance and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-16 mb-6 flex items-center justify-center w-full">
                 <img src={awsLogo} alt="AWS" className="h-full object-contain" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3">Amazon Web Services</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Leverage the industry-leading scalability and reliability of AWS for your applications.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-16 mb-6 flex items-center justify-center w-full">
                 <img src={gcpLogo} alt="Google Cloud" className="h-full object-contain" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Google Cloud Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Utilize Google's powerful infrastructure and cutting-edge data analytics and ML services.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-500 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-16 mb-6 flex items-center justify-center w-full">
                 <img src={azureLogo} alt="Microsoft Azure" className="h-full object-contain" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-3">Microsoft Azure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Build, deploy, and manage applications with seamless integration into the Microsoft ecosystem.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-16 mb-6 flex items-center justify-center w-full">
                 <img src={privateServerLogo} alt="Private Server" className="h-12 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Private & Open Servers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Deploy on your own on-premise hardware or any open-source server for maximum control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudPlatform;
