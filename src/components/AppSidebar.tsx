
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

// Define menu items for each system
const systemMenus = {
  dashboard: [
    { icon: BarChart3, label: 'ภาพรวมธุรกิจ', path: '/dashboard' },
    { icon: DollarSign, label: 'รายได้รวม', path: '/dashboard/revenue' },
    { icon: TrendingUp, label: 'ยอดขายตามช่วงเวลา', path: '/dashboard/sales-timeline' },
    { icon: Calculator, label: 'กำไรสุทธิ (Net Profit)', path: '/dashboard/net-profit' },
    { icon: Activity, label: 'Burn Rate', path: '/dashboard/burn-rate' },
    { icon: Clock, label: 'Runway', path: '/dashboard/runway' },
    { icon: LineChart, label: 'อัตราการเติบโต', path: '/dashboard/growth-rate' },
    { icon: Target, label: 'KPI องค์กร', path: '/dashboard/kpi' },
    { icon: AlertTriangle, label: 'Alert ฉุกเฉิน!', path: '/dashboard/alerts' }
  ],
  appointment: [
    { icon: BarChart3, label: 'ประสิทธิภาพการจอง', path: '/appointments' },
    { icon: Users, label: 'Utilization per Doctor', path: '/appointments/utilization' },
    { icon: UserX, label: 'No-Show Rate per Branch', path: '/appointments/no-show' },
    { icon: DollarSign, label: 'Revenue per Slot', path: '/appointments/revenue-slot' },
    { icon: Star, label: 'หมอสร้างรายได้สูงสุด', path: '/appointments/top-doctors' },
    { icon: Activity, label: 'คิวแน่น / คิวร้าง', path: '/appointments/queue-analysis' },
    { icon: AlertCircle, label: 'บริการที่คนจองแต่ไม่รักษา', path: '/appointments/no-treatment' }
  ],
  hr: [
    { icon: Users, label: 'พนักงาน & องค์กร', path: '/hr-dashboard' },
    { icon: UserCheck, label: 'จำนวนพนักงานทั้งหมด', path: '/hr-dashboard/total-staff' },
    { icon: TrendingUp, label: 'Turnover Rate', path: '/hr-dashboard/turnover' },
    { icon: DollarSign, label: 'Payroll Load', path: '/hr-dashboard/payroll' },
    { icon: Calculator, label: 'Revenue per Staff', path: '/hr-dashboard/revenue-staff' },
    { icon: Star, label: 'คนที่ Performance สูงสุด', path: '/hr-dashboard/top-performers' },
    { icon: AlertTriangle, label: 'คนที่ Performance ติดลบ', path: '/hr-dashboard/poor-performers' },
    { icon: Timer, label: 'พนักงานไม่ขยับอะไรเลย', path: '/hr-dashboard/inactive-staff' }
  ],
  branch: [
    { icon: Building, label: 'สาขาในระบบ', path: '/branch' },
    { icon: DollarSign, label: 'รายได้ต่อสาขา', path: '/branch/revenue' },
    { icon: Calculator, label: 'กำไรสุทธิสาขา', path: '/branch/net-profit' },
    { icon: Receipt, label: 'ต้นทุน / รายจ่ายสาขา', path: '/branch/expenses' },
    { icon: Activity, label: 'Productivity สาขา', path: '/branch/productivity' },
    { icon: BarChart3, label: 'คิวเฉลี่ยต่อวัน', path: '/branch/queue-avg' },
    { icon: Target, label: 'เป้าหมายสาขา', path: '/branch/targets' },
    { icon: AlertTriangle, label: 'คำแนะนำ: ปิด / เปิดสาขาใหม่', path: '/branch/recommendations' }
  ],
  feedback: [
    { icon: MessageSquare, label: 'ความเห็นลูกค้า', path: '/feedback' },
    { icon: PieChart, label: 'Distribution Feedback', path: '/feedback/distribution' },
    { icon: MessageCircle, label: 'คำค้นยอดนิยม', path: '/feedback/keywords' },
    { icon: Star, label: 'หมอที่ได้คำชม / คำด่า', path: '/feedback/doctor-ratings' },
    { icon: Building, label: 'สาขาที่ได้ Feedback ดีที่สุด', path: '/feedback/best-branches' },
    { icon: AlertTriangle, label: 'Alert Feedback เชิงลบรุนแรง', path: '/feedback/negative-alerts' }
  ],
  chat: [
    { icon: MessageSquare, label: 'ประสิทธิภาพการสื่อสาร', path: '/alerts' },
    { icon: LineChart, label: 'ปริมาณแชท (LINE / FB)', path: '/alerts/volume' },
    { icon: Timer, label: 'Response Time', path: '/alerts/response-time' },
    { icon: MessageCircle, label: 'คำถามนอกสคริปต์', path: '/alerts/off-script' },
    { icon: Zap, label: 'Bot Fail Rate', path: '/alerts/bot-fail' },
    { icon: AlertTriangle, label: 'คนที่ตอบช้าสุด', path: '/alerts/slow-responders' }
  ],
  finance: [
    { icon: DollarSign, label: 'ภาพรวมการเงิน', path: '/finance' },
    { icon: BarChart3, label: 'รายรับ / รายจ่าย', path: '/finance/income-expense' },
    { icon: LineChart, label: 'รายได้ต่อวัน / สัปดาห์', path: '/finance/daily-weekly' },
    { icon: Calculator, label: 'กำไรสุทธิ', path: '/finance/net-profit' },
    { icon: Activity, label: 'Burn Rate & Runway', path: '/finance/burn-runway' },
    { icon: Briefcase, label: 'Owner Withdrawal Report', path: '/finance/owner-withdrawal' },
    { icon: Receipt, label: 'รายงานภาษี (VAT, WHT)', path: '/finance/tax-reports' },
    { icon: CreditCard, label: 'หนี้สิน / สินทรัพย์ / เงินกู้', path: '/finance/debt-assets' }
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

// Add staff menu system
const staffMenus = {
  patients: [
    { icon: Users, label: 'รายชื่อผู้ป่วย', path: '/staff/patients' },
    { icon: UserCheck, label: 'ข้อมูลผู้ป่วย', path: '/staff/patients/profile' },
    { icon: Users, label: 'เพิ่มผู้ป่วยใหม่', path: '/staff/patients/create' },
    { icon: FileText, label: 'ประวัติการรักษา', path: '/staff/patients/history' },
    { icon: AlertTriangle, label: 'ผู้ป่วยฉุกเฉิน', path: '/staff/patients/emergency' }
  ],
  appointments: [
    { icon: Calendar, label: 'รายการนัด', path: '/staff/appointments' },
    { icon: Clock, label: 'ปฏิทินนัดหมาย', path: '/staff/appointments/calendar' },
    { icon: Users, label: 'จองนัดใหม่', path: '/staff/appointments/create' },
    { icon: AlertCircle, label: 'นัดวันนี้', path: '/staff/appointments/today' },
    { icon: UserX, label: 'No-Show Management', path: '/staff/appointments/no-show' }
  ],
  treatments: [
    { icon: Activity, label: 'บันทึกการรักษา', path: '/staff/treatments' },
    { icon: FileText, label: 'สร้างบันทึกใหม่', path: '/staff/treatments/create' },
    { icon: Timer, label: 'ประวัติการรักษา', path: '/staff/treatments/history' },
    { icon: Package, label: 'คอร์สรักษา', path: '/staff/treatments/courses' },
    { icon: Star, label: 'Follow-up Treatment', path: '/staff/treatments/followup' }
  ],
  invoicing: [
    { icon: Receipt, label: 'ออกใบเสร็จ', path: '/staff/invoicing' },
    { icon: CreditCard, label: 'รับชำระเงิน', path: '/staff/invoicing/payment' },
    { icon: Calculator, label: 'สร้างใบเสร็จใหม่', path: '/staff/invoicing/create' },
    { icon: DollarSign, label: 'ติดตามการชำระ', path: '/staff/invoicing/follow-up' },
    { icon: PieChart, label: 'รายงานการขาย', path: '/staff/invoicing/reports' }
  ],
  followup: [
    { icon: MessageCircle, label: 'ติดตามลูกค้า', path: '/staff/followup' },
    { icon: Plus, label: 'สร้างการติดตาม', path: '/staff/followup/create' },
    { icon: Briefcase, label: 'งานที่ได้รับมอบหมาย', path: '/staff/followup/tasks' },
    { icon: Phone, label: 'โทรติดตาม', path: '/staff/followup/calls' },
    { icon: Calendar, label: 'นัดติดตาม', path: '/staff/followup/schedule' },
    { icon: Target, label: 'เป้าหมายการขาย', path: '/staff/followup/targets' }
  ],
  chat: [
    { icon: MessageSquare, label: 'แชทสนับสนุน', path: '/staff/chat' },
    { icon: MessageCircle, label: 'LINE / Facebook', path: '/staff/chat/platforms' },
    { icon: Timer, label: 'ประวัติการแชท', path: '/staff/chat/history' },
    { icon: AlertTriangle, label: 'แชทด่วน', path: '/staff/chat/urgent' },
    { icon: Settings, label: 'ตั้งค่าแชท', path: '/staff/chat/settings' }
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

  // Determine current system based on route
  const getCurrentSystem = () => {
    // Check if we're in staff mode
    if (location.pathname.startsWith('/staff/patients')) return 'patients';
    if (location.pathname.startsWith('/staff/appointments')) return 'appointments';
    if (location.pathname.startsWith('/staff/treatments')) return 'treatments';
    if (location.pathname.startsWith('/staff/invoicing')) return 'invoicing';
    if (location.pathname.startsWith('/staff/followup')) return 'followup';
    if (location.pathname.startsWith('/staff/chat')) return 'chat';
    
    // Executive dashboard routes
    if (location.pathname.startsWith('/dashboard')) return 'dashboard';
    if (location.pathname.startsWith('/appointments')) return 'appointment';
    if (location.pathname.startsWith('/hr-dashboard')) return 'hr';
    if (location.pathname.startsWith('/branch')) return 'branch';
    if (location.pathname.startsWith('/feedback')) return 'feedback';
    if (location.pathname.startsWith('/alerts')) return 'chat';
    if (location.pathname.startsWith('/finance')) return 'finance';
    return 'dashboard';
  };

  const currentSystem = getCurrentSystem();
  const isStaffMode = location.pathname.startsWith('/staff/');
  
  // Get appropriate menu items and title
  const currentMenuItems = isStaffMode ? staffMenus[currentSystem] : systemMenus[currentSystem];
  const systemTitle = isStaffMode ? staffTitles[currentSystem] : systemTitles[currentSystem];

  const getNavClassName = (path: string) => {
    const isActive = location.pathname === path;
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
              {currentMenuItems?.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <SidebarMenuItem key={item.path}>
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
