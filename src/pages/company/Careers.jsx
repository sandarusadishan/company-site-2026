import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Zap, Coffee, Globe, ArrowRight, Briefcase, X, Upload, CheckCircle, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      setUploadedFile(file);
      toast({
        title: "File Uploaded",
        description: `${file.name} ready to submit.`,
        variant: "success"
      });
    }
  };

  const perks = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical coverage and mental health support." },
    { icon: Zap, title: "Remote First", description: "Work from anywhere. We value output over hours." },
    { icon: Coffee, title: "Unlimited Time Off", description: "Recharge when you need to. We trust our team." },
    { icon: Globe, title: "Annual Retreats", description: "We fly the whole team out once a year to connect." },
  ];

  const jobs = [
    { id: 1, title: "Senior Backend Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
    { id: 2, title: "Product Designer UI/UX", dept: "Product", location: "Colombo / Remote", type: "Full-time" },
    { id: 3, title: "Enterprise Account Executive", dept: "Sales", location: "Singapore", type: "Full-time" },
    { id: 4, title: "DevOps Specialist", dept: "Engineering", location: "Remote", type: "Contract" },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setUploadedFile(null);
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your EmailJS credentials
    // const templateParams = {
    //   job_title: selectedJob.title,
    //   applicant_name: e.target.fullName.value,
    //   applicant_email: e.target.email.value,
    //   linkedin_url: e.target.linkedin.value,
    //   cover_letter: e.target.coverLetter.value,
    //   cv_filename: uploadedFile ? uploadedFile.name : "No file attached"
    // };

    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');

    // Simulate API call for now
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Application Sent!",
      description: `Your application for ${selectedJob.title} has been sent to info@svg.lk`,
      variant: "success",
    });

    setIsSubmitting(false);
    setSelectedJob(null);
    setUploadedFile(null);
  };

  return (
    <>
      <Helmet>
        <title>Careers | SoftVision IT Group</title>
        <meta name="description" content="Join SoftVision IT Group. Explore open positions, our company culture, and benefits. Build the future of enterprise tech with us." />
      </Helmet>

      {/* Hero Section - Deep Brand Navy */}
      <section className="pt-32 pb-20 bg-[#020617] relative overflow-hidden text-white">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
         
         {/* Creative Gradient Blur */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
         
         <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  We are hiring!
               </div>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Do the best work <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-gradient-x">of your life</span>
               </h1>
               <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join a team of builders, dreamers, and doers. We're on a mission to redefine enterprise software, and we're having fun doing it.
               </p>
               <Button size="lg" onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white h-14 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all transform hover:scale-105">
                  See Open Roles <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
            </motion.div>
         </div>
      </section>

      {/* Culture/Perks - Glowing Cards */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                    <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        <perk.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-3">{perk.title}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Modern List */}
      <section id="open-positions" className="py-24 bg-[#020617] relative">
         <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
                <p className="text-slate-400">Come build the future with us.</p>
            </div>
            
            <div className="space-y-4">
               {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleApply(job)}
                    className="group p-6 rounded-2xl bg-[#0a1025] border border-white/5 hover:border-blue-500/50 hover:bg-[#0f172a] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer transition-all duration-300"
                  >
                     <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                           <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.dept}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-600" />
                           <span>{job.location}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-600" />
                           <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs">{job.type}</span>
                        </div>
                     </div>
                     <Button className="bg-white/5 text-white hover:bg-white/10 hover:text-blue-300 transition-colors shrink-0 rounded-full px-6">
                        Apply Now
                     </Button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 bg-[#1e293b]/50 flex items-center justify-between sticky top-0 z-10">
                <div>
                  <div className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-1">Applying for</div>
                  <h3 className="text-2xl font-bold text-white">{selectedJob.title}</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={handleCloseModal} className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Scrollable Form Area */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label htmlFor="fullName" className="text-slate-300 flex items-center gap-2"><User className="h-4 w-4" /> Full Name</Label>
                       <Input id="fullName" required placeholder="John Doe" className="bg-[#020617] border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20" />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="email" className="text-slate-300 flex items-center gap-2"><Mail className="h-4 w-4" /> Email Address</Label>
                       <Input id="email" type="email" required placeholder="john@example.com" className="bg-[#020617] border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="linkedin" className="text-slate-300 flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn Profile (Optional)</Label>
                     <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" className="bg-[#020617] border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20" />
                  </div>

                  <div className="space-y-2">
                     <Label className="text-slate-300 flex items-center gap-2"><Upload className="h-4 w-4" /> Resume / CV</Label>
                     <input 
                       type="file" 
                       className="hidden" 
                       ref={fileInputRef}
                       onChange={handleFileChange}
                       accept=".pdf,.doc,.docx"
                     />
                     <div 
                       onClick={() => fileInputRef.current?.click()}
                       className={cn(
                         "border-2 border-dashed rounded-xl p-8 transition-all text-center cursor-pointer group",
                         uploadedFile ? "border-green-500/30 bg-green-500/5" : "border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5"
                       )}
                     >
                        {uploadedFile ? (
                          <>
                            <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
                            <p className="text-green-200 text-sm font-medium">{uploadedFile.name}</p>
                            <p className="text-green-500/50 text-xs mt-1">Ready to submit</p>
                          </>
                        ) : (
                          <>
                            <Upload className="h-10 w-10 text-slate-500 group-hover:text-blue-400 mx-auto mb-4 transition-colors" />
                            <p className="text-slate-400 text-sm mb-1 group-hover:text-blue-200">Click to upload or drag and drop</p>
                            <p className="text-slate-600 text-xs">PDF, DOCX up to 5MB</p>
                          </>
                        )}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="coverLetter" className="text-slate-300">Why do you want to join us?</Label>
                     <Textarea 
                       id="coverLetter" 
                       placeholder="Tell us a bit about yourself..." 
                       className="bg-[#020617] border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20 min-h-[120px]" 
                     />
                  </div>

                  <div className="pt-4">
                     <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold h-12 rounded-xl shadow-lg transition-all"
                     >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending Application...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Submit Application <CheckCircle className="h-5 w-5" />
                          </span>
                        )}
                     </Button>
                     <p className="text-center text-slate-500 text-xs mt-4">
                        By submitting, you agree to our Privacy Policy and candidate data processing terms.
                     </p>
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Careers;
