
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Users, DollarSign, Clock, Award, Activity, AlertTriangle, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

const organizationalKPIs = [
  { 
    metric: 'Revenue per Customer', 
    current: 4500, 
    target: 5000, 
    unit: '฿',
    performance: 90,
    trend: 'up',
    status: 'good'
  },
  { 
    metric: 'Customer Satisfaction', 
    current: 4.7, 
    target: 4.8, 
    unit: '/5',
    performance: 98,
    trend: 'up',
    status: 'excellent'
  },
  { 
    metric: 'Employee Productivity', 
    current: 85, 
    target: 90, 
    unit: '%',
    performance: 94,
    trend: 'stable',
    status: 'good'
  },
  { 
    metric: 'Net Profit Margin', 
    current: 32, 
    target: 35, 
    unit: '%',
    performance: 91,
    trend: 'up',
    status: 'good'
  },
  { 
    metric: 'Customer Retention Rate', 
    current: 78, 
    target: 85, 
    unit: '%',
    performance: 92,
    trend: 'up',
    status: 'good'
  },
  { 
    metric: 'Staff Utilization Rate', 
    current: 88, 
    target: 92, 
    unit: '%',
    performance: 96,
    trend: 'up',
    status: 'excellent'
  }
];

const branchKPIs = [
  { 
    branch: 'สาขาสยาม',
    revenue: 12500000,
    customers: 2450,
    satisfaction: 4.8,
    utilization: 92,
    overall: 94
  },
  { 
    branch: 'สาขาทองหล่อ',
    revenue: 10800000,
    customers: 2180,
    satisfaction: 4.6,
    utilization: 88,
    overall: 89
  },
  { 
    branch: 'สาขาอารีย์',
    revenue: 8200000,
    customers: 1650,
    satisfaction: 4.9,
    utilization: 94,
    overall: 92
  },
  { 
    branch: 'สาขาเซ็นทรัล',
    revenue: 6500000,
    customers: 1320,
    satisfaction: 4.5,
    utilization: 85,
    overall: 86
  }
];

const departmentKPIs = [
  { department: 'การตลาด', current: 125, target: 150, metric: 'Leads/เดือน' },
  { department: 'ขาย', current: 85, target: 90, metric: 'Conversion Rate %' },
  { department: 'บริการ', current: 4.7, target: 4.8, metric: 'Rating' },
  { department: 'ปฏิบัติการ', current: 92, target: 95, metric: 'Efficiency %' },
  { department: 'การเงิน', current: 15, target: 10, metric: 'Receivables (วัน)' },
  { department: 'HR', current: 8, target: 12, metric: 'Turnover Rate %' }
];

const monthlyTrends = [
  { month: 'ก.ย.', overall: 88, marketing: 82, sales: 90, service: 92, operations: 85 },
  { month: 'ต.ค.', overall: 90, marketing: 85, sales: 88, service: 94, operations: 88 },
  { month: 'พ.ย.', overall: 92, marketing: 88, sales: 92, service: 95, operations: 90 },
  { month: 'ธ.ค.', overall: 91, marketing: 87, sales: 89, service: 96, operations: 92 }
];

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

const DashboardKPI = () => {
  const [selectedView, setSelectedView] = useState('organizational');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const overallScore = organizationalKPIs.reduce((sum, kpi) => sum + kpi.performance, 0) / organizationalKPIs.length;
  const excellentKPIs = organizationalKPIs.filter(kpi => kpi.status === 'excellent').length;
  const warningKPIs = organizationalKPIs.filter(kpi => kpi.performance < 85).length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">KPI องค์กร</h1>
          <p className="text-gray-600 mt-1">ติดตามและวิเคราะห์ผลการดำเนินงานหลักขององค์กร</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="all">ทุกแผนก</option>
            <option value="marketing">การตลาด</option>
            <option value="sales">ขาย</option>
            <option value="service">บริการ</option>
            <option value="operations">ปฏิบัติการ</option>
          </select>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออกรายงาน
          </Button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className={`bg-gradient-to-r ${overallScore >= 90 ? 'from-green-500 to-green-600' : overallScore >= 80 ? 'from-blue-500 to-blue-600' : 'from-yellow-500 to-yellow-600'} text-white`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`${overallScore >= 90 ? 'text-green-100' : overallScore >= 80 ? 'text-blue-100' : 'text-yellow-100'}`}>Overall KPI Score</p>
                <p className="text-2xl font-bold">{overallScore.toFixed(1)}</p>
              </div>
              <Target className={`h-8 w-8 ${overallScore >= 90 ? 'text-green-200' : overallScore >= 80 ? 'text-blue-200' : 'text-yellow-200'}`} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100">KPIs ระดับดีเยี่ยม</p>
                <p className="text-2xl font-bold">{excellentKPIs}</p>
              </div>
              <Award className="h-8 w-8 text-emerald-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">ต้องปรับปรุง</p>
                <p className="text-2xl font-bold">{warningKPIs}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">แนวโน้ม</p>
                <p className="text-2xl font-bold">↗</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Tabs */}
      <div className="flex space-x-4 border-b">
        <button 
          onClick={() => setSelectedView('organizational')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'organizational' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          KPI องค์กร
        </button>
        <button 
          onClick={() => setSelectedView('branches')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'branches' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ตามสาขา
        </button>
        <button 
          onClick={() => setSelectedView('departments')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'departments' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ตามแผนก
        </button>
        <button 
          onClick={() => setSelectedView('trends')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'trends' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          แนวโน้ม
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'organizational' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>KPI Score Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {organizationalKPIs.map((kpi, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{kpi.metric}</h3>
                      <div className="flex items-center gap-2">
                        {kpi.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                        {kpi.trend === 'down' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        {kpi.trend === 'stable' && <Activity className="h-4 w-4 text-gray-500" />}
                        <span className={`px-2 py-1 rounded text-xs ${
                          kpi.status === 'excellent' ? 'bg-green-100 text-green-800' :
                          kpi.status === 'good' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {kpi.performance}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-gray-600">ปัจจุบัน: </span>
                        <span className="font-bold">{kpi.current}{kpi.unit}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">เป้าหมาย: </span>
                        <span className="font-bold">{kpi.target}{kpi.unit}</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          kpi.performance >= 95 ? 'bg-green-600' :
                          kpi.performance >= 85 ? 'bg-blue-600' :
                          'bg-yellow-600'
                        }`}
                        style={{ width: `${kpi.performance}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>KPI Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={organizationalKPIs}>
                  <RadialBar
                    dataKey="performance"
                    cornerRadius={10}
                    fill="#3b82f6"
                  />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'branches' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>KPI Score ตามสาขา</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={branchKPIs}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="overall" fill="#3b82f6" name="Overall Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>รายละเอียด KPI ตามสาขา</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {branchKPIs.map((branch, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{branch.branch}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        branch.overall >= 90 ? 'bg-green-100 text-green-800' :
                        branch.overall >= 85 ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {branch.overall}%
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600">รายได้: </span>
                        <span className="font-medium">฿{(branch.revenue / 1000000).toFixed(1)}M</span>
                      </div>
                      <div>
                        <span className="text-gray-600">ลูกค้า: </span>
                        <span className="font-medium">{branch.customers.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Satisfaction: </span>
                        <span className="font-medium">{branch.satisfaction}/5</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Utilization: </span>
                        <span className="font-medium">{branch.utilization}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'departments' && (
        <Card>
          <CardHeader>
            <CardTitle>KPI ตามแผนก</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentKPIs.map((dept, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{dept.department}</h3>
                    <div className="text-right">
                      <div className="font-bold">{dept.current} {dept.metric.includes('%') ? '' : dept.metric.includes('Rating') ? '/5' : ''}</div>
                      <div className="text-xs text-gray-600">เป้า: {dept.target}</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-2">{dept.metric}</div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        dept.department === 'การเงิน' ? 
                          (dept.current <= dept.target ? 'bg-green-600' : 'bg-red-600') :
                          (dept.current >= dept.target * 0.9 ? 'bg-green-600' : 
                           dept.current >= dept.target * 0.8 ? 'bg-yellow-600' : 'bg-red-600')
                      }`}
                      style={{ 
                        width: `${
                          dept.department === 'การเงิน' ? 
                            Math.min(100, (dept.target / dept.current) * 100) :
                            Math.min(100, (dept.current / dept.target) * 100)
                        }%` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {selectedView === 'trends' && (
        <Card>
          <CardHeader>
            <CardTitle>แนวโน้ม KPI รายเดือน</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="overall" stroke="#3b82f6" strokeWidth={3} name="Overall" />
                <Line type="monotone" dataKey="marketing" stroke="#f59e0b" strokeWidth={2} name="การตลาด" />
                <Line type="monotone" dataKey="sales" stroke="#22c55e" strokeWidth={2} name="ขาย" />
                <Line type="monotone" dataKey="service" stroke="#8b5cf6" strokeWidth={2} name="บริการ" />
                <Line type="monotone" dataKey="operations" stroke="#ef4444" strokeWidth={2} name="ปฏิบัติการ" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            แผนปรับปรุง KPI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">ต้องแก้ไขเร่งด่วน</h4>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• เพิ่ม Customer Retention Rate</li>
                <li>• ปรับปรุง Net Profit Margin</li>
                <li>• เพิ่มประสิทธิภาพสาขาเซ็นทรัล</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">ควรปรับปรุง</h4>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• เพิ่ม Revenue per Customer</li>
                <li>• พัฒนาทีมการตลาด</li>
                <li>• ปรับปรุงระบบงาน</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">ดำเนินการต่อเนื่อง</h4>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• รักษาระดับ Customer Satisfaction</li>
                <li>• เพิ่ม Staff Utilization</li>
                <li>• ขยายผลสำเร็จสาขาอารีย์</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardKPI;
