
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "ผู้ป่วยวันนี้",
    value: "24",
    change: "+12%",
    changeType: "increase",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "การนัดหมาย",
    value: "18",
    change: "+8%",
    changeType: "increase", 
    icon: Calendar,
    color: "bg-green-500",
  },
  {
    title: "รายได้วันนี้",
    value: "฿45,250",
    change: "+25%",
    changeType: "increase",
    icon: DollarSign,
    color: "bg-yellow-500",
  },
  {
    title: "อัตราการเติบโต",
    value: "15.3%",
    change: "+3.2%",
    changeType: "increase",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
];

export function ClinicOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">จากเมื่อวาน</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
