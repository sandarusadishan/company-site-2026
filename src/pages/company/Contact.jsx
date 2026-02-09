import { Helmet } from "react-helmet-async";
import { motion as Motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

        const serviceID = 'service_gamwh5i';
        const templateIDToCompany = 'template_srzk65p';
        const templateIDToCustomer = 'template_r0mj5x6';
        const publicKey = 'D84ebfog3xQ0S44I8';

    const templateParams = {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      from_name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      email: e.target.email.value,
      whatsapp: e.target.whatsapp.value,
      company: e.target.company.value,
      message: e.target.message.value,
      reply_to: e.target.email.value,
    };

    console.log('Sending email with params:', templateParams);

    try {
      // Send to Company
      await emailjs.send(serviceID, templateIDToCompany, templateParams, publicKey);
      
      // Send Confirmation to Customer
      await emailjs.send(serviceID, templateIDToCustomer, templateParams, publicKey);
      
      toast({
        title: "Message sent!",
        description: "We have received your message and sent you a confirmation.",
      });
      
      e.target.reset();
    } catch (error) {
      console.error("Email Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | SoftVision IT Group</title>
        <meta name="description" content="Get in touch with SoftVision IT Group. Contact our sales team, request a demo, or get support for your enterprise software needs." />
      </Helmet>

      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Ready to transform your enterprise? Let's talk.
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our products or need a custom solution? 
                Our team is here to help you find the right fit for your enterprise.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@svg.lk" className="text-muted-foreground hover:text-accent transition-colors">
                      info@svg.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+94112670833" className="text-muted-foreground hover:text-accent transition-colors">
                      +94 112670833
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground">
                      414/7-1/1, Baseline Road<br />
                      Colombo-09, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </Motion.div>

            {/* Contact Form */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="example@gmail.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+94 77 123 4567" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your Company" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full accent-gradient text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
