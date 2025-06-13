
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, FileText, Pill, Users } from "lucide-react";

const quickActions = [
  {
    title: "เพิ่มผู้ป่วยใหม่",
    icon: Plus,
    color: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
  },
  {
    title: "จองนัดหมาย",
    icon: Calendar,
    color: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  },
  {
    title: "สร้างใบเสร็จ",
    icon: FileText,
    color: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
  },
  {
    title: "จัดการยา",
    icon: Pill,
    color: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
  },
];

export function QuickActions() {
  return (
    <Card className="border-emerald-100 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          การดำเนินการด่วน
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            className={`w-full justify-start gap-3 h-12 ${action.color} text-white shadow-md hover:shadow-lg transition-all duration-200 font-medium`}
          >
            <action.icon className="w-5 h-5" />
            {action.title}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
