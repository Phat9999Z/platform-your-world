
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, TrendingDown, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { branches } from '@/data/branchMockData';

// ตัวอย่างเวลารอ/คิว (mock, ใช้งานเฉพาะสาขาที่มีใน branchMockData เท่านั้น)
const queueMock = {
  'สาขาสยาม': { avgWaitTime: 18, dailyQueues: 38, peakHour: '14:00-16:00', satisfaction: 4.2 },
  'สาขาเอกมัย': { avgWaitTime: 21, dailyQueues: 30, peakHour: '12:00-13:00', satisfaction: 4.0 },
  'สาขาทองหล่อ': { avgWaitTime: 22, dailyQueues: 33, peakHour: '15:00-17:00', satisfaction: 4.1 },
};

const branchQueueData = branches
  .map(branch => ({
    branch: branch.name,
    ...(queueMock[branch.name] || { avgWaitTime: '---', dailyQueues: '---', peakHour: '---', satisfaction: '---' }),
  }));

const hourlyQueuePattern = [
  { hour: '08:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 2 + Math.floor(Math.random() * 2)])) },
  { hour: '09:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 4 + Math.floor(Math.random() * 3)])) },
  { hour: '10:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 6 + Math.floor(Math.random() * 4)])) },
  { hour: '11:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 8 + Math.floor(Math.random() * 6)])) },
  { hour: '12:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 10 + Math.floor(Math.random() * 6)])) },
  { hour: '13:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 12 + Math.floor(Math.random() * 6)])) },
  { hour: '14:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 15 + Math.floor(Math.random() * 8)])) },
  { hour: '15:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 17 + Math.floor(Math.random() * 6)])) },
  { hour: '16:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 18 + Math.floor(Math.random() * 5)])) },
  { hour: '17:00', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 10 + Math.floor(Math.random() * 4)])) },
];

const weeklyQueueTrend = [
  { day: 'จันทร์', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 30 + Math.floor(Math.random() * 10)])) },
  { day: 'อังคาร', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 28 + Math.floor(Math.random() * 10)])) },
  { day: 'พุธ', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 32 + Math.floor(Math.random() * 12)])) },
  { day: 'พฤหัส', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 33 + Math.floor(Math.random() * 10)])) },
  { day: 'ศุกร์', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 35 + Math.floor(Math.random() * 13)])) },
  { day: 'เสาร์', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 37 + Math.floor(Math.random() * 14)])) },
  { day: 'อาทิตย์', ...Object.fromEntries(branches.map(b => [b.name.replace('สาขา', ''), 24 + Math.floor(Math.random() * 10)])) },
];

const BranchQueueAvg = () => {
  const totalDailyQueues = branchQueueData.reduce((sum, branch) => {
    return typeof branch.dailyQueues === 'number' ? sum + branch.dailyQueues : sum;
  }, 0);
  const avgWaitTimeOverall =
    branchQueueData.filter(b => typeof b.avgWaitTime === 'number').reduce((sum, branch) => sum + branch.avgWaitTime, 0) /
    (branchQueueData.filter(b => typeof b.avgWaitTime === 'number').length || 1);

  // คิวสั้นที่สุด
  const shortest = branchQueueData.reduce(
    (min, cur) => (typeof cur.avgWaitTime === 'number' && cur.avgWaitTime < min.avgWaitTime ? cur : min),
    { avgWaitTime: Infinity, branch: '---', peakHour: '---' }
  );

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
                <p className="text-2xl font-bold">{isNaN(avgWaitTimeOverall) ? '---' : Math.round(avgWaitTimeOverall)}</p>
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
                <p className="text-2xl font-bold">{shortest.branch.replace('สาขา', '')}</p>
                <p className="text-green-100 text-xs">{typeof shortest.avgWaitTime === 'number' ? `${shortest.avgWaitTime} นาที` : '---'}</p>
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
                <p className="text-2xl font-bold">{shortest.peakHour}</p>
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
                {branches.map((b, i) => (
                  <Line key={b.id} type="monotone" dataKey={b.name.replace('สาขา', '')} stroke={["#ef4444", "#3b82f6", "#10b981", "#a21caf", "#f59e0b"][i % 5]} strokeWidth={2} />
                ))}
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
                {branches.map((b, i) => (
                  <Bar key={b.id} dataKey={b.name.replace('สาขา', '')} fill={["#3b82f6", "#f59e0b", "#10b981", "#6366f1"][i % 4]} name={b.name} />
                ))}
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
