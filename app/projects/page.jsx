"use client";

import Link from "next/link";
import { cn } from "@/utils/utils";
import { RxExternalLink } from "react-icons/rx";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { ProjectsData } from "@/utils/Data";

const techColors = {
  React: "bg-blue-500",
  NEXTJS: "bg-gray-600",
  "React Native": "bg-green-500",
  "Vue.js": "bg-purple-500",
  Python: "bg-yellow-500",
  TypeScript: "bg-teal-500",
  Django: "bg-red-500",
  Node: "bg-green-700",
  HTML: "bg-orange-500",
  CSS: "bg-blue-300",
  JS: "bg-yellow-300",
};

const page = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    }}
    viewport={{
      once: true,
    }}
    >
      <div className="mt-10">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <h4 className="text-xl  mb-8">These are some of the project that i have creaded during my Learning Phase</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-1">
          {ProjectsData.slice(0, 10).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              <Card className="rounded-md border">
                <CardContent className="pt-3 h-full">
                  <div className="flex flex-col h-full">
                    <Link
                      href={p.link}
                      className="font-semibold text-primary hover:underline"
                    >
                      {p.title}
                    </Link>
                    <p className="text-sm text-foreground mt-1 mb-3">
                      {p.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {p.tech.map((t, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center space-x-1"
                          >
                            <div
                              className={cn(
                                "size-4 rounded-full w-3 h-3",
                                techColors[t] || "bg-gray-400"
                              )}
                            />
                            <span className="text-xs font-medium text-foreground">
                              {t}
                            </span>
                          </motion.div>
                        ))}
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default page
