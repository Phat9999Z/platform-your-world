
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Search, Filter } from 'lucide-react';

const AllStaff = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">รายชื่อพนักงานทั้งหมด</h1>
      <p className="text-gray-600">พร้อมเงินเดือน, ตำแหน่ง, สาขา</p>
      
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="ค้นหาพนักงาน..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          ตัวกรอง
        </Button>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="text-left p-4">ชื่อ-นามสกุล</th>
                    <th className="text-left p-4">ตำแหน่ง</th>
                    <th className="text-left p-4">แผนก</th>
                    <th className="text-left p-4">สาขา</th>
                    <th className="text-left p-4">เงินเดือน</th>
                    <th className="text-left p-4">สถานะ</th>
                    <th className="text-left p-4">การจัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">นพ.สมชาย รักษาดี</div>
                          <div className="text-sm text-gray-600">EMP001</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">จักษุแพทย์อาวุโส</td>
                    <td className="p-4">แผนกจักษุวิทยา</td>
                    <td className="p-4">สาขาหลัก</td>
                    <td className="p-4">฿120,000</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">ปฏิบัติงาน</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">แก้ไข</Button>
                        <Button size="sm" variant="outline">ดูรายละเอียด</Button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-pink-600" />
                        </div>
                        <div>
                          <div className="font-medium">นพ.หญิง วิภาวดี ใสสะอาด</div>
                          <div className="text-sm text-gray-600">EMP002</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">จักษุแพทย์</td>
                    <td className="p-4">แผนกจักษุวิทยา</td>
                    <td className="p-4">สาขาหลัก</td>
                    <td className="p-4">฿100,000</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">ปฏิบัติงาน</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">แก้ไข</Button>
                        <Button size="sm" variant="outline">ดูรายละเอียด</Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">นาง สมหญิง ดูแลดี</div>
                          <div className="text-sm text-gray-600">EMP003</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">พยาบาลหัวหน้า</td>
                    <td className="p-4">แผนกพยาบาล</td>
                    <td className="p-4">สาขาหลัก</td>
                    <td className="p-4">฿45,000</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">ปฏิบัติงาน</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">แก้ไข</Button>
                        <Button size="sm" variant="outline">ดูรายละเอียด</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllStaff;
