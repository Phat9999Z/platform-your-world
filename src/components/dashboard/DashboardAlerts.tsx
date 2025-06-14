
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock, DollarSign, TrendingDown, Activity } from 'lucide-react';

const DashboardAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Burn Rate เกิน 90%',
      description: 'ค่าใช้จ่ายเดือนนี้สูงกว่าเป้าหมาย 7.7% - ใกล้เกินขีดจำกัด 90%',
      time: '2 ชั่วโมงที่แล้ว',
      action: 'ตรวจสอบรายจ่ายด่วน'
    },
    {
      id: 2,
      type: 'warning',
      icon: Clock,
      title: 'Runway เหลือน้อยกว่า 60 วัน',
      description: 'เงินสดคงเหลือเพียงพอใช้งาน 59 วัน ตาม Burn Rate ปัจจุบัน',
      time: '6 ชั่วโมงที่แล้ว',
      action: 'วางแผนเพิ่มเงินทุน'
    },
    {
      id: 3,
      type: 'info',
      icon: DollarSign,
      title: 'Owner Withdrawal ปกติ',
      description: 'การเบิกเงินของเจ้าของ 15% ของกำไรสุทธิ - อยู่ในเกณฑ์ที่เหมาะสม',
      time: '1 วันที่แล้ว',
      action: 'ไม่ต้องดำเนินการ'
    },
    {
      id: 4,
      type: 'warning',
      icon: TrendingDown,
      title: 'รายได้ลดลงต่อเนื่อง',
      description: 'รายได้ 3 สัปดาห์ล่าสุดลดลง 12% เทียบกับช่วงเดียวกันเดือนที่แล้ว',
      time: '3 วันที่แล้ว',
      action: 'วิเคราะห์สาเหตุ'
    },
    {
      id: 5,
      type: 'critical',
      icon: Activity,
      title: 'No-Show Rate สูงผิดปกติ',
      description: 'อัตราลูกค้าไม่มาตามนัดสูงถึง 15% ในสัปดาห์นี้',
      time: '12 ชั่วโมงที่แล้ว',
      action: 'ปรับปรุงระบบแจ้งเตือน'
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'info': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      case 'info': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getActionColor = (type: string) => {
    switch (type) {
      case 'critical': return 'bg-red-600 hover:bg-red-700';
      case 'warning': return 'bg-yellow-600 hover:bg-yellow-700';
      case 'info': return 'bg-blue-600 hover:bg-blue-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Alert ฉุกเฉิน!</h1>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
            2 Critical
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            2 Warning
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-red-900">2</div>
                <div className="text-sm text-red-600">Critical Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-yellow-900">2</div>
                <div className="text-sm text-yellow-600">Warnings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">1</div>
                <div className="text-sm text-blue-600">Info</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-gray-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Total Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={getAlertColor(alert.type)}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <alert.icon className={`h-6 w-6 ${getIconColor(alert.type)} mt-1`} />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{alert.title}</h3>
                    <p className="text-gray-700 mb-3">{alert.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{alert.time}</span>
                      <button className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors ${getActionColor(alert.type)}`}>
                        {alert.action}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardAlerts;
