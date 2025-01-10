import Link from "next/link";
import { cn } from "@/lib/utils";
import { RxExternalLink } from "react-icons/rx";



import { Card, CardContent } from "@/components/ui/card.jsx";

import { ProjectsData } from "@/utils/Data";


const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-yellow-500",
}

const Projects = () => {
    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-1 ">
                {ProjectsData.slice(0, 5).map((p, i) => (
                    <Card key={i} className="rounded-md border" >
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-white hover:underline"
                                    >
                                        View Project
                                        <RxExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}


export default  Projects;