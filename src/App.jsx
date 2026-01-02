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
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/resources/Blog"));
const About = lazy(() => import("./pages/company/About"));
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
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/blog" element={<Blog />} />
                <Route path="/company/about" element={<About />} />
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
