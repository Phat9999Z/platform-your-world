
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const chartData = [
  { day: "Mon", reading: 30, listening: 25, speaking: 20, writing: 15 },
  { day: "Tue", reading: 40, listening: 35, speaking: 25, writing: 20 },
  { day: "Wed", reading: 35, listening: 30, speaking: 40, writing: 25 },
  { day: "Thu", reading: 45, listening: 20, speaking: 35, writing: 30 },
  { day: "Fri", reading: 50, listening: 40, speaking: 30, writing: 35 },
  { day: "Sat", reading: 60, listening: 45, speaking: 50, writing: 40 },
  { day: "Sun", reading: 35, listening: 30, speaking: 25, writing: 20 },
];

export function TimeSpentChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Time Spent on Learning</CardTitle>
        <Select defaultValue="last-week">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-week">Last week</SelectItem>
            <SelectItem value="this-week">This week</SelectItem>
            <SelectItem value="this-month">This month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span>Reading</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Listening</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Speaking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Writing</span>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-32 gap-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-1 flex-1">
                <div className="flex flex-col items-center w-full relative h-24">
                  <div 
                    className="w-full bg-red-400 rounded-t"
                    style={{ height: `${(data.reading / 60) * 100}%` }}
                  ></div>
                  <div 
                    className="w-full bg-blue-400"
                    style={{ height: `${(data.listening / 60) * 100}%` }}
                  ></div>
                  <div 
                    className="w-full bg-green-400"
                    style={{ height: `${(data.speaking / 60) * 100}%` }}
                  ></div>
                  <div 
                    className="w-full bg-yellow-400 rounded-b"
                    style={{ height: `${(data.writing / 60) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{data.day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
