
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
    if (path.startsWith('/dashboard')) return 'dashboard';
    if (path.startsWith('/appointments')) return 'appointment';
    if (path.startsWith('/hr-dashboard')) return 'hr';
    if (path.startsWith('/branch')) return 'branch';
    if (path.startsWith('/feedback')) return 'feedback';
    if (path.startsWith('/alerts')) return 'chat';
    if (path.startsWith('/finance')) return 'finance';
    
    // Default fallback - return dashboard for main menu and unknown routes
    return 'dashboard';
  };

  const isStaffMode = location.pathname.startsWith('/staff/');
  const currentSystem = getCurrentSystem();
  
  // Ensure we always have menu items - fallback to dashboard menu if current system doesn't have items
  const currentMenuItems = isStaffMode 
    ? (staffMenus[currentSystem] || staffMenus['patients']) 
    : (systemMenus[currentSystem] || systemMenus['dashboard']);
    
  const systemTitle = isStaffMode 
    ? (staffTitles[currentSystem] || staffTitles['patients'])
    : (systemTitles[currentSystem] || systemTitles['dashboard']);

  const isActiveLink = (path: string) => {
    const currentPath = location.pathname;
    
    // Handle exact matches first
    if (currentPath === path) return true;
    
    // Handle root path specially - only active if we're exactly at root or dashboard
    if (path === '/' || path === '/dashboard') {
      return currentPath === '/' || currentPath === '/dashboard';
    }
    
    // For sub-paths, check if current path starts with the menu path
    // This will make parent menu items active when on sub-routes
    if (currentPath.startsWith(path + '/')) return true;
    
    return false;
  };

  console.log('Sidebar Navigation Debug:', {
    currentPath: location.pathname,
    currentSystem,
    isStaffMode,
    menuItemsCount: currentMenuItems?.length || 0,
    systemTitle
  });

  return {
    currentSystem,
    isStaffMode,
    currentMenuItems,
    systemTitle,
    isActiveLink,
    location
  };
};
