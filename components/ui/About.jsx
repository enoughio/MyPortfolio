"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full pr-96 px-6 py-12">
    

        <div className="relative">
          {/* Decorative curved line */}
          <div className="absolute -right-12 top-24 w-[400px] h-[400px] pointer-events-none select-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-zinc-800/50"
            >
              <path
                d="M200 100C200 100 300 100 350 200"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <article className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-6xl font-bold leading-tight">
                Hii Again,<br />
                I'm Aniket.
              </h2>

              <div className="space-y-6 text-xl text-zinc-300">
                <p>
                  I'm a product designer living in Brooklyn, interested in how people and software 
                  can work together to make life better. I'm currently at Snap, where I design 
                  experiences around finding and using AR Lenses on Snapchat.
                </p>

                <p>
                  I previously worked at ZipRecruiter, where I designed experiences and interfaces 
                  to help millions of people get jobs. I started on the marketing design side, 
                  honing my visual design skills and learning the ins and outs of keyframe animation, 
                  then moved into the world of product.
                </p>

                <p>
                  As a designer, I enjoy being a generalist with a focus on craft and prototyping. 
                  I value beautiful visuals backed by smart systems thinking. I love the concept 
                  that a digital product is a living thing that can adapt and evolve over time.
                </p>

                <p>
                  Outside of design, I love food in all capacities. I spend my time exploring new 
                  restaurants, cooking new dishes, and talking about my next meal. I think a lot 
                  about the Arizona Cardinals, well-executed civil engineering, and my dog Olive 
                  (no, she wasn't named after me).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white text-black hover:bg-zinc-200"
              >
                <Link href="/demo-1">Live Demo</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white text-black hover:bg-zinc-200"
              >
                <Link href="/demo-2">Live Demo</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}