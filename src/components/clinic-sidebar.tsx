
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
  UserCheck
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
    <Sidebar className="border-r">
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">ClinicCare</h1>
            <p className="text-sm text-gray-500">ระบบบริหารคลินิก</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 font-medium px-3 py-2">
            เมนูหลัก
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
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
      
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">Dr</span>
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-800">คุณหมอ สมชาย</div>
            <div className="text-gray-500">ผู้อำนวยการ</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
