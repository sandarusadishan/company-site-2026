import React from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { GraduationCap, Trophy, Library, Laptop, Sparkles, Users } from 'lucide-react';

// import img1 from '@/assets/softwares/student/student01.png';
// import img2 from '@/assets/softwares/student/student02.png';
const img1 = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60";
const img2 = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60";

const Student = () => {
  const features = [
    { icon: GraduationCap, title: "Admissions CRM", description: "Streamline the entire enrollment process. Online applications, document upload, and status tracking." },
    { icon: Trophy, title: "Grading & Reports", description: "Automated GPA calculation and custom report card generation with flexible grading scales." },
    { icon: Library, title: "Digital Library", description: "Complete catalog management, issue/return tracking, and e-book integration." },
    { icon: Laptop, title: "LMS Integration", description: "Seamlessly connect with learning management systems for coursework and online exams." },
    { icon: Sparkles, title: "Alumni Network", description: "Keep in touch with graduates through job boards, event management, and fundraising tools." },
    { icon: Users, title: "Parent Portal", description: "Real-time updates on attendance, behavior, and academic progress for parents." },
  ];

  return (
    <ProductPageLayout
      title="Empower Every Learner"
      subtitle="Future Ready Education."
      description="A comprehensive Student Information System (SIS) that connects teachers, students, and parents in one unified digital campus. From admissions to alumni."
      demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      images={[img1, img2]}
      features={features}
      colorTheme="violet"
    />
  );
};

export default Student;
