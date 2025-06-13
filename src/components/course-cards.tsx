
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    level: "B2",
    title: "Grammar",
    subtitle: "Learn English",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    textColor: "text-white"
  },
  {
    level: "B2",
    title: "Phrasal Verbs",
    subtitle: "Learn English",
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    textColor: "text-white"
  },
  {
    level: "C1",
    title: "Vocabulary",
    subtitle: "Learn English",
    color: "bg-gradient-to-br from-red-500 to-pink-600",
    textColor: "text-white"
  },
];

export function CourseCards() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your courses</h2>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">More →</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <Card key={index} className={`${course.color} ${course.textColor} cursor-pointer hover:scale-105 transition-transform`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <span className="text-sm opacity-90">{course.level}</span>
                <span className="text-2xl">→</span>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-lg mb-1">{course.title}</h3>
              <p className="text-sm opacity-90">{course.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
