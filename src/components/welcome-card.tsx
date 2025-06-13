
import { Card, CardContent } from "@/components/ui/card";

export function WelcomeCard() {
  return (
    <Card className="bg-gradient-to-r from-pink-100 to-pink-50 border-pink-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              Welcome back Anna!
            </h2>
            <p className="text-gray-700 mb-1">
              You've learned 80% of your goal this week!
            </p>
            <p className="text-gray-600">
              Keep it up and improve your results!
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
