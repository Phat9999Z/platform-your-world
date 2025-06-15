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
  Plus,
  CheckSquare,
  Warehouse,
  Tag,
  ClipboardList,
  UserPlus,
  ClockIcon,
  AlertTriangleIcon,
  TrendingUpIcon,
  Bell,
  CalendarCheck,
  UserMinus,
  Banknote,
  HandCoins,
  Coins,
  CreditCardIcon,
  FileBarChart,
  FileX,
  History,
  Truck,
  ShoppingCart,
  Box,
  RefreshCw,
  UserCircle,
  MapPin,
  Gift,
  Repeat,
  AlertOctagon,
  Zap as ZapIcon,
  TrendingDown
} from 'lucide-react';

export interface MenuItem {
  icon: any;
  label: string;
  path: string;
}

// Executive dashboard menu systems
export const systemMenus = {
  dashboard: [
    { icon: BarChart3, label: 'ภาพรวมธุรกิจ', path: '/dashboard' },
    { icon: DollarSign, label: 'รายได้รวม', path: '/dashboard/revenue' },
    { icon: TrendingUp, label: 'ยอดขายตามช่วงเวลา', path: '/dashboard/sales-timeline' },
    { icon: Calculator, label: 'กำไรสุทธิ (Net Profit)', path: '/dashboard/net-profit' },
    { icon: Activity, label: 'Burn Rate', path: '/dashboard/burn-rate' },
    { icon: Clock, label: 'Runway', path: '/dashboard/runway' },
    { icon: LineChart, label: 'อัตราการเติบโต', path: '/dashboard/growth-rate' },
    { icon: Target, label: 'KPI องค์กร', path: '/dashboard/kpi' }
  ],
  tasks: [
    { icon: BarChart3, label: 'ภาพรวมงาน', path: '/tasks' },
    { icon: Calendar, label: 'งานประจำวัน', path: '/tasks/daily' },
    { icon: ClipboardList, label: 'งานที่ได้รับมอบหมาย', path: '/tasks/assigned' },
    { icon: CalendarCheck, label: 'งานล่วงหน้า 7 วัน', path: '/tasks/upcoming' },
    { icon: AlertTriangle, label: 'Task ลืมทำ', path: '/tasks/overdue' },
    { icon: Target, label: 'งาน KPI รายคน', path: '/tasks/personal-kpi' },
    { icon: Bell, label: 'แจ้งเตือนเวรหลุด', path: '/tasks/shift-alerts' },
    { icon: CheckSquare, label: 'รายการงานทั้งหมด', path: '/tasks/list' },
    { icon: TrendingUp, label: 'วิเคราะห์ประสิทธิภาพ', path: '/tasks/analytics' },
    { icon: Plus, label: 'สร้างงานใหม่', path: '/tasks/create' }
  ],
  expenses: [
    { icon: BarChart3, label: 'ภาพรวมรายจ่าย', path: '/expenses' },
    { icon: Calendar, label: 'ค่าใช้จ่ายรายเดือน', path: '/expenses/monthly' },
    { icon: Repeat, label: 'รายจ่าย recurring', path: '/expenses/recurring' },
    { icon: Truck, label: 'จ่าย vendor ไหน', path: '/expenses/vendors' },
    { icon: FileX, label: 'เคลมที่ยังไม่ได้คืนเงิน', path: '/expenses/pending-claims' },
    { icon: Banknote, label: 'จ่ายเงินเดือน', path: '/expenses/payroll' },
    { icon: AlertOctagon, label: 'รายจ่ายผิดปกติ', path: '/expenses/anomalies' },
    { icon: BarChart3, label: 'รายจ่ายเปรียบเทียบ', path: '/expenses/comparison' },
    { icon: Receipt, label: 'รายการค่าใช้จ่าย', path: '/expenses/list' },
    { icon: Plus, label: 'บันทึกรายจ่าย', path: '/expenses/create' }
  ],
  inventory: [
    { icon: BarChart3, label: 'ภาพรวมสต็อก', path: '/inventory' },
    { icon: Eye, label: 'คงคลังแว่น / เลนส์', path: '/inventory/glasses-lenses' },
    { icon: AlertTriangle, label: 'สินค้าใกล้หมด', path: '/inventory/low-stock' },
    { icon: Clock, label: 'Pre-order ที่รอประกอบ', path: '/inventory/pre-orders' },
    { icon: Shield, label: 'เคลมกรอบ / เคลมเลนส์', path: '/inventory/claims' },
    { icon: ClipboardList, label: 'Log การเบิก', path: '/inventory/withdrawal-log' },
    { icon: Truck, label: 'Vendor ติดตาม', path: '/inventory/vendor-tracking' },
    { icon: Package, label: 'รายการสินค้า', path: '/inventory/products' },
    { icon: TrendingUp, label: 'การเคลื่อนไหวสต็อก', path: '/inventory/movements' }
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
    { icon: Users, label: 'การใช้งานต่อหมอ', path: '/appointments/doctor-usage' },
    { icon: UserX, label: 'อัตราไม่มาตามนัด', path: '/appointments/no-show' },
    { icon: DollarSign, label: 'รายได้ต่อช่วงเวลา', path: '/appointments/revenue' },
    { icon: Star, label: 'หมอสร้างรายได้สูงสุด', path: '/appointments/top-doctors' },
    { icon: Activity, label: 'วิเคราะห์คิว', path: '/appointments/queue-analysis' }
  ],
  hr: [
    { icon: Users, label: 'พนักงาน & องค์กร', path: '/hr-dashboard' },
    { icon: UserCheck, label: 'รายชื่อพนักงานทั้งหมด', path: '/hr-dashboard/all-staff' },
    { icon: Calendar, label: 'เวรพนักงาน', path: '/hr-dashboard/staff-shifts' },
    { icon: UserMinus, label: 'ลา / ขาด / OT', path: '/hr-dashboard/leave-attendance' },
    { icon: Target, label: 'Performance ต่อคน', path: '/hr-dashboard/individual-performance' },
    { icon: History, label: 'ประวัติพนักงาน', path: '/hr-dashboard/staff-history' },
    { icon: DollarSign, label: 'Payroll Load', path: '/hr-dashboard/payroll' },
    { icon: CheckSquare, label: 'อนุมัติเงินเดือน', path: '/hr-dashboard/salary-approval' },
    { icon: TrendingUp, label: 'Turnover Rate', path: '/hr-dashboard/turnover' },
    { icon: Calculator, label: 'Revenue per Staff', path: '/hr-dashboard/revenue-per-staff' },
    { icon: Star, label: 'Performance สูงสุด', path: '/hr-dashboard/top-performance' }
  ],
  branch: [
    { icon: Building, label: 'สาขาในระบบ', path: '/branch' },
    { icon: DollarSign, label: 'รายได้ต่อสาขา', path: '/branch/revenue' },
    { icon: Calculator, label: 'กำไรสุทธิสาขา', path: '/branch/profit' },
    { icon: Receipt, label: 'ต้นทุน / รายจ่ายสาขา', path: '/branch/expenses' },
    { icon: Activity, label: 'Productivity สาขา', path: '/branch/productivity' },
    { icon: BarChart3, label: 'คิวเฉลี่ยต่อวัน', path: '/branch/queue-average' }
  ],
  feedback: [
    { icon: MessageSquare, label: 'ความเห็นลูกค้า', path: '/feedback' },
    { icon: PieChart, label: 'การกระจาย Feedback', path: '/feedback/distribution' },
    { icon: MessageCircle, label: 'คำค้นยอดนิยม', path: '/feedback/popular-search' },
    { icon: Star, label: 'คะแนนหมอ', path: '/feedback/doctor-ratings' },
    { icon: Building, label: 'สาขาที่ดีที่สุด', path: '/feedback/best-branch' }
  ],
  chat: [
    { icon: MessageSquare, label: 'ประสิทธิภาพการสื่อสาร', path: '/alerts' },
    { icon: LineChart, label: 'ปริมาณแชท (LINE / FB)', path: '/alerts/chat-volume' },
    { icon: Timer, label: 'Response Time', path: '/alerts/response-time' },
    { icon: MessageCircle, label: 'คำถามนอกสคริปต์', path: '/alerts/off-script' },
    { icon: Zap, label: 'Bot Fail Rate', path: '/alerts/bot-fail' }
  ],
  finance: [
    { icon: DollarSign, label: 'ภาพรวมการเงิน', path: '/finance' },
    { icon: BarChart3, label: 'รายได้รวม', path: '/finance/total-revenue' },
    { icon: UserCircle, label: 'รายได้ต่อหมอ', path: '/finance/doctor-revenue' },
    { icon: Activity, label: 'รายได้ต่อบริการ', path: '/finance/service-revenue' },
    { icon: Package, label: 'รายได้จากคอร์ส', path: '/finance/course-revenue' },
    { icon: MapPin, label: 'รายได้ต่อช่อง', path: '/finance/channel-revenue' },
    { icon: Building, label: 'รายได้แยกสาขา', path: '/finance/branch-revenue' },
    { icon: Gift, label: 'โปรที่ลูกค้าใช้เยอะสุด', path: '/finance/popular-promotions' },
    { icon: HandCoins, label: 'Owner Withdrawal', path: '/finance/owner-withdrawal' },
    { icon: Eye, label: 'เคลมเลนส์', path: '/finance/lens-claims' },
    { icon: Banknote, label: 'จ่ายเงินเดือน', path: '/finance/salary-payment' },
    { icon: FileX, label: 'หนี้ค้างชำระ', path: '/finance/outstanding-debt' }
  ]
};

export const systemTitles = {
  dashboard: 'Dashboard (Executive Overview)',
  tasks: 'Task Management (จัดการงานองค์กร)',
  expenses: 'Expenses (จัดการรายจ่าย)',
  inventory: 'Inventory (จัดการสต็อก)',
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
    { icon: UserCheck, label: 'ข้อมูลผู้ป่วย', path: '/staff/patients/info' },
    { icon: Plus, label: 'เพิ่มผู้ป่วยใหม่', path: '/staff/patients/create' },
    { icon: FileText, label: 'ประวัติการรักษา', path: '/staff/patients/history' }
  ],
  appointments: [
    { icon: Calendar, label: 'รายการนัด', path: '/staff/appointments' },
    { icon: Clock, label: 'ปฏิทินนัดหมาย', path: '/staff/appointments/calendar' },
    { icon: Plus, label: 'จองนัดใหม่', path: '/staff/appointments/create' },
    { icon: AlertCircle, label: 'นัดวันนี้', path: '/staff/appointments/today' }
  ],
  treatments: [
    { icon: Activity, label: 'บันทึกการรักษา', path: '/staff/treatments' },
    { icon: Plus, label: 'สร้างบันทึกใหม่', path: '/staff/treatments/create' },
    { icon: Timer, label: 'ประวัติการรักษา', path: '/staff/treatments/history' },
    { icon: Package, label: 'คอร์สรักษา', path: '/staff/treatments/courses' }
  ],
  invoicing: [
    { icon: Receipt, label: 'ออกใบเสร็จ', path: '/staff/invoicing' },
    { icon: CreditCard, label: 'รับชำระเงิน', path: '/staff/invoicing/payment' },
    { icon: Plus, label: 'สร้างใบเสร็จใหม่', path: '/staff/invoicing/create' },
    { icon: DollarSign, label: 'ติดตามการชำระ', path: '/staff/invoicing/tracking' }
  ],
  followup: [
    { icon: MessageCircle, label: 'ติดตามลูกค้า', path: '/staff/followup' },
    { icon: Plus, label: 'สร้างการติดตาม', path: '/staff/followup/create' },
    { icon: Briefcase, label: 'งานที่ได้รับมอบหมาย', path: '/staff/followup/tasks' },
    { icon: Phone, label: 'โทรติดตาม', path: '/staff/followup/calls' }
  ],
  chat: [
    { icon: MessageSquare, label: 'แชทสนับสนุน', path: '/staff/chat' },
    { icon: MessageCircle, label: 'LINE / Facebook', path: '/staff/chat/social' },
    { icon: Timer, label: 'ประวัติการแชท', path: '/staff/chat/history' },
    { icon: Settings, label: 'ตั้งค่าแชท', path: '/staff/chat/settings' }
  ],
  tasks: [
    { icon: CheckSquare, label: 'รายการงาน', path: '/staff/tasks' },
    { icon: Calendar, label: 'ปฏิทินงาน', path: '/staff/tasks/calendar' },
    { icon: BarChart3, label: 'วิเคราะห์ประสิทธิภาพ', path: '/staff/tasks/analytics' },
    { icon: Plus, label: 'สร้างงานใหม่', path: '/staff/tasks/create' }
  ],
  product: [
    { icon: Warehouse, label: 'คลังสินค้า', path: '/staff/product/inventory' },
    { icon: Receipt, label: 'คำสั่งซื้อ', path: '/staff/product/orders' },
    { icon: Package, label: 'แคตตาล็อก', path: '/staff/product/catalog' }
  ],
  claim: [
    { icon: FileText, label: 'ภาพรวมเคลม', path: '/staff/claim' },
    { icon: Plus, label: 'สร้างเคลมใหม่', path: '/staff/claim/create' },
    { icon: Clock, label: 'ประวัติเคลม', path: '/staff/claim/history' },
    { icon: Eye, label: 'ติดตามสถานะ', path: '/staff/claim/tracking' }
  ]
};

export const staffTitles = {
  patients: 'Patient Management (จัดการข้อมูลผู้ป่วย)',
  appointments: 'Appointment Booking (จองคิวและนัดหมาย)',
  treatments: 'Treatment Records (บันทึกการรักษา)',
  invoicing: 'Invoice & Payment (ใบเสร็จและการชำระ)',
  followup: 'Customer Follow-up (ติดตามลูกค้า)',
  chat: 'Chat Support (แชทสนับสนุนลูกค้า)',
  tasks: 'Task Management (จัดการงาน)',
  product: 'Product Management (จัดการผลิตภัณฑ์)',
  claim: 'Claim Management (ระบบเคลม)'
};
