import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <>
      <Card className=" md:mx-2 md:my-8 space-y-4">
        <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>

        <div className="space-y-2">
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="space-y-2">
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </Card>
      <Card className="rounded-md border mt-10">
        <CardContent className="pt-6 h-full">
          <div className="flex flex-col h-full">
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-md border mt-10">
        <CardContent className="pt-6 h-full">
          <div className="flex flex-col h-full">
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-md border mt-10">
        <CardContent className="pt-6 h-full">
          <div className="flex flex-col h-full">
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-md border mt-10">
        <CardContent className="pt-6 h-full">
          <div className="flex flex-col h-full">
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
