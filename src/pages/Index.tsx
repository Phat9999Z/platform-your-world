
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { WelcomeCard } from "@/components/welcome-card";
import { LatestResults } from "@/components/latest-results";
import { TimeSpentChart } from "@/components/time-spent-chart";
import { LanguageProgress } from "@/components/language-progress";
import { Reminders } from "@/components/reminders";
import { CourseCards } from "@/components/course-cards";
import { UserProfile } from "@/components/user-profile";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <WelcomeCard />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <LatestResults />
                  <TimeSpentChart />
                </div>
                <CourseCards />
              </div>
              <div className="space-y-6">
                <UserProfile />
                <LanguageProgress />
                <Reminders />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
