
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

// Pages
import Index from '@/pages/Index';
import MainMenu from '@/pages/MainMenu';
import StaffMenu from '@/pages/StaffMenu';
import NotFound from '@/pages/NotFound';

// Admin Pages
import Dashboard from '@/pages/Dashboard';
import Appointments from '@/pages/Appointments';
import HrDashboard from '@/pages/HRDashboard';
import Branch from '@/pages/Branch';
import Feedback from '@/pages/Feedback';
import Alerts from '@/pages/Alerts';
import Finance from '@/pages/Finance';
import Analytics from '@/pages/Analytics';
import Tasks from '@/pages/Tasks';
import Expenses from '@/pages/Expenses';
import Inventory from '@/pages/Inventory';

// Staff Pages
import StaffPatients from '@/pages/StaffPatients';
import StaffAppointments from '@/pages/StaffAppointments';
import StaffTreatments from '@/pages/StaffTreatments';
import StaffInvoicing from '@/pages/StaffInvoicing';
import StaffFollowup from '@/pages/StaffFollowup';
import StaffChat from '@/pages/StaffChat';
import StaffTasks from '@/pages/StaffTasks';
import StaffProduct from '@/pages/StaffProduct';
import StaffClaim from '@/pages/StaffClaim';

function App() {
  const renderWithSidebar = (Component: React.ComponentType) => (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <Component />
        </main>
      </div>
    </SidebarProvider>
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Index />} />
            <Route path="/" element={<MainMenu />} />
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/staff-menu" element={<StaffMenu />} />
            
            {/* Admin Routes */}
            <Route path="/dashboard/*" element={renderWithSidebar(Dashboard)} />
            <Route path="/appointments/*" element={renderWithSidebar(Appointments)} />
            <Route path="/hr-dashboard/*" element={renderWithSidebar(HrDashboard)} />
            <Route path="/branch/*" element={renderWithSidebar(Branch)} />
            <Route path="/feedback/*" element={renderWithSidebar(Feedback)} />
            <Route path="/alerts/*" element={renderWithSidebar(Alerts)} />
            <Route path="/finance/*" element={renderWithSidebar(Finance)} />
            <Route path="/analytics/*" element={renderWithSidebar(Analytics)} />
            <Route path="/tasks/*" element={renderWithSidebar(Tasks)} />
            <Route path="/expenses/*" element={renderWithSidebar(Expenses)} />
            <Route path="/inventory/*" element={renderWithSidebar(Inventory)} />
            
            {/* Staff Routes */}
            <Route path="/staff/patients/*" element={renderWithSidebar(StaffPatients)} />
            <Route path="/staff/appointments/*" element={renderWithSidebar(StaffAppointments)} />
            <Route path="/staff/treatments/*" element={renderWithSidebar(StaffTreatments)} />
            <Route path="/staff/invoicing/*" element={renderWithSidebar(StaffInvoicing)} />
            <Route path="/staff/followup/*" element={renderWithSidebar(StaffFollowup)} />
            <Route path="/staff/chat/*" element={renderWithSidebar(StaffChat)} />
            <Route path="/staff/tasks/*" element={renderWithSidebar(StaffTasks)} />
            <Route path="/staff/product/*" element={renderWithSidebar(StaffProduct)} />
            <Route path="/staff/claim/*" element={renderWithSidebar(StaffClaim)} />
            
            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
