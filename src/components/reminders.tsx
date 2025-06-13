
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Book, FileText } from "lucide-react";

const reminders = [
  {
    icon: Clock,
    title: "Eng - Vocabulary test",
    time: "Today at 4:30 PM",
    color: "text-red-500"
  },
  {
    icon: Book,
    title: "Eng - Send grammar homework",
    time: "28 Dec 2020, Wednesday",
    color: "text-blue-500"
  },
  {
    icon: FileText,
    title: "Spanish - Send essay",
    time: "30 Dec 2020, Friday",
    color: "text-blue-500"
  },
];

export function Reminders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Reminders</CardTitle>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </CardHeader>
      <CardContent className="space-y-4">
        {reminders.map((reminder, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`p-2 rounded-lg bg-gray-100 ${reminder.color}`}>
              <reminder.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm leading-tight">
                {reminder.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {reminder.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
