
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Blog({
  title = "untitled",
  date = "",
  tags = [{ name: "web" }],
  subHead = "",
  slug = "",
}) {
  return (
    <Card className="rounded-md border">
      <CardContent className="pt-4 h-full">
        <Link href={`/blogs/${slug}`}>
          <div className="flex flex-col h-full">
            <span className="font-semibold text-xl text-primary hover:underline">
              {title}
            </span>
            <p className="text-sm text-foreground mt-1 mb-4">
              {typeof subHead === "string" ? subHead : subHead?.text?.content || ""}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* <div className="w-4 h-4 rounded" /> */}
                {tags.map((tag, index) => (
                  <span key={index} className="text-md font-bold text-foreground">
                    {"#"+tag.name || "untitled"}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {date || "No date provided"}
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

