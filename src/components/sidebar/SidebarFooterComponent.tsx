
import React from 'react';
import { SidebarFooter } from '@/components/ui/sidebar';
import { Shield } from 'lucide-react';

interface SidebarFooterComponentProps {
  isStaffMode: boolean;
  isCollapsed: boolean;
}

const SidebarFooterComponent: React.FC<SidebarFooterComponentProps> = ({
  isStaffMode,
  isCollapsed
}) => {
  if (isCollapsed) return null;

  return (
    <SidebarFooter className="p-6">
      <div className={`${isStaffMode ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-emerald-600 to-teal-600'} rounded-2xl p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
        <div className="relative z-10">
          <Shield className="h-8 w-8 mb-3 text-emerald-100" />
          <h3 className="font-bold text-lg mb-1">{isStaffMode ? 'Staff Portal' : 'ISO 27001 Certified'}</h3>
          <p className="text-emerald-100 text-sm">{isStaffMode ? 'ระบบสำหรับพนักงาน' : 'ความปลอดภัยระดับโลก'}</p>
        </div>
      </div>
    </SidebarFooter>
  );
};

export default SidebarFooterComponent;
