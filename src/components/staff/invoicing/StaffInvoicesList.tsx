
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Receipt, Plus, Search, Download, Eye, Edit, CreditCard, AlertCircle } from 'lucide-react';
import { mockInvoices } from '@/data/staffMockData';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const StaffInvoicesList = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [invoices, setInvoices] = useState(mockInvoices);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.external_ref.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.payment_status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-orange-100 text-orange-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    const labels = {
      paid: 'ชำระแล้ว',
      pending: 'รอชำระ',
      cancelled: 'ยกเลิก'
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const handleMarkAsPaid = (invoiceId: string) => {
    setInvoices(prev => prev.map(inv => 
      inv.id === invoiceId ? { ...inv, payment_status: 'paid' as const } : inv
    ));
    
    toast({
      title: "อัพเดทสถานะสำเร็จ",
      description: "เปลี่ยนสถานะเป็น 'ชำระแล้ว' เรียบร้อย",
    });
  };

  // Summary calculations
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.total_amount, 0);
  const paidAmount = invoices.filter(inv => inv.payment_status === 'paid').reduce((sum, inv) => sum + inv.total_amount, 0);
  const pendingAmount = invoices.filter(inv => inv.payment_status === 'pending').reduce((sum, inv) => sum + inv.total_amount, 0);
  const pendingCount = invoices.filter(inv => inv.payment_status === 'pending').length;

  const handlePrintInvoice = (invoice: any) => {
    toast({
      title: "กำลังพิมพ์ใบเสร็จ",
      description: `พิมพ์ใบเสร็จ ${invoice.external_ref} สำหรับ ${invoice.customer_name}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ใบเสร็จรับเงิน</h1>
          <p className="text-gray-600">จัดการใบเสร็จและการชำระเงิน ({filteredInvoices.length} รายการ)</p>
        </div>
        <div className="flex gap-2">
          <Link to="/staff/invoicing/payment">
            <Button variant="outline" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              รับชำระ
            </Button>
          </Link>
          <Link to="/staff/invoicing/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              ออกใบเสร็จ
            </Button>
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">฿{totalAmount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">ยอดรวมทั้งหมด</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">฿{paidAmount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">ชำระแล้ว</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">฿{pendingAmount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">รอชำระ</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{pendingCount}</div>
              <div className="text-sm text-gray-600">รายการค้างชำระ</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {pendingCount > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-orange-800">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">แจ้งเตือน: มี {pendingCount} รายการรอการชำระเงิน มูลค่า ฿{pendingAmount.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            รายการใบเสร็จทั้งหมด
          </CardTitle>
          <CardDescription>จัดการและติดตามใบเสร็จและการชำระเงิน</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="ค้นหาชื่อลูกค้าหรือหมายเลขใบเสร็จ..." 
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
                <SelectItem value="paid">ชำระแล้ว</SelectItem>
                <SelectItem value="pending">รอชำระ</SelectItem>
                <SelectItem value="cancelled">ยกเลิก</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredInvoices.map((invoice) => (
              <div key={invoice.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">#{invoice.external_ref}</h3>
                      {getStatusBadge(invoice.payment_status)}
                      <span className="text-sm text-gray-500">
                        {new Date(invoice.created_at).toLocaleDateString('th-TH')}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium">ลูกค้า:</span>
                        <div className="text-gray-600">{invoice.customer_name}</div>
                      </div>
                      <div>
                        <span className="font-medium">วิธีชำระ:</span>
                        <div className="text-gray-600">{invoice.payment_method_name}</div>
                      </div>
                      <div>
                        <span className="font-medium">ยอดรวม:</span>
                        <div className="text-gray-600 font-bold">฿{invoice.total_amount.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="font-medium">VAT:</span>
                        <div className="text-gray-600">฿{invoice.vat_amount.toLocaleString()}</div>
                      </div>
                    </div>
                    
                    {/* Invoice Items */}
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">รายการ:</h4>
                      <div className="space-y-1">
                        {invoice.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.service_name} x{item.quantity}</span>
                            <span>฿{item.total_price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    {invoice.payment_status === 'pending' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleMarkAsPaid(invoice.id)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <CreditCard className="h-4 w-4 mr-1" />
                        ชำระแล้ว
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handlePrintInvoice(invoice)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      พิมพ์
                    </Button>
                    
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      ดู
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

          {filteredInvoices.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              {searchTerm || statusFilter !== 'all' ? 'ไม่พบใบเสร็จที่ค้นหา' : 'ยังไม่มีใบเสร็จ'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffInvoicesList;
