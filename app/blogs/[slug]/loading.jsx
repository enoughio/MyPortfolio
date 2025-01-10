import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="w-full mx-auto mt-6">
      <Card className="  mx-auto bg-background shadow-xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <div className="w-60 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <hr />
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Author info */}

          {/* Main content */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Subheading */}
          <div className="w-1/3 h-6 bg-gray-200 rounded animate-pulse"></div>

          {/* More paragraphs */}
          <div className="space-y-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded animate-pulse"></div>

          {/* More paragraphs */}
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
