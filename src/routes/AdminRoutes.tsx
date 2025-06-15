
import React from 'react';
import { Route } from 'react-router-dom';
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
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const AdminRoutes = () => {
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
    </>
  );
};

export default AdminRoutes;
