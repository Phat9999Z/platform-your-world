
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, DollarSign, TrendingUp, AlertTriangle, Activity, Clock, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// Mock data
const revenueData = [
  { month: 'ม.ค.', revenue: 2400000 },
  { month: 'ก.พ.', revenue: 2200000 },
  { month: 'มี.ค.', revenue: 2800000 },
  { month: 'เม.ย.', revenue: 3200000 },
  { month: 'พ.ค.', revenue: 2900000 },
  { month: 'มิ.ย.', revenue: 3400000 },
  { month: 'ก.ค.', revenue: 3600000 },
  { month: 'ส.ค.', revenue: 3300000 },
  { month: 'ก.ย.', revenue: 3800000 },
  { month: 'ต.ค.', revenue: 4100000 },
  { month: 'พ.ย.', revenue: 3900000 },
  { month: 'ธ.ค.', revenue: 4300000 }
];

const burnRateActualData = [
  { month: 'ต.ค.', amount: 1800000 },
  { month: 'พ.ย.', amount: 1950000 },
  { month: 'ธ.ค.', amount: 2100000 }
];

const burnRateProjectedData = [
  { month: 'ธ.ค.', amount: 2100000 },
  { month: 'ม.ค.', amount: 2200000 },
  { month: 'ก.พ.', amount: 2300000 },
  { month: 'มี.ค.', amount: 2400000 }
];

const kpiData = [
  { name: 'Utilization', value: 85, color: '#10b981' },
  { name: 'Revenue/Staff', value: 45000, color: '#3b82f6' },
  { name: 'No-show Rate', value: 8, color: '#ef4444' },
  { name: 'Payroll Load', value: 35, color: '#f59e0b' }
];

const DashboardOverview = () => {
  const totalRevenue = 40200000;
  const netProfit = 8500000;
  const burnRate = 2100000;
  const cashOnHand = 125000000;
  const runway = Math.floor(cashOnHand / burnRate);
  const growthRate = 18.5;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">ภาพรวมธุรกิจ (Executive Overview)</h1>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            สถานะ: ดี
          </span>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <DollarSign className="h-5 w-5" />
              รายได้รวม (ปี)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-900">
              ฿{totalRevenue.toLocaleString()}
            </div>
            <p className="text-sm text-emerald-600 mt-1">
              เติบโต +{growthRate}% จากปีที่แล้ว
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <TrendingUp className="h-5 w-5" />
              กำไรสุทธิ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              ฿{netProfit.toLocaleString()}
            </div>
            <p className="text-sm text-blue-600 mt-1">
              Margin: {((netProfit / totalRevenue) * 100).toFixed(1)}%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <Activity className="h-5 w-5" />
              Burn Rate (เดือน)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">
              ฿{burnRate.toLocaleString()}
            </div>
            <p className="text-sm text-orange-600 mt-1">
              เพิ่มขึ้น 7.7% จากเดือนที่แล้ว
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <Clock className="h-5 w-5" />
              Runway
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">
              {runway} วัน
            </div>
            <p className="text-sm text-purple-600 mt-1">
              เงินสดคงเหลือ / Burn Rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-emerald-600" />
              รายได้รายเดือนย้อนหลัง 12 เดือน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'รายได้']}
                />
                <Bar dataKey="revenue" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Burn Rate Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-600" />
              Burn Rate + Projection 3 เดือน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'ค่าใช้จ่าย']}
                />
                <Line 
                  data={burnRateActualData}
                  dataKey="amount" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  data={burnRateProjectedData}
                  dataKey="amount" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* KPI and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KPI องค์กร */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              KPI องค์กร
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {kpiData.map((kpi, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">{kpi.name}</div>
                  <div className="text-xl font-bold" style={{ color: kpi.color }}>
                    {kpi.name === 'Revenue/Staff' ? `฿${kpi.value.toLocaleString()}` : `${kpi.value}%`}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alert System */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Alert ฉุกเฉิน!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-red-800">Burn Rate สูง</span>
                </div>
                <p className="text-sm text-red-600 mt-1">
                  Burn Rate เพิ่มขึ้น 7.7% - ใกล้เกิน 90% ของเป้าหมาย
                </p>
              </div>
              
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Runway เหลือน้อย</span>
                </div>
                <p className="text-sm text-yellow-600 mt-1">
                  เงินสดคงเหลือพอใช้ได้ {runway} วัน - ต่ำกว่า 60 วัน
                </p>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Owner Withdrawal</span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  การเบิกเงินอยู่ในเกณฑ์ปกติ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
