
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, Plus, Search, Phone, Mail, Eye, Edit } from 'lucide-react';
import { mockPatients } from '@/data/staffMockData';
import { Link } from 'react-router-dom';

const StaffPatientsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients] = useState(mockPatients);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getGenderBadge = (gender: string) => {
    const variants = {
      male: 'bg-blue-100 text-blue-800',
      female: 'bg-pink-100 text-pink-800',
      other: 'bg-gray-100 text-gray-800'
    };
    const labels = {
      male: 'ชาย',
      female: 'หญิง',
      other: 'อื่นๆ'
    };
    return (
      <Badge className={variants[gender as keyof typeof variants]}>
        {labels[gender as keyof typeof labels]}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">รายชื่อผู้ป่วย</h1>
          <p className="text-gray-600">จัดการข้อมูลผู้ป่วยทั้งหมด ({filteredPatients.length} คน)</p>
        </div>
        <Link to="/staff/patients/create">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            เพิ่มผู้ป่วยใหม่
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            รายชื่อผู้ป่วย
          </CardTitle>
          <CardDescription>ผู้ป่วยทั้งหมดในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="ค้นหาชื่อ, เบอร์โทร, หรืออีเมล..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{patient.name}</h3>
                      {getGenderBadge(patient.gender)}
                      <span className="text-sm text-gray-500">
                        อายุ {new Date().getFullYear() - new Date(patient.dob).getFullYear()} ปี
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{patient.email}</span>
                      </div>
                      <div className="text-gray-600">
                        ลงทะเบียน: {new Date(patient.created_at).toLocaleDateString('th-TH')}
                      </div>
                    </div>
                    
                    {patient.medical_history && (
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-gray-700">ประวัติการรักษา: </span>
                        <span className="text-gray-600">{patient.medical_history}</span>
                      </div>
                    )}
                    
                    {patient.allergies && patient.allergies !== 'ไม่มี' && (
                      <div className="mt-1 text-sm">
                        <span className="font-medium text-orange-700">ภูมิแพ้: </span>
                        <span className="text-orange-600">{patient.allergies}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Link to={`/staff/patients/profile/${patient.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        ดูข้อมูล
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      แก้ไข
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPatients.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              {searchTerm ? 'ไม่พบผู้ป่วยที่ค้นหา' : 'ยังไม่มีข้อมูลผู้ป่วย'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffPatientsList;
