
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  DollarSign, 
  Star,
  Clock,
  TrendingUp,
  Award,
  Target,
  UserCheck,
  Activity
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const StaffPerformanceAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedBranch, setSelectedBranch] = useState('all');

  // Mock staff performance data
  const staffOverview = {
    totalStaff: 45,
    activeStaff: 42,
    totalRevenue: 12850000,
    revenuePerStaff: 287778,
    avgUtilization: 76.5,
    customerSatisfaction: 4.7
  };

  const topPerformers = [
    { 
      id: 1, 
      name: 'ดร.สมชาย ใจดี', 
      position: 'หมอผิวหนัง', 
      revenue: 485000, 
      customers: 156, 
      satisfaction: 4.9,
      utilization: 89.5,
      branch: 'สยาม'
    },
    { 
      id: 2, 
      name: 'ดร.มาลี สวยงาม', 
      position: 'หมอเลเซอร์', 
      revenue: 425000, 
      customers: 134, 
      satisfaction: 4.8,
      utilization: 85.2,
      branch: 'ทองหล่อ'
    },
    { 
      id: 3, 
      name: 'คุณนิดา พูดดี', 
      position: 'นักบำบัด', 
      revenue: 380000, 
      customers: 198, 
      satisfaction: 4.7,
      utilization: 82.1,
      branch: 'อารีย์'
    },
    { 
      id: 4, 
      name: 'ดร.ประยุทธ์ รักษาดี', 
      position: 'หมอศัลยกรรม', 
      revenue: 365000, 
      customers: 89, 
      satisfaction: 4.9,
      utilization: 78.3,
      branch: 'เซ็นทรัล'
    },
    { 
      id: 5, 
      name: 'คุณสวรรค์ ดูแลดี', 
      position: 'พยาบาล', 
      revenue: 285000, 
      customers: 245, 
      satisfaction: 4.6,
      utilization: 91.7,
      branch: 'สยาม'
    }
  ];

  const staffProductivity = [
    { month: 'ม.ค.', revenue: 2850000, hours: 3600, efficiency: 792 },
    { month: 'ก.พ.', revenue: 3100000, hours: 3520, efficiency: 881 },
    { month: 'มี.ค.', revenue: 2950000, hours: 3680, efficiency: 801 },
    { month: 'เม.ย.', revenue: 3250000, hours: 3440, efficiency: 945 },
    { month: 'พ.ค.', revenue: 3400000, hours: 3520, efficiency: 966 },
    { month: 'มิ.ย.', revenue: 3650000, hours: 3600, efficiency: 1014 }
  ];

  const departmentPerformance = [
    { department: 'หมอผิวหนัง', revenue: 4200000, staff: 8, avgRevenue: 525000, color: '#10b981' },
    { department: 'หมอเลเซอร์', revenue: 3800000, staff: 6, avgRevenue: 633333, color: '#3b82f6' },
    { department: 'นักบำบัด', revenue: 2400000, staff: 12, avgRevenue: 200000, color: '#8b5cf6' },
    { department: 'หมอศัลยกรรม', revenue: 1800000, staff: 4, avgRevenue: 450000, color: '#f59e0b' },
    { department: 'พยาบาล', revenue: 650000, staff: 15, avgRevenue: 43333, color: '#ef4444' }
  ];

  const utilizationData = [
    { staff: 'ดร.สมชาย', utilization: 89.5, target: 85 },
    { staff: 'ดร.มาลี', utilization: 85.2, target: 85 },
    { staff: 'คุณนิดา', utilization: 82.1, target: 80 },
    { staff: 'ดร.ประยุทธ์', utilization: 78.3, target: 80 },
    { staff: 'คุณสวรรค์', utilization: 91.7, target: 85 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(amount);
  };

  const getPerformanceColor = (rating: number) => {
    if (rating >= 4.8) return 'bg-green-100 text-green-800';
    if (rating >= 4.5) return 'bg-blue-100 text-blue-800';
    if (rating >= 4.0) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Performance Analytics</h1>
          <p className="text-gray-600">วิเคราะห์ผลประกอบการพนักงานและทีมงาน</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="all">ทุกสาขา</option>
            <option value="siam">สาขาสยาม</option>
            <option value="thonglor">สาขาทองหล่อ</option>
            <option value="ari">สาขาอารีย์</option>
            <option value="central">สาขาเซ็นทรัล</option>
          </select>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="week">สัปดาห์นี้</option>
            <option value="month">เดือนนี้</option>
            <option value="quarter">ไตรมาสนี้</option>
            <option value="year">ปีนี้</option>
          </select>
        </div>
      </div>

      {/* Staff Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">พนักงานทั้งหมด</p>
                <p className="text-2xl font-bold">{staffOverview.totalStaff}</p>
                <p className="text-blue-100 text-xs">Active: {staffOverview.activeStaff}</p>
              </div>
              <Users className="h-8 w-8 text-blue-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Revenue per Staff</p>
                <p className="text-2xl font-bold">{formatCurrency(staffOverview.revenuePerStaff)}</p>
                <p className="text-green-100 text-xs">+15.2% จากเดือนที่แล้ว</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Utilization เฉลี่ย</p>
                <p className="text-2xl font-bold">{staffOverview.avgUtilization}%</p>
                <p className="text-purple-100 text-xs">Target: 80%</p>
              </div>
              <Activity className="h-8 w-8 text-purple-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Customer Satisfaction</p>
                <p className="text-2xl font-bold">{staffOverview.customerSatisfaction}</p>
                <p className="text-yellow-100 text-xs">จาก 5.0 คะแนน</p>
              </div>
              <Star className="h-8 w-8 text-yellow-100" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-600" />
            Top Performers (พนักงานยอดเยี่ยม)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">ชื่อ-ตำแหน่ง</th>
                  <th className="text-right p-3">รายได้</th>
                  <th className="text-center p-3">ลูกค้า</th>
                  <th className="text-center p-3">Satisfaction</th>
                  <th className="text-center p-3">Utilization</th>
                  <th className="text-center p-3">สาขา</th>
                  <th className="text-center p-3">Ranking</th>
                </tr>
              </thead>
              <tbody>
                {topPerformers.map((staff, index) => (
                  <tr key={staff.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <div className="font-medium">{staff.name}</div>
                        <div className="text-sm text-gray-600">{staff.position}</div>
                      </div>
                    </td>
                    <td className="p-3 text-right font-bold text-green-600">
                      {formatCurrency(staff.revenue)}
                    </td>
                    <td className="p-3 text-center">{staff.customers} คน</td>
                    <td className="p-3 text-center">
                      <Badge className={getPerformanceColor(staff.satisfaction)}>
                        {staff.satisfaction} ⭐
                      </Badge>
                    </td>
                    <td className="p-3 text-center">{staff.utilization}%</td>
                    <td className="p-3 text-center">{staff.branch}</td>
                    <td className="p-3 text-center">
                      <Badge className={
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800' :
                        index === 2 ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }>
                        #{index + 1}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staff Productivity Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Staff Productivity Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={staffProductivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'revenue' ? formatCurrency(Number(value)) :
                    name === 'hours' ? `${value} ชม.` :
                    `${value} บาท/ชม.`,
                    name === 'revenue' ? 'รายได้' :
                    name === 'hours' ? 'ชั่วโมงทำงาน' : 'ประสิทธิภาพ'
                  ]}
                />
                <Line dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} name="efficiency" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Utilization Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              Staff Utilization vs Target
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={utilizationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="staff" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
                <Bar dataKey="target" fill="#e5e7eb" name="Target" />
                <Bar dataKey="utilization" fill="#8b5cf6" name="Actual" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-green-600" />
            Department Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentPerformance}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="revenue"
                  nameKey="department"
                >
                  {departmentPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Department Breakdown</h3>
              {departmentPerformance.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: dept.color }}
                    ></div>
                    <div>
                      <div className="font-medium">{dept.department}</div>
                      <div className="text-sm text-gray-600">{dept.staff} คน</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatCurrency(dept.revenue)}</div>
                    <div className="text-sm text-gray-600">
                      เฉลี่ย {formatCurrency(dept.avgRevenue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Improvement Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-600" />
            แนวทางพัฒนาประสิทธิภาพ (Performance Optimization)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">เพิ่มประสิทธิภาพ</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Training skill development</li>
                <li>• Cross-training ข้ามแผนก</li>
                <li>• Performance incentive program</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">เพิ่ม Utilization</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• ปรับ scheduling ให้เหมาะสม</li>
                <li>• ลด idle time ระหว่างลูกค้า</li>
                <li>• เพิ่ม capacity ในช่วง peak</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">เพิ่ม Satisfaction</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Customer service training</li>
                <li>• Feedback system improvement</li>
                <li>• Reward excellent service</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffPerformanceAnalytics;
