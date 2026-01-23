import React from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { Utensils, ChefHat, Clock, Users, TrendingUp, ClipboardCheck, Armchair } from 'lucide-react';

import img1 from '@/assets/softwares/restaurant/restaurant01.png';
import img2 from '@/assets/softwares/restaurant/restaurant02.png';

const Restaurant = () => {
  const features = [
    { icon: Armchair, title: "Visual Floor Plan", description: "Visual table management that updates in real-time. Know exactly which tables are reserved or occupied." },
    { icon: ChefHat, title: "Kitchen Sync", description: "Fire tickets directly to kitchen display systems (KDS). Route orders to specific stations instantly." },
    { icon: TrendingUp, title: "Menu Engineering", description: "Understand data down to the ingredient. Identify star dishes and dogs to optimize profitability." },
    { icon: Users, title: "Waitlist Management", description: "Manage walk-ins efficiently with SMS notifications when tables are ready." },
    { icon: Clock, title: "Prep Time Analytics", description: "Track how long orders take from entry to delivery to identify bottlenecks." },
    { icon: ClipboardCheck, title: "Inventory Depletion", description: "Automated inventory tracking based on menu item sales to prevent stockouts." },
  ];

  return (
    <ProductPageLayout
      title="Taste of Efficiency"
      subtitle="Modern Restaurant OS"
      description="Orchestrate your entire restaurant from a single dashboard. From the first reservation to the final check. Designed for fine dining, cafes, and QSR."
      demoLink="https://restrurant.svg.lk/?pin=1234"
      images={[img1, img2]}
      features={features}
      colorTheme="orange"
    />
  );
};

export default Restaurant;
