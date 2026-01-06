import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductAPIManager = lazy(() => import("./pages/products/APIManager"));
const ProductIdentityServer = lazy(() => import("./pages/products/IdentityServer"));
const ProductIntegrationPlatform = lazy(() => import("./pages/products/IntegrationPlatform"));
const ProductCloudPlatform = lazy(() => import("./pages/products/CloudPlatform"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionBanking = lazy(() => import("./pages/solutions/Banking"));
const SolutionHealthcare = lazy(() => import("./pages/solutions/Healthcare"));
const SolutionCloud = lazy(() => import("./pages/solutions/Cloud"));
const SolutionTelecom = lazy(() => import("./pages/solutions/Telecom"));
const SolutionRetail = lazy(() => import("./pages/solutions/Retail"));
const SolutionGovernment = lazy(() => import("./pages/solutions/Government"));
const SolutionDevOps = lazy(() => import("./pages/solutions/DevOps"));
const SolutionSecurity = lazy(() => import("./pages/solutions/Security"));
const SolutionAI = lazy(() => import("./pages/solutions/AI"));
const SolutionMicroservices = lazy(() => import("./pages/solutions/Microservices"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/resources/Blog"));
const Documentation = lazy(() => import("./pages/resources/Documentation"));
const Whitepapers = lazy(() => import("./pages/resources/Whitepapers"));
const Webinars = lazy(() => import("./pages/resources/Webinars"));
const About = lazy(() => import("./pages/company/About"));
const Leadership = lazy(() => import("./pages/company/Leadership"));
const Careers = lazy(() => import("./pages/company/Careers"));
const Partners = lazy(() => import("./pages/company/Partners"));
const Gallery = lazy(() => import("./pages/company/Gallery"));
const Contact = lazy(() => import("./pages/company/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/api-manager" element={<ProductAPIManager />} />
                <Route path="/products/identity-server" element={<ProductIdentityServer />} />
                <Route path="/products/integration-platform" element={<ProductIntegrationPlatform />} />
                <Route path="/products/cloud-platform" element={<ProductCloudPlatform />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/banking" element={<SolutionBanking />} />
                <Route path="/solutions/healthcare" element={<SolutionHealthcare />} />
                <Route path="/solutions/cloud" element={<SolutionCloud />} />
                <Route path="/solutions/telecom" element={<SolutionTelecom />} />
                <Route path="/solutions/retail" element={<SolutionRetail />} />
                <Route path="/solutions/government" element={<SolutionGovernment />} />
                <Route path="/solutions/devops" element={<SolutionDevOps />} />
                <Route path="/solutions/security" element={<SolutionSecurity />} />
                <Route path="/solutions/ai" element={<SolutionAI />} />
                <Route path="/solutions/microservices" element={<SolutionMicroservices />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/blog" element={<Blog />} />
                <Route path="/resources/documentation" element={<Documentation />} />
                <Route path="/resources/whitepapers" element={<Whitepapers />} />
                <Route path="/resources/webinars" element={<Webinars />} />
                <Route path="/company/about" element={<About />} />
                <Route path="/company/leadership" element={<Leadership />} />
                <Route path="/company/careers" element={<Careers />} />
                <Route path="/company/partners" element={<Partners />} />
                <Route path="/company/gallery" element={<Gallery />} />
                <Route path="/company/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
