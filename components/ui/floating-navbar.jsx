"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card } from "./card";

export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    (<AnimatePresence mode="wait">
      <motion.div 
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex sm:w-1/3 h-20 p-2 fixed top-10 inset-x-0 mx-auto border-2 rounded-full bg-card  z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}>
        {navItems.map((navItem, idx) => (
          <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}>
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" block text-xl">{navItem.name}</span>
          </Link>
        ))}
      
      
        </motion.div>
    </AnimatePresence>)
  );
};
