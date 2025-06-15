
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Eye, 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Calendar
} from 'lucide-react';

const LensClaims = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const claims = [
    {
      id: 'LC001',
      patientName: 'นายสมชาย ใจดี',
      lensType: 'Progressive',
      claimAmount: 15000,
      status: 'รอการอนุมัติ',
      submitDate: '2025-06-14',
      description: 'เลนส์โปรเกรสซีฟ มีปัญหาการมองเห็น'
    },
    {
      id: 'LC002',
      patientName: 'นางสาวมานี รักสวย',
      lensType: 'Single Vision',
      claimAmount: 8000,
      status: 'อนุมัติแล้ว',
      submitDate: '2025-06-13',
      description: 'เลนส์เดี่ยว เปลี่ยนเนื่องจากกรอบหัก'
    },
    {
      id: 'LC003',
      patientName: 'นายประเสริฐ มั่งมี',
      lensType: 'Bifocal',
      claimAmount: 12000,
      status: 'ปฏิเสธ',
      submitDate: '2025-06-12',
      description: 'เลนส์ไบโฟกัล ไม่อยู่ในเงื่อนไขการประกัน'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'อนุมัติแล้ว': return 'bg-green-100 text-green-800';
      case 'รอการอนุมัติ': return 'bg-yellow-100 text-yellow-800';
      case 'ปฏิเสธ': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'อนุมัติแล้ว': return <CheckCircle2 className="h-4 w-4" />;
      case 'รอการอนุมัติ': return <Clock className="h-4 w-4" />;
      case 'ปฏิเสธ': return <XCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredClaims = claims.filter(claim =>
    claim.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">เคลมเลนส์</h1>
          <p className="text-gray-600">จัดการการเคลมเลนส์และการประกันภัย</p>
        </div>
        <Button 
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          สร้างเคลมใหม่
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">เคลมทั้งหมด</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">รอการอนุมัติ</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">อนุมัติแล้ว</p>
                <p className="text-2xl font-bold">118</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">มูลค่ารวม</p>
                <p className="text-2xl font-bold">₿1.8M</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="ค้นหาเคลม..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              กรอง
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Claims List */}
      <Card>
        <CardHeader>
          <CardTitle>รายการเคลมเลนส์</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClaims.map((claim) => (
              <div key={claim.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(claim.status)}
                    <div>
                      <h3 className="font-medium text-lg">{claim.id}</h3>
                      <p className="text-gray-600">{claim.patientName}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(claim.status)}>
                    {claim.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">ประเภทเลนส์:</span>
                    <p className="font-medium">{claim.lensType}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">จำนวนเงิน:</span>
                    <p className="font-medium">₿{claim.claimAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">วันที่ส่งเคลม:</span>
                    <p className="font-medium">{new Date(claim.submitDate).toLocaleDateString('th-TH')}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">ดูรายละเอียด</Button>
                    <Button size="sm">อัปเดต</Button>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm text-gray-600">{claim.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">สร้างเคลมเลนส์ใหม่</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">ชื่อผู้ป่วย</label>
                <Input placeholder="ใส่ชื่อผู้ป่วย" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ประเภทเลนส์</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>เลือกประเภทเลนส์</option>
                  <option>Progressive</option>
                  <option>Single Vision</option>
                  <option>Bifocal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">จำนวนเงิน</label>
                <Input type="number" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">รายละเอียด</label>
                <textarea 
                  className="w-full p-2 border rounded-lg"
                  rows={3}
                  placeholder="อธิบายเหตุผลในการเคลม"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1"
                >
                  ยกเลิก
                </Button>
                <Button 
                  onClick={() => {
                    console.log('Creating lens claim...');
                    setShowCreateForm(false);
                  }}
                  className="flex-1"
                >
                  สร้างเคลม
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LensClaims;
