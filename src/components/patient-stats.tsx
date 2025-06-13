
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const patientData = [
  {
    category: "ผู้ป่วยใหม่",
    count: 45,
    total: 100,
    percentage: 45,
    color: "bg-gradient-to-r from-emerald-400 to-emerald-500",
  },
  {
    category: "ผู้ป่วยเก่า",
    count: 78,
    total: 100, 
    percentage: 78,
    color: "bg-gradient-to-r from-blue-400 to-blue-500",
  },
  {
    category: "ตรวจร่างกาย",
    count: 32,
    total: 50,
    percentage: 64,
    color: "bg-gradient-to-r from-amber-400 to-amber-500",
  },
  {
    category: "การผ่าตัด",
    count: 8,
    total: 15,
    percentage: 53,
    color: "bg-gradient-to-r from-red-400 to-red-500",
  },
];

export function PatientStats() {
  return (
    <Card className="border-emerald-100 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          สถิติผู้ป่วย
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {patientData.map((data, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">{data.category}</span>
              <span className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded-lg font-medium">
                {data.count}/{data.total}
              </span>
            </div>
            <Progress 
              value={data.percentage} 
              className="h-3 bg-gray-100"
            />
            <div className="text-right text-sm text-emerald-600 font-medium">
              {data.percentage}% ของเป้าหมาย
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
