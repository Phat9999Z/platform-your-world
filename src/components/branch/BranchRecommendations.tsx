
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, MapPin, Users } from 'lucide-react';
import { branches } from '@/data/branchMockData';

// กรองเฉพาะสาขาจาก branchMockData
const branchAnalysis = [
  {
    id: 'BR001',
    branch: 'สาขาสยาม',
    status: 'excellent',
    revenue: 4200000,
    profitMargin: 33.3,
    customerGrowth: 18.5,
    recommendation: 'expand',
    reasons: ['รายได้สูงสุด', 'ลูกค้าเพิ่มขึ้นต่อเนื่อง', 'ทำเลดี'],
    action: 'ขยายพื้นที่บริการ',
    priority: 'high'
  },
  {
    id: 'BR002',
    branch: 'สาขาเอกมัย',
    status: 'good',
    revenue: 3800000,
    profitMargin: 34.2,
    customerGrowth: 15.2,
    recommendation: 'maintain',
    reasons: ['Profit margin สูงสุด', 'ประสิทธิภาพดี', 'ฐานลูกค้าคงที่'],
    action: 'รักษาระดับการดำเนินงาน',
    priority: 'medium'
  },
  {
    id: 'BR003',
    branch: 'สาขาทองหล่อ',
    status: 'average',
    revenue: 2900000,
    profitMargin: 33.8,
    customerGrowth: 12.8,
    recommendation: 'improve',
    reasons: ['รายได้ต่ำกว่าเป้า', 'การเติบโตช้า', 'แข่งขันสูง'],
    action: 'ปรับปรุงการตลาดและบริการ',
    priority: 'medium'
  }
].filter(x => branches.map(b => b.name).includes(x.branch));

const marketAnalysis = [
  {
    area: 'สยาม-ราชประสงค์',
    marketSize: 'ใหญ่',
    competition: 'สูง',
    potential: 'สูงมาก',
    demographics: 'วัยทำงาน 25-45',
    recommendation: 'เปิดสาขาเพิ่ม',
    status: 'recommended'
  },
  {
    area: 'เอกมัย-ทองหล่อ',
    marketSize: 'กลาง',
    competition: 'ปานกลาง',
    potential: 'สูง',
    demographics: 'วัยทำงาน 30-50',
    recommendation: 'เปิดสาขาใหม่',
    status: 'recommended'
  }
];

const BranchRecommendations = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'average': return 'bg-yellow-100 text-yellow-800';
      case 'concern': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'expand': return 'bg-green-500';
      case 'maintain': return 'bg-blue-500';
      case 'improve': return 'bg-yellow-500';
      case 'evaluate': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getMarketStatusColor = (status: string) => {
    switch (status) {
      case 'recommended': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'not-recommended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMarketIcon = (status: string) => {
    switch (status) {
      case 'recommended': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      case 'not-recommended': return <TrendingDown className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">คำแนะนำ: ปิด / เปิดสาขาใหม่</h1>
        <p className="text-gray-600 mt-1">วิเคราะห์และคำแนะนำเชิงกลยุทธ์สำหรับสาขา</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">แนะนำขยาย</p>
                <p className="text-2xl font-bold">{branchAnalysis.filter(b => b.recommendation === 'expand').length}</p>
                <p className="text-green-100 text-xs">สาขา</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">รักษาระดับ</p>
                <p className="text-2xl font-bold">{branchAnalysis.filter(b => b.recommendation === 'maintain').length}</p>
                <p className="text-blue-100 text-xs">สาขา</p>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">ต้องปรับปรุง</p>
                <p className="text-2xl font-bold">{branchAnalysis.filter(b => b.recommendation === 'improve').length}</p>
                <p className="text-yellow-100 text-xs">สาขา</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">พิจารณาปิด</p>
                <p className="text-2xl font-bold">0</p>
                <p className="text-red-100 text-xs">สาขา</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>การวิเคราะห์สาขาปัจจุบัน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {branchAnalysis.map((branch, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{branch.branch}</h3>
                    <Badge className={getStatusColor(branch.status)}>
                      {branch.status === 'excellent' ? 'ดีเยี่ยม' :
                       branch.status === 'good' ? 'ดี' :
                       branch.status === 'average' ? 'ปานกลาง' : 'ต้องเฝ้าระวัง'}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Priority</div>
                    <Badge variant={branch.priority === 'high' ? 'destructive' : 'secondary'}>
                      {branch.priority === 'high' ? 'สูง' : 'ปานกลาง'}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">รายได้</div>
                    <div className="text-lg font-bold">฿{branch.revenue.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Profit Margin</div>
                    <div className="text-lg font-bold">{branch.profitMargin}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Customer Growth</div>
                    <div className="text-lg font-bold">+{branch.customerGrowth}%</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">เหตุผล:</div>
                  <div className="flex flex-wrap gap-2">
                    {branch.reasons.map((reason, idx) => (
                      <Badge key={idx} variant="outline">{reason}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-700">คำแนะนำ:</div>
                    <div className="text-base font-medium">{branch.action}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full ${getRecommendationColor(branch.recommendation)}`}></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>การวิเคราะห์ตลาดสำหรับสาขาใหม่</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketAnalysis.map((market, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{market.area}</h3>
                  <Badge className={getMarketStatusColor(market.status)}>
                    <div className="flex items-center gap-1">
                      {getMarketIcon(market.status)}
                      {market.status === 'recommended' ? 'แนะนำ' :
                       market.status === 'pending' ? 'รอพิจารณา' : 'ไม่แนะนำ'}
                    </div>
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ขนาดตลาด:</span>
                    <span className="font-medium">{market.marketSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">การแข่งขัน:</span>
                    <span className="font-medium">{market.competition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ศักยภาพ:</span>
                    <span className="font-medium">{market.potential}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">กลุ่มลูกค้า:</span>
                    <span className="font-medium">{market.demographics}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <div className="text-sm font-medium text-gray-700">คำแนะนำ:</div>
                  <div className="text-sm">{market.recommendation}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BranchRecommendations;
