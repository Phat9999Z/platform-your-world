
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const activities = [
  {
    time: "10:30",
    action: "ผู้ป่วยใหม่เข้าลงทะเบียน",
    patient: "นางสาว จิรา ใจดี",
    type: "ลงทะเบียน",
    status: "สำเร็จ",
  },
  {
    time: "10:15",
    action: "การชำระเงินเสร็จสิ้น",
    patient: "นาย สมชาย ดีมาก",
    type: "การเงิน",
    status: "สำเร็จ",
  },
  {
    time: "09:45",
    action: "การตรวจรักษาเสร็จสิ้น",
    patient: "นางสาว มณี รัตน์",
    type: "การรักษา",
    status: "สำเร็จ",
  },
  {
    time: "09:30",
    action: "นัดหมายใหม่ถูกสร้าง",
    patient: "นาย ประยุทธ สุขใจ",
    type: "นัดหมาย",
    status: "รอยืนยัน",
  },
];

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">กิจกรรมล่าสุด</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <Clock className="w-4 h-4" />
              <span>{activity.time}</span>
              <Badge variant="outline" className="ml-auto">
                {activity.type}
              </Badge>
            </div>
            <p className="font-medium text-gray-900 text-sm">{activity.action}</p>
            <p className="text-sm text-gray-600">{activity.patient}</p>
            <Badge 
              className={`mt-1 text-xs ${
                activity.status === 'สำเร็จ' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {activity.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
