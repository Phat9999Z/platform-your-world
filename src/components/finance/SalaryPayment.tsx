
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Search,
  Download,
  Plus
} from 'lucide-react';

const SalaryPayment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('2025-06');

  const payrollData = [
    {
      id: 1,
      employeeName: 'นายสมชาย ใจดี',
      position: 'หมอตา',
      baseSalary: 45000,
      overtime: 5000,
      bonus: 8000,
      deductions: 2000,
      netSalary: 56000,
      status: 'จ่ายแล้ว',
      paymentDate: '2025-06-01'
    },
    {
      id: 2,
      employeeName: 'นางสาววิภา สวยงาม',
      position: 'พยาบาล',
      baseSalary: 25000,
      overtime: 3000,
      bonus: 2000,
      deductions: 1500,
      netSalary: 28500,
      status: 'รอจ่าย',
      paymentDate: null
    },
    {
      id: 3,
      employeeName: 'นายประเสริฐ มั่งมี',
      position: 'เจ้าหน้าที่',
      baseSalary: 18000,
      overtime: 2000,
      bonus: 1000,
      deductions: 1000,
      netSalary: 20000,
      status: 'รอจ่าย',
      paymentDate: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'จ่ายแล้ว': return 'bg-green-100 text-green-800';
      case 'รอจ่าย': return 'bg-yellow-100 text-yellow-800';
      case 'ยกเลิก': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalSalary = payrollData.reduce((sum, emp) => sum + emp.netSalary, 0);
  const paidEmployees = payrollData.filter(emp => emp.status === 'จ่ายแล้ว').length;
  const pendingEmployees = payrollData.filter(emp => emp.status === 'รอจ่าย').length;

  const filteredData = payrollData.filter(emp =>
    emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จ่ายเงินเดือน</h1>
          <p className="text-gray-600">จัดการการจ่ายเงินเดือนและสวัสดิการพนักงาน</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            ส่งออกรายงาน
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            จ่ายเงินเดือนใหม่
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">พนักงานทั้งหมด</p>
                <p className="text-2xl font-bold">{payrollData.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">จ่ายแล้ว</p>
                <p className="text-2xl font-bold">{paidEmployees}</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">รอจ่าย</p>
                <p className="text-2xl font-bold">{pendingEmployees}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">เงินเดือนรวม</p>
                <p className="text-2xl font-bold">₿{totalSalary.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="ค้นหาพนักงาน..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="p-2 border rounded-lg"
              >
                <option value="2025-06">มิถุนายน 2568</option>
                <option value="2025-05">พฤษภาคม 2568</option>
                <option value="2025-04">เมษายน 2568</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payroll Table */}
      <Card>
        <CardHeader>
          <CardTitle>รายการเงินเดือน - {selectedMonth}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">ชื่อพนักงาน</th>
                  <th className="text-left p-4">ตำแหน่ง</th>
                  <th className="text-right p-4">เงินเดือนพื้นฐาน</th>
                  <th className="text-right p-4">OT</th>
                  <th className="text-right p-4">โบนัส</th>
                  <th className="text-right p-4">หัก</th>
                  <th className="text-right p-4">สุทธิ</th>
                  <th className="text-center p-4">สถานะ</th>
                  <th className="text-center p-4">การดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((employee) => (
                  <tr key={employee.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium">{employee.employeeName}</div>
                    </td>
                    <td className="p-4 text-gray-600">{employee.position}</td>
                    <td className="p-4 text-right">₿{employee.baseSalary.toLocaleString()}</td>
                    <td className="p-4 text-right">₿{employee.overtime.toLocaleString()}</td>
                    <td className="p-4 text-right">₿{employee.bonus.toLocaleString()}</td>
                    <td className="p-4 text-right text-red-600">₿{employee.deductions.toLocaleString()}</td>
                    <td className="p-4 text-right font-medium">₿{employee.netSalary.toLocaleString()}</td>
                    <td className="p-4 text-center">
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="outline">ดู</Button>
                        {employee.status === 'รอจ่าย' && (
                          <Button size="sm">จ่าย</Button>
                        )}
                      </div>
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

export default SalaryPayment;
