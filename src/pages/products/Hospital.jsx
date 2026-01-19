import React from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { Stethoscope, Activity, FileText, Syringe, Building2, Brain, Microscope, Shield, Ambulance } from 'lucide-react';

import img1 from '@/assets/softwares/hospital/hospital01.png';
import img2 from '@/assets/softwares/hospital/hospital02.png';

const Hospital = () => {
  const features = [
    { icon: UserPlus, title: "Admission & Discharge", description: "Streamlined patient journey from entry to exit with automated workflows." },
    { icon: Stethoscope, title: "Clinical Modules", description: "Comprehensive tools for doctors and nurses to manage patient care efficiently." },
    { icon: Syringe, title: "Pharmacy & Store", description: "Integrated inventory management for medicines and hospital supplies." },
    { icon: Microscope, title: "Laboratory", description: "Seamless management of lab tests, results, and reporting." },
    { icon: Brain, title: "Radiology (PACS)", description: "Picture Archiving and Communication System for managing medical imaging." },
    { icon: Shield, title: "Insurance Claims", description: "Automated processing of insurance claims to reduce rejections and delays." },
  ];

  return (
    <ProductPageLayout
      title="Modern Healthcare Core"
      subtitle="The Heartbeat of Care."
      description="Integrated Hospital Management System (HMS) designed for accuracy, speed, and patient safety. Zero downtime. 100% Compliance. From admission to discharge."
      demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      images={[img1, img2]}
      features={features}
      colorTheme="cyan"
    />
  );
};
import { UserPlus } from 'lucide-react';

export default Hospital;