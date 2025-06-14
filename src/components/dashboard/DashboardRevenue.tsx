
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, TrendingDown, Calendar, Download, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const monthlyRevenueData = [
  { month: 'ม.ค.', revenue: 2400000, target: 2200000, growth: 8.5 },
  { month: 'ก.พ.', revenue: 2200000, target: 2300000, growth: -4.2 },
  { month: 'มี.ค.', revenue: 2800000, target: 2400000, growth: 15.8 },
  { month: 'เม.ย.', revenue: 3200000, target: 2600000, growth: 18.2 },
  { month: 'พ.ค.', revenue: 2900000, target: 2700000, growth: 12.5 },
  { month: 'มิ.ย.', revenue: 3400000, target: 2800000, growth: 19.8 },
  { month: 'ก.ค.', revenue: 3600000, target: 3000000, growth: 22.1 },
  { month: 'ส.ค.', revenue: 3300000, target: 3100000, growth: 15.2 },
  { month: 'ก.ย.', revenue: 3800000, target: 3200000, growth: 28.5 },
  { month: 'ต.ค.', revenue: 4100000, target: 3400000, growth: 35.2 },
  { month: 'พ.ย.', revenue: 3900000, target: 3500000, growth: 25.8 },
  { month: 'ธ.ค.', revenue: 4300000, target: 3600000, growth: 42.1 }
];

const branchRevenueData = [
  { branch: 'สาขาสยาม', q1: 9800000, q2: 10200000, q3: 10800000, q4: 11500000 },
  { branch: 'สาขาทองหล่อ', q1: 8500000, q2: 8800000, q3: 9200000, q4: 9800000 },
  { branch: 'สาขาอารีย์', q1: 6200000, q2: 6800000, q3: 7200000, q4: 7800000 },
  { branch: 'สาขาเซ็นทรัล', q1: 4800000, q2: 5200000, q3: 5600000, q4: 6000000 }
];

const serviceRevenueData = [
  { service: 'Laser Hair Removal', revenue: 8500000, percentage: 25.2 },
  { service: 'Facial Treatment', revenue: 7200000, percentage: 21.4 },
  { service: 'Botox Injection', revenue: 6800000, percentage: 20.1 },
  { service: 'Chemical Peeling', revenue: 5200000, percentage: 15.4 },
  { service: 'Dermal Fillers', revenue: 3800000, percentage: 11.3 },
  { service: 'Acne Treatment', revenue: 2200000, percentage: 6.6 }
];

const DashboardRevenue = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedView, setSelectedView] = useState('overview');

  const totalRevenue = monthlyRevenueData.reduce((sum, item) => sum + item.revenue, 0);
  const avgGrowth = monthlyRevenueData.reduce((sum, item) => sum + item.growth, 0) / monthlyRevenueData.length;
  const totalTarget = monthlyRevenueData.reduce((sum, item) => sum + item.target, 0);
  const achievementRate = (totalRevenue / totalTarget) * 100;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">รายได้องค์กร</h1>
          <p className="text-gray-600 mt-1">วิเคราะห์รายได้ครบทุกมิติ</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="monthly">รายเดือน</option>
            <option value="quarterly">รายไตรมาส</option>
            <option value="yearly">รายปี</option>
          </select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            ตัวกรอง
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออก
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100">รายได้รวม (ปี)</p>
                <p className="text-2xl font-bold">฿{(totalRevenue / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">เติบโตเฉลี่ย</p>
                <p className="text-2xl font-bold">{avgGrowth.toFixed(1)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">บรรลุเป้าหมาย</p>
                <p className="text-2xl font-bold">{achievementRate.toFixed(1)}%</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">เดือนนี้</p>
                <p className="text-2xl font-bold">฿{(monthlyRevenueData[monthlyRevenueData.length - 1].revenue / 1000000).toFixed(1)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Tabs */}
      <div className="flex space-x-4 border-b">
        <button 
          onClick={() => setSelectedView('overview')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ภาพรวม
        </button>
        <button 
          onClick={() => setSelectedView('branch')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'branch' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ตามสาขา
        </button>
        <button 
          onClick={() => setSelectedView('service')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'service' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ตามบริการ
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>รายได้รายเดือน vs เป้าหมาย</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, '']} />
                  <Bar dataKey="revenue" fill="#10b981" name="รายได้" />
                  <Bar dataKey="target" fill="#6b7280" name="เป้าหมาย" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>อัตราการเติบโต (%)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${Number(value)}%`, 'การเติบโต']} />
                  <Line type="monotone" dataKey="growth" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'branch' && (
        <Card>
          <CardHeader>
            <CardTitle>รายได้ตามสาขารายไตรมาส</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={branchRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, '']} />
                <Bar dataKey="q1" fill="#ef4444" name="Q1" />
                <Bar dataKey="q2" fill="#f97316" name="Q2" />
                <Bar dataKey="q3" fill="#eab308" name="Q3" />
                <Bar dataKey="q4" fill="#22c55e" name="Q4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {selectedView === 'service' && (
        <Card>
          <CardHeader>
            <CardTitle>รายได้ตามประเภทบริการ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {serviceRevenueData.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{service.service}</h3>
                    <p className="text-sm text-gray-600">{service.percentage}% ของรายได้รวม</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">
                      ฿{service.revenue.toLocaleString()}
                    </div>
                    <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${service.percentage * 4}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Revenue Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle>สรุปรายได้รายเดือน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">เดือน</th>
                  <th className="px-6 py-3">รายได้</th>
                  <th className="px-6 py-3">เป้าหมาย</th>
                  <th className="px-6 py-3">การเติบโต</th>
                  <th className="px-6 py-3">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {monthlyRevenueData.map((item, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">{item.month}</td>
                    <td className="px-6 py-4">฿{item.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4">฿{item.target.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.growth > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.growth > 0 ? '+' : ''}{item.growth}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.revenue >= item.target ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.revenue >= item.target ? 'บรรลุ' : 'ต่ำกว่าเป้า'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardRevenue;
