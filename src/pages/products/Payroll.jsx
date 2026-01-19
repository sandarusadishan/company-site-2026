import React from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { Calculator, Shield, PieChart, Wallet, Calendar, Users, FileCheck, Landmark } from 'lucide-react';

import img1 from '@/assets/softwares/payroll/payroll01.png';
import img2 from '@/assets/softwares/payroll/payroll02.png';

const Payroll = () => {
  const features = [
    { icon: Calculator, title: "Auto-Calculations", description: "Allowances, deductions, and overtime automatically computed based on attendance and policy." },
    { icon: Shield, title: "Compliance Shield", description: "Built-in tax laws and labor regulations to ensure you stay compliant effortlessly." },
    { icon: PieChart, title: "Cost Analytics", description: "Visualize labor costs by department, project, or location with interactive charts." },
    { icon: Wallet, title: "Direct Deposit", description: "One-click disbursements to bank accounts ensuring on-time payments every month." },
    { icon: Calendar, title: "Leave Integration", description: "Seamlessly integrates with leave management to adjust pay automatically." },
    { icon: Users, title: "Employee Portal", description: "Self-service portal for employees to view payslips, tax forms, and leave balances." },
  ];

  return (
    <ProductPageLayout
      title="Payroll Precision"
      subtitle="That Makes Sense."
      description="Automate calculations, tax filings, and compliance. Turn complex spreadsheets into a single click operation. Accurate, secure, and fast."
      demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      images={[img1, img2]}
      features={features}
      colorTheme="indigo"
    />
  );
};

export default Payroll;
