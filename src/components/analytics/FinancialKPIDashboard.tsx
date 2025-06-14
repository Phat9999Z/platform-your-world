
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Activity,
  PieChart,
  Calculator,
  Clock,
  AlertTriangle,
  Target,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart } from 'recharts';

const FinancialKPIDashboard = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');

  // Mock financial data based on database schema
  const financialSummary = {
    totalRevenue: 12850000,
    totalExpenses: 8420000,
    grossProfit: 4430000,
    netProfit: 3950000,
    grossMargin: 34.5,
    netMargin: 30.7,
    burnRate: 2100000,
    runway: 5.95,
    cashPosition: 12500000
  };

  const revenueBreakdown = [
    { category: 'Treatment Services', amount: 8500000, percentage: 66.1, color: '#10b981' },
    { category: 'Course Packages', amount: 2800000, percentage: 21.8, color: '#3b82f6' },
    { category: 'Consultation', amount: 1200000, percentage: 9.3, color: '#8b5cf6' },
    { category: 'Products', amount: 350000, percentage: 2.7, color: '#f59e0b' }
  ];

  const expenseBreakdown = [
    { category: 'Staff Salaries', amount: 3800000, percentage: 45.1, color: '#ef4444' },
    { category: 'Rent & Utilities', amount: 1680000, percentage: 19.9, color: '#f97316' },
    { category: 'Medical Supplies', amount: 1260000, percentage: 15.0, color: '#eab308' },
    { category: 'Marketing', amount: 840000, percentage: 10.0, color: '#84cc16' },
    { category: 'Other Operating', amount: 840000, percentage: 10.0, color: '#06b6d4' }
  ];

  const cashFlowData = [
    { month: 'ม.ค.', revenue: 2100000, expenses: 1650000, netCashFlow: 450000, cumulative: 450000 },
    { month: 'ก.พ.', revenue: 2200000, expenses: 1780000, netCashFlow: 420000, cumulative: 870000 },
    { month: 'มี.ค.', revenue: 2350000, expenses: 1850000, netCashFlow: 500000, cumulative: 1370000 },
    { month: 'เม.ย.', revenue: 2150000, expenses: 1800000, netCashFlow: 350000, cumulative: 1720000 },
    { month: 'พ.ค.', revenue: 2400000, expenses: 1950000, netCashFlow: 450000, cumulative: 2170000 },
    { month: 'มิ.ย.', revenue: 2650000, expenses: 2100000, netCashFlow: 550000, cumulative: 2720000 }
  ];

  const branchPerformance = [
    { branch: 'สาขาสยาม', revenue: 4200000, expenses: 2800000, profit: 1400000, margin: 33.3 },
    { branch: 'สาขาทองหล่อ', revenue: 3800000, expenses: 2500000, profit: 1300000, margin: 34.2 },
    { branch: 'สาขาอารีย์', revenue: 2900000, expenses: 1920000, profit: 980000, margin: 33.8 },
    { branch: 'สาขาเซ็นทรัล', revenue: 1950000, expenses: 1200000, profit: 750000, margin: 38.5 }
  ];

  const kpiTargets = [
    { metric: 'Monthly Revenue', actual: 2650000, target: 2800000, unit: 'THB', status: 'warning' },
    { metric: 'Gross Margin', actual: 34.5, target: 35.0, unit: '%', status: 'warning' },
    { metric: 'Customer Acquisition', actual: 156, target: 180, unit: 'customers', status: 'critical' },
    { metric: 'Staff Utilization', actual: 78.5, target: 80.0, unit: '%', status: 'good' },
    { metric: 'Average Revenue per Customer', actual: 16987, target: 15000, unit: 'THB', status: 'good' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <TrendingUp className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <TrendingDown className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial KPI Dashboard</h1>
          <p className="text-gray-600">ตัวชี้วัดทางการเงินและผลประกอบการ</p>
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
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="7d">7 วันที่แล้ว</option>
            <option value="30d">30 วันที่แล้ว</option>
            <option value="90d">90 วันที่แล้ว</option>
            <option value="1y">1 ปีที่แล้ว</option>
          </select>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm">รายได้รวม</p>
                <p className="text-2xl font-bold">{formatCurrency(financialSummary.totalRevenue)}</p>
                <p className="text-emerald-100 text-xs">+18.5% YoY</p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">กำไรสุทธิ</p>
                <p className="text-2xl font-bold">{formatCurrency(financialSummary.netProfit)}</p>
                <p className="text-blue-100 text-xs">Margin {financialSummary.netMargin}%</p>
              </div>
              <Calculator className="h-8 w-8 text-blue-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Burn Rate</p>
                <p className="text-2xl font-bold">{formatCurrency(financialSummary.burnRate)}</p>
                <p className="text-purple-100 text-xs">ต่อเดือน</p>
              </div>
              <Activity className="h-8 w-8 text-purple-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Runway</p>
                <p className="text-2xl font-bold">{financialSummary.runway.toFixed(1)} เดือน</p>
                <p className="text-orange-100 text-xs">เงินสด {formatCurrency(financialSummary.cashPosition)}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-100" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KPI Targets vs Actual */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            KPI Performance vs Targets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {kpiTargets.map((kpi, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${getStatusColor(kpi.status)}`}>
                    {getStatusIcon(kpi.status)}
                  </div>
                  <div>
                    <h3 className="font-medium">{kpi.metric}</h3>
                    <p className="text-sm text-gray-600">
                      Target: {kpi.unit === 'THB' ? formatCurrency(kpi.target) : `${kpi.target}${kpi.unit === '%' ? '%' : ''}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">
                    {kpi.unit === 'THB' ? formatCurrency(kpi.actual) : `${kpi.actual}${kpi.unit === '%' ? '%' : ''}`}
                  </div>
                  <div className={`text-sm ${
                    kpi.actual >= kpi.target ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {((kpi.actual / kpi.target - 1) * 100).toFixed(1)}% vs target
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cash Flow Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Cash Flow Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value, name) => [
                formatCurrency(Number(value)),
                name === 'revenue' ? 'รายได้' : 
                name === 'expenses' ? 'ค่าใช้จ่าย' : 
                name === 'netCashFlow' ? 'Cash Flow สุทธิ' : 'Cash Flow สะสม'
              ]} />
              <Bar dataKey="revenue" fill="#10b981" name="revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="expenses" />
              <Line dataKey="cumulative" stroke="#3b82f6" strokeWidth={3} name="cumulative" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue & Expense Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-green-600" />
              Revenue Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatCurrency(item.amount)}</div>
                    <div className="text-sm text-gray-600">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-red-600" />
              Expense Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatCurrency(item.amount)}</div>
                    <div className="text-sm text-gray-600">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Branch Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            Branch Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">สาขา</th>
                  <th className="text-right p-3">รายได้</th>
                  <th className="text-right p-3">ค่าใช้จ่าย</th>
                  <th className="text-right p-3">กำไร</th>
                  <th className="text-center p-3">Profit Margin</th>
                </tr>
              </thead>
              <tbody>
                {branchPerformance.map((branch, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{branch.branch}</td>
                    <td className="p-3 text-right">{formatCurrency(branch.revenue)}</td>
                    <td className="p-3 text-right text-red-600">{formatCurrency(branch.expenses)}</td>
                    <td className="p-3 text-right font-bold text-green-600">{formatCurrency(branch.profit)}</td>
                    <td className="p-3 text-center">
                      <Badge className={branch.margin > 35 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {branch.margin}%
                      </Badge>
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

export default FinancialKPIDashboard;
