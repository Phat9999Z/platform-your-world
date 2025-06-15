
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle, Receipt, Building, Users, Plus } from 'lucide-react';

const ExpensesDashboard = () => {
  const stats = [
    { label: 'รายจ่ายเดือนนี้', value: '₿2,458,000', change: '+12%', trend: 'up', icon: DollarSign, color: 'text-red-600' },
    { label: 'ค่าเช่า & สาธารณูปโภค', value: '₿850,000', change: '+2%', trend: 'up', icon: Building, color: 'text-blue-600' },
    { label: 'เงินเดือนพนักงาน', value: '₿1,200,000', change: '+5%', trend: 'up', icon: Users, color: 'text-green-600' },
    { label: 'ค่าใช้จ่ายอื่นๆ', value: '₿408,000', change: '-8%', trend: 'down', icon: Receipt, color: 'text-purple-600' }
  ];

  const recentExpenses = [
    { id: 1, description: 'ค่าเช่าสำนักงานสาขากรุงเทพ', amount: 85000, category: 'ค่าเช่า', date: '2025-06-15', status: 'อนุมัติแล้ว' },
    { id: 2, description: 'ค่าไฟฟ้าสาขาเชียงใหม่', amount: 12500, category: 'สาธารณูปโภค', date: '2025-06-14', status: 'รอพิจารณา' },
    { id: 3, description: 'จัดซื้ออุปกรณ์การแพทย์', amount: 245000, category: 'ครุภัณฑ์', date: '2025-06-13', status: 'อนุมัติแล้ว' },
    { id: 4, description: 'ค่าเดินทางประชุมลูกค้า', amount: 8900, category: 'เดินทาง', date: '2025-06-12', status: 'รอเอกสาร' },
    { id: 5, description: 'ค่าตลาดออนไลน์', amount: 35000, category: 'การตลาด', date: '2025-06-11', status: 'อนุมัติแล้ว' }
  ];

  const expensesByCategory = [
    { category: 'เงินเดือน', amount: 1200000, percentage: 49, color: 'bg-blue-500' },
    { category: 'ค่าเช่า', amount: 510000, percentage: 21, color: 'bg-green-500' },
    { category: 'สาธารณูปโภค', amount: 340000, percentage: 14, color: 'bg-yellow-500' },
    { category: 'ครุภัณฑ์', amount: 245000, percentage: 10, color: 'bg-purple-500' },
    { category: 'อื่นๆ', amount: 163000, percentage: 6, color: 'bg-gray-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'อนุมัติแล้ว': return 'bg-green-100 text-green-800';
      case 'รอพิจารณา': return 'bg-yellow-100 text-yellow-800';
      case 'รอเอกสาร': return 'bg-orange-100 text-orange-800';
      case 'ไม่อนุมัติ': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ภาพรวมรายจ่าย</h1>
          <p className="text-gray-600">ติดตามและจัดการค่าใช้จ่ายขององค์กร</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          บันทึกรายจ่าย
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-red-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    )}
                    <span className={`text-sm ${stat.trend === 'up' ? 'text-red-600' : 'text-green-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Expenses */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>รายจ่ายล่าสุด</CardTitle>
            <CardDescription>รายการค่าใช้จ่ายที่เพิ่งบันทึก</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentExpenses.map((expense) => (
                <div key={expense.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium">{expense.description}</h3>
                      <p className="text-sm text-gray-600">หมวดหมู่: {expense.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">
                        -₿{expense.amount.toLocaleString()}
                      </div>
                      <Badge className={getStatusColor(expense.status)}>
                        {expense.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(expense.date).toLocaleDateString('th-TH')}</span>
                    <Button size="sm" variant="outline">ดูรายละเอียด</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expenses by Category */}
        <Card>
          <CardHeader>
            <CardTitle>รายจ่ายตามหมวดหมู่</CardTitle>
            <CardDescription>สัดส่วนการใช้จ่ายแต่ละประเภท</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expensesByCategory.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-sm text-gray-600">₿{item.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-right">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>เปรียบเทียบรายจ่ายรายเดือน</CardTitle>
          <CardDescription>การเปลี่ยนแปลงค่าใช้จ่ายในช่วง 6 เดือนที่ผ่านมา</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { month: 'ม.ค.', amount: 2100000, change: 5 },
              { month: 'ก.พ.', amount: 2250000, change: 7 },
              { month: 'มี.ค.', amount: 2180000, change: -3 },
              { month: 'เม.ย.', amount: 2320000, change: 6 },
              { month: 'พ.ค.', amount: 2280000, change: -2 },
              { month: 'มิ.ย.', amount: 2458000, change: 8 }
            ].map((month, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-gray-600 mb-1">{month.month}</div>
                <div className="text-lg font-bold">₿{(month.amount / 1000000).toFixed(1)}M</div>
                <div className={`text-sm flex items-center justify-center gap-1 ${
                  month.change > 0 ? 'text-red-600' : 'text-green-600'
                }`}>
                  {month.change > 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(month.change)}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alerts and Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            การแจ้งเตือนและคำแนะนำ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-orange-600 mb-2">เตือน</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• รายจ่ายเดือนนี้เพิ่มขึ้น 12% จากเดือนก่อน</li>
                <li>• ค่าการตลาดใกล้เกินงบประมาณที่กำหนด</li>
                <li>• มี 3 รายการรอการอนุมัติมากกว่า 1 สัปดาห์</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">คำแนะนำ</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• พิจารณาเจรจาต่อรองค่าเช่าเพื่อลดต้นทุน</li>
                <li>• ควรตั้งงบประมาณสำหรับไตรมาสหน้า</li>
                <li>• ทบทวนการใช้จ่ายในหมวดหมู่ที่ไม่จำเป็น</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpensesDashboard;
