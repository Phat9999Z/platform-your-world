
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, AlertTriangle, TrendingUp, DollarSign, Calendar, Target, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const runwayData = [
  { month: 'ม.ค.', cashOnHand: 125000000, burnRate: 1800000, runway: 69 },
  { month: 'ก.พ.', cashOnHand: 123500000, burnRate: 1850000, runway: 67 },
  { month: 'มี.ค.', cashOnHand: 124380000, burnRate: 1920000, runway: 65 },
  { month: 'เม.ย.', cashOnHand: 125530000, burnRate: 2050000, runway: 61 },
  { month: 'พ.ค.', cashOnHand: 126330000, burnRate: 2100000, runway: 60 },
  { month: 'มิ.ย.', ชOnHand: 127550000, burnRate: 2180000, runway: 58 },
  { month: 'ก.ค.', cashOnHand: 128900000, burnRate: 2250000, runway: 57 },
  { month: 'ส.ค.', cashOnHand: 129900000, burnRate: 2300000, runway: 56 },
  { month: 'ก.ย.', cashOnHand: 131300000, burnRate: 2400000, runway: 55 },
  { month: 'ต.ค.', cashOnHand: 132900000, burnRate: 2500000, runway: 53 },
  { month: 'พ.ย.', cashOnHand: 134350000, burnRate: 2450000, runway: 55 },
  { month: 'ธ.ค.', cashOnHand: 136050000, burnRate: 2600000, runway: 52 }
];

const scenarioAnalysis = [
  { scenario: 'ปัจจุบัน', burnRate: 2600000, runway: 52, status: 'warning' },
  { scenario: 'ลดค่าใช้จ่าย 10%', burnRate: 2340000, runway: 58, status: 'good' },
  { scenario: 'ลดค่าใช้จ่าย 20%', burnRate: 2080000, runway: 65, status: 'excellent' },
  { scenario: 'เพิ่มรายได้ 15%', burnRate: 2600000, runway: 60, status: 'good' },
  { scenario: 'กรณีเลวร้าย', burnRate: 3120000, runway: 44, status: 'danger' }
];

const cashFlowProjection = [
  { month: 'ธ.ค.', cash: 136050000, type: 'actual' },
  { month: 'ม.ค.', cash: 133450000, type: 'projection' },
  { month: 'ก.พ.', cash: 130850000, type: 'projection' },
  { month: 'มี.ค.', cash: 128250000, type: 'projection' },
  { month: 'เม.ย.', cash: 125650000, type: 'projection' },
  { month: 'พ.ค.', cash: 123050000, type: 'projection' },
  { month: 'มิ.ย.', cash: 120450000, type: 'projection' }
];

const mitigationActions = [
  { action: 'ลดพนักงาน 5%', impact: 455000, newRunway: 58, difficulty: 'hard' },
  { action: 'เจรจาค่าเช่าใหม่', impact: 200000, newRunway: 55, difficulty: 'medium' },
  { action: 'ปรับปรุงประสิทธิภาพ', impact: 300000, newRunway: 57, difficulty: 'medium' },
  { action: 'เพิ่มบริการใหม่', impact: -400000, newRunway: 62, difficulty: 'easy' },
  { action: 'หยุดการตลาดชั่วคราว', impact: 260000, newRunway: 56, difficulty: 'easy' }
];

const DashboardRunway = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedScenario, setSelectedScenario] = useState('current');

  const currentRunway = runwayData[runwayData.length - 1].runway;
  const previousRunway = runwayData[runwayData.length - 2].runway;
  const runwayChange = currentRunway - previousRunway;
  const currentCash = runwayData[runwayData.length - 1].cashOnHand;
  const currentBurnRate = runwayData[runwayData.length - 1].burnRate;

  const getRunwayStatus = (runway: number) => {
    if (runway > 60) return { color: 'green', status: 'ปลอดภัย' };
    if (runway > 45) return { color: 'yellow', status: 'ระวัง' };
    return { color: 'red', status: 'อันตราย' };
  };

  const runwayStatus = getRunwayStatus(currentRunway);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Runway Analysis</h1>
          <p className="text-gray-600 mt-1">วิเคราะห์ระยะเวลาที่เงินสดคงเหลือพอใช้</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedScenario}
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="current">สถานการณ์ปัจจุบัน</option>
            <option value="optimistic">สถานการณ์ดี</option>
            <option value="pessimistic">สถานการณ์เลวร้าย</option>
          </select>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            ส่งออกรายงาน
          </Button>
        </div>
      </div>

      {/* Alert Section */}
      {currentRunway < 60 && (
        <Card className={`border-${runwayStatus.color === 'red' ? 'red' : 'yellow'}-200 bg-${runwayStatus.color === 'red' ? 'red' : 'yellow'}-50`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className={`h-6 w-6 text-${runwayStatus.color === 'red' ? 'red' : 'yellow'}-600`} />
              <div>
                <h3 className={`font-semibold text-${runwayStatus.color === 'red' ? 'red' : 'yellow'}-800`}>
                  แจ้งเตือน: Runway {runwayStatus.status}
                </h3>
                <p className={`text-sm text-${runwayStatus.color === 'red' ? 'red' : 'yellow'}-600`}>
                  เงินสดคงเหลือพอใช้ได้เพียง {currentRunway} วัน ควรดำเนินการแก้ไขทันที
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className={`bg-gradient-to-r from-${runwayStatus.color}-500 to-${runwayStatus.color}-600 text-white`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-${runwayStatus.color}-100`}>Runway ปัจจุบัน</p>
                <p className="text-2xl font-bold">{currentRunway} วัน</p>
              </div>
              <Clock className={`h-8 w-8 text-${runwayStatus.color}-200`} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">เงินสดคงเหลือ</p>
                <p className="text-2xl font-bold">฿{(currentCash / 1000000).toFixed(0)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">การเปลี่ยนแปลง</p>
                <p className="text-2xl font-bold">
                  {runwayChange > 0 ? '+' : ''}{runwayChange} วัน
                </p>
              </div>
              {runwayChange > 0 ? 
                <TrendingUp className="h-8 w-8 text-orange-200" /> : 
                <AlertTriangle className="h-8 w-8 text-orange-200" />
              }
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Burn Rate</p>
                <p className="text-2xl font-bold">฿{(currentBurnRate / 1000000).toFixed(1)}M</p>
              </div>
              <Target className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Tabs */}
      <div className="flex space-x-4 border-b">
        <button 
          onClick={() => setSelectedView('overview')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          ภาพรวม
        </button>
        <button 
          onClick={() => setSelectedView('scenarios')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'scenarios' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          สถานการณ์จำลอง
        </button>
        <button 
          onClick={() => setSelectedView('actions')}
          className={`px-4 py-2 border-b-2 ${selectedView === 'actions' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
        >
          แผนแก้ไข
        </button>
      </div>

      {/* Charts based on selected view */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>แนวโน้ม Runway</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={runwayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} วัน`, 'Runway']} />
                  <Line type="monotone" dataKey="runway" stroke="#ef4444" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>คาดการณ์เงินสด</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={cashFlowProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`฿${Number(value).toLocaleString()}`, 'เงินสด']} />
                  <Area 
                    type="monotone" 
                    dataKey="cash" 
                    stroke="#3b82f6" 
                    fill="#93c5fd" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'scenarios' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>การวิเคราะห์สถานการณ์</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scenarioAnalysis.map((scenario, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{scenario.scenario}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        scenario.status === 'excellent' ? 'bg-green-100 text-green-800' :
                        scenario.status === 'good' ? 'bg-blue-100 text-blue-800' :
                        scenario.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {scenario.runway} วัน
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Burn Rate: ฿{scenario.burnRate.toLocaleString()}/เดือน
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          scenario.status === 'excellent' ? 'bg-green-600' :
                          scenario.status === 'good' ? 'bg-blue-600' :
                          scenario.status === 'warning' ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${Math.min(scenario.runway, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>เปรียบเทียบสถานการณ์</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={scenarioAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="scenario" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} วัน`, 'Runway']} />
                  <Bar dataKey="runway" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedView === 'actions' && (
        <Card>
          <CardHeader>
            <CardTitle>แผนการแก้ไขและผลกระทบ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mitigationActions.map((action, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{action.action}</h3>
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        action.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        action.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {action.difficulty === 'easy' ? 'ง่าย' :
                         action.difficulty === 'medium' ? 'ปานกลาง' : 'ยาก'}
                      </span>
                      <span className="text-lg font-bold text-blue-600">
                        {action.newRunway} วัน
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">ผลกระทบ: </span>
                      <span className={`font-medium ${action.impact > 0 ? 'text-green-600' : 'text-blue-600'}`}>
                        {action.impact > 0 ? 'ประหยัด' : 'เพิ่มรายได้'} ฿{Math.abs(action.impact).toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Runway ใหม่: </span>
                      <span className="font-medium text-blue-600">
                        +{action.newRunway - currentRunway} วัน
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(action.newRunway / 70) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Critical Actions */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-700 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            การดำเนินการเร่งด่วน
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">ระยะสั้น (1-2 สัปดาห์)</h4>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• หยุดการตลาดที่ไม่จำเป็น</li>
                <li>• เจรจาต่อรองค่าเช่า</li>
                <li>• ปรับแผนการจ้างงาน</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">ระยะกลาง (1 เดือน)</h4>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• เพิ่มบริการใหม่ที่มี ROI สูง</li>
                <li>• ปรับปรุงประสิทธิภาพ</li>
                <li>• หาแหล่งเงินทุนเพิ่มเติม</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">ระยะยาว (3 เดือน)</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• ขยายฐานลูกค้า</li>
                <li>• พัฒนาบริการใหม่</li>
                <li>• ปรับโมเดลธุรกิจ</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardRunway;
