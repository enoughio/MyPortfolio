"use client";

import Link from "next/link";
import { cn } from "@/utils/utils";
import { RxExternalLink } from "react-icons/rx";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { ProjectsData } from "@/utils/Data";
import { useMediaQuery } from 'react-responsive';

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

const Projects = () => {
  // Use media query to detect mobile view
  const isMobile = useMediaQuery({ maxWidth: 700 });

  // Adjust animation variants based on screen size
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: isMobile ? 2 : 0.6,
      },
    },
  };

  const headingVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: isMobile ? 2.4 : 3,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 200 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: isMobile 
          ? (index === 0 ? 2.9 : 0 + (index * 0.2)) // First card appears slower
          :  0.2 ,  // Original desktop staggering
        staggerChildren: 0.2,
      },
    }),
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={containerVariants}
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      <div className="mt-10 mx-2">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial="initial"
          whileInView="animate"
          variants={headingVariants}
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-1">
          {ProjectsData.slice(0, 5).map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="initial"
              whileInView="animate"
              variants={cardVariants}
              viewport={{
                once: true,
                amount: 0.4,
              }}
            >
              <Card className="rounded-md border">
                <CardContent className="pt-2 h-full">
                  <div className="flex flex-col h-full">
                    <Link
                      href={p.link}
                      className="font-semibold text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
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

export default Projects;