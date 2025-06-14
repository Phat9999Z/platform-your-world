import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Appointments from '@/pages/Appointments';
import HrDashboard from '@/pages/HrDashboard';
import Branch from '@/pages/Branch';
import Feedback from '@/pages/Feedback';
import Alerts from '@/pages/Alerts';
import Finance from '@/pages/Finance';
import StaffPatients from '@/pages/staff/StaffPatients';
import StaffAppointments from '@/pages/staff/StaffAppointments';
import StaffTreatments from '@/pages/staff/StaffTreatments';
import StaffInvoicing from '@/pages/staff/StaffInvoicing';
import StaffFollowup from '@/pages/staff/StaffFollowup';
import StaffChat from '@/pages/staff/StaffChat';
import NotFound from '@/pages/NotFound';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { AuthProvider } from '@/contexts/AuthContext';
import Analytics from '@/pages/Analytics';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/dashboard/*" element={<Dashboard />} />
                  <Route path="/appointments/*" element={<Appointments />} />
                  <Route path="/hr-dashboard/*" element={<HrDashboard />} />
                  <Route path="/branch/*" element={<Branch />} />
                  <Route path="/feedback/*" element={<Feedback />} />
                  <Route path="/alerts/*" element={<Alerts />} />
                  <Route path="/finance/*" element={<Finance />} />
                  <Route path="/staff/patients/*" element={<StaffPatients />} />
                  <Route path="/staff/appointments/*" element={<StaffAppointments />} />
                  <Route path="/staff/treatments/*" element={<StaffTreatments />} />
                  <Route path="/staff/invoicing/*" element={<StaffInvoicing />} />
                  <Route path="/staff/followup/*" element={<StaffFollowup />} />
                  <Route path="/staff/chat/*" element={<StaffChat />} />
                  <Route path="/analytics/*" element={<Analytics />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
