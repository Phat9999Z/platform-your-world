
import React from 'react';
import { Route } from 'react-router-dom';
import StaffPatients from '@/pages/StaffPatients';
import StaffAppointments from '@/pages/StaffAppointments';
import StaffTreatments from '@/pages/StaffTreatments';
import StaffInvoicing from '@/pages/StaffInvoicing';
import StaffFollowup from '@/pages/StaffFollowup';
import StaffChat from '@/pages/StaffChat';
import StaffTasks from '@/pages/StaffTasks';
import StaffProduct from '@/pages/StaffProduct';
import StaffClaim from '@/pages/StaffClaim';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const StaffRoutes = () => {
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
    <>
      <Route path="/staff/patients/*" element={renderWithSidebar(StaffPatients)} />
      <Route path="/staff/appointments/*" element={renderWithSidebar(StaffAppointments)} />
      <Route path="/staff/treatments/*" element={renderWithSidebar(StaffTreatments)} />
      <Route path="/staff/invoicing/*" element={renderWithSidebar(StaffInvoicing)} />
      <Route path="/staff/followup/*" element={renderWithSidebar(StaffFollowup)} />
      <Route path="/staff/chat/*" element={renderWithSidebar(StaffChat)} />
      <Route path="/staff/tasks/*" element={renderWithSidebar(StaffTasks)} />
      <Route path="/staff/product/*" element={renderWithSidebar(StaffProduct)} />
      <Route path="/staff/claim/*" element={renderWithSidebar(StaffClaim)} />
    </>
  );
};

export default StaffRoutes;
