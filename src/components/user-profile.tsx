
import { Card, CardContent } from "@/components/ui/card";

export function UserProfile() {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto overflow-hidden">
            <img 
              src="/lovable-uploads/89d000ca-65ab-4984-bcf7-140e4a969ffc.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>
        <h3 className="font-bold text-lg">Sadia Tasnim</h3>
        <p className="text-gray-500 text-sm">Student</p>
      </CardContent>
    </Card>
  );
}
