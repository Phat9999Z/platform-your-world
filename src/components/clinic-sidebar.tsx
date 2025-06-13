
import { 
  Home, 
  Calendar, 
  Users, 
  Pill,
  FileText,
  BarChart3,
  Settings,
  Stethoscope,
  CreditCard,
  UserCheck,
  Heart
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "แดชบอร์ด",
    url: "/",
    icon: Home,
  },
  {
    title: "การนัดหมาย",
    url: "/appointments",
    icon: Calendar,
    badge: "12",
  },
  {
    title: "ผู้ป่วย",
    url: "/patients",
    icon: Users,
  },
  {
    title: "แพทย์",
    url: "/doctors",
    icon: Stethoscope,
  },
  {
    title: "การรักษา",
    url: "/treatments",
    icon: UserCheck,
  },
  {
    title: "ยาและเวชภัณฑ์",
    url: "/medications",
    icon: Pill,
  },
  {
    title: "การเงิน",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "รายงาน",
    url: "/reports",
    icon: BarChart3,
  },
  {
    title: "เอกสาร",
    url: "/documents",
    icon: FileText,
  },
  {
    title: "ตั้งค่า",
    url: "/settings",
    icon: Settings,
  },
];

export function ClinicSidebar() {
  return (
    <Sidebar className="border-r bg-gradient-to-b from-emerald-50 to-blue-50">
      <SidebarHeader className="p-6 border-b border-emerald-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              MediCare Pro
            </h1>
            <p className="text-sm text-emerald-600 font-medium">ระบบบริหารคลินิกครบวงจร</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-700 font-semibold px-3 py-2 text-xs uppercase tracking-wide">
            เมนูหลัก
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-200 group">
                      <item.icon className="w-5 h-5 text-emerald-600 group-hover:text-blue-600 transition-colors" />
                      <span className="text-gray-700 font-medium group-hover:text-gray-900">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-emerald-100">
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-100 shadow-sm">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-sm font-bold">ดร</span>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-gray-800">ดร. สมชาย เจริญสุข</div>
            <div className="text-emerald-600 font-medium">ผู้อำนวยการคลินิก</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
