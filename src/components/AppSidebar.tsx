
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Eye,
  Sparkles,
  BarChart3,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Target,
  Clock,
  Calendar,
  Users,
  UserCheck,
  Building,
  MessageSquare,
  Star,
  MessageCircle,
  Calculator,
  Receipt,
  Package,
  Shield,
  PieChart,
  LineChart,
  Activity,
  Zap,
  Timer,
  UserX,
  AlertCircle,
  Briefcase,
  CreditCard,
  FileText,
  Phone,
  Settings,
  Plus
} from 'lucide-react';

// Define menu items for each system - Fixed routing paths
const systemMenus = {
  dashboard: [
    { icon: BarChart3, label: 'ภาพรวมธุรกิจ', path: '/' },
    { icon: DollarSign, label: 'รายได้รวม', path: '/dashboard' },
    { icon: TrendingUp, label: 'ยอดขายตามช่วงเวลา', path: '/dashboard' },
    { icon: Calculator, label: 'กำไรสุทธิ (Net Profit)', path: '/dashboard' },
    { icon: Activity, label: 'Burn Rate', path: '/dashboard' },
    { icon: Clock, label: 'Runway', path: '/dashboard' },
    { icon: LineChart, label: 'อัตราการเติบโต', path: '/dashboard' },
    { icon: Target, label: 'KPI องค์กร', path: '/dashboard' }
  ],
  appointment: [
    { icon: BarChart3, label: 'ประสิทธิภาพการจอง', path: '/appointments' },
    { icon: Users, label: 'การใช้งานต่อหมอ', path: '/appointments' },
    { icon: UserX, label: 'อัตราไม่มาตามนัด', path: '/appointments' },
    { icon: DollarSign, label: 'รายได้ต่อช่วงเวลา', path: '/appointments' },
    { icon: Star, label: 'หมอสร้างรายได้สูงสุด', path: '/appointments' },
    { icon: Activity, label: 'วิเคราะห์คิว', path: '/appointments' }
  ],
  hr: [
    { icon: Users, label: 'พนักงาน & องค์กร', path: '/hr-dashboard' },
    { icon: UserCheck, label: 'จำนวนพนักงานทั้งหมด', path: '/hr-dashboard' },
    { icon: TrendingUp, label: 'Turnover Rate', path: '/hr-dashboard' },
    { icon: DollarSign, label: 'Payroll Load', path: '/hr-dashboard' },
    { icon: Calculator, label: 'Revenue per Staff', path: '/hr-dashboard' },
    { icon: Star, label: 'Performance สูงสุด', path: '/hr-dashboard' }
  ],
  branch: [
    { icon: Building, label: 'สาขาในระบบ', path: '/branch' },
    { icon: DollarSign, label: 'รายได้ต่อสาขา', path: '/branch' },
    { icon: Calculator, label: 'กำไรสุทธิสาขา', path: '/branch' },
    { icon: Receipt, label: 'ต้นทุน / รายจ่ายสาขา', path: '/branch' },
    { icon: Activity, label: 'Productivity สาขา', path: '/branch' },
    { icon: BarChart3, label: 'คิวเฉลี่ยต่อวัน', path: '/branch' }
  ],
  feedback: [
    { icon: MessageSquare, label: 'ความเห็นลูกค้า', path: '/feedback' },
    { icon: PieChart, label: 'การกระจาย Feedback', path: '/feedback' },
    { icon: MessageCircle, label: 'คำค้นยอดนิยม', path: '/feedback' },
    { icon: Star, label: 'คะแนนหมอ', path: '/feedback' },
    { icon: Building, label: 'สาขาที่ดีที่สุด', path: '/feedback' }
  ],
  chat: [
    { icon: MessageSquare, label: 'ประสิทธิภาพการสื่อสาร', path: '/alerts' },
    { icon: LineChart, label: 'ปริมาณแชท (LINE / FB)', path: '/alerts' },
    { icon: Timer, label: 'Response Time', path: '/alerts' },
    { icon: MessageCircle, label: 'คำถามนอกสคริปต์', path: '/alerts' },
    { icon: Zap, label: 'Bot Fail Rate', path: '/alerts' }
  ],
  finance: [
    { icon: DollarSign, label: 'ภาพรวมการเงิน', path: '/finance' },
    { icon: BarChart3, label: 'รายรับ / รายจ่าย', path: '/finance' },
    { icon: LineChart, label: 'รายได้ต่อวัน / สัปดาห์', path: '/finance' },
    { icon: Calculator, label: 'กำไรสุทธิ', path: '/finance' },
    { icon: Activity, label: 'Burn Rate & Runway', path: '/finance' },
    { icon: Briefcase, label: 'Owner Withdrawal Report', path: '/finance' }
  ]
};

const systemTitles = {
  dashboard: 'Dashboard (Executive Overview)',
  appointment: 'Appointment (Performance Monitoring)',
  hr: 'HR / OD (องค์กรและพนักงาน)',
  branch: 'Branch (Multi-location Performance)',
  feedback: 'Feedback (Customer Insight)',
  chat: 'ChatSystem (แชทจากทุกช่องทาง)',
  finance: 'Finance (เงินรอด หรือ เงินชิบหาย)'
};

// Staff menu systems with corrected paths
const staffMenus = {
  patients: [
    { icon: Users, label: 'รายชื่อผู้ป่วย', path: '/staff/patients' },
    { icon: UserCheck, label: 'ข้อมูลผู้ป่วย', path: '/staff/patients' },
    { icon: Plus, label: 'เพิ่มผู้ป่วยใหม่', path: '/staff/patients' },
    { icon: FileText, label: 'ประวัติการรักษา', path: '/staff/patients' }
  ],
  appointments: [
    { icon: Calendar, label: 'รายการนัด', path: '/staff/appointments' },
    { icon: Clock, label: 'ปฏิทินนัดหมาย', path: '/staff/appointments' },
    { icon: Plus, label: 'จองนัดใหม่', path: '/staff/appointments' },
    { icon: AlertCircle, label: 'นัดวันนี้', path: '/staff/appointments' }
  ],
  treatments: [
    { icon: Activity, label: 'บันทึกการรักษา', path: '/staff/treatments' },
    { icon: Plus, label: 'สร้างบันทึกใหม่', path: '/staff/treatments' },
    { icon: Timer, label: 'ประวัติการรักษา', path: '/staff/treatments' },
    { icon: Package, label: 'คอร์สรักษา', path: '/staff/treatments' }
  ],
  invoicing: [
    { icon: Receipt, label: 'ออกใบเสร็จ', path: '/staff/invoicing' },
    { icon: CreditCard, label: 'รับชำระเงิน', path: '/staff/invoicing' },
    { icon: Plus, label: 'สร้างใบเสร็จใหม่', path: '/staff/invoicing' },
    { icon: DollarSign, label: 'ติดตามการชำระ', path: '/staff/invoicing' }
  ],
  followup: [
    { icon: MessageCircle, label: 'ติดตามลูกค้า', path: '/staff/followup' },
    { icon: Plus, label: 'สร้างการติดตาม', path: '/staff/followup' },
    { icon: Briefcase, label: 'งานที่ได้รับมอบหมาย', path: '/staff/followup' },
    { icon: Phone, label: 'โทรติดตาม', path: '/staff/followup' }
  ],
  chat: [
    { icon: MessageSquare, label: 'แชทสนับสนุน', path: '/staff/chat' },
    { icon: MessageCircle, label: 'LINE / Facebook', path: '/staff/chat' },
    { icon: Timer, label: 'ประวัติการแชท', path: '/staff/chat' },
    { icon: Settings, label: 'ตั้งค่าแชท', path: '/staff/chat' }
  ]
};

const staffTitles = {
  patients: 'Patient Management (จัดการข้อมูลผู้ป่วย)',
  appointments: 'Appointment Booking (จองคิวและนัดหมาย)',
  treatments: 'Treatment Records (บันทึกการรักษา)',
  invoicing: 'Invoice & Payment (ใบเสร็จและการชำระ)',
  followup: 'Customer Follow-up (ติดตามลูกค้า)',
  chat: 'Chat Support (แชทสนับสนุนลูกค้า)'
};

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === 'collapsed';

  // Improved system detection with better path matching
  const getCurrentSystem = () => {
    const path = location.pathname;
    
    // Staff mode detection with exact matching
    if (path.startsWith('/staff/patients')) return 'patients';
    if (path.startsWith('/staff/appointments')) return 'appointments';
    if (path.startsWith('/staff/treatments')) return 'treatments';
    if (path.startsWith('/staff/invoicing')) return 'invoicing';
    if (path.startsWith('/staff/followup')) return 'followup';
    if (path.startsWith('/staff/chat')) return 'chat';
    
    // Executive dashboard routes with better matching
    if (path === '/' || path.startsWith('/dashboard')) return 'dashboard';
    if (path.startsWith('/appointments')) return 'appointment';
    if (path.startsWith('/hr-dashboard')) return 'hr';
    if (path.startsWith('/branch')) return 'branch';
    if (path.startsWith('/feedback')) return 'feedback';
    if (path.startsWith('/alerts')) return 'chat';
    if (path.startsWith('/finance')) return 'finance';
    
    // Default fallback
    return 'dashboard';
  };

  const currentSystem = getCurrentSystem();
  const isStaffMode = location.pathname.startsWith('/staff/');
  
  // Get appropriate menu items and title
  const currentMenuItems = isStaffMode ? staffMenus[currentSystem] : systemMenus[currentSystem];
  const systemTitle = isStaffMode ? staffTitles[currentSystem] : systemTitles[currentSystem];

  // Improved active link detection
  const getNavClassName = (path: string) => {
    const isActive = location.pathname === path || 
                    (path === '/' && location.pathname === '/') ||
                    (path !== '/' && location.pathname.startsWith(path));
    
    return `w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 group ${
      isActive 
        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl' 
        : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
    }`;
  };

  return (
    <Sidebar className="bg-white/95 backdrop-blur-xl shadow-2xl border-r border-gray-100">
      {/* Brand Header */}
      <SidebarHeader className="p-8 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className={`w-12 h-12 ${isStaffMode ? 'bg-gradient-to-br from-blue-600 to-indigo-600' : 'bg-gradient-to-br from-emerald-600 to-teal-600'} rounded-2xl flex items-center justify-center shadow-lg`}>
              {isStaffMode ? <Users className="h-7 w-7 text-white" /> : <Eye className="h-7 w-7 text-white" />}
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="h-2 w-2 text-white" />
            </div>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className={`text-xl font-bold ${isStaffMode ? 'bg-gradient-to-r from-blue-700 to-indigo-700' : 'bg-gradient-to-r from-emerald-700 to-teal-700'} bg-clip-text text-transparent`}>
                {isStaffMode ? 'Staff Portal' : 'VisionCare Elite'}
              </h1>
              <p className={`text-sm ${isStaffMode ? 'text-blue-600' : 'text-emerald-600'} font-medium`}>{systemTitle}</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 font-semibold text-xs uppercase tracking-wide mb-4">
            {!isCollapsed ? (isStaffMode ? 'เมนูพนักงาน' : 'เมนูหลัก') : ''}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {currentMenuItems?.map((item, index) => {
                const isActive = location.pathname === item.path || 
                               (item.path === '/' && location.pathname === '/') ||
                               (item.path !== '/' && location.pathname.startsWith(item.path));
                
                return (
                  <SidebarMenuItem key={`${item.path}-${index}`}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.path} className={getNavClassName(item.path)}>
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
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Premium Footer */}
      {!isCollapsed && (
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
      )}
    </Sidebar>
  );
}
