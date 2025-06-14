
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  LineChart, 
  Timer,
  MessageCircle,
  Zap,
  Bell,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const Alerts = () => {
  const alertsData = [
    {
      title: 'ประสิทธิภาพการสื่อสาร',
      description: 'ภาพรวมระบบแชทและการสื่อสาร',
      icon: MessageSquare,
      value: '95.2%',
      change: '+2.1%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'ปริมาณแชท (LINE / FB)',
      description: 'จำนวนการสนทนาต่อวัน',
      icon: LineChart,
      value: '1,250',
      change: '+15.8%',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Response Time',
      description: 'เวลาตอบกลับเฉลี่ย',
      icon: Timer,
      value: '2.5 นาที',
      change: '-12.3%',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'คำถามนอกสคริปต์',
      description: 'คำถามที่บอทตอบไม่ได้',
      icon: MessageCircle,
      value: '8.7%',
      change: '+3.2%',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Bot Fail Rate',
      description: 'อัตราการทำงานผิดพลาดของบอท',
      icon: Zap,
      value: '4.1%',
      change: '-1.8%',
      color: 'from-red-500 to-red-600'
    }
  ];

  const recentAlerts = [
    {
      type: 'warning',
      message: 'Response time เกิน 5 นาที สำหรับสาขาสีลม',
      time: '5 นาทีที่แล้ว',
      status: 'pending'
    },
    {
      type: 'success',
      message: 'ระบบแชทบอทกลับมาทำงานปกติแล้ว',
      time: '15 นาทีที่แล้ว',
      status: 'resolved'
    },
    {
      type: 'error',
      message: 'LINE API มีปัญหาการเชื่อมต่อ',
      time: '1 ชั่วโมงที่แล้ว',
      status: 'critical'
    },
    {
      type: 'info',
      message: 'มีคำถามใหม่ที่ต้องเพิ่มในฐานข้อมูลบอท',
      time: '2 ชั่วโมงที่แล้ว',
      status: 'pending'
    }
  ];

  return (
    <div>
      <Routes>
        <Route index element={
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">ChatSystem Alert Dashboard</h1>
                <p className="text-gray-600">ระบบแจ้งเตือนและติดตามประสิทธิภาพการสื่อสาร</p>
              </div>
            </div>

            {/* Alert Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alertsData.map((alert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${alert.color} rounded-lg flex items-center justify-center mb-4`}>
                      <alert.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{alert.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{alert.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-gray-900">{alert.value}</div>
                      <div className={`text-sm font-medium ${
                        alert.change.startsWith('+') && alert.title !== 'คำถามนอกสคริปต์' && alert.title !== 'Bot Fail Rate' 
                          ? 'text-green-600' 
                          : alert.change.startsWith('-') && (alert.title === 'Response Time' || alert.title === 'Bot Fail Rate')
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                        {alert.change}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-blue-600" />
                  แจ้งเตือนล่าสุด
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        {alert.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                        {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {alert.type === 'error' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                        {alert.type === 'info' && <MessageCircle className="h-5 w-5 text-blue-600" />}
                        <div>
                          <p className="font-medium text-gray-900">{alert.message}</p>
                          <p className="text-sm text-gray-500">{alert.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          alert.status === 'critical' ? 'bg-red-100 text-red-800' :
                          alert.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {alert.status === 'critical' ? 'วิกฤต' :
                           alert.status === 'pending' ? 'รอดำเนินการ' : 'แก้ไขแล้ว'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>การดำเนินการด่วน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col gap-2 bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="w-6 h-6" />
                    <span>ตรวจสอบแชท</span>
                  </Button>
                  <Button className="h-20 flex flex-col gap-2 bg-green-600 hover:bg-green-700">
                    <Timer className="w-6 h-6" />
                    <span>ปรับ Response Time</span>
                  </Button>
                  <Button className="h-20 flex flex-col gap-2 bg-purple-600 hover:bg-purple-700">
                    <Zap className="w-6 h-6" />
                    <span>รีสตาร์ทบอท</span>
                  </Button>
                  <Button className="h-20 flex flex-col gap-2 bg-orange-600 hover:bg-orange-700">
                    <Bell className="w-6 h-6" />
                    <span>ตั้งค่าแจ้งเตือน</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default Alerts;
