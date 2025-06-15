
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Users, TrendingUp, AlertTriangle, CheckCircle2, Plus } from 'lucide-react';

const TasksDashboard = () => {
  const stats = [
    { label: 'งานทั้งหมด', value: '245', icon: CalendarDays, color: 'text-blue-600' },
    { label: 'กำลังดำเนินการ', value: '87', icon: Clock, color: 'text-orange-600' },
    { label: 'เสร็จสิ้น', value: '128', icon: CheckCircle2, color: 'text-green-600' },
    { label: 'เกินกำหนด', value: '12', icon: AlertTriangle, color: 'text-red-600' }
  ];

  const recentTasks = [
    { id: 1, title: 'ประชุมวางแผนไตรมาส Q2', status: 'กำลังดำเนินการ', priority: 'สูง', assignee: 'ทีมบริหาร', dueDate: '2025-06-20' },
    { id: 2, title: 'วิเคราะห์ประสิทธิภาพสาขา', status: 'เสร็จสิ้น', priority: 'ปานกลาง', assignee: 'ฝ่ายการเงิน', dueDate: '2025-06-18' },
    { id: 3, title: 'จัดทำรายงานรายได้ประจำเดือน', status: 'เกินกำหนด', priority: 'สูง', assignee: 'ฝ่าย HR', dueDate: '2025-06-15' },
    { id: 4, title: 'อบรมพนักงานใหม่', status: 'รอดำเนินการ', priority: 'ปานกลาง', assignee: 'ทีมพัฒนา', dueDate: '2025-06-25' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'สูง': return 'bg-red-100 text-red-800';
      case 'ปานกลาง': return 'bg-yellow-100 text-yellow-800';
      case 'ต่ำ': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'เสร็จสิ้น': return 'bg-green-100 text-green-800';
      case 'กำลังดำเนินการ': return 'bg-blue-100 text-blue-800';
      case 'เกินกำหนด': return 'bg-red-100 text-red-800';
      case 'รอดำเนินการ': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ภาพรวมการจัดการงาน</h1>
          <p className="text-gray-600">ติดตามและบริหารงานทั้งองค์กร</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          สร้างงานใหม่
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Tasks */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>งานล่าสุด</CardTitle>
            <CardDescription>งานที่ต้องติดตามและดำเนินการ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{task.title}</h3>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <Badge className={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {task.assignee}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(task.dueDate).toLocaleDateString('th-TH')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>ประสิทธิภาพการทำงาน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">อัตราการทำงานเสร็จตามกำหนด</span>
                <span className="font-semibold text-green-600">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">เวลาเฉลี่ยในการทำงาน</span>
                <span className="font-semibold">3.2 วัน</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">ความพึงพอใจทีม</span>
                <span className="font-semibold text-blue-600">4.6/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">งานที่มอบหมายในสัปดาห์นี้</span>
                <span className="font-semibold">23</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Productivity */}
      <Card>
        <CardHeader>
          <CardTitle>ประสิทธิภาพทีมงาน</CardTitle>
          <CardDescription>การวิเคราะห์ประสิทธิภาพการทำงานของแต่ละทีม</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">ทีมการเงิน</div>
              <div className="text-xs text-green-600">↑ 12% จากเดือนที่แล้ว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">ทีม HR</div>
              <div className="text-xs text-green-600">↑ 8% จากเดือนที่แล้ว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">78%</div>
              <div className="text-sm text-gray-600">ทีมปฏิบัติการ</div>
              <div className="text-xs text-red-600">↓ 3% จากเดือนที่แล้ว</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TasksDashboard;
