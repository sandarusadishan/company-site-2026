import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import promoImage from "@/assets/promo_popup.png";

const PromotionalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session to avoid annoyance
    // For now, we'll show it every time per user request "pop up this first"
    // To limit frequency, we could use sessionStorage or localStorage
    
    const timer = setTimeout(() => {
        setIsOpen(true);
    }, 1000); // Small delay to let site load first

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors backdrop-blur-md"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col">
              <div className="relative aspect-[4/3] w-full bg-muted">
                <img 
                  src={promoImage} 
                  alt="Special Offer: POS, Payroll, Busy Software" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                   <div className="text-white">
                      <h3 className="text-2xl font-bold mb-1">Exclusive Solutions</h3>
                      <p className="text-sm text-white/80">POS, Payroll & Busy Software</p>
                   </div>
                </div>
              </div>
              
              <div className="p-6 bg-card flex flex-col gap-4 text-center">
                <p className="text-muted-foreground">
                  Streamline your business with our industry-leading software solutions. 
                  Contact us today for a personalized demo.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" onClick={handleClose} className="flex-1">
                    Close
                  </Button>
                  <Button className="flex-1 accent-gradient text-accent-foreground" asChild>
                    <Link to="/company/contact" onClick={handleClose}>
                        Contact Us Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromotionalPopup;
