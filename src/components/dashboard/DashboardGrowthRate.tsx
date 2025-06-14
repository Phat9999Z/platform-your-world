
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, BarChart3, Target, Calendar, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart } from 'recharts';

const growthData = [
  { period: 'Q1 2023', revenue: 7200000, growthRate: 15.2, yoyGrowth: 18.5, customerGrowth: 12.3 },
  { period: 'Q2 2023', revenue: 8100000, growthRate: 12.5, yoyGrowth: 22.1, customerGrowth: 15.8 },
  { period: 'Q3 2023', revenue: 9500000, growthRate: 17.3, yoyGrowth: 25.4, customerGrowth: 18.2 },
  { period: 'Q4 2023', revenue: 11200000, growthRate: 17.9, yoyGrowth: 28.7, customerGrowth: 21.5 },
  { period: 'Q1 2024', revenue: 13300000, growthRate: 18.8, yoyGrowth: 32.2, customerGrowth: 24.1 },
  { period: 'Q2 2024', revenue: 15600000, growthRate: 17.3, yoyGrowth: 35.6, customerGrowth: 26.8 }
];

const segmentGrowth = [
  { segment: 'Laser Hair Removal', currentRevenue: 8500000, lastYear: 6200000, growth: 37.1 },
  { segment: 'Facial Treatment', currentRevenue: 7200000, lastYear: 5800000, growth: 24.1 },
  { segment: 'Botox Injection', currentRevenue: 6800000, lastYear: 5500000, growth: 23.6 },
  { segment: 'Chemical Peeling', currentRevenue: 5200000, lastYear: 3900000, growth: 33.3 },
  { segment: 'Dermal Fillers', currentRevenue: 3800000, lastYear: 2800000, growth: 35.7 },
  { segment: 'Acne Treatment', currentRevenue: 2200000, lastYear: 1950000, growth: 12.8 }
];

const branchGrowthData = [
  { branch: 'สาขาสยาม', q1: 15.2, q2: 18.5, q3: 22.1, q4: 25.8, avg: 20.4 },
  { branch: 'สาขาทองหล่อ', q1: 12.8, q2: 15.2, q3: 18.7, q4: 21.3, avg: 17.0 },
  { branch: 'สาขาอารีย์', q1: 18.5, q2: 22.1, q3: 25.4, q4: 28.9, avg: 23.7 },
  { branch: 'สาขาเซ็นทรัล', q1: 8.2, q2: 12.5, q3: 15.8, q4: 18.2, avg: 13.7 }
];

const growthDrivers = [
  { factor: 'การขยายสาขาใหม่', impact: 35, description: 'สาขาอารีย์และเซ็นทรัล' },
  { factor: 'เพิ่มบริการใหม่', impact: 28, description: 'Laser และ Dermal Fillers' },
  { factor: 'การตลาดดิจิทัล', impact: 22, description: 'Social Media และ Google Ads' },
  { factor: 'ลูกค้าแนะนำ', impact: 15, description: 'โปรแกรม Referral' }
];

const DashboardGrowthRate = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const currentGrowth = growthData[growthData.length - 1].growthRate;
  const avgGrowth = growthData.reduce((sum, item) => sum + item.growthRate, 0) / growthData.length;
  const bestPerformingSegment = segmentGrowth.reduce((prev, current) => 
    (prev.growth > current.growth) ? prev : current
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">อัตราการเติบโต</h1>
          <p className="text-gray-600 mt-1">วิเคราะห์การเติบโตในทุกมิติของธุรกิจ</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="revenue">รายได้</option>
            <option value="customers">ลูกค้า</option>
            <option value="services">บริการ</option>
          </select>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออกรายงาน
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">การเติบโตปัจจุบัน</p>
                <p className="text-2xl font-bold">{currentGrowth}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">เฉลี่ย 6 ไตรมาส</p>
                <p className="text-2xl font-bold">{avgGrowth.toFixed(1)}%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">YoY Growth</p>
                <p className="text-2xl font-bold">{growthData[growthData.length - 1].yoyGrowth}%</p>
              </div>
              <Target className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">บริการเด่น</p>
                <p className="text-xl font-bold">{bestPerformingSegment.growth.toFixed(1)}%</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Tabs */}
      <div className="flex space-x-4 border-b">
        <button 
          onClick={() => setSelectedView('overview')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ภาพรวม
        </button>
        <button 
          onClick={() => setSelectedView('segments')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'segments' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ตามบริการ
        </button>
        <button 
          onClick={() => setSelectedView('branches')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'branches' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ตามสาขา
        </button>
        <button 
          onClick={() => setSelectedView('drivers')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'drivers' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ปัจจัยขับเคลื่อน
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>แนวโน้มการเติบโตรายไตรมาส</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="revenue" fill="#e5e7eb" name="รายได้" />
                  <Line yAxisId="right" type="monotone" dataKey="growthRate" stroke="#22c55e" strokeWidth={3} name="% การเติบโต" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>การเปรียบเทียบ YoY vs QoQ</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, '']} />
                  <Line type="monotone" dataKey="growthRate" stroke="#3b82f6" strokeWidth={3} name="QoQ Growth" />
                  <Line type="monotone" dataKey="yoyGrowth" stroke="#f59e0b" strokeWidth={3} name="YoY Growth" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'segments' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>การเติบโตตามประเภทบริการ</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={segmentGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="segment" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, 'การเติบโต']} />
                  <Bar dataKey="growth" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>รายละเอียดการเติบโตตามบริการ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {segmentGrowth.map((segment, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{segment.segment}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        segment.growth > 30 ? 'bg-green-100 text-green-800' :
                        segment.growth > 20 ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {segment.growth.toFixed(1)}%
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">ปัจจุบัน: </span>
                        <span className="font-medium">฿{segment.currentRevenue.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">ปีที่แล้ว: </span>
                        <span className="font-medium">฿{segment.lastYear.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${Math.min(segment.growth, 40) * 2.5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'branches' && (
        <Card>
          <CardHeader>
            <CardTitle>การเติบโตตามสาขารายไตรมาส</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={branchGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, '']} />
                <Bar dataKey="q1" fill="#ef4444" name="Q1" />
                <Bar dataKey="q2" fill="#f97316" name="Q2" />
                <Bar dataKey="q3" fill="#eab308" name="Q3" />
                <Bar dataKey="q4" fill="#22c55e" name="Q4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {selectedView === 'drivers' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ปัจจัยขับเคลื่อนการเติบโต</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {growthDrivers.map((driver, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{driver.factor}</h3>
                      <span className="text-lg font-bold text-green-600">
                        {driver.impact}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{driver.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${driver.impact * 2.5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>แผนเพิ่มการเติบโต</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">เป้าหมาย Q3</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• เพิ่มการเติบโตเป็น 25%</li>
                    <li>• ขยายสาขาใหม่ 1 แห่ง</li>
                    <li>• เพิ่มบริการใหม่ 2 รายการ</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">กลยุทธ์</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• เพิ่มงบการตลาดดิจิทัล</li>
                    <li>• ขยายโปรแกรม Referral</li>
                    <li>• พัฒนาแพ็กเกจบริการใหม่</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">ความเสี่ยง</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• การแข่งขันเพิ่มขึ้น</li>
                    <li>• ต้นทุนการดำเนินงานสูงขึ้น</li>
                    <li>• การขาดแคลนบุคลากร</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Growth Forecast */}
      <Card>
        <CardHeader>
          <CardTitle>การคาดการณ์การเติบโต</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Q3 2024</h4>
              <div className="text-2xl font-bold text-green-600">22.5%</div>
              <p className="text-sm text-gray-600">คาดการณ์การเติบโต</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Q4 2024</h4>
              <div className="text-2xl font-bold text-blue-600">25.8%</div>
              <p className="text-sm text-gray-600">คาดการณ์การเติบโต</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">ปี 2025</h4>
              <div className="text-2xl font-bold text-purple-600">28.2%</div>
              <p className="text-sm text-gray-600">เป้าหมายการเติบโต</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardGrowthRate;
