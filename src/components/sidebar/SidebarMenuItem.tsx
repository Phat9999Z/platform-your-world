
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarMenuButton, SidebarMenuItem as ShadcnSidebarMenuItem } from '@/components/ui/sidebar';
import { MenuItem } from '@/config/menuItems';

interface SidebarMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  isStaffMode: boolean;
  isCollapsed: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ 
  item, 
  isActive, 
  isStaffMode, 
  isCollapsed 
}) => {
  return (
    <ShadcnSidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink 
          to={item.path} 
          className={({ isActive: navActive }) => {
            // Use NavLink's built-in isActive for more reliable detection
            const active = navActive || isActive;
            return `w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 group ${
              active 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl' 
                : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
            }`;
          }}
        >
          <div className="flex items-center space-x-3">
            <item.icon className={`h-5 w-5`} />
            {!isCollapsed && (
              <span className="font-semibold text-sm">{item.label}</span>
            )}
          </div>
        </NavLink>
      </SidebarMenuButton>
    </ShadcnSidebarMenuItem>
  );
};

export default SidebarMenuItem;
