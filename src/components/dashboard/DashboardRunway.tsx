
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  DollarSign,
  Calendar,
  Target,
  Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardRunway = () => {
  const [selectedScenario, setSelectedScenario] = useState('current');

  // Mock runway data
  const runwayData = {
    current: {
      cash_on_hand: 12500000,
      monthly_burn_rate: 2100000,
      runway_months: 5.95,
      runway_days: 178,
      status: 'warning'
    },
    optimistic: {
      cash_on_hand: 12500000,
      monthly_burn_rate: 1850000,
      runway_months: 6.76,
      runway_days: 203,
      status: 'good'
    },
    pessimistic: {
      cash_on_hand: 12500000,
      monthly_burn_rate: 2450000,
      runway_months: 5.10,
      runway_days: 153,
      status: 'critical'
    }
  };

  const burnRateHistory = [
    { month: 'ม.ค.', actual: 1950000, projected: 2000000 },
    { month: 'ก.พ.', actual: 2050000, projected: 2000000 },
    { month: 'มี.ค.', actual: 2150000, projected: 2100000 },
    { month: 'เม.ย.', actual: 2080000, projected: 2100000 },
    { month: 'พ.ค.', actual: 2200000, projected: 2100000 },
    { month: 'มิ.ย.', actual: 2100000, projected: 2100000 }
  ];

  const projectionData = [
    { month: 'มิ.ย.', cash: 12500000, burn: 2100000 },
    { month: 'ก.ค.', cash: 10400000, burn: 2100000 },
    { month: 'ส.ค.', cash: 8300000, burn: 2100000 },
    { month: 'ก.ย.', cash: 6200000, burn: 2100000 },
    { month: 'ต.ค.', cash: 4100000, burn: 2100000 },
    { month: 'พ.ย.', cash: 2000000, burn: 2100000 },
    { month: 'ธ.ค.', cash: -100000, burn: 2100000 }
  ];

  const expenseBreakdown = [
    { category: 'เงินเดือน', amount: 1200000, percentage: 57.1 },
    { category: 'ค่าเช่า', amount: 350000, percentage: 16.7 },
    { category: 'การตลาด', amount: 280000, percentage: 13.3 },
    { category: 'สาธารณูปโภค', amount: 150000, percentage: 7.1 },
    { category: 'อื่นๆ', amount: 120000, percentage: 5.7 }
  ];

  const currentData = runwayData[selectedScenario];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'ปลอดภัย';
      case 'warning': return 'ต้องระวัง';
      case 'critical': return 'วิกฤต';
      default: return 'ไม่ทราบ';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Runway Analysis</h1>
          <p className="text-gray-600">วิเคราะห์ระยะเวลาที่เงินสดคงเหลือจะหมด</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedScenario}
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="current">สถานการณ์ปัจจุบัน</option>
            <option value="optimistic">สถานการณ์ดี</option>
            <option value="pessimistic">สถานการณ์เลวร้าย</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-blue-600">เงินสดคงเหลือ</p>
                <p className="text-2xl font-bold text-blue-900">
                  {formatCurrency(currentData.cash_on_hand)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600">Burn Rate (เดือน)</p>
                <p className="text-2xl font-bold text-red-900">
                  {formatCurrency(currentData.monthly_burn_rate)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-orange-600">Runway (เดือน)</p>
                <p className="text-2xl font-bold text-orange-900">
                  {currentData.runway_months.toFixed(1)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-purple-600">Runway (วัน)</p>
                <p className="text-2xl font-bold text-purple-900">
                  {currentData.runway_days}
                </p>
                <Badge className={getStatusColor(currentData.status)}>
                  {getStatusText(currentData.status)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Runway Alert */}
      {currentData.status === 'critical' && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">แจ้งเตือนวิกฤต!</h3>
                <p className="text-red-700">
                  เงินสดคงเหลือจะหมดภายใน {currentData.runway_days} วัน จำเป็นต้องหาแหล่งเงินทุนเพิ่มหรือลดค่าใช้จ่ายโดยด่วน
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash Flow Projection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-600" />
              การคาดการณ์เงินสด 6 เดือนข้างหน้า
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    formatCurrency(Number(value)), 
                    name === 'cash' ? 'เงินสดคงเหลือ' : 'Burn Rate'
                  ]}
                />
                <Line 
                  dataKey="cash" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="cash"
                />
                <Line 
                  dataKey="burn" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="burn"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Burn Rate History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-600" />
              Burn Rate ย้อนหลัง 6 เดือน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={burnRateHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Bar dataKey="projected" fill="#e5e7eb" name="คาดการณ์" />
                <Bar dataKey="actual" fill="#f59e0b" name="จริง" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Expense Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            แยกค่าใช้จ่ายที่ส่งผลต่อ Burn Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenseBreakdown.map((expense, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium">{expense.category}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold">{formatCurrency(expense.amount)}</div>
                  <div className="text-sm text-gray-600">{expense.percentage.toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            แนวทางปรับปรุง Runway
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">เพิ่มรายได้</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• เพิ่มการตลาดเพื่อดึงลูกค้าใหม่</li>
                <li>• ขายบริการเสริมให้ลูกค้าเดิม</li>
                <li>• ปรับราคาบริการให้เหมาะสม</li>
              </ul>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">ลดค่าใช้จ่าย</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• ทบทวนค่าเช่าและสัญญาต่างๆ</li>
                <li>• ลดค่าใช้จ่ายการตลาดที่ไม่จำเป็น</li>
                <li>• ปรับปรุงประสิทธิภาพพนักงาน</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardRunway;
