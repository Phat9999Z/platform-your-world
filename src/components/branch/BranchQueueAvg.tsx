
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, TrendingDown, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const branchQueueData = [
  { branch: 'สาขาสยาม', avgWaitTime: 18, dailyQueues: 38, peakHour: '14:00-16:00', satisfaction: 4.2 },
  { branch: 'สาขาทองหล่อ', avgWaitTime: 22, dailyQueues: 33, peakHour: '15:00-17:00', satisfaction: 4.1 },
  { branch: 'สาขาอารีย์', avgWaitTime: 15, dailyQueues: 25, peakHour: '13:00-15:00', satisfaction: 4.5 },
  { branch: 'สาขาเซ็นทรัล', avgWaitTime: 12, dailyQueues: 18, peakHour: '16:00-18:00', satisfaction: 4.6 }
];

const hourlyQueuePattern = [
  { hour: '08:00', สยาม: 3, ทองหล่อ: 2, อารีย์: 2, เซ็นทรัล: 1 },
  { hour: '09:00', สยาม: 5, ทองหล่อ: 4, อารีย์: 3, เซ็นทรัล: 2 },
  { hour: '10:00', สยาม: 8, ทองหล่อ: 6, อารีย์: 5, เซ็นทรัล: 3 },
  { hour: '11:00', สยาม: 12, ทองหล่อ: 9, อารีย์: 7, เซ็นทรัล: 5 },
  { hour: '12:00', สยาม: 15, ทองหล่อ: 12, อารีย์: 10, เซ็นทรัล: 7 },
  { hour: '13:00', สยาม: 18, ทองหล่อ: 15, อารีย์: 12, เซ็นทรัล: 8 },
  { hour: '14:00', สยาม: 22, ทองหล่อ: 18, อารีย์: 15, เซ็นทรัล: 10 },
  { hour: '15:00', สยาม: 25, ทองหล่อ: 20, อารีย์: 16, เซ็นทรัล: 12 },
  { hour: '16:00', สยาม: 28, ทองหล่อ: 22, อารีย์: 18, เซ็นทรัล: 14 },
  { hour: '17:00', สยาม: 20, ทองหล่อ: 16, อารีย์: 13, เซ็นทรัล: 10 },
  { hour: '18:00', สยาม: 15, ทองหล่อ: 12, อารีย์: 8, เซ็นทรัล: 6 },
  { hour: '19:00', สยาม: 8, ทองหล่อ: 6, อารีย์: 4, เซ็นทรัล: 2 }
];

const weeklyQueueTrend = [
  { day: 'จันทร์', avgWait: 16, totalQueues: 114 },
  { day: 'อังคาร', avgWait: 18, totalQueues: 108 },
  { day: 'พุธ', avgWait: 19, totalQueues: 122 },
  { day: 'พฤหัส', avgWait: 21, totalQueues: 135 },
  { day: 'ศุกร์', avgWait: 23, totalQueues: 142 },
  { day: 'เสาร์', avgWait: 25, totalQueues: 156 },
  { day: 'อาทิตย์', avgWait: 20, totalQueues: 98 }
];

const BranchQueueAvg = () => {
  const totalDailyQueues = branchQueueData.reduce((sum, branch) => sum + branch.dailyQueues, 0);
  const avgWaitTimeOverall = branchQueueData.reduce((sum, branch) => sum + branch.avgWaitTime, 0) / branchQueueData.length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">คิวเฉลี่ยต่อวัน</h1>
        <p className="text-gray-600 mt-1">วิเคราะห์คิวและเวลารอของแต่ละสาขา</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">คิวรวมต่อวัน</p>
                <p className="text-2xl font-bold">{totalDailyQueues}</p>
                <p className="text-blue-100 text-xs">คิว</p>
              </div>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">เวลารอเฉลี่ย</p>
                <p className="text-2xl font-bold">{Math.round(avgWaitTimeOverall)}</p>
                <p className="text-orange-100 text-xs">นาที</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">สาขาที่มีคิวสั้นที่สุด</p>
                <p className="text-2xl font-bold">เซ็นทรัล</p>
                <p className="text-green-100 text-xs">12 นาที</p>
              </div>
              <TrendingDown className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">Peak Hour</p>
                <p className="text-2xl font-bold">14:00-16:00</p>
                <p className="text-red-100 text-xs">ช่วงเวลาที่แออุด</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>เวลารอเฉลี่ยตามสาขา</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchQueueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} นาที`, 'เวลารอ']} />
                <Bar dataKey="avgWaitTime" fill="#f59e0b" name="เวลารอเฉลี่ย" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>รูปแบบคิวตามช่วงเวลา</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyQueuePattern}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="สยาม" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="ทองหล่อ" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="อารีย์" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="เซ็นทรัล" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>แนวโน้มคิวรายวัน</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyQueueTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalQueues" fill="#3b82f6" name="จำนวนคิว" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>รายละเอียดคิวสาขา</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {branchQueueData.map((branch, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{branch.branch}</h3>
                    <p className="text-sm text-gray-600">Peak: {branch.peakHour}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{branch.avgWaitTime} นาที</div>
                    <div className="text-sm text-gray-600">{branch.dailyQueues} คิว/วัน</div>
                    <div className="text-xs">⭐ {branch.satisfaction}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BranchQueueAvg;
