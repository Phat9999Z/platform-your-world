
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Search, AlertTriangle, TrendingDown, TrendingUp, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StaffProductInventory = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [inventory] = useState([
    {
      id: 'P001',
      name: 'เลนส์แว่นสายตา Progressive',
      category: 'เลนส์',
      brand: 'ESSILOR',
      sku: 'ESS-PROG-001',
      currentStock: 25,
      minStock: 10,
      maxStock: 100,
      price: 3500,
      cost: 2100,
      location: 'A1-B2',
      lastRestocked: '2024-06-10',
      status: 'in_stock'
    },
    {
      id: 'P002',
      name: 'กรอบแว่น Titanium',
      category: 'กรอบ',
      brand: 'RAYBAN',
      sku: 'RB-TI-002',
      currentStock: 5,
      minStock: 8,
      maxStock: 50,
      price: 4200,
      cost: 2500,
      location: 'B2-C1',
      lastRestocked: '2024-06-08',
      status: 'low_stock'
    },
    {
      id: 'P003',
      name: 'น้ำยาล้างเลนส์',
      category: 'อุปกรณ์',
      brand: 'OPTI-FREE',
      sku: 'OF-CLEAN-003',
      currentStock: 0,
      minStock: 15,
      maxStock: 200,
      price: 280,
      cost: 180,
      location: 'C1-D1',
      lastRestocked: '2024-05-25',
      status: 'out_of_stock'
    }
  ]);

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string, currentStock: number, minStock: number) => {
    if (status === 'out_of_stock' || currentStock === 0) {
      return <Badge variant="destructive">หมดสต็อก</Badge>;
    } else if (status === 'low_stock' || currentStock <= minStock) {
      return <Badge className="bg-orange-100 text-orange-800">สต็อกต่ำ</Badge>;
    } else {
      return <Badge className="bg-green-100 text-green-800">พร้อมใช้</Badge>;
    }
  };

  const lowStockItems = inventory.filter(item => item.currentStock <= item.minStock && item.currentStock > 0);
  const outOfStockItems = inventory.filter(item => item.currentStock === 0);
  const totalValue = inventory.reduce((sum, item) => sum + (item.currentStock * item.cost), 0);

  const handleRestock = (productId: string) => {
    toast({
      title: "เพิ่มสต็อกสำเร็จ",
      description: `เพิ่มสต็อกสินค้า ${productId} เรียบร้อยแล้ว`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">คลังสินค้า</h1>
          <p className="text-gray-600">จัดการสต็อกและคลังสินค้า</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          เพิ่มสินค้าใหม่
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">รายการสินค้า</p>
                <p className="text-2xl font-bold">{inventory.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">สต็อกต่ำ</p>
                <p className="text-2xl font-bold text-orange-600">{lowStockItems.length}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">หมดสต็อก</p>
                <p className="text-2xl font-bold text-red-600">{outOfStockItems.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">มูลค่าสต็อก</p>
                <p className="text-2xl font-bold text-green-600">
                  ฿{totalValue.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ค้นหาสินค้า, SKU, หรือแบรนด์..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">กรอง</Button>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">ทั้งหมด ({inventory.length})</TabsTrigger>
          <TabsTrigger value="low">สต็อกต่ำ ({lowStockItems.length})</TabsTrigger>
          <TabsTrigger value="out">หมดสต็อก ({outOfStockItems.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                รายการสินค้าทั้งหมด
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredInventory.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{item.name}</h3>
                          {getStatusBadge(item.status, item.currentStock, item.minStock)}
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                          <div>
                            <span className="font-medium">SKU:</span> {item.sku}
                          </div>
                          <div>
                            <span className="font-medium">แบรนด์:</span> {item.brand}
                          </div>
                          <div>
                            <span className="font-medium">ตำแหน่ง:</span> {item.location}
                          </div>
                          <div>
                            <span className="font-medium">เติมล่าสุด:</span> {new Date(item.lastRestocked).toLocaleDateString('th-TH')}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="bg-blue-50 p-2 rounded">
                            <div className="font-medium text-blue-800">สต็อกปัจจุบัน</div>
                            <div className="text-lg font-bold text-blue-600">{item.currentStock}</div>
                          </div>
                          <div className="bg-orange-50 p-2 rounded">
                            <div className="font-medium text-orange-800">สต็อกขั้นต่ำ</div>
                            <div className="text-lg font-bold text-orange-600">{item.minStock}</div>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <div className="font-medium text-green-800">ราคาขาย</div>
                            <div className="text-lg font-bold text-green-600">฿{item.price.toLocaleString()}</div>
                          </div>
                          <div className="bg-purple-50 p-2 rounded">
                            <div className="font-medium text-purple-800">มูลค่าสต็อก</div>
                            <div className="text-lg font-bold text-purple-600">
                              ฿{(item.currentStock * item.cost).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="outline">
                          แก้ไข
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleRestock(item.id)}
                          disabled={item.currentStock >= item.maxStock}
                        >
                          เติมสต็อก
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredInventory.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    ไม่พบสินค้าที่ค้นหา
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="low">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">สินค้าที่สต็อกต่ำ</CardTitle>
              <CardDescription>สินค้าที่ต้องเติมสต็อกโดยด่วน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                แสดงเฉพาะสินค้าที่สต็อกต่ำกว่าที่กำหนด
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="out">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">สินค้าที่หมดสต็อก</CardTitle>
              <CardDescription>สินค้าที่ต้องสั่งซื้อเพิ่มโดยด่วน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                แสดงเฉพาะสินค้าที่หมดสต็อก
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffProductInventory;
