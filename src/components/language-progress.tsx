
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const languages = [
  { name: "English", level: "B2", progress: 85 },
  { name: "Spanish", level: "C1", progress: 92 },
];

export function LanguageProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Language Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {languages.map((lang, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{lang.name}</span>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {lang.level}
              </span>
            </div>
            <Progress value={lang.progress} className="h-3" />
            <div className="text-right text-sm text-gray-500">
              {lang.progress}% Complete
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
