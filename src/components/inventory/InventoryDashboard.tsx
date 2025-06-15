
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, TrendingDown, AlertTriangle, ShoppingCart, Plus, BarChart3 } from 'lucide-react';

const InventoryDashboard = () => {
  const stats = [
    { label: 'รายการสินค้าทั้งหมด', value: '1,247', icon: Package, color: 'text-blue-600' },
    { label: 'สินค้าใกล้หมด', value: '23', icon: AlertTriangle, color: 'text-orange-600' },
    { label: 'สินค้าหมดสต็อก', value: '8', icon: TrendingDown, color: 'text-red-600' },
    { label: 'คำสั่งซื้อรอดำเนินการ', value: '12', icon: ShoppingCart, color: 'text-green-600' }
  ];

  const lowStockItems = [
    { id: 1, name: 'เครื่องมือทำฟัน A1', current: 5, minimum: 10, category: 'เครื่องมือ' },
    { id: 2, name: 'วัสดุอุดฟัน Premium', current: 2, minimum: 15, category: 'วัสดุ' },
    { id: 3, name: 'เข็มฉีดยาชา', current: 8, minimum: 20, category: 'อุปกรณ์' },
    { id: 4, name: 'ผ้าปิดปาก', current: 12, minimum: 25, category: 'วัสดุสิ้นเปลือง' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ภาพรวมคลังสินค้า</h1>
          <p className="text-gray-600">ติดตามและจัดการสินค้าคงคลัง</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          เพิ่มสินค้าใหม่
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
        {/* Low Stock Items */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>สินค้าใกล้หมด</CardTitle>
            <CardDescription>รายการสินค้าที่ต้องเติมสต็อก</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="text-red-600">คงเหลือ: {item.current}</span>
                      <span>ขั้นต่ำ: {item.minimum}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      สั่งซื้อ
                    </Button>
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
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Package className="h-4 w-4 mr-2" />
                เช็คสต็อกสินค้า
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                สร้างใบสั่งซื้อ
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                รายงานการใช้งาน
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                แจ้งเตือนสินค้าหมด
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Summary */}
      <Card>
        <CardHeader>
          <CardTitle>สรุปมูลค่าสินค้าคงคลัง</CardTitle>
          <CardDescription>มูลค่าสินค้าคงคลังแยกตามหมวดหมู่</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₿2.4M</div>
              <div className="text-sm text-gray-600">เครื่องมือทันตกรรม</div>
              <div className="text-xs text-green-600">↑ 5% จากเดือนที่แล้ว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">₿850K</div>
              <div className="text-sm text-gray-600">วัสดุอุดฟัน</div>
              <div className="text-xs text-green-600">↑ 8% จากเดือนที่แล้ว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">₿320K</div>
              <div className="text-sm text-gray-600">วัสดุสิ้นเปลือง</div>
              <div className="text-xs text-red-600">↓ 2% จากเดือนที่แล้ว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">₿180K</div>
              <div className="text-sm text-gray-600">ยาและเคมีภัณฑ์</div>
              <div className="text-xs text-green-600">↑ 12% จากเดือนที่แล้ว</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryDashboard;
