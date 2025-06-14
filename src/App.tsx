
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Appointments from '@/pages/Appointments';
import HrDashboard from '@/pages/HRDashboard';
import Branch from '@/pages/Branch';
import Feedback from '@/pages/Feedback';
import Finance from '@/pages/Finance';
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
                  <Route path="/alerts/*" element={<NotFound />} />
                  <Route path="/finance/*" element={<Finance />} />
                  <Route path="/staff/patients/*" element={<NotFound />} />
                  <Route path="/staff/appointments/*" element={<NotFound />} />
                  <Route path="/staff/treatments/*" element={<NotFound />} />
                  <Route path="/staff/invoicing/*" element={<NotFound />} />
                  <Route path="/staff/followup/*" element={<NotFound />} />
                  <Route path="/staff/chat/*" element={<NotFound />} />
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
