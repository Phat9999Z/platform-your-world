
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
  const getNavClassName = () => {
    return `w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 group ${
      isActive 
        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl' 
        : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
    }`;
  };

  return (
    <ShadcnSidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink to={item.path} className={getNavClassName()}>
          <div className="flex items-center space-x-3">
            <item.icon className={`h-5 w-5 ${
              isActive ? 'text-white' : `text-gray-500 group-hover:${isStaffMode ? 'text-blue-600' : 'text-emerald-600'}`
            }`} />
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
