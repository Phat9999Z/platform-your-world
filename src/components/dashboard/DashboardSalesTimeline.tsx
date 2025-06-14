
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, Users, Calendar, BarChart3, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const hourlyData = [
  { hour: '08:00', sales: 45000, bookings: 12, avgTicket: 3750 },
  { hour: '09:00', sales: 78000, bookings: 18, avgTicket: 4333 },
  { hour: '10:00', sales: 125000, bookings: 25, avgTicket: 5000 },
  { hour: '11:00', sales: 156000, bookings: 32, avgTicket: 4875 },
  { hour: '12:00', sales: 89000, bookings: 15, avgTicket: 5933 },
  { hour: '13:00', sales: 67000, bookings: 12, avgTicket: 5583 },
  { hour: '14:00', sales: 145000, bookings: 28, avgTicket: 5179 },
  { hour: '15:00', sales: 178000, bookings: 35, avgTicket: 5086 },
  { hour: '16:00', sales: 234000, bookings: 42, avgTicket: 5571 },
  { hour: '17:00', sales: 198000, bookings: 38, avgTicket: 5211 },
  { hour: '18:00', sales: 167000, bookings: 28, avgTicket: 5964 },
  { hour: '19:00', sales: 123000, bookings: 22, avgTicket: 5591 }
];

const weeklyTrendData = [
  { day: 'จันทร์', sales: 785000, bookings: 156, peak: '16:00' },
  { day: 'อังคาร', sales: 892000, bookings: 178, peak: '15:00' },
  { day: 'พุธ', sales: 934000, bookings: 185, peak: '16:00' },
  { day: 'พฤหัสบดี', sales: 1023000, bookings: 198, peak: '17:00' },
  { day: 'ศุกร์', sales: 1245000, bookings: 225, peak: '16:00' },
  { day: 'เสาร์', sales: 1456000, bookings: 285, peak: '14:00' },
  { day: 'อาทิตย์', sales: 1289000, bookings: 245, peak: '15:00' }
];

const seasonalData = [
  { month: 'ม.ค.', peak: '16:00', avgSales: 145000, reason: 'วันหยุดยาว' },
  { month: 'ก.พ.', peak: '15:00', avgSales: 132000, reason: 'วาเลนไทน์' },
  { month: 'มี.ค.', peak: '17:00', avgSales: 156000, reason: 'ช่วงเปิดเทอม' },
  { month: 'เม.ย.', peak: '14:00', avgSales: 189000, reason: 'เทศกาลสงกรานต์' },
  { month: 'พ.ค.', peak: '16:00', avgSales: 167000, reason: 'ฤดูร้อน' },
  { month: 'มิ.ย.', peak: '15:00', avgSales: 178000, reason: 'ปิดเทอม' }
];

const DashboardSalesTimeline = () => {
  const [selectedView, setSelectedView] = useState('hourly');
  const [selectedMetric, setSelectedMetric] = useState('sales');

  const peakHour = hourlyData.reduce((prev, current) => 
    (prev.sales > current.sales) ? prev : current
  );

  const totalDailySales = hourlyData.reduce((sum, item) => sum + item.sales, 0);
  const totalDailyBookings = hourlyData.reduce((sum, item) => sum + item.bookings, 0);
  const avgTicketSize = totalDailySales / totalDailyBookings;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ยอดขายตามช่วงเวลา</h1>
          <p className="text-gray-600 mt-1">วิเคราะห์แพทเทิร์นการขายและจองตลอดทั้งวัน</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedView}
            onChange={(e) => setSelectedView(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="hourly">รายชั่วโมง</option>
            <option value="weekly">รายสัปดาห์</option>
            <option value="seasonal">รายเดือน</option>
          </select>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออกรายงาน
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">ยอดขายวันนี้</p>
                <p className="text-2xl font-bold">฿{totalDailySales.toLocaleString()}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">การจองวันนี้</p>
                <p className="text-2xl font-bold">{totalDailyBookings}</p>
              </div>
              <Users className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">ช่วงเวลาที่ดีที่สุด</p>
                <p className="text-2xl font-bold">{peakHour.hour}</p>
              </div>
              <Clock className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">ค่าเฉลี่ย/ครั้ง</p>
                <p className="text-2xl font-bold">฿{Math.round(avgTicketSize).toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metric Selection */}
      <div className="flex space-x-4 border-b">
        <button 
          onClick={() => setSelectedMetric('sales')}
          className={`px-4 py-2 border-b-2 ${selectedMetric === 'sales' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ยอดขาย
        </button>
        <button 
          onClick={() => setSelectedMetric('bookings')}
          className={`px-4 py-2 border-b-2 ${selectedMetric === 'bookings' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          จำนวนจอง
        </button>
        <button 
          onClick={() => setSelectedMetric('avgTicket')}
          className={`px-4 py-2 border-b-2 ${selectedMetric === 'avgTicket' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ค่าเฉลี่ย/ครั้ง
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'hourly' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedMetric === 'sales' && 'ยอดขายรายชั่วโมง'}
                {selectedMetric === 'bookings' && 'จำนวนจองรายชั่วโมง'}
                {selectedMetric === 'avgTicket' && 'ค่าเฉลี่ยต่อครั้งรายชั่วโมง'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => {
                      if (selectedMetric === 'sales' || selectedMetric === 'avgTicket') {
                        return [`฿${Number(value).toLocaleString()}`, name];
                      }
                      return [value, name];
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey={selectedMetric} 
                    stroke="#3b82f6" 
                    fill="#93c5fd" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>การเปรียบเทียบรายชั่วโมง</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#10b981" name="ยอดขาย" />
                  <Bar dataKey="bookings" fill="#f59e0b" name="จำนวนจอง" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'weekly' && (
        <Card>
          <CardHeader>
            <CardTitle>แนวโน้มรายสัปดาห์</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={weeklyTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'ยอดขาย']} />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {selectedView === 'seasonal' && (
        <Card>
          <CardHeader>
            <CardTitle>แพทเทิร์นตามฤดูกาล</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {seasonalData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{item.month}</h3>
                    <p className="text-sm text-gray-600">ช่วงเวลาดีที่สุด: {item.peak}</p>
                    <p className="text-xs text-gray-500">{item.reason}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      ฿{item.avgSales.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">ยอดขายเฉลี่ย/วัน</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analysis Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>สรุปการวิเคราะห์</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800">ช่วงเวลาที่ดีที่สุด</h4>
                <p className="text-sm text-blue-600">
                  16:00-17:00 น. เป็นช่วงที่มียอดขายสูงสุด
                </p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800">แนวโน้มการจอง</h4>
                <p className="text-sm text-green-600">
                  วันเสาร์มีการจองสูงสุด 285 ครั้ง
                </p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-semibold text-orange-800">ค่าเฉลี่ยต่อครั้ง</h4>
                <p className="text-sm text-orange-600">
                  ช่วงเย็นมีค่าเฉลี่ยสูงกว่าช่วงเช้า
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ข้อเสนอแนะ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800">เพิ่มพนักงาน</h4>
                <p className="text-sm text-yellow-600">
                  ช่วง 15:00-18:00 ควรเพิ่มพนักงานเพื่อรองรับลูกค้า
                </p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-semibold text-purple-800">โปรโมชั่น</h4>
                <p className="text-sm text-purple-600">
                  ช่วงเช้าควรมีโปรโมชั่นเพื่อดึงลูกค้า
                </p>
              </div>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold text-indigo-800">การตลาด</h4>
                <p className="text-sm text-indigo-600">
                  โฟกัสการตลาดในช่วงวันหยุดและเทศกาล
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSalesTimeline;
