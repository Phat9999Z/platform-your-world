
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, CheckCircle2, XCircle, Plus, TrendingUp } from 'lucide-react';

const StaffClaimDashboard = () => {
  const stats = [
    { label: 'เคลมทั้งหมด', value: '156', icon: FileText, color: 'text-blue-600' },
    { label: 'รอดำเนินการ', value: '23', icon: Clock, color: 'text-orange-600' },
    { label: 'อนุมัติแล้ว', value: '118', icon: CheckCircle2, color: 'text-green-600' },
    { label: 'ปฏิเสธ', value: '15', icon: XCircle, color: 'text-red-600' }
  ];

  const recentClaims = [
    { id: 1, claimNumber: 'CLM001', patientName: 'นายสมชาย ใจดี', treatment: 'อุดฟัน', amount: '2,500', status: 'รอดำเนินการ', date: '2025-06-15' },
    { id: 2, claimNumber: 'CLM002', patientName: 'นางสาวมานี รักสวย', treatment: 'ขูดหินปูน', amount: '1,200', status: 'อนุมัติแล้ว', date: '2025-06-14' },
    { id: 3, claimNumber: 'CLM003', patientName: 'นายประเสริฐ มั่งมี', treatment: 'ถอนฟัน', amount: '800', status: 'รอดำเนินการ', date: '2025-06-14' },
    { id: 4, claimNumber: 'CLM004', patientName: 'นางวันดี สุขใจ', treatment: 'รักษารากฟัน', amount: '4,500', status: 'อนุมัติแล้ว', date: '2025-06-13' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'อนุมัติแล้ว': return 'bg-green-100 text-green-800';
      case 'รอดำเนินการ': return 'bg-orange-100 text-orange-800';
      case 'ปฏิเสธ': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ภาพรวมเคลมประกัน</h1>
          <p className="text-gray-600">จัดการและติดตามสถานะเคลมประกัน</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          สร้างเคลมใหม่
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
        {/* Recent Claims */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>เคลมล่าสุด</CardTitle>
            <CardDescription>รายการเคลมที่ส่งใหม่และกำลังดำเนินการ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{claim.claimNumber}</h3>
                      <p className="text-sm text-gray-600">{claim.patientName}</p>
                    </div>
                    <Badge className={getStatusColor(claim.status)}>
                      {claim.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span>{claim.treatment}</span>
                      <span className="font-medium">₿{claim.amount}</span>
                    </div>
                    <span>{new Date(claim.date).toLocaleDateString('th-TH')}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>สถิติเคลมเดือนนี้</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">อัตราอนุมัติ</span>
                <span className="font-semibold text-green-600">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">เวลาเฉลี่ยในการอนุมัติ</span>
                <span className="font-semibold">2.3 วัน</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">มูลค่าเคลมทั้งหมด</span>
                <span className="font-semibold text-blue-600">₿185,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">เคลมที่รอดำเนินการ</span>
                <span className="font-semibold text-orange-600">23 รายการ</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>ประสิทธิภาพการดำเนินการ</CardTitle>
          <CardDescription>สถิติการดำเนินการเคลมย้อนหลัง 6 เดือน</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">อัตราความพึงพอใจ</div>
              <div className="text-xs text-green-600 flex items-center justify-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                ↑ 5% จากเดือนที่แล้ว
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1.8</div>
              <div className="text-sm text-gray-600">วันเฉลี่ย (ดำเนินการ)</div>
              <div className="text-xs text-green-600 flex items-center justify-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                ↓ 0.5 วัน ดีขึ้น
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">₿2.1M</div>
              <div className="text-sm text-gray-600">มูลค่าเคลมทั้งหมด</div>
              <div className="text-xs text-green-600 flex items-center justify-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                ↑ 12% จากเดือนที่แล้ว
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffClaimDashboard;
