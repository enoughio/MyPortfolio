"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "./card";
import { motion } from "framer-motion";

export default function AboutPage() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.push(`#${sectionId}`, { scroll: false });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
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
      <Card className="mt-12 p-8">
        <div className="relative">
          <article className="text-primary">
            <h2 className="text-6xl font-bold leading-tight">
              Hii Again,
              <br />
              I'm Aniket.
            </h2>

            <div className="space-y-6 text-xl my-10 text-primary">
              <p>
                I'm a web developer based in Bhopal, passionate about how people
                and software can work together to improve lives. I work as a
                freelancer with a small team, where I build and optimize web
                applications for businesses.
              </p>

              <p>
                Previously, I worked as an individual developer. During that
                time, I also gained some experience with design, which helps me
                create more user-friendly interfaces.
              </p>

              <p>
                As a developer, I enjoy being a generalist with a strong focus
                on clean code and scalable architecture. I value well-structured
                systems backed by efficient and maintainable solutions. I love
                the idea that software is an evolving entity, constantly
                improving over time.
              </p>

              <p>
                Outside of work, I have a deep appreciation
                for food. I enjoy exploring new restaurants, being around people
                who experiment with new technologies, and  <i className="font-thin">writing</i> —I write a lot
                sometimes.
              </p>
            </div>

            <div className="flex items-center justify-start gap-4">
              <Button onClick={() => scrollToSection("projects")}>
                Projects
              </Button>
              <Button onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
            </div>
          </article>
        </div>
      </Card>
    </motion.div>
  );
}
