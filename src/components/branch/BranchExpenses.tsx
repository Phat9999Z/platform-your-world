
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Receipt, TrendingDown, Building, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const branchExpenses = [
  { branch: 'สาขาสยาม', rent: 800000, salaries: 1200000, supplies: 400000, utilities: 200000, marketing: 200000, total: 2800000 },
  { branch: 'สาขาทองหล่อ', rent: 750000, salaries: 1000000, supplies: 350000, utilities: 180000, marketing: 220000, total: 2500000 },
  { branch: 'สาขาอารีย์', rent: 600000, salaries: 800000, supplies: 280000, utilities: 140000, marketing: 100000, total: 1920000 },
  { branch: 'สาขาเซ็นทรัล', rent: 400000, salaries: 500000, supplies: 180000, utilities: 80000, marketing: 40000, total: 1200000 }
];

const expenseCategories = [
  { category: 'เงินเดือนพนักงาน', amount: 3500000, percentage: 42.5, color: '#ef4444' },
  { category: 'ค่าเช่าและสาธารณูปโภค', amount: 2350000, percentage: 28.5, color: '#f97316' },
  { category: 'วัสดุการแพทย์', amount: 1210000, percentage: 14.7, color: '#eab308' },
  { category: 'การตลาด', amount: 560000, percentage: 6.8, color: '#84cc16' },
  { category: 'อื่นๆ', amount: 620000, percentage: 7.5, color: '#06b6d4' }
];

const monthlyExpenseTrend = [
  { month: 'ม.ค.', total: 7800000, target: 8000000 },
  { month: 'ก.พ.', total: 8100000, target: 8200000 },
  { month: 'มี.ค.', total: 8200000, target: 8300000 },
  { month: 'เม.ย.', total: 8000000, target: 8200000 },
  { month: 'พ.ค.', total: 8300000, target: 8400000 },
  { month: 'มิ.ย.', total: 8420000, target: 8500000 }
];

const BranchExpenses = () => {
  const totalExpenses = branchExpenses.reduce((sum, branch) => sum + branch.total, 0);
  const avgExpensePerBranch = totalExpenses / branchExpenses.length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ต้นทุน / รายจ่ายสาขา</h1>
        <p className="text-gray-600 mt-1">วิเคราะห์ค่าใช้จ่ายของแต่ละสาขา</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">ค่าใช้จ่ายรวม</p>
                <p className="text-2xl font-bold">฿{(totalExpenses / 1000000).toFixed(1)}M</p>
              </div>
              <Receipt className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">เฉลี่ยต่อสาขา</p>
                <p className="text-2xl font-bold">฿{(avgExpensePerBranch / 1000000).toFixed(1)}M</p>
              </div>
              <Building className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">สาขาต้นทุนสูงสุด</p>
                <p className="text-2xl font-bold">สยาม</p>
              </div>
              <TrendingDown className="h-8 w-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">ลดลง MoM</p>
                <p className="text-2xl font-bold">-2.1%</p>
              </div>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>ค่าใช้จ่ายรวมตามสาขา</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchExpenses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'ค่าใช้จ่าย']} />
                <Bar dataKey="total" fill="#ef4444" name="ค่าใช้จ่ายรวม" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>สัดส่วนประเภทค่าใช้จ่าย</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) => `${category} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'ยอดค่าใช้จ่าย']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายละเอียดค่าใช้จ่ายตามสาขา</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">สาขา</th>
                  <th className="px-6 py-3">ค่าเช่า</th>
                  <th className="px-6 py-3">เงินเดือน</th>
                  <th className="px-6 py-3">วัสดุ</th>
                  <th className="px-6 py-3">สาธารณูปโภค</th>
                  <th className="px-6 py-3">การตลาด</th>
                  <th className="px-6 py-3">รวม</th>
                </tr>
              </thead>
              <tbody>
                {branchExpenses.map((branch, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">{branch.branch}</td>
                    <td className="px-6 py-4">฿{branch.rent.toLocaleString()}</td>
                    <td className="px-6 py-4">฿{branch.salaries.toLocaleString()}</td>
                    <td className="px-6 py-4">฿{branch.supplies.toLocaleString()}</td>
                    <td className="px-6 py-4">฿{branch.utilities.toLocaleString()}</td>
                    <td className="px-6 py-4">฿{branch.marketing.toLocaleString()}</td>
                    <td className="px-6 py-4 font-bold">฿{branch.total.toLocaleString()}</td>
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

export default BranchExpenses;
