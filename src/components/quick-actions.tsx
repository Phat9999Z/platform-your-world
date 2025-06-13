
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, FileText, Pill, Users } from "lucide-react";

const quickActions = [
  {
    title: "เพิ่มผู้ป่วยใหม่",
    icon: Plus,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "จองนัดหมาย",
    icon: Calendar,
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "สร้างใบเสร็จ",
    icon: FileText,
    color: "bg-yellow-600 hover:bg-yellow-700",
  },
  {
    title: "จัดการยา",
    icon: Pill,
    color: "bg-purple-600 hover:bg-purple-700",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">การดำเนินการด่วน</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            className={`w-full justify-start gap-3 h-12 ${action.color} text-white`}
          >
            <action.icon className="w-5 h-5" />
            {action.title}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
