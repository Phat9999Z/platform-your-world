
export interface NetProfitByBranch {
  branch: string;
  net_profit: number;
  net_margin: string;
  revenue: number;
  costs: number;
  expenses: number;
}

export interface TaxLiability {
  output_vat: number;
  input_vat: number;
  tax_payable: number;
  period: string;
}

export interface GrossMarginPerService {
  service_id: string;
  service_name: string;
  total_sales: number;
  total_cost: number;
  gross_margin: number;
  margin_percentage: string;
}

export interface PLStatement {
  month: string;
  revenue: number;
  cost_of_sales: number;
  expenses: number;
  net_profit: number;
  margin: number;
}

export interface ExpenseBreakdown {
  category: string;
  total: number;
  percentage: number;
}

export interface DoctorKPI {
  doctor_id: string;
  doctor_name: string;
  revenue_per_hour: number;
  slot_utilization: number;
  average_ticket: number;
  bonus: number;
  efficiency_score: number;
  kpi_score: number;
}

export interface BranchEfficiency {
  branch_id: string;
  branch_name: string;
  revenue_per_staff: number;
  cost_per_staff: number;
  efficiency_score: number;
  profit_margin: number;
}

export interface CustomerMetrics {
  repeat_rate: number;
  churn_risk_count: number;
  aov: number;
  cac: number;
  retention_rate: number;
}

// Mock data for demonstration
export const mockFinancialData = {
  netProfitByBranch: [
    {
      branch: "ทองหล่อ",
      net_profit: 132000,
      net_margin: "22%",
      revenue: 600000,
      costs: 360000,
      expenses: 108000
    },
    {
      branch: "สีลม", 
      net_profit: 145000,
      net_margin: "24%",
      revenue: 605000,
      costs: 350000,
      expenses: 110000
    },
    {
      branch: "อโซค",
      net_profit: 98000,
      net_margin: "18%",
      revenue: 545000,
      costs: 327000,
      expenses: 120000
    }
  ] as NetProfitByBranch[],

  taxLiability: {
    output_vat: 85000,
    input_vat: 23000,
    tax_payable: 62000,
    period: "มิถุนายน 2025"
  } as TaxLiability,

  grossMarginPerService: [
    {
      service_id: "svc-001",
      service_name: "ตรวจสายตาทั่วไป",
      total_sales: 180000,
      total_cost: 95000,
      gross_margin: 85000,
      margin_percentage: "47.2%"
    },
    {
      service_id: "svc-002", 
      service_name: "ผ่าตัดต้อกระจก",
      total_sales: 520000,
      total_cost: 260000,
      gross_margin: 260000,
      margin_percentage: "50.0%"
    },
    {
      service_id: "svc-003",
      service_name: "ตรวจจอประสาทตา",
      total_sales: 340000,
      total_cost: 136000,
      gross_margin: 204000,
      margin_percentage: "60.0%"
    }
  ] as GrossMarginPerService[],

  plStatement: [
    {
      month: "มิ.ย. 2025",
      revenue: 1850000,
      cost_of_sales: 925000,
      expenses: 394000,
      net_profit: 531000,
      margin: 28.7
    },
    {
      month: "พ.ค. 2025", 
      revenue: 1680000,
      cost_of_sales: 840000,
      expenses: 378000,
      net_profit: 462000,
      margin: 27.5
    },
    {
      month: "เม.ย. 2025",
      revenue: 1420000,
      cost_of_sales: 710000,
      expenses: 355000,
      net_profit: 355000,
      margin: 25.0
    }
  ] as PLStatement[],

  expenseBreakdown: [
    { category: "ค่าเช่า", total: 70000, percentage: 25.5 },
    { category: "ค่าแรง", total: 150000, percentage: 54.7 },
    { category: "การตลาด", total: 35000, percentage: 12.8 },
    { category: "อื่นๆ", total: 19000, percentage: 6.9 }
  ] as ExpenseBreakdown[],

  doctorKPIs: [
    {
      doctor_id: "dr-001",
      doctor_name: "นพ.สมชาย รักษาดี",
      revenue_per_hour: 8500,
      slot_utilization: 85,
      average_ticket: 4250,
      bonus: 23500,
      efficiency_score: 92,
      kpi_score: 88
    },
    {
      doctor_id: "dr-002",
      doctor_name: "นพ.หญิง วิภาวดี ใสสะอาด", 
      revenue_per_hour: 7800,
      slot_utilization: 78,
      average_ticket: 3900,
      bonus: 19500,
      efficiency_score: 85,
      kpi_score: 82
    }
  ] as DoctorKPI[],

  branchEfficiency: [
    {
      branch_id: "br-001",
      branch_name: "ลาดพร้าว",
      revenue_per_staff: 120000,
      cost_per_staff: 80000,
      efficiency_score: 1.5,
      profit_margin: 33.3
    },
    {
      branch_id: "br-002", 
      branch_name: "สุขุมวิท",
      revenue_per_staff: 140000,
      cost_per_staff: 95000,
      efficiency_score: 1.47,
      profit_margin: 32.1
    }
  ] as BranchEfficiency[],

  customerMetrics: {
    repeat_rate: 68.5,
    churn_risk_count: 23,
    aov: 4250,
    cac: 850,
    retention_rate: 72.3
  } as CustomerMetrics
};

export class FinancialAnalyticsService {
  // 1. Net Profit per Branch
  static calculateNetProfitByBranch(invoices: any[], costs: any[], expenses: any[]): NetProfitByBranch[] {
    return mockFinancialData.netProfitByBranch;
  }

  // 2. Tax Liability Forecast
  static calculateTaxLiability(invoices: any[], purchases: any[]): TaxLiability {
    return mockFinancialData.taxLiability;
  }

  // 3. Gross Margin Per Service
  static calculateGrossMarginPerService(invoiceItems: any[], costs: any[]): GrossMarginPerService[] {
    return mockFinancialData.grossMarginPerService;
  }

  // 4. P&L Statement by Month
  static generatePLStatement(period: number = 3): PLStatement[] {
    return mockFinancialData.plStatement;
  }

  // 5. Expense Breakdown by Category
  static getExpenseBreakdown(expenses: any[]): ExpenseBreakdown[] {
    return mockFinancialData.expenseBreakdown;
  }

  // Doctor KPIs (9-20)
  static calculateDoctorKPIs(): DoctorKPI[] {
    return mockFinancialData.doctorKPIs;
  }

  // Branch Efficiency (11)
  static calculateBranchEfficiency(): BranchEfficiency[] {
    return mockFinancialData.branchEfficiency;
  }

  // Customer Metrics (12, 22, 24, 21)
  static getCustomerMetrics(): CustomerMetrics {
    return mockFinancialData.customerMetrics;
  }

  // Additional KPI calculations
  static calculateBreakEvenByBranch(revenue: number, costs: number): number {
    return revenue - costs;
  }

  static calculateUnpaidInvoices(invoices: any[]): number {
    return invoices.filter(inv => inv.payment_status === 'pending').length;
  }

  static calculateServiceProfitability(serviceData: any[]): any[] {
    return serviceData.map(service => ({
      ...service,
      profit: service.revenue - service.cost,
      margin: ((service.revenue - service.cost) / service.revenue * 100).toFixed(1)
    }));
  }
}
