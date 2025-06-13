
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const results = [
  { unit: "Unit 5", subject: "Technology", progress: 92, color: "bg-blue-500" },
  { unit: "Unit 12", subject: "Ecology", progress: 44, color: "bg-blue-500" },
  { unit: "Unit 8", subject: "Real estate", progress: 80, color: "bg-blue-500" },
  { unit: "Unit 4", subject: "Education", progress: 75, color: "bg-red-500" },
  { unit: "Unit 16", subject: "Job market", progress: 78, color: "bg-blue-500" },
];

export function LatestResults() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Latest results</CardTitle>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">More →</span>
      </CardHeader>
      <CardContent className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">{result.unit}</span>
                <span className="text-gray-500 ml-2">- {result.subject}</span>
              </div>
              <span className="font-bold">{result.progress}%</span>
            </div>
            <Progress 
              value={result.progress} 
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
