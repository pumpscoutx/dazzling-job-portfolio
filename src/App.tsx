
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Import project pages
import EcommerceDashboard from "./pages/project-pages/EcommerceDashboard";
import PhotographyPortfolio from "./pages/project-pages/PhotographyPortfolio";
import AnalyticsDashboard from "./pages/project-pages/AnalyticsDashboard";
import TravelJournal from "./pages/project-pages/TravelJournal";
import RestaurantOrdering from "./pages/project-pages/RestaurantOrdering";
import TaskManagement from "./pages/project-pages/TaskManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          {/* Project routes */}
          <Route path="/projects/ecommerce-dashboard" element={<EcommerceDashboard />} />
          <Route path="/projects/photography-portfolio" element={<PhotographyPortfolio />} />
          <Route path="/projects/analytics-dashboard" element={<AnalyticsDashboard />} />
          <Route path="/projects/travel-journal" element={<TravelJournal />} />
          <Route path="/projects/restaurant-ordering" element={<RestaurantOrdering />} />
          <Route path="/projects/task-management" element={<TaskManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
