
import { SidebarProvider } from "@/components/ui/sidebar";
import { ClinicSidebar } from "@/components/clinic-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { ClinicOverview } from "@/components/clinic-overview";
import { TodayAppointments } from "@/components/today-appointments";
import { PatientStats } from "@/components/patient-stats";
import { RevenueChart } from "@/components/revenue-chart";
import { RecentActivities } from "@/components/recent-activities";
import { QuickActions } from "@/components/quick-actions";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-white">
        <ClinicSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <ClinicOverview />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <TodayAppointments />
                  <PatientStats />
                </div>
                <RevenueChart />
              </div>
              <div className="space-y-6">
                <QuickActions />
                <RecentActivities />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
