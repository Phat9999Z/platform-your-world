
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingDown, TrendingUp, Activity, DollarSign, Clock, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

const burnRateData = [
  { month: 'ม.ค.', expenses: 1800000, revenue: 2400000, burnRate: 1800000, cashFlow: 600000 },
  { month: 'ก.พ.', expenses: 1850000, revenue: 2200000, burnRate: 1850000, cashFlow: 350000 },
  { month: 'มี.ค.', expenses: 1920000, revenue: 2800000, burnRate: 1920000, cashFlow: 880000 },
  { month: 'เม.ย.', expenses: 2050000, revenue: 3200000, burnRate: 2050000, cashFlow: 1150000 },
  { month: 'พ.ค.', expenses: 2100000, revenue: 2900000, burnRate: 2100000, cashFlow: 800000 },
  { month: 'มิ.ย.', expenses: 2180000, revenue: 3400000, burnRate: 2180000, cashFlow: 1220000 },
  { month: 'ก.ค.', expenses: 2250000, revenue: 3600000, burnRate: 2250000, cashFlow: 1350000 },
  { month: 'ส.ค.', expenses: 2300000, revenue: 3300000, burnRate: 2300000, cashFlow: 1000000 },
  { month: 'ก.ย.', expenses: 2400000, revenue: 3800000, burnRate: 2400000, cashFlow: 1400000 },
  { month: 'ต.ค.', expenses: 2500000, revenue: 4100000, burnRate: 2500000, cashFlow: 1600000 },
  { month: 'พ.ย.', expenses: 2450000, revenue: 3900000, burnRate: 2450000, cashFlow: 1450000 },
  { month: 'ธ.ค.', expenses: 2600000, revenue: 4300000, burnRate: 2600000, cashFlow: 1700000 }
];

const expenseCategories = [
  { category: 'เงินเดือนพนักงาน', amount: 910000, percentage: 35, trend: 'up' },
  { category: 'ค่าเช่าและสาธารณูปโภค', amount: 520000, percentage: 20, trend: 'stable' },
  { category: 'วัสดุการแพทย์', amount: 390000, percentage: 15, trend: 'up' },
  { category: 'การตลาดและโฆษณา', amount: 260000, percentage: 10, trend: 'down' },
  { category: 'ค่าใช้จ่ายดำเนินงาน', amount: 260000, percentage: 10, trend: 'stable' },
  { category: 'อื่นๆ', amount: 260000, percentage: 10, trend: 'up' }
];

const projectionData = [
  { month: 'ธ.ค.', actual: 2600000, projected: null, type: 'actual' },
  { month: 'ม.ค.', actual: null, projected: 2700000, type: 'projection' },
  { month: 'ก.พ.', actual: null, projected: 2750000, type: 'projection' },
  { month: 'มี.ค.', actual: null, projected: 2800000, type: 'projection' },
  { month: 'เม.ย.', actual: null, projected: 2850000, type: 'projection' },
  { month: 'พ.ค.', actual: null, projected: 2900000, type: 'projection' },
  { month: 'มิ.ย.', actual: null, projected: 2950000, type: 'projection' }
];

const DashboardBurnRate = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const currentBurnRate = burnRateData[burnRateData.length - 1].burnRate;
  const previousBurnRate = burnRateData[burnRateData.length - 2].burnRate;
  const burnRateChange = ((currentBurnRate - previousBurnRate) / previousBurnRate * 100);
  const avgBurnRate = burnRateData.reduce((sum, item) => sum + item.burnRate, 0) / burnRateData.length;
  const totalCashFlow = burnRateData.reduce((sum, item) => sum + item.cashFlow, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Burn Rate วิเคราะห์</h1>
          <p className="text-gray-600 mt-1">ติดตามและวิเคราะห์อัตราการใช้เงินทุน</p>
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
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออกรายงาน
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className={`bg-gradient-to-r ${burnRateChange > 0 ? 'from-red-500 to-red-600' : 'from-green-500 to-green-600'} text-white`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`${burnRateChange > 0 ? 'text-red-100' : 'text-green-100'}`}>Burn Rate ปัจจุบัน</p>
                <p className="text-2xl font-bold">฿{(currentBurnRate / 1000000).toFixed(1)}M</p>
              </div>
              <Activity className={`h-8 w-8 ${burnRateChange > 0 ? 'text-red-200' : 'text-green-200'}`} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">การเปลี่ยนแปลง</p>
                <p className="text-2xl font-bold">
                  {burnRateChange > 0 ? '+' : ''}{burnRateChange.toFixed(1)}%
                </p>
              </div>
              {burnRateChange > 0 ? 
                <TrendingUp className="h-8 w-8 text-orange-200" /> : 
                <TrendingDown className="h-8 w-8 text-orange-200" />
              }
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">เฉลี่ย 12 เดือน</p>
                <p className="text-2xl font-bold">฿{(avgBurnRate / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Cash Flow รวม</p>
                <p className="text-2xl font-bold">฿{(totalCashFlow / 1000000).toFixed(1)}M</p>
              </div>
              <Clock className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert Section */}
      {burnRateChange > 5 && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">แจ้งเตือน: Burn Rate เพิ่มขึ้นสูง</h3>
                <p className="text-sm text-red-600">
                  Burn Rate เพิ่มขึ้น {burnRateChange.toFixed(1)}% จากเดือนที่แล้ว ควรตรวจสอบค่าใช้จ่ายที่เพิ่มขึ้น
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* View Tabs */}
      <div className="flex space-x-4 border-b">
        <button 
          onClick={() => setSelectedView('overview')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ภาพรวม
        </button>
        <button 
          onClick={() => setSelectedView('breakdown')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'breakdown' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          แยกตามหมวด
        </button>
        <button 
          onClick={() => setSelectedView('projection')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'projection' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          การคาดการณ์
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Burn Rate vs Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={burnRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, '']} />
                  <Line type="monotone" dataKey="burnRate" stroke="#ef4444" strokeWidth={3} name="Burn Rate" />
                  <Line type="monotone" dataKey="cashFlow" stroke="#22c55e" strokeWidth={3} name="Cash Flow" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>แนวโน้ม Burn Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={burnRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'Burn Rate']} />
                  <Area 
                    type="monotone" 
                    dataKey="burnRate" 
                    stroke="#f59e0b" 
                    fill="#fed7aa" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'breakdown' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>แยกค่าใช้จ่ายตามหมวด</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={expenseCategories}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'จำนวน']} />
                  <Bar dataKey="amount" fill="#3b82f6" name="ค่าใช้จ่าย" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>รายละเอียดค่าใช้จ่าย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenseCategories.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{expense.category}</h3>
                      <p className="text-sm text-gray-600">{expense.percentage}% ของค่าใช้จ่ายรวม</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        ฿{expense.amount.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        {expense.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
                        {expense.trend === 'down' && <TrendingDown className="h-4 w-4 text-green-500" />}
                        {expense.trend === 'stable' && <span className="h-4 w-4 text-gray-500">—</span>}
                        <span className={`text-sm ${
                          expense.trend === 'up' ? 'text-red-500' : 
                          expense.trend === 'down' ? 'text-green-500' : 'text-gray-500'
                        }`}>
                          {expense.trend === 'up' ? 'เพิ่มขึ้น' : 
                           expense.trend === 'down' ? 'ลดลง' : 'คงที่'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'projection' && (
        <Card>
          <CardHeader>
            <CardTitle>การคาดการณ์ Burn Rate 6 เดือนข้างหน้า</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={[...burnRateData.slice(-3), ...projectionData.slice(1)]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="burnRate" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  name="Burn Rate (จริง)"
                  connectNulls={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#f59e0b" 
                  strokeWidth={3} 
                  strokeDasharray="5 5"
                  name="Burn Rate (คาดการณ์)"
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Analysis and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การวิเคราะห์</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800">แนวโน้ม</h4>
                <p className="text-sm text-blue-600">
                  Burn Rate เพิ่มขึ้นต่อเนื่อง เฉลี่ย 5% ต่อเดือน
                </p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800">ปัจจัยหลัก</h4>
                <p className="text-sm text-yellow-600">
                  ค่าเงินเดือนพนักงานและวัสดุการแพทย์เพิ่มขึ้นมากที่สุด
                </p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800">จุดแข็ง</h4>
                <p className="text-sm text-green-600">
                  Cash Flow ยังเป็นบวกและเติบโตต่อเนื่อง
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ข้อเสนอแนะ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-semibold text-purple-800">ควบคุมต้นทุน</h4>
                <p className="text-sm text-purple-600">
                  ปรับปรุงประสิทธิภาพการใช้วัสดุการแพทย์
                </p>
              </div>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold text-indigo-800">เพิ่มรายได้</h4>
                <p className="text-sm text-indigo-600">
                  เพิ่มบริการที่มี margin สูงเพื่อปรับสมดุล
                </p>
              </div>
              <div className="p-3 bg-pink-50 border border-pink-200 rounded-lg">
                <h4 className="font-semibold text-pink-800">การตรวจสอบ</h4>
                <p className="text-sm text-pink-600">
                  ตั้งเป้า Burn Rate ไม่เกิน 2.8M ในไตรมาสหน้า
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardBurnRate;
