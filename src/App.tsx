import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import MainMenu from "./pages/MainMenu";
import StaffMenu from "./pages/StaffMenu";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import Appointments from "./pages/Appointments";
import HRDashboard from "./pages/HRDashboard";
import Branch from "./pages/Branch";
import Feedback from "./pages/Feedback";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import StaffPatients from "./pages/StaffPatients";
import StaffAppointments from "./pages/StaffAppointments";
import StaffTreatments from "./pages/StaffTreatments";
import StaffInvoicing from "./pages/StaffInvoicing";
import StaffFollowup from "./pages/StaffFollowup";
import StaffChat from "./pages/StaffChat";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                
                {/* Dashboard System Routes */}
                <Route path="dashboard/*" element={<Dashboard />} />
                
                <Route path="patients" element={<div className="p-8 text-center text-gray-600">Patient Intelligence Page - Coming Soon</div>} />
                <Route path="scheduling" element={<div className="p-8 text-center text-gray-600">Smart Scheduling Page - Coming Soon</div>} />
                <Route path="doctors" element={<div className="p-8 text-center text-gray-600">Doctor Performance Page - Coming Soon</div>} />
                <Route path="treatments" element={<div className="p-8 text-center text-gray-600">Treatment Outcomes Page - Coming Soon</div>} />
                <Route path="revenue" element={<div className="p-8 text-center text-gray-600">Revenue Analytics Page - Coming Soon</div>} />
                <Route path="quality" element={<div className="p-8 text-center text-gray-600">Quality Metrics Page - Coming Soon</div>} />
                <Route path="reports" element={<div className="p-8 text-center text-gray-600">Business Reports Page - Coming Soon</div>} />
                
                {/* Appointment System Routes */}
                <Route path="appointments/*" element={<Appointments />} />
                
                {/* HR/OD System Routes */}
                <Route path="hr-dashboard/*" element={<HRDashboard />} />
                
                {/* Branch System Routes */}
                <Route path="branch/*" element={<Branch />} />
                
                {/* Feedback System Routes */}
                <Route path="feedback/*" element={<Feedback />} />
                
                {/* Finance System Routes */}
                <Route path="finance/*" element={<Finance />} />
                
                {/* Chat System Routes */}
                <Route path="alerts/*" element={<Chat />} />

                {/* Staff Portal Routes - Using Layout with Sidebar */}
                <Route path="staff/patients/*" element={<StaffPatients />} />
                <Route path="staff/appointments/*" element={<StaffAppointments />} />
                <Route path="staff/treatments/*" element={<StaffTreatments />} />
                <Route path="staff/invoicing/*" element={<StaffInvoicing />} />
                <Route path="staff/followup/*" element={<StaffFollowup />} />
                <Route path="staff/chat/*" element={<StaffChat />} />
              </Route>
              
              {/* Menu Routes */}
              <Route path="/main-menu" element={<MainMenu />} />
              <Route path="/staff-menu" element={<StaffMenu />} />
              
              {/* Catch-all route - ALWAYS KEEP THIS LAST */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
