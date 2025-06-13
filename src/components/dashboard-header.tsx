
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  });

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="text-emerald-700 font-medium">{currentDate}</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-4 h-4" />
            <Input 
              placeholder="ค้นหาผู้ป่วย, การนัดหมาย..." 
              className="pl-10 w-80 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative hover:bg-emerald-50">
            <Bell className="w-5 h-5 text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>
          
          <div className="flex items-center gap-3 px-3 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-emerald-700 font-medium text-sm">ดร. สมชาย</span>
          </div>
          
          <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300">
            ออกจากระบบ
          </Button>
        </div>
      </div>
    </header>
  );
}
