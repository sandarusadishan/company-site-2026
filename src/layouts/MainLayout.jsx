import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import PromotionalPopup from "@/components/PromotionalPopup";


const MainLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <PromotionalPopup />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
