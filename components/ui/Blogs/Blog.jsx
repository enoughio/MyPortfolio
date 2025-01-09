import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function Blog({
  title = "untitled",
  date,
  tags = [{ name: "web" }],
  subHead,
  slug = "",
}) {

  // console.log(date)

  return (
    <Card className="w-full bg-[hsla(341, 0%, 30%, 1)] border bg-card ">
      <Link href={`/blogs/${slug}`}>
        <CardHeader>
          <CardTitle className="w-full text-xl text-primary mb-2">
            {title}
          </CardTitle>
          <div className="text-primary-foreground">{date}</div>
          {/* <CardDescription className="hidden md:flex w-full text-md text-primary-foreground" >Deploy your new project in one-click Vercel provides tools and infrastructure to deploy apps and features at scale. Deploy Now. Vercel provides tools and infrastructure to deploy apps and features at scale. Deploy Now.</CardDescription> */}
          <CardDescription className="flex w-full text-md text-foreground">
            {subHead && subHead.text.content}
          </CardDescription>
        </CardHeader>

        <CardFooter className=" mt-0 pt-0 flex justify-between gap-2  ">
          <div className="text-primary">
            {tags.map((tag, index) => (
              <Badge key={index} variant="custom" className="text-md font-bold">
                {"#"+tag.name}
              </Badge>
            ))}
          </div>

          {/* <Button
            className="px-10 mr-16  text-black text-md"
            href={`/blogs/${slug}`}
          >
            Read post
          </Button> */}
        </CardFooter>
      </Link>
    </Card>
  );
}
