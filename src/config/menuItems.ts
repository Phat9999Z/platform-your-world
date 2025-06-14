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

export interface MenuItem {
  icon: any;
  label: string;
  path: string;
}

// Executive dashboard menu systems
export const systemMenus = {
  dashboard: [
    { icon: BarChart3, label: 'ภาพรวมธุรกิจ', path: '/' },
    { icon: DollarSign, label: 'รายได้รวม', path: '/dashboard/revenue' },
    { icon: TrendingUp, label: 'ยอดขายตามช่วงเวลา', path: '/dashboard/sales-timeline' },
    { icon: Calculator, label: 'กำไรสุทธิ (Net Profit)', path: '/dashboard/net-profit' },
    { icon: Activity, label: 'Burn Rate', path: '/dashboard/burn-rate' },
    { icon: Clock, label: 'Runway', path: '/dashboard/runway' },
    { icon: LineChart, label: 'อัตราการเติบโต', path: '/dashboard/growth-rate' },
    { icon: Target, label: 'KPI องค์กร', path: '/dashboard/kpi' }
  ],
  analytics: [
    { icon: BarChart3, label: 'Analytics Overview', path: '/analytics' },
    { icon: Users, label: 'Customer Analytics', path: '/analytics/customers' },
    { icon: DollarSign, label: 'Financial KPIs', path: '/analytics/financial' },
    { icon: TrendingUp, label: 'Staff Performance', path: '/analytics/staff' },
    { icon: Package, label: 'Inventory Optimization', path: '/analytics/inventory' },
    { icon: Target, label: 'Lead Conversion', path: '/analytics/leads' }
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

export const systemTitles = {
  dashboard: 'Dashboard (Executive Overview)',
  analytics: 'Advanced Analytics (AI-Powered Insights)',
  appointment: 'Appointment (Performance Monitoring)',
  hr: 'HR / OD (องค์กรและพนักงาน)',
  branch: 'Branch (Multi-location Performance)',
  feedback: 'Feedback (Customer Insight)',
  chat: 'ChatSystem (แชทจากทุกช่องทาง)',
  finance: 'Finance (เงินรอด หรือ เงินชิบหาย)'
};

// Staff menu systems
export const staffMenus = {
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

export const staffTitles = {
  patients: 'Patient Management (จัดการข้อมูลผู้ป่วย)',
  appointments: 'Appointment Booking (จองคิวและนัดหมาย)',
  treatments: 'Treatment Records (บันทึกการรักษา)',
  invoicing: 'Invoice & Payment (ใบเสร็จและการชำระ)',
  followup: 'Customer Follow-up (ติดตามลูกค้า)',
  chat: 'Chat Support (แชทสนับสนุนลูกค้า)'
};
