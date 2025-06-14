
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, TrendingDown, Calculator } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { branches, branchTargets } from '@/data/branchMockData';

// กำไรสุทธิคำนวณจาก รายได้ - (target หรือ expenses ที่ มีข้อมูล)
const branchProfitData = branches.map((branch) => {
  // หา target (mock: actualRevenue, actualAppointments ฯลฯ)
  // เอา actual revenue - monthly target หรือ fixed expenses
  const target = branchTargets.find((t) => t.branchId === branch.id);
  const expenses = branch.monthlyRevenue - (target ? target.actualRevenue : branch.monthlyTarget);
  const netProfit = (target ? target.actualRevenue : branch.monthlyRevenue) - expenses;
  // Margin = netProfit / revenue * 100
  const margin = branch.monthlyRevenue
    ? (((target ? target.actualRevenue : branch.monthlyRevenue) - expenses) / (target ? target.actualRevenue : branch.monthlyRevenue)) * 100
    : 0;
  return {
    branch: branch.name,
    revenue: target ? target.actualRevenue : branch.monthlyRevenue,
    expenses: expenses > 0 ? expenses : 0,
    netProfit: netProfit,
    margin: Number(margin.toFixed(1)),
  };
});

const monthlyProfitTrend = [
  { month: 'ม.ค.', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), b.monthlyRevenue * 0.9])) },
  { month: 'ก.พ.', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), b.monthlyRevenue * 0.92])) },
  { month: 'มี.ค.', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), b.monthlyRevenue * 0.95])) },
  { month: 'เม.ย.', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), b.monthlyRevenue * 0.93])) },
  { month: 'พ.ค.', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), b.monthlyRevenue * 0.97])) },
  { month: 'มิ.ย.', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), b.monthlyRevenue])) },
];

const BranchNetProfit = () => {
  const totalNetProfit = branchProfitData.reduce((sum, branch) => sum + branch.netProfit, 0);
  const avgMargin = branchProfitData.reduce((sum, branch) => sum + branch.margin, 0) / (branchProfitData.length || 1);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">กำไรสุทธิสาขา</h1>
        <p className="text-gray-600 mt-1">วิเคราะห์กำไรสุทธิของแต่ละสาขา</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Net Profit */}
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
        {/* Avg Margin */}
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Profit Margin เฉลี่ย</p>
                <p className="text-2xl font-bold">{avgMargin.toFixed(1)}%</p>
              </div>
              <Calculator className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        {/* Top Profit Branch */}
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">สาขาที่ทำกำไรสูงสุด</p>
                <p className="text-2xl font-bold">
                  {branchProfitData.length
                    ? branchProfitData.reduce((max, cur) => (cur.netProfit > max.netProfit ? cur : max), branchProfitData[0]).branch.replace('สาขา', '')
                    : '---'}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        {/* Mock YoY */}
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">เติบโต YoY</p>
                <p className="text-2xl font-bold">+15.2%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Net Profit by Branch (Bar) */}
        <Card>
          <CardHeader>
            <CardTitle>กำไรสุทธิตามสาขา</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchProfitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'กำไรสุทธิ']} />
                <Bar dataKey="netProfit" fill="#10b981" name="กำไรสุทธิ" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle>แนวโน้มกำไรรายเดือน</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyProfitTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                {branches.map((b, i) => (
                  <Line key={b.id} type="monotone" dataKey={b.name.replace('สาขา', '')} stroke={["#ef4444", "#3b82f6", "#10b981", "#f59e0b"][i % 4]} strokeWidth={2} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายละเอียดกำไรสาขา</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">สาขา</th>
                  <th className="px-6 py-3">รายได้</th>
                  <th className="px-6 py-3">ค่าใช้จ่าย</th>
                  <th className="px-6 py-3">กำไรสุทธิ</th>
                  <th className="px-6 py-3">Profit Margin</th>
                </tr>
              </thead>
              <tbody>
                {branchProfitData.map((branch, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">{branch.branch}</td>
                    <td className="px-6 py-4">฿{branch.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4 text-red-600">฿{branch.expenses.toLocaleString()}</td>
                    <td className="px-6 py-4 font-bold text-green-600">฿{branch.netProfit.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        branch.margin > 35 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {branch.margin}%
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

export default BranchNetProfit;
