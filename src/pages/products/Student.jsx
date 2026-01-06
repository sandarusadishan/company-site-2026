import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Trophy, Library, Laptop, ArrowRight, Shapes, Award, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Student = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-indigo-500/30 overflow-x-hidden pt-20">
      
      {/* 1. Hero: The "Building Blocks" Concept */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center">
        {/* Animated Background Shapes - Softened & Slower */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
           {/* Circle */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border border-indigo-500/10"
           />
           {/* Square */}
           <motion.div 
             animate={{ rotate: -90 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-[20%] right-[10%] w-40 h-40 border border-violet-500/10 rounded-3xl"
           />
        </div>

        <div className="container px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 relative">
                <div className="relative aspect-square max-w-[400px] mx-auto">
                    {/* Central Graphic */}
                    <div className="absolute inset-4 bg-gradient-to-tr from-indigo-800/50 to-violet-800/50 rounded-[2rem] shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
                       <GraduationCap className="w-32 h-32 text-indigo-200 opacity-50" />
                    </div>
                    {/* Floating Cards - Cleaned up */}
                    <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-4 -right-4 bg-[#0F1629] p-4 rounded-xl border border-white/5 shadow-xl flex items-center gap-3"
                    >
                       <div className="bg-green-500/10 p-2 rounded-lg">
                          <Trophy className="w-5 h-5 text-green-400" />
                       </div>
                       <div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">GPA</div>
                          <div className="text-sm font-bold text-white">3.8 / 4.0</div>
                       </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                      className="absolute -bottom-4 -left-4 bg-[#0F1629] p-4 rounded-xl border border-white/5 shadow-xl flex items-center gap-3"
                    >
                       <div className="bg-blue-500/10 p-2 rounded-lg">
                          <Users className="w-5 h-5 text-blue-400" />
                       </div>
                       <div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Students</div>
                          <div className="text-sm font-bold text-white">12k+</div>
                       </div>
                    </motion.div>
                </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 font-bold text-xs tracking-wide mb-6 border border-indigo-500/20">
                       FUTURE READY EDUCATION
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                       Empower <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Every Learner</span>
                    </h1>
                    <p className="text-lg text-indigo-100/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                       A comprehensive Student Information System (SIS) that connects teachers, students, and parents in one unified digital campus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                       <Button className="h-12 px-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-base font-medium shadow-lg shadow-indigo-600/20">
                          Get Started
                       </Button>
                       <Button variant="outline" className="h-12 px-8 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/10 rounded-full text-base font-medium">
                          Watch Video
                       </Button>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 2. Staggered Grid Features - Spaced Out */}
      <section className="py-24 bg-[#080C14]">
         <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
               
               {/* Col 1 */}
               <div className="flex flex-col gap-8 lg:mt-12">
                   <div className="bg-[#0F1629] border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-6">
                         <GraduationCap className="w-6 h-6 text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Admissions CRM</h3>
                      <p className="text-slate-400 text-sm">Streamline the entire enrollment process. Online applications, document upload, and status tracking.</p>
                   </div>
                   <div className="bg-[#0F1629] border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                      <Trophy className="w-10 h-10 text-yellow-500 mb-6" />
                      <h3 className="text-lg font-bold text-white mb-2">Grading & Reports</h3>
                      <p className="text-slate-400 text-sm">Automated GPA calculation and custom report card generation.</p>
                   </div>
               </div>

               {/* Col 2 */}
               <div className="flex flex-col gap-8">
                   <div className="bg-[#0F1629] border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                      <Library className="w-10 h-10 text-pink-500 mb-6" />
                      <h3 className="text-lg font-bold text-white mb-2">Digital Library</h3>
                      <p className="text-slate-400 text-sm">Catalog management, issue/return tracking, and e-book integration.</p>
                   </div>
                   <div className="bg-gradient-to-br from-violet-900/10 to-slate-900 border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6">
                         <Laptop className="w-6 h-6 text-violet-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">LMS Integration</h3>
                      <p className="text-slate-400 text-sm">Seamlessly connect with Moodle, Canvas, or Blackboard for coursework and assignments.</p>
                   </div>
               </div>

               {/* Col 3 */}
               <div className="flex flex-col gap-8 lg:mt-24">
                   <div className="bg-[#0F1629] border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                      <Sparkles className="w-10 h-10 text-cyan-500 mb-6" />
                      <h3 className="text-lg font-bold text-white mb-2">Alumni Network</h3>
                      <p className="text-slate-400 text-sm">Keep in touch with graduates. Job boards, events, and fundraising tools.</p>
                   </div>
                   <div className="bg-[#0F1629] border border-white/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                      <Users className="w-10 h-10 text-orange-500 mb-6" />
                      <h3 className="text-lg font-bold text-white mb-2">Parent Portal</h3>
                      <p className="text-slate-400 text-sm">Real-time attendance and behavior updates for parents.</p>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default Student;
