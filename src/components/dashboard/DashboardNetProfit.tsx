
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Calculator, PieChart, BarChart3, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, ComposedChart } from 'recharts';

const netProfitData = [
  { month: 'ม.ค.', revenue: 2400000, cogs: 960000, expenses: 720000, netProfit: 720000, margin: 30.0 },
  { month: 'ก.พ.', revenue: 2200000, cogs: 880000, expenses: 660000, netProfit: 660000, margin: 30.0 },
  { month: 'มี.ค.', revenue: 2800000, cogs: 1120000, expenses: 840000, netProfit: 840000, margin: 30.0 },
  { month: 'เม.ย.', revenue: 3200000, cogs: 1280000, expenses: 896000, netProfit: 1024000, margin: 32.0 },
  { month: 'พ.ค.', revenue: 2900000, cogs: 1160000, expenses: 812000, netProfit: 928000, margin: 32.0 },
  { month: 'มิ.ย.', revenue: 3400000, cogs: 1360000, expenses: 952000, netProfit: 1088000, margin: 32.0 },
  { month: 'ก.ค.', revenue: 3600000, cogs: 1440000, expenses: 1008000, netProfit: 1152000, margin: 32.0 },
  { month: 'ส.ค.', revenue: 3300000, cogs: 1320000, expenses: 924000, netProfit: 1056000, margin: 32.0 },
  { month: 'ก.ย.', revenue: 3800000, cogs: 1520000, expenses: 1064000, netProfit: 1216000, margin: 32.0 },
  { month: 'ต.ค.', revenue: 4100000, cogs: 1640000, expenses: 1148000, netProfit: 1312000, margin: 32.0 },
  { month: 'พ.ย.', revenue: 3900000, cogs: 1560000, expenses: 1092000, netProfit: 1248000, margin: 32.0 },
  { month: 'ธ.ค.', revenue: 4300000, cogs: 1720000, expenses: 1204000, netProfit: 1376000, margin: 32.0 }
];

const profitByBranch = [
  { branch: 'สาขาสยาม', revenue: 12500000, expenses: 8750000, netProfit: 3750000, margin: 30.0 },
  { branch: 'สาขาทองหล่อ', revenue: 10800000, expenses: 7560000, netProfit: 3240000, margin: 30.0 },
  { branch: 'สาขาอารีย์', revenue: 8200000, expenses: 5740000, netProfit: 2460000, margin: 30.0 },
  { branch: 'สาขาเซ็นทรัล', revenue: 6500000, expenses: 4550000, netProfit: 1950000, margin: 30.0 }
];

const expenseBreakdown = [
  { category: 'เงินเดือนพนักงาน', amount: 4200000, percentage: 35 },
  { category: 'ค่าเช่า', amount: 2400000, percentage: 20 },
  { category: 'วัสดุการแพทย์', amount: 1800000, percentage: 15 },
  { category: 'การตลาด', amount: 1200000, percentage: 10 },
  { category: 'สาธารณูปโภค', amount: 960000, percentage: 8 },
  { category: 'อื่นๆ', amount: 1440000, percentage: 12 }
];

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

const DashboardNetProfit = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const totalNetProfit = netProfitData.reduce((sum, item) => sum + item.netProfit, 0);
  const avgMargin = netProfitData.reduce((sum, item) => sum + item.margin, 0) / netProfitData.length;
  const totalRevenue = netProfitData.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = netProfitData.reduce((sum, item) => sum + item.expenses, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">กำไรสุทธิ</h1>
          <p className="text-gray-600 mt-1">วิเคราะห์กำไรสุทธิและความสามารถในการทำกำไร</p>
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
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">กำไรสุทธิรวม</p>
                <p className="text-2xl font-bold">฿{(totalNetProfit / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Profit Margin</p>
                <p className="text-2xl font-bold">{avgMargin.toFixed(1)}%</p>
              </div>
              <Calculator className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">เดือนนี้</p>
                <p className="text-2xl font-bold">฿{(netProfitData[netProfitData.length - 1].netProfit / 1000000).toFixed(1)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">ROI</p>
                <p className="text-2xl font-bold">{((totalNetProfit / totalExpenses) * 100).toFixed(1)}%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-200" />
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
          onClick={() => setSelectedView('expenses')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'expenses' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ค่าใช้จ่าย
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>กำไรสุทธิรายเดือน</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={netProfitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, '']} />
                  <Bar dataKey="revenue" fill="#e5e7eb" name="รายได้" />
                  <Bar dataKey="expenses" fill="#ef4444" name="ค่าใช้จ่าย" />
                  <Bar dataKey="netProfit" fill="#22c55e" name="กำไรสุทธิ" />
                  <Line type="monotone" dataKey="margin" stroke="#3b82f6" strokeWidth={3} name="Margin %" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>แนวโน้ม Profit Margin</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={netProfitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${Number(value)}%`, 'Profit Margin']} />
                  <Line type="monotone" dataKey="margin" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'branch' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>กำไรสุทธิตามสาขา</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={profitByBranch}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, '']} />
                  <Bar dataKey="netProfit" fill="#10b981" name="กำไรสุทธิ" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>รายละเอียดกำไรตามสาขา</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profitByBranch.map((branch, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{branch.branch}</h3>
                      <span className="text-lg font-bold text-green-600">
                        ฿{branch.netProfit.toLocaleString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">รายได้: </span>
                        <span className="font-medium">฿{branch.revenue.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">ค่าใช้จ่าย: </span>
                        <span className="font-medium">฿{branch.expenses.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${branch.margin * 3}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Margin: {branch.margin}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'expenses' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>การแยกค่าใช้จ่าย</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ category, percentage }) => `${category}: ${percentage}%`}
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'จำนวน']} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>รายละเอียดค่าใช้จ่าย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {expenseBreakdown.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="font-medium">{expense.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">฿{expense.amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">{expense.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Profit Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle>สรุปการวิเคราะห์กำไร</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">จุดแข็ง</h4>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Profit Margin คงที่ที่ 32%</li>
                <li>• สาขาสยามมีกำไรสูงสุด</li>
                <li>• แนวโน้มกำไรเติบโตต่อเนื่อง</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">จุดที่ต้องปรับปรุง</h4>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• ค่าเงินเดือนยังสูง (35%)</li>
                <li>• ค่าเช่าต้องเจรจาใหม่</li>
                <li>• ต้องเพิ่มประสิทธิภาพ</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">ข้อเสนอแนะ</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• เพิ่มการตลาดในสาขาใหม่</li>
                <li>• ปรับปรุงระบบการจัดการ</li>
                <li>• เพิ่มบริการที่มี margin สูง</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardNetProfit;
