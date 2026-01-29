import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, Shield, Zap, TrendingUp, ArrowRight, CheckCircle2, PieChart, Coins, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import busyLogo from "@/assets/logo/busyc.jpg";

const Banking = () => {
  return (
    <>
      <Helmet>
        <title>Accounting & Financial Services | SoftVision IT Group</title>
        <meta name="description" content="Complete accounting and financial management solutions. From enterprise ERP to BUSY Accounting software for MSMEs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#020617]">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm font-medium text-blue-300">Enterprise Financial Solutions</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Smart Financial <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                  Services
                </span>
              </h1>
              
              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-lg">
                Empower your business with next-generation accounting and financial management tools. Secure, compliant, and built for growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20" asChild>
                  <Link to="/company/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-blue-600 h-14 px-8 rounded-full border-blue-400/20 text-blue-100 hover:bg-blue-500/10 hover:text-white" asChild>
                   <a href="#busy-software">Explore Software</a>
                </Button>
              </div>
            </motion.div>

            {/* Creative 3D/Glass Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <PieChart className="h-8 w-8 text-blue-400 mb-4" />
                      <div className="text-2xl font-bold text-white mb-1">Analytics</div>
                      <div className="text-sm text-white/50">Real-time financial insights</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-blue-600 border border-blue-500 shadow-xl shadow-blue-900/50">
                      <Shield className="h-8 w-8 text-white mb-4" />
                      <div className="text-2xl font-bold text-white mb-1">Secure</div>
                      <div className="text-sm text-blue-100">Bank-grade encryption</div>
                   </div>
                   <div className="col-span-2 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-white">Cloud Native</div>
                        <div className="text-sm text-white/50">Access from anywhere</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-indigo-400" />
                      </div>
                   </div>
                 </div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="font-display text-3xl font-bold text-foreground mb-4">Comprehensive Financial Suite</h2>
             <p className="text-lg text-muted-foreground">From basic book-keeping to complex enterprise resource planning, we have the tools you need.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Business Accounting", description: "Streamline your daily financial operations with automated ledgers and invoicing.", color: "text-blue-500" },
              { icon: Coins, title: "Tax & Compliance", description: "Stay compliant with automated tax calculations, VAT reports, and filing support.", color: "text-indigo-500" },
              { icon: Zap, title: "Integration Ready", description: "Seamlessly connect with banking APIs, payment gateways, and CRM systems.", color: "text-amber-500" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Product: BUSY Software */}
      <section id="busy-software" className="py-32 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_50%)]" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
             
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="order-2 lg:order-1"
             >
                <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-6">
                   Flagship Product
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                   BUSY Accounting <br/>
                   <span className="text-indigo-400">Software</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                   The complete business management solution for modern enterprises. With over 3 Million+ users, BUSY offers powerful features for financial accounting, inventory management, and statutory compliance.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Financial Accounting", "Inventory Management", "VAT/GST Reports", "Dashboard & MIS", "Mobile App Support", "Multi-Branch Management"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-indigo-50 font-bold transition-colors" asChild>
                  <Link to="/company/contact">
                    Request Demo
                  </Link>
                </Button>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="order-1 lg:order-2"
             >
                <div className="relative group">
                   <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                   <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                      <img src={busyLogo} alt="Busy Accounting Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Comprehensive Features Grid */}
          <div className="pt-10">
            <div className="text-center mb-16">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Discover the extensive capabilities that make BUSY the preferred choice for businesses.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  title: "Financial Accounting",
                  items: [
                    "All Books of Accounts & Final Results",
                    "Outstanding Reports - Bill-by-bill basis",
                    "Configurable Payment Reminder Letters",
                    "Interest Calculation with Automatic Posting",
                    "Bank Reconciliation",
                    "Handling of Post-dated Cheques (PDC)",
                    "Multi-Currency Accounting",
                    "Cost Centres / Sub-Ledgers",
                    "Brokerage / Royalty Calculation"
                  ]
                },
                {
                  title: "Inventory Management",
                  items: [
                    "Multi-Location Inventory",
                    "All books of Inventory with Stock Ledger",
                    "Batch-wise Inventory with Mfg. / Expiry Date",
                    "Item Serial Number-wise Tracking",
                    "Parameterized Stock Maintenance (Size, Color, etc.)",
                    "Item Critical Levels (Reorder / Minimum / Maximum)",
                    "Multiple Price-Lists for Items",
                    "BOM / Production Planning"
                  ]
                },
                {
                  title: "Statutory Reports",
                  items: [
                    "VAT Summary and Computation",
                    "VAT Registers",
                    "Party-wise / Item-wise VAT",
                    "VAT Reports & Returns",
                    "VAT Inclusive / Exclusive Billing",
                    "Manage VAT Export / Import Transactions"
                  ]
                },
                {
                  title: "Invoicing & Printing",
                  items: [
                    "Configurable Invoicing / Document Printing",
                    "Multiple Taxes in Single Invoice",
                    "Tax Inclusive / MRP Billing",
                    "POS Data Entry Screen for Fast Billing",
                    "Item Barcode / QR Code Printing",
                    "User-configurable Invoice Documents",
                    "Invoice Printing in Local Language"
                  ]
                },
                {
                  title: "Checks & Controls",
                  items: [
                    "User-definable Warning Alarms",
                    "Data Freezing (Full / Selective)",
                    "Fully User-definable Access Rights",
                    "Restrict back-dated entries (Full / Partial)",
                    "Voucher Audit",
                    "Data Checklist & Triggers",
                    "Voucher / Master Approval System",
                    "User Activity Log"
                  ]
                },
                {
                  title: "MIS Reports & Analysis",
                  items: [
                    "Cash Flow / Funds Flow / Ratio Analysis",
                    "Sales / Purchase Analysis",
                    "Profitability Reports (on various parameters)",
                    "Budgets / Targets / Credit Limits",
                    "Multi-Company Results"
                  ]
                },
                {
                  title: "General Features",
                  items: [
                    "Multi-Company / Multi-Financial Year",
                    "Pre-defined Masters for Instant Start",
                    "User-definable Optional Fields",
                    "Search / Sort / Filter / Group all Reports",
                    "Reports Export (PDF / Excel / HTML)",
                    "User-Definable Shortcuts / Favorites",
                    "Party Dashboard at Voucher Feeding"
                  ]
                },
                {
                  title: "Payroll",
                  items: [
                    "Configurable Salary Components (Earnings & Deductions)",
                    "Employee-wise Salary Structure",
                    "Daily / Monthly Salary Calculation",
                    "PF / ESI Registers and Returns",
                    "Loan / Advance Management",
                    "Automatic Posting in Accounts"
                  ]
                },
                {
                  title: "Utilities & Mobile App",
                  items: [
                    "Digital Signature on Invoice",
                    "Auto Data Backup on Google Drive",
                    "Label Printing (Accounts / Items)",
                    "Direct E-mail / SMS to parties",
                    "Data Exchange Among BUSY Users",
                    "View Reports on Mobile App",
                    "Send / Receive Business Notifications"
                  ]
                }
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-display font-bold text-xl text-indigo-300 mb-4 border-b border-white/10 pb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your financial infrastructure?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Get in touch with our experts to find the perfect solution for your business.</p>
            <div className="flex justify-center gap-6">
                <Button size="lg" className="h-14 px-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg shadow-xl" asChild>
                  <Link to="/company/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
