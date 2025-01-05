"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from './card'
import { NewContact } from './Contact'
import Projects from '../project/Projects'


export default function AboutPage() {
  return (
    // <main className="min-h-screen bg-black text-white">
    //   <div className="w-full pr-96 px-6 py-12">
    
      <Card className="mt-12 p-8">
        <div className="relative">
          <article className="text-primary">
              <h2 className="text-6xl font-bold  leading-tight">
                Hii Again,<br />
                I'm Aniket.
              </h2>

              <div className="space-y-6 text-xl my-10 text-zinc-300">
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

            <div className="flex items-center justify gap-4">
            <Button asChild>
              <Link href={<NewContact /> }> Project</Link>
            </Button>
            <Button asChild>
              <Link href={<Projects /> }>Contact</Link>
            </Button>
          </div>

          </article>
        </div>
        </Card>
    //   </div>
    // </main>
  )
}