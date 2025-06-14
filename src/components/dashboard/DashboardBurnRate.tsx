
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const burnRateData = [
  { month: 'ก.ค.', actual: 1650000, projected: null, category: 'actual' },
  { month: 'ส.ค.', actual: 1780000, projected: null, category: 'actual' },
  { month: 'ก.ย.', actual: 1850000, projected: null, category: 'actual' },
  { month: 'ต.ค.', actual: 1800000, projected: null, category: 'actual' },
  { month: 'พ.ย.', actual: 1950000, projected: null, category: 'actual' },
  { month: 'ธ.ค.', actual: 2100000, projected: null, category: 'actual' },
  { month: 'ม.ค.', actual: null, projected: 2200000, category: 'projected' },
  { month: 'ก.พ.', actual: null, projected: 2300000, category: 'projected' },
  { month: 'มี.ค.', actual: null, projected: 2400000, category: 'projected' }
];

const DashboardBurnRate = () => {
  const currentBurnRate = 2100000;
  const averageBurnRate = 1855000;
  const increasePercentage = ((currentBurnRate - averageBurnRate) / averageBurnRate * 100).toFixed(1);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Burn Rate</h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
          <AlertTriangle className="h-4 w-4" />
          เพิ่มขึ้น {increasePercentage}%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-orange-700">Burn Rate ปัจจุบัน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">
              ฿{currentBurnRate.toLocaleString()}
            </div>
            <p className="text-sm text-orange-600 mt-1">ต่อเดือน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-700">เฉลี่ย 6 เดือน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ฿{averageBurnRate.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-1">ก.ค. - ธ.ค.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-blue-700">Projection 3 เดือน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              ฿6,900,000
            </div>
            <p className="text-sm text-blue-600 mt-1">ม.ค. - มี.ค. 67</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-orange-600" />
            Burn Rate Trend + Projection 3 เดือน
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={burnRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `฿${Number(value).toLocaleString()}`, 
                  name === 'actual' ? 'ค่าใช้จ่ายจริง' : 'คาดการณ์'
                ]}
              />
              <Line 
                dataKey="actual" 
                stroke="#f97316" 
                strokeWidth={3}
                dot={{ fill: '#f97316', strokeWidth: 2, r: 5 }}
                connectNulls={false}
              />
              <Line 
                dataKey="projected" 
                stroke="#f97316" 
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: '#f97316', strokeWidth: 2, r: 5 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <AlertTriangle className="h-5 w-5" />
            การวิเคราะห์ Burn Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-medium text-orange-800 mb-2">หมวดค่าใช้จ่ายหลัก</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>ค่าแรงพนักงาน: ฿945,000 (45%)</div>
                <div>ค่าเช่าและสาธารณูปโภค: ฿420,000 (20%)</div>
                <div>ค่าอุปกรณ์การแพทย์: ฿315,000 (15%)</div>
                <div>อื่นๆ: ฿420,000 (20%)</div>
              </div>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">คำแนะนำ</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• ควบคุมค่าใช้จ่ายไม่จำเป็น</li>
                <li>• ทบทวนการจ้างงานใหม่</li>
                <li>• เพิ่มประสิทธิภาพการใช้ทรัพยากร</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardBurnRate;
