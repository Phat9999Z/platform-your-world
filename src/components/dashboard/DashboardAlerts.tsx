
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, AlertCircle, CheckCircle, Clock, TrendingDown, TrendingUp, Download, Bell, Settings } from 'lucide-react';

const criticalAlerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Burn Rate เกินเป้าหมาย',
    description: 'Burn Rate เพิ่มขึ้น 12.5% จากเดือนที่แล้ว',
    impact: 'สูง',
    timestamp: '2024-06-14 10:30',
    category: 'การเงิน',
    actionRequired: true,
    resolved: false
  },
  {
    id: 2,
    type: 'critical',
    title: 'Runway เหลือน้อย',
    description: 'เงินสดคงเหลือพอใช้เพียง 52 วัน',
    impact: 'สูงมาก',
    timestamp: '2024-06-14 09:15',
    category: 'การเงิน',
    actionRequired: true,
    resolved: false
  },
  {
    id: 3,
    type: 'warning',
    title: 'Customer Satisfaction ลดลง',
    description: 'คะแนนความพึงพอใจลดลงจาก 4.8 เป็น 4.6',
    impact: 'ปานกลาง',
    timestamp: '2024-06-14 08:45',
    category: 'บริการ',
    actionRequired: true,
    resolved: false
  }
];

const warningAlerts = [
  {
    id: 4,
    type: 'warning',
    title: 'Staff Utilization ต่ำ',
    description: 'สาขาเซ็นทรัลมี utilization เพียง 85%',
    impact: 'ปานกลาง',
    timestamp: '2024-06-13 16:20',
    category: 'ทรัพยากรบุคคล',
    actionRequired: false,
    resolved: false
  },
  {
    id: 5,
    type: 'warning',
    title: 'No-show Rate เพิ่มขึ้น',
    description: 'อัตราการไม่มาตามนัดเพิ่มขึ้น 15%',
    impact: 'ปานกลาง',
    timestamp: '2024-06-13 14:15',
    category: 'ปฏิบัติการ',
    actionRequired: false,
    resolved: false
  },
  {
    id: 6,
    type: 'info',
    title: 'การเติบโตของรายได้',
    description: 'รายได้เพิ่มขึ้น 18.5% จากไตรมาสที่แล้ว',
    impact: 'บวก',
    timestamp: '2024-06-13 12:00',
    category: 'การเงิน',
    actionRequired: false,
    resolved: false
  }
];

const performanceMetrics = [
  { metric: 'Total Alerts', current: 26, change: '+3', trend: 'up' },
  { metric: 'Critical', current: 2, change: '+1', trend: 'up' },
  { metric: 'Resolved Today', current: 8, change: '+2', trend: 'up' },
  { metric: 'Avg Response Time', current: '15 นาที', change: '-5', trend: 'down' }
];

const alertCategories = [
  { category: 'การเงิน', count: 8, critical: 2, color: 'red' },
  { category: 'ปฏิบัติการ', count: 6, critical: 0, color: 'orange' },
  { category: 'บริการ', count: 5, critical: 1, color: 'yellow' },
  { category: 'ทรัพยากรบุคคล', count: 4, critical: 0, color: 'blue' },
  { category: 'การตลาด', count: 3, critical: 0, color: 'green' }
];

const alertHistory = [
  { date: '14 มิ.ย.', total: 12, resolved: 8, critical: 2 },
  { date: '13 มิ.ย.', total: 15, resolved: 12, critical: 1 },
  { date: '12 มิ.ย.', total: 9, resolved: 9, critical: 0 },
  { date: '11 มิ.ย.', total: 11, resolved: 10, critical: 1 },
  { date: '10 มิ.ย.', total: 8, resolved: 8, critical: 0 }
];

const DashboardAlerts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allAlerts = [...criticalAlerts, ...warningAlerts];
  const filteredAlerts = allAlerts.filter(alert => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'critical') return alert.type === 'critical';
    if (selectedFilter === 'warning') return alert.type === 'warning';
    if (selectedFilter === 'info') return alert.type === 'info';
    return true;
  }).filter(alert => {
    if (selectedCategory === 'all') return true;
    return alert.category === selectedCategory;
  });

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'info': return <CheckCircle className="h-5 w-5 text-blue-600" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'info': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Alert System</h1>
          <p className="text-gray-600 mt-1">ระบบแจ้งเตือนและติดตามปัญหาสำคัญ</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="all">ทั้งหมด</option>
            <option value="critical">วิกฤต</option>
            <option value="warning">เตือน</option>
            <option value="info">ข้อมูล</option>
          </select>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="all">ทุกหมวด</option>
            <option value="การเงิน">การเงิน</option>
            <option value="ปฏิบัติการ">ปฏิบัติการ</option>
            <option value="บริการ">บริการ</option>
            <option value="ทรัพยากรบุคคล">ทรัพยากรบุคคล</option>
          </select>
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            ตั้งค่า
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออก
          </Button>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.current}</p>
                </div>
                <div className="flex items-center">
                  {metric.trend === 'up' ? 
                    <TrendingUp className="h-6 w-6 text-red-500" /> : 
                    <TrendingDown className="h-6 w-6 text-green-500" />
                  }
                  <span className={`ml-1 text-sm ${metric.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Critical Alerts Section */}
      {criticalAlerts.length > 0 && (
        <Card className="border-red-200">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              แจ้งเตือนวิกฤต ({criticalAlerts.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {criticalAlerts.map((alert, index) => (
                <div key={alert.id} className={`p-4 border-b last:border-b-0 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getAlertIcon(alert.type)}
                      <div>
                        <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {alert.timestamp}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 rounded">{alert.category}</span>
                          <span className={`px-2 py-1 rounded ${
                            alert.impact === 'สูงมาก' ? 'bg-red-200 text-red-800' :
                            alert.impact === 'สูง' ? 'bg-orange-200 text-orange-800' :
                            'bg-yellow-200 text-yellow-800'
                          }`}>
                            {alert.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {alert.actionRequired && (
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          แก้ไขทันที
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        ดูรายละเอียด
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            การแจ้งเตือนทั้งหมด ({filteredAlerts.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {filteredAlerts.map((alert, index) => (
              <div key={alert.id} className={`p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getAlertIcon(alert.type)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.timestamp}
                        </span>
                        <span className="px-2 py-1 bg-gray-200 rounded">{alert.category}</span>
                        <span className={`px-2 py-1 rounded ${
                          alert.type === 'critical' ? 'bg-red-100 text-red-800' :
                          alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {alert.type === 'critical' ? 'วิกฤต' :
                           alert.type === 'warning' ? 'เตือน' : 'ข้อมูล'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      ดูรายละเอียด
                    </Button>
                    {!alert.resolved && (
                      <Button size="sm" variant="outline">
                        ทำเครื่องหมายแก้ไขแล้ว
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alert Categories & History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การแจ้งเตือนตามหมวดหมู่</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{category.category}</h3>
                    <p className="text-sm text-gray-600">
                      {category.critical > 0 && (
                        <span className="text-red-600">{category.critical} วิกฤต, </span>
                      )}
                      รวม {category.count} รายการ
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">{category.count}</div>
                    {category.critical > 0 && (
                      <div className="text-sm text-red-600 font-medium">
                        {category.critical} วิกฤต
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ประวัติการแจ้งเตือน 5 วันล่าสุด</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alertHistory.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{day.date}</h3>
                    <p className="text-sm text-gray-600">
                      แก้ไขแล้ว {day.resolved}/{day.total} รายการ
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{day.total}</div>
                    {day.critical > 0 && (
                      <div className="text-sm text-red-600">
                        {day.critical} วิกฤต
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>การดำเนินการด่วน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">ต้องดำเนินการทันที</h4>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• ลด Burn Rate ภายใน 2 สัปดาห์</li>
                <li>• หาแหล่งเงินทุนเพิ่มเติม</li>
                <li>• ปรับปรุงระบบการเงิน</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">ควรติดตาม</h4>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• ปรับปรุง Customer Satisfaction</li>
                <li>• เพิ่ม Staff Utilization</li>
                <li>• ลด No-show Rate</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">การติดตามต่อเนื่อง</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• รักษาแนวโน้มการเติบโต</li>
                <li>• ติดตามประสิทธิภาพสาขา</li>
                <li>• วิเคราะห์ข้อมูลเพิ่มเติม</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardAlerts;
