import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index              from "./pages/Index.tsx";
import AboutPage          from "./pages/AboutPage.tsx";
import ServicesPage       from "./pages/ServicesPage.tsx";
import ServiceDetailPage  from "./pages/ServiceDetailPage.tsx";
import IndustriesPage     from "./pages/IndustriesPage.tsx";
import IndustryDetailPage from "./pages/IndustryDetailPage.tsx";
import GlobalPage         from "./pages/GlobalPage.tsx";
import FaqsPage           from "./pages/FaqsPage.tsx";
import ContactPage        from "./pages/ContactPage.tsx";
import NotFound           from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

/* ── Scroll to top on every route change ── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/"                         element={<Index />}              />
          <Route path="/about"                    element={<AboutPage />}          />
          <Route path="/services"                 element={<ServicesPage />}       />
          <Route path="/services/:slug"           element={<ServiceDetailPage />}  />
          <Route path="/industries"               element={<IndustriesPage />}     />
          <Route path="/industries/:slug"         element={<IndustryDetailPage />} />
          <Route path="/global"                   element={<GlobalPage />}         />
          <Route path="/faqs"                     element={<FaqsPage />}           />
          <Route path="/contact"                  element={<ContactPage />}        />
          <Route path="*"                         element={<NotFound />}           />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;