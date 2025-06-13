
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const chartData = [
  { day: "จ", income: 15000, expenses: 8000 },
  { day: "อ", income: 22000, expenses: 12000 },
  { day: "พ", income: 18000, expenses: 9000 },
  { day: "พฤ", income: 25000, expenses: 11000 },
  { day: "ศ", income: 30000, expenses: 15000 },
  { day: "ส", income: 35000, expenses: 18000 },
  { day: "อา", income: 20000, expenses: 10000 },
];

export function RevenueChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">รายได้รายสัปดาห์</CardTitle>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">สัปดาห์นี้</SelectItem>
            <SelectItem value="last-week">สัปดาห์ที่แล้ว</SelectItem>
            <SelectItem value="this-month">เดือนนี้</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>รายได้</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>ค่าใช้จ่าย</span>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-40 gap-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="flex flex-col items-center w-full relative h-32">
                  <div 
                    className="w-full bg-green-500 rounded-t mb-1"
                    style={{ height: `${(data.income / 35000) * 100}%` }}
                  ></div>
                  <div 
                    className="w-full bg-red-500 rounded-t"
                    style={{ height: `${(data.expenses / 35000) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{data.day}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">฿165,000</p>
              <p className="text-sm text-gray-500">รายได้รวม</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">฿83,000</p>
              <p className="text-sm text-gray-500">ค่าใช้จ่ายรวม</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
