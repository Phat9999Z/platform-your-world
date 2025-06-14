
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, AlertTriangle, TrendingUp, HelpCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const offScriptData = [
  { time: '08:00', totalQuestions: 45, offScript: 8, percentage: 17.8 },
  { time: '10:00', totalQuestions: 67, offScript: 15, percentage: 22.4 },
  { time: '12:00', totalQuestions: 89, offScript: 25, percentage: 28.1 },
  { time: '14:00', totalQuestions: 78, offScript: 18, percentage: 23.1 },
  { time: '16:00', totalQuestions: 56, offScript: 12, percentage: 21.4 },
  { time: '18:00', totalQuestions: 34, offScript: 6, percentage: 17.6 }
];

const questionCategories = [
  { category: 'ราคาการรักษา', count: 45, percentage: 35, color: '#3b82f6' },
  { category: 'ขั้นตอนการจอง', count: 28, percentage: 22, color: '#10b981' },
  { category: 'ข้อมูลแพทย์', count: 20, percentage: 16, color: '#f59e0b' },
  { category: 'เวลาทำการ', count: 18, percentage: 14, color: '#ef4444' },
  { category: 'อื่นๆ', count: 17, percentage: 13, color: '#8b5cf6' }
];

const commonOffScriptQuestions = [
  { question: 'มีประกันสังคมใช้ได้ไหม?', frequency: 23, category: 'การเงิน' },
  { question: 'ขับรถมาทำตาได้ไหม?', frequency: 18, category: 'การรักษา' },
  { question: 'อายุเท่าไหร่ถึงจะผ่าตัดได้?', frequency: 15, category: 'การรักษา' },
  { question: 'จอดรถที่ไหน?', frequency: 12, category: 'สถานที่' },
  { question: 'มีส่วนลดไหม?', frequency: 11, category: 'การเงิน' },
  { question: 'รอนานไหม?', frequency: 9, category: 'เวลา' }
];

const OffScript = () => {
  const totalQuestions = offScriptData.reduce((sum, item) => sum + item.totalQuestions, 0);
  const totalOffScript = offScriptData.reduce((sum, item) => sum + item.offScript, 0);
  const avgOffScriptRate = (totalOffScript / totalQuestions * 100);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">คำถามนอกสคริปต์</h1>
        <p className="text-gray-600 mt-1">วิเคราะห์คำถามที่ระบบ AI ตอบไม่ได้และต้องส่งต่อเจ้าหน้าที่</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">คำถามนอกสคริปต์</p>
                <p className="text-2xl font-bold">{totalOffScript}</p>
              </div>
              <HelpCircle className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">คำถามทั้งหมด</p>
                <p className="text-2xl font-bold">{totalQuestions}</p>
              </div>
              <MessageCircle className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">อัตราเฉลี่ย</p>
                <p className="text-2xl font-bold">{avgOffScriptRate.toFixed(1)}%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">แนวโน้ม</p>
                <p className="text-2xl font-bold">-2.3%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>คำถามนอกสคริปต์ตามช่วงเวลา</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={offScriptData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalQuestions" fill="#d1d5db" name="คำถามทั้งหมด" />
                <Bar dataKey="offScript" fill="#f59e0b" name="นอกสคริปต์" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>หมวดหมู่คำถามนอกสคริปต์</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={questionCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) => `${category}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {questionCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>คำถามยอดนิยมที่ต้องปรับปรุงสคริปต์</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {commonOffScriptQuestions.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{item.question}</p>
                  <p className="text-sm text-gray-600">หมวดหมู่: {item.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">ความถี่</p>
                    <p className="text-lg font-semibold">{item.frequency}</p>
                  </div>
                  <Button size="sm" variant="outline">เพิ่มในสคริปต์</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>สถิติรายละเอียด</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">ช่วงเวลา</th>
                  <th className="px-6 py-3">คำถามทั้งหมด</th>
                  <th className="px-6 py-3">นอกสคริปต์</th>
                  <th className="px-6 py-3">อัตราส่วน</th>
                  <th className="px-6 py-3">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {offScriptData.map((item, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">{item.time}</td>
                    <td className="px-6 py-4">{item.totalQuestions}</td>
                    <td className="px-6 py-4">{item.offScript}</td>
                    <td className="px-6 py-4">{item.percentage.toFixed(1)}%</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.percentage < 20 ? 'bg-green-100 text-green-800' : 
                        item.percentage < 25 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.percentage < 20 ? 'ดี' : item.percentage < 25 ? 'ปานกลาง' : 'ต้องปรับปรุง'}
                      </span>
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

export default OffScript;
