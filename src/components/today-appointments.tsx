
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

const appointments = [
  {
    time: "09:00",
    patient: "นางสาว สมใส ใจดี",
    doctor: "นพ.วิชัย",
    type: "ตรวจทั่วไป",
    status: "รอพบแพทย์",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    time: "09:30",
    patient: "นาย ประยุทธ สุขใจ",
    doctor: "นพ.สมชาย", 
    type: "ตรวจเลือด",
    status: "กำลังตรวจ",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    time: "10:00",
    patient: "นางสาว มณี รัตน์",
    doctor: "นพ.วิชัย",
    type: "ฟันผุ",
    status: "เสร็จสิ้น",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    time: "10:30",
    patient: "นาย สมศักดิ์ ดีมาก",
    doctor: "นพ.สมชาย",
    type: "ตรวจหัวใจ",
    status: "รอพบแพทย์",
    statusColor: "bg-blue-100 text-blue-800",
  },
];

export function TodayAppointments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">การนัดหมายวันนี้</CardTitle>
        <Badge variant="outline">{appointments.length} นัด</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {appointments.map((appointment, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{appointment.time}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-900">{appointment.patient}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {appointment.doctor} • {appointment.type}
                </div>
              </div>
            </div>
            <Badge className={appointment.statusColor}>
              {appointment.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
