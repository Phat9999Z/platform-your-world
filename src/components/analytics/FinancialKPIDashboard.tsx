
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
import { mockFinancialData } from '@/services/financialAnalytics';

const FinancialKPIDashboard = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');

  // --- Data from financialAnalytics service ---
  const plStatement = mockFinancialData.plStatement;
  const totalRevenue = plStatement.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpensesFromPL = plStatement.reduce((sum, item) => sum + item.expenses, 0);
  const totalCostOfSales = plStatement.reduce((sum, item) => sum + item.cost_of_sales, 0);
  const totalNetProfit = plStatement.reduce((sum, item) => sum + item.net_profit, 0);

  const financialSummary = {
    totalRevenue: totalRevenue,
    netProfit: totalNetProfit,
    cashPosition: 12500000, // Placeholder as it's not in the service data
    get burnRate() {
      return (totalExpensesFromPL + totalCostOfSales) / (plStatement.length || 1);
    },
    get netMargin() {
      return totalRevenue ? (totalNetProfit / totalRevenue) * 100 : 0;
    },
    get runway() {
      const rate = this.burnRate;
      return rate > 0 ? this.cashPosition / rate : Infinity;
    },
  };

  const REVENUE_COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b'];
  const totalSalesAllServices = mockFinancialData.grossMarginPerService.reduce((sum, s) => sum + s.total_sales, 0);
  const revenueBreakdown = mockFinancialData.grossMarginPerService.map((service, index) => ({
    category: service.service_name,
    amount: service.total_sales,
    percentage: totalSalesAllServices > 0 ? (service.total_sales / totalSalesAllServices * 100) : 0,
    color: REVENUE_COLORS[index % REVENUE_COLORS.length]
  }));

  const EXPENSE_COLORS = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#06b6d4'];
  const expenseBreakdown = mockFinancialData.expenseBreakdown.map((expense, index) => ({
    ...expense,
    color: EXPENSE_COLORS[index % EXPENSE_COLORS.length]
  }));

  const cashFlowData = [...mockFinancialData.plStatement].reverse().map((item, index, arr) => {
    const cumulative = arr.slice(0, index + 1).reduce((sum, i) => sum + i.net_profit, 0);
    return {
      month: item.month.split(' ')[0], // 'มิ.ย. 2025' -> 'มิ.ย.'
      revenue: item.revenue,
      expenses: item.cost_of_sales + item.expenses,
      netCashFlow: item.net_profit,
      cumulative: cumulative,
    }
  });

  const branchPerformance = mockFinancialData.netProfitByBranch.map(branch => ({
    branch: branch.branch,
    revenue: branch.revenue,
    expenses: branch.costs + branch.expenses,
    profit: branch.net_profit,
    margin: parseFloat(branch.net_margin)
  }));
  
  const kpiTargets = [
    { 
        metric: 'Customer Repeat Rate', 
        actual: mockFinancialData.customerMetrics.repeat_rate, 
        target: 70, 
        unit: '%', 
        status: mockFinancialData.customerMetrics.repeat_rate >= 70 ? 'good' : 'warning' 
    },
    { 
        metric: 'Average Doctor Efficiency', 
        actual: parseFloat((mockFinancialData.doctorKPIs.reduce((sum, d) => sum + d.efficiency_score, 0) / mockFinancialData.doctorKPIs.length).toFixed(1)), 
        target: 90, 
        unit: '', 
        status: (mockFinancialData.doctorKPIs.reduce((sum, d) => sum + d.efficiency_score, 0) / mockFinancialData.doctorKPIs.length) >= 90 ? 'good' : 'warning' 
    },
    { 
        metric: 'Churn Risk Customers', 
        actual: mockFinancialData.customerMetrics.churn_risk_count, 
        target: 20, 
        unit: 'customers', 
        status: mockFinancialData.customerMetrics.churn_risk_count <= 20 ? 'good' : 'critical'
    },
    { 
        metric: 'Average Branch Profit Margin', 
        actual: parseFloat((mockFinancialData.branchEfficiency.reduce((sum, b) => sum + b.profit_margin, 0) / mockFinancialData.branchEfficiency.length).toFixed(1)), 
        target: 30, 
        unit: '%', 
        status: (mockFinancialData.branchEfficiency.reduce((sum, b) => sum + b.profit_margin, 0) / mockFinancialData.branchEfficiency.length) >= 30 ? 'good' : 'warning' 
    },
    {
      metric: 'Average Revenue per Customer', 
      actual: mockFinancialData.customerMetrics.aov, 
      target: 4000, 
      unit: 'THB', 
      status: mockFinancialData.customerMetrics.aov >= 4000 ? 'good' : 'warning' 
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
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
          <p className="text-gray-600">ตัวชี้วัดทางการเงินและผลประกอบการ (Live Data)</p>
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
                <p className="text-emerald-100 text-sm">รายได้รวม (3 เดือน)</p>
                <p className="text-2xl font-bold">{formatCurrency(financialSummary.totalRevenue)}</p>
                <p className="text-emerald-100 text-xs">ข้อมูลจาก P&L</p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">กำไรสุทธิ (3 เดือน)</p>
                <p className="text-2xl font-bold">{formatCurrency(financialSummary.netProfit)}</p>
                <p className="text-blue-100 text-xs">Margin {financialSummary.netMargin.toFixed(1)}%</p>
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
                      Target: {kpi.unit === 'THB' ? formatCurrency(kpi.target) : `${kpi.target} ${kpi.unit}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">
                    {kpi.unit === 'THB' ? formatCurrency(kpi.actual) : `${kpi.actual} ${kpi.unit}`}
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
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip formatter={(value: number, name: string) => [
                formatCurrency(value),
                name === 'revenue' ? 'รายได้' : 
                name === 'expenses' ? 'ค่าใช้จ่าย' : 
                name === 'netCashFlow' ? 'Cash Flow สุทธิ' : 'Cash Flow สะสม'
              ]} />
              <Bar yAxisId="left" dataKey="revenue" fill="#10b981" name="revenue" />
              <Bar yAxisId="left" dataKey="expenses" fill="#ef4444" name="expenses" />
              <Line yAxisId="right" dataKey="cumulative" stroke="#3b82f6" strokeWidth={3} name="cumulative" />
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
                    <div className="text-sm text-gray-600">{item.percentage.toFixed(1)}%</div>
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
                    <div className="font-bold">{formatCurrency(item.total)}</div>
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
                      <Badge className={branch.margin > 32 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
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
