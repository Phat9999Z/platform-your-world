
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, User, CheckCircle, AlertCircle, Plus, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StaffTasksList = () => {
  const { toast } = useToast();
  const [tasks] = useState([
    {
      id: 'T001',
      title: 'ติดตาม Claim ของคุณสมชาย',
      description: 'ตรวจสอบสถานะการเบิกประกันและอัพเดทลูกค้า',
      priority: 'high',
      status: 'in_progress',
      assignee: 'คุณมานะ',
      dueDate: '2024-06-17',
      progress: 60,
      category: 'claim',
      estimatedHours: 2,
      actualHours: 1.2
    },
    {
      id: 'T002',
      title: 'จัดเตรียมเอกสารสำหรับ Appointment',
      description: 'เตรียมไฟล์ผู้ป่วยและประวัติการรักษาสำหรับนัดหมายวันพรุ่งนี้',
      priority: 'medium',
      status: 'pending',
      assignee: 'คุณสุภาพร',
      dueDate: '2024-06-16',
      progress: 30,
      category: 'appointment',
      estimatedHours: 1.5,
      actualHours: 0.5
    },
    {
      id: 'T003',
      title: 'อัพเดทข้อมูลผู้ป่วยในระบบ',
      description: 'อัพเดทข้อมูลการติดต่อและประวัติการรักษาของผู้ป่วย',
      priority: 'low',
      status: 'completed',
      assignee: 'คุณวิไล',
      dueDate: '2024-06-15',
      progress: 100,
      category: 'patient',
      estimatedHours: 1,
      actualHours: 0.8
    }
  ]);

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    const labels = {
      high: 'สูง',
      medium: 'ปานกลาง',
      low: 'ต่ำ'
    };
    return (
      <Badge className={variants[priority as keyof typeof variants]}>
        {labels[priority as keyof typeof labels]}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-gray-100 text-gray-800',
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      overdue: 'bg-red-100 text-red-800'
    };
    const labels = {
      pending: 'รอดำเนินการ',
      in_progress: 'กำลังดำเนินการ',
      completed: 'เสร็จสิ้น',
      overdue: 'เลยกำหนด'
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  const totalHours = tasks.reduce((sum, task) => sum + task.actualHours, 0);
  const efficiency = tasks.reduce((sum, task) => sum + (task.actualHours / task.estimatedHours), 0) / tasks.length * 100;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">รายการงาน</h1>
          <p className="text-gray-600">จัดการและติดตามงานทั้งหมด</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            กรอง
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            เพิ่มงานใหม่
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
              <div className="text-sm text-gray-600">งานทั้งหมด</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{inProgressTasks.length}</div>
              <div className="text-sm text-gray-600">กำลังดำเนินการ</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedTasks.length}</div>
              <div className="text-sm text-gray-600">เสร็จสิ้น</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{efficiency.toFixed(0)}%</div>
              <div className="text-sm text-gray-600">ประสิทธิภาพ</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">ทั้งหมด ({tasks.length})</TabsTrigger>
          <TabsTrigger value="pending">รอดำเนินการ ({pendingTasks.length})</TabsTrigger>
          <TabsTrigger value="progress">กำลังดำเนินการ ({inProgressTasks.length})</TabsTrigger>
          <TabsTrigger value="completed">เสร็จสิ้น ({completedTasks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-4">
            {tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{task.title}</h3>
                        {getPriorityBadge(task.priority)}
                        {getStatusBadge(task.status)}
                      </div>
                      <p className="text-gray-600 mb-3">{task.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>{task.assignee}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{new Date(task.dueDate).toLocaleDateString('th-TH')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{task.actualHours}/{task.estimatedHours} ชม.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gray-400" />
                          <span>{task.progress}%</span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>ความคืบหน้า</span>
                          <span>{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        แก้ไข
                      </Button>
                      {task.status !== 'completed' && (
                        <Button size="sm">
                          อัพเดท
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="text-center py-8 text-gray-500">
            งานที่รอดำเนินการ - แสดงเฉพาะงานที่มีสถานะ "รอดำเนินการ"
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <div className="text-center py-8 text-gray-500">
            งานที่กำลังดำเนินการ - แสดงเฉพาะงานที่มีสถานะ "กำลังดำเนินการ"
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="text-center py-8 text-gray-500">
            งานที่เสร็จสิ้น - แสดงเฉพาะงานที่มีสถานะ "เสร็จสิ้น"
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffTasksList;
