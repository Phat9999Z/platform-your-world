import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, TrendingDown, Calculator } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const branchProfitData = [
  { branch: 'สาขาสยาม', revenue: 4200000, expenses: 2800000, netProfit: 1400000, margin: 33.3 },
  { branch: 'สาขาทองหล่อ', revenue: 3800000, expenses: 2500000, netProfit: 1300000, margin: 34.2 },
  { branch: 'สาขาอารีย์', revenue: 2900000, expenses: 1920000, netProfit: 980000, margin: 33.8 },
  { branch: 'สาขาเซ็นทรัล', revenue: 1950000, expenses: 1200000, netProfit: 750000, margin: 38.5 }
];

const monthlyProfitTrend = [
  { month: 'ม.ค.', สยาม: 1200000, ทองหล่อ: 1100000, อารีย์: 850000, เซ็นทรัล: 650000 },
  { month: 'ก.พ.', สยาม: 1250000, ทองหล่อ: 1150000, อารีย์: 880000, เซ็นทรัล: 680000 },
  { month: 'มี.ค.', สยาม: 1300000, ทองหล่อ: 1200000, อารีย์: 920000, เซ็นทรัล: 700000 },
  { month: 'เม.ย.', สยาม: 1350000, ทองหล่อ: 1250000, อารีย์: 950000, เซ็นทรัล: 720000 },
  { month: 'พ.ค.', สยาม: 1380000, ทองหล่อ: 1280000, อารีย์: 970000, เซ็นทรัล: 740000 },
  { month: 'มิ.ย.', สยาม: 1400000, ทองหล่อ: 1300000, อารีย์: 980000, เซ็นทรัล: 750000 }
];

const BranchNetProfit = () => {
  const totalNetProfit = branchProfitData.reduce((sum, branch) => sum + branch.netProfit, 0);
  const avgMargin = branchProfitData.reduce((sum, branch) => sum + branch.margin, 0) / branchProfitData.length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">กำไรสุทธิสาขา</h1>
        <p className="text-gray-600 mt-1">วิเคราะห์กำไรสุทธิของแต่ละสาขา</p>
      </div>

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
                <p className="text-blue-100">Profit Margin เฉลี่ย</p>
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
                <p className="text-purple-100">สาขาที่ทำกำไรสูงสุด</p>
                <p className="text-2xl font-bold">สยาม</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        
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
                <Line type="monotone" dataKey="สยาม" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="ทองหล่อ" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="อารีย์" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="เซ็นทรัล" stroke="#f59e0b" strokeWidth={2} />
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
