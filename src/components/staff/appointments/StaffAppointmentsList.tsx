
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Plus, Search, Clock, User, Phone, Eye, Edit, X } from 'lucide-react';
import { mockAppointments } from '@/data/staffMockData';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const StaffAppointmentsList = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [appointments, setAppointments] = useState(mockAppointments);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctor_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.external_ref.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      booked: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      no_show: 'bg-orange-100 text-orange-800'
    };
    const labels = {
      booked: 'จองแล้ว',
      completed: 'เสร็จสิ้น',
      cancelled: 'ยกเลิก',
      no_show: 'ไม่มา'
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const handleStatusChange = (appointmentId: string, newStatus: string) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === appointmentId ? { ...apt, status: newStatus as any } : apt
    ));
    
    toast({
      title: "อัพเดทสถานะสำเร็จ",
      description: `เปลี่ยนสถานะนัดหมายเป็น ${newStatus === 'completed' ? 'เสร็จสิ้น' : newStatus === 'cancelled' ? 'ยกเลิก' : 'ไม่มา'}`,
    });
  };

  const todayAppointments = appointments.filter(apt => {
    const appointmentDate = new Date(apt.scheduled_at).toDateString();
    const today = new Date().toDateString();
    return appointmentDate === today;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">รายการนัดหมาย</h1>
          <p className="text-gray-600">จัดการนัดหมายผู้ป่วยทั้งหมด ({filteredAppointments.length} รายการ)</p>
        </div>
        <div className="flex gap-2">
          <Link to="/staff/appointments/calendar">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              ปฏิทิน
            </Button>
          </Link>
          <Link to="/staff/appointments/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              จองนัดใหม่
            </Button>
          </Link>
        </div>
      </div>

      {/* Today's Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{todayAppointments.length}</div>
              <div className="text-sm text-gray-600">นัดวันนี้</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {todayAppointments.filter(a => a.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-600">เสร็จสิ้นแล้ว</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {todayAppointments.filter(a => a.status === 'booked').length}
              </div>
              <div className="text-sm text-gray-600">รอการรักษา</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {todayAppointments.filter(a => a.status === 'no_show').length}
              </div>
              <div className="text-sm text-gray-600">ไม่มา</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            รายการนัดหมายทั้งหมด
          </CardTitle>
          <CardDescription>จัดการและติดตามนัดหมายผู้ป่วย</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="ค้นหาชื่อผู้ป่วย, หมอ, หรือหมายเลขนัด..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="เลือกสถานะ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">สถานะทั้งหมด</SelectItem>
                <SelectItem value="booked">จองแล้ว</SelectItem>
                <SelectItem value="completed">เสร็จสิ้น</SelectItem>
                <SelectItem value="cancelled">ยกเลิก</SelectItem>
                <SelectItem value="no_show">ไม่มา</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{appointment.customer_name}</h3>
                      {getStatusBadge(appointment.status)}
                      <span className="text-sm text-gray-500">#{appointment.external_ref}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>
                          {new Date(appointment.scheduled_at).toLocaleDateString('th-TH')} เวลา {new Date(appointment.scheduled_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{appointment.doctor_name}</span>
                      </div>
                      <div className="text-gray-600">
                        {appointment.type_name}
                      </div>
                      <div className="text-gray-600">
                        ระยะเวลา: {appointment.duration_minutes} นาที
                      </div>
                    </div>
                    
                    {appointment.notes && (
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-gray-700">หมายเหตุ: </span>
                        <span className="text-gray-600">{appointment.notes}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    {appointment.status === 'booked' && (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleStatusChange(appointment.id, 'completed')}
                          className="text-green-600 hover:text-green-700"
                        >
                          เสร็จสิ้น
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleStatusChange(appointment.id, 'no_show')}
                          className="text-orange-600 hover:text-orange-700"
                        >
                          ไม่มา
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      ดูรายละเอียด
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      แก้ไข
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              {searchTerm || statusFilter !== 'all' ? 'ไม่พบนัดหมายที่ค้นหา' : 'ยังไม่มีนัดหมาย'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffAppointmentsList;
