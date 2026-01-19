import React from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { BedDouble, Users, Key, Wifi, Coffee, CalendarCheck, MapPin, Star } from 'lucide-react';

import img1 from '@/assets/softwares/hotel/hotel01.png';
import img2 from '@/assets/softwares/hotel/hotel02.png';

const Hotel = () => {
  const features = [
    { icon: Key, title: "Digital Key", description: "No more plastic cards. Guests unlock rooms with their phone securely and conveniently." },
    { icon: Wifi, title: "Smart Room", description: "IoT integration for climate, lighting, and entertainment control directly from the user's device." },
    { icon: Coffee, title: "Experiences", description: "One-tap booking for spa, dining, and local excursions to enhance guest satisfaction." },
    { icon: BedDouble, title: "Housekeeping", description: "Real-time room status updates to coordinate cleaning staff and minimize guest wait times." },
    { icon: CalendarCheck, title: "Reservations", description: "Drag-and-drop calendar for managing bookings, modifications, and cancellations effortlessly." },
    { icon: MapPin, title: "Multi-Property", description: "Manage chains from one login. Centralized reporting and control for all your locations." },
  ];

  return (
    <ProductPageLayout
      title="Luxury Hospitality"
      subtitle="The Gold Standard."
      description="Hospitality is not just service, it's an art form. Manage your hotel operations with a suite designed for luxury and efficiency. From booking to check-out."
      demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      images={[img1, img2]}
      features={features}
      colorTheme="green"
    />
  );
};

export default Hotel;