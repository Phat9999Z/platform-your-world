
import { useLocation } from 'react-router-dom';
import { systemMenus, staffMenus, systemTitles, staffTitles } from '@/config/menuItems';

export const useSidebarLogic = () => {
  const location = useLocation();

  const getCurrentSystem = () => {
    const path = location.pathname;
    
    // Staff mode detection with exact matching
    if (path.startsWith('/staff/patients')) return 'patients';
    if (path.startsWith('/staff/appointments')) return 'appointments';
    if (path.startsWith('/staff/treatments')) return 'treatments';
    if (path.startsWith('/staff/invoicing')) return 'invoicing';
    if (path.startsWith('/staff/followup')) return 'followup';
    if (path.startsWith('/staff/chat')) return 'chat';
    
    // Analytics routes
    if (path.startsWith('/analytics')) return 'analytics';
    
    // Executive dashboard routes with better matching
    if (path === '/') return 'dashboard';
    if (path.startsWith('/dashboard')) return 'dashboard';
    if (path.startsWith('/appointments')) return 'appointment';
    if (path.startsWith('/hr-dashboard')) return 'hr';
    if (path.startsWith('/branch')) return 'branch';
    if (path.startsWith('/feedback')) return 'feedback';
    if (path.startsWith('/alerts')) return 'chat';
    if (path.startsWith('/finance')) return 'finance';
    
    return 'dashboard';
  };

  const isStaffMode = location.pathname.startsWith('/staff/');
  const currentSystem = getCurrentSystem();
  
  const currentMenuItems = isStaffMode ? staffMenus[currentSystem] : systemMenus[currentSystem];
  const systemTitle = isStaffMode ? staffTitles[currentSystem] : systemTitles[currentSystem];

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return {
    currentSystem,
    isStaffMode,
    currentMenuItems,
    systemTitle,
    isActiveLink,
    location
  };
};
