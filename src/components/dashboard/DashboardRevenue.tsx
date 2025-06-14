
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'ม.ค.', revenue: 2400000, target: 2500000 },
  { month: 'ก.พ.', revenue: 2200000, target: 2500000 },
  { month: 'มี.ค.', revenue: 2800000, target: 2500000 },
  { month: 'เม.ย.', revenue: 3200000, target: 3000000 },
  { month: 'พ.ค.', revenue: 2900000, target: 3000000 },
  { month: 'มิ.ย.', revenue: 3400000, target: 3200000 },
  { month: 'ก.ค.', revenue: 3600000, target: 3400000 },
  { month: 'ส.ค.', revenue: 3300000, target: 3400000 },
  { month: 'ก.ย.', revenue: 3800000, target: 3600000 },
  { month: 'ต.ค.', revenue: 4100000, target: 3800000 },
  { month: 'พ.ย.', revenue: 3900000, target: 3800000 },
  { month: 'ธ.ค.', revenue: 4300000, target: 4000000 }
];

const DashboardRevenue = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">รายได้รวม</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-emerald-600" />
            รายได้รายเดือนย้อนหลัง 12 เดือน
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `฿${Number(value).toLocaleString()}`, 
                  name === 'revenue' ? 'รายได้จริง' : 'เป้าหมาย'
                ]}
              />
              <Bar dataKey="target" fill="#e5e7eb" name="target" />
              <Bar dataKey="revenue" fill="#10b981" name="revenue" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardRevenue;
