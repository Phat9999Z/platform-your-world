
import { 
  Home, 
  BookOpen, 
  Archive, 
  Calendar, 
  Settings,
  Users
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
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Classes",
    url: "/classes",
    icon: BookOpen,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: Archive,
  },
  {
    title: "Learning Plan",
    url: "/learning-plan",
    icon: Calendar,
  },
  {
    title: "Chat",
    url: "/chat",
    icon: Users,
    badge: "4",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold">Stringle</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
      
      <SidebarFooter className="p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              P
            </div>
            <div className="text-sm">
              <div className="font-medium">PRO</div>
              <div className="text-gray-600">For more resources</div>
            </div>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Upgrade
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
