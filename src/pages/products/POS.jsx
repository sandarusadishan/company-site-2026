import React from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { Smartphone, CreditCard, BarChart3, Wifi, ShieldCheck, Layers } from 'lucide-react';

import img1 from '@/assets/softwares/pos/pos01.png';
import img2 from '@/assets/softwares/pos/pos02.png';

const POS = () => {
  const features = [
    { icon: Smartphone, title: "Mobile Command Center", description: "Untether your staff. Check out customers anywhere, check inventory in real-time." },
    { icon: CreditCard, title: "Universal Pay", description: "Accept Apple Pay, Google Pay, Bitcoin, and all major cards securely." },
    { icon: BarChart3, title: "Real-time Analytics", description: "Live dashboard of your sales performance to make data-driven decisions." },
    { icon: Wifi, title: "Offline Mode", description: "Keep selling even when the internet goes down. Syncs automatically when back online." },
    { icon: ShieldCheck, title: "End-to-End Encryption", description: "Military-grade protection for every transaction and customer data point." },
    { icon: Layers, title: "Inventory Sync", description: "Automatically syncs with your e-commerce store (Shopify, WooCommerce)." },
  ];

  return (
    <ProductPageLayout
      title="Next-Gen Retail POS"
      subtitle="Built for Speed."
      description="The point-of-sale built for high-volume businesses. Process thousands of transactions without skipping a beat. Designed for modern retail environments."
      demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      images={[img1, img2]}
      features={features}
      colorTheme="blue"
    />
  );
};

export default POS;