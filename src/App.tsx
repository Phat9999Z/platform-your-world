
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import MainMenu from '@/pages/MainMenu';
import Dashboard from '@/pages/Dashboard';
import Appointments from '@/pages/Appointments';
import HrDashboard from '@/pages/HRDashboard';
import Branch from '@/pages/Branch';
import Feedback from '@/pages/Feedback';
import Alerts from '@/pages/Alerts';
import Finance from '@/pages/Finance';
import StaffMenu from '@/pages/StaffMenu';
import StaffPatients from '@/pages/StaffPatients';
import StaffAppointments from '@/pages/StaffAppointments';
import StaffTreatments from '@/pages/StaffTreatments';
import StaffInvoicing from '@/pages/StaffInvoicing';
import StaffFollowup from '@/pages/StaffFollowup';
import StaffChat from '@/pages/StaffChat';
import StaffTasks from '@/pages/StaffTasks';
import StaffProduct from '@/pages/StaffProduct';
import StaffClaim from '@/pages/StaffClaim';
import Tasks from '@/pages/Tasks';
import Expenses from '@/pages/Expenses';
import Inventory from '@/pages/Inventory';
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
          <Routes>
            {/* Login/Index Route */}
            <Route path="/login" element={<Index />} />
            
            {/* Main Menu Routes - No Sidebar */}
            <Route path="/" element={<MainMenu />} />
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/staff-menu" element={<StaffMenu />} />
            
            {/* Admin/Executive Routes with Sidebar */}
            <Route path="/dashboard/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Dashboard />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/appointments/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Appointments />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/hr-dashboard/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <HrDashboard />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/branch/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Branch />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/feedback/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Feedback />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/alerts/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Alerts />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/finance/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Finance />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/analytics/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Analytics />
                  </main>
                </div>
              </SidebarProvider>
            } />
            
            {/* New Routes for Tasks, Expenses, Inventory */}
            <Route path="/tasks/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Tasks />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/expenses/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Expenses />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/inventory/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <Inventory />
                  </main>
                </div>
              </SidebarProvider>
            } />
            
            {/* Staff Routes with Sidebar */}
            <Route path="/staff/patients/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffPatients />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/appointments/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffAppointments />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/treatments/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffTreatments />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/invoicing/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffInvoicing />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/followup/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffFollowup />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/chat/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffChat />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/tasks/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffTasks />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/product/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffProduct />
                  </main>
                </div>
              </SidebarProvider>
            } />
            <Route path="/staff/claim/*" element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1 overflow-auto">
                    <StaffClaim />
                  </main>
                </div>
              </SidebarProvider>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
