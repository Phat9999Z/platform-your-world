
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const patientData = [
  {
    category: "ผู้ป่วยใหม่",
    count: 45,
    total: 100,
    percentage: 45,
    color: "bg-blue-500",
  },
  {
    category: "ผู้ป่วยเก่า",
    count: 78,
    total: 100, 
    percentage: 78,
    color: "bg-green-500",
  },
  {
    category: "ตรวจร่างกาย",
    count: 32,
    total: 50,
    percentage: 64,
    color: "bg-yellow-500",
  },
  {
    category: "การผ่าตัด",
    count: 8,
    total: 15,
    percentage: 53,
    color: "bg-red-500",
  },
];

export function PatientStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">สถิติผู้ป่วย</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {patientData.map((data, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{data.category}</span>
              <span className="text-sm text-gray-500">
                {data.count}/{data.total}
              </span>
            </div>
            <Progress 
              value={data.percentage} 
              className="h-3"
            />
            <div className="text-right text-sm text-gray-500">
              {data.percentage}% ของเป้าหมาย
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
