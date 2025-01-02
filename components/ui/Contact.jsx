
import Link from 'next/link'
import { Mail } from 'lucide-react';

import { Card } from './card'
import { Separator } from './separator'


export default function Contact() {
  return (
  

        <div className=" backdrop-blur-sm rounded-3xl p-12 relative overflow-hidden">
    
            <h2 className="text-6xl font-bold mb-16">Let's<br />Connect!</h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-zinc-600">
                  <Mail className="w-6 h-6" />
                  <span className="text-xl">Email</span>
                </div>
                <a 
                  href="mailto:aniketJatav.dev@gmail.com"
                  className="text-2xl hover:text-zinc-600 transition-colors block"
                >
                  aniketJatav.dev@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <Link 
                    href="https://github.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Github className="w-8 h-8" /> */}
                    <span className="sr-only">GitHub Profile</span>
                  </Link>
                  <Link 
                    href="https://twitter.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Twitter className="w-8 h-8" /> */}
                    <span className="sr-only">Twitter Profile</span>
                  </Link>
                  <Link 
                    href="https://instagram.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Instagram className="w-8 h-8" /> */}
                    <span className="sr-only">Instagram Profile</span>
                  </Link>
                  <Link 
                    href="https://linkedin.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Linkedin className="w-8 h-8" /> */}
                    <span className="sr-only">LinkedIn Profile</span>
                  </Link>
                </div>

                <div className="inline-flex rounded-full bg-black p-4 gap-6">
                  <span className="text-xl font-medium">resume</span>
                  <button 
                    className="hover:text-zinc-600 transition-colors"
                    aria-label="Download Resume"
                  >
                    <Download className="w-6 h-6" />
                  </button>
                  <button 
                    className="hover:text-zinc-600 transition-colors"
                    aria-label="View Resume"
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

  )
}


export const NewContact = ()  => {

  
  return (
    
      <Card className="mt-10 p-10 w-full">
      <div className="space-y-1 ">

        <div className="text-8xl font-bold w-[400px]">Lets Connect</div>
        <Separator/>
        <div className='flex items-center justify-start gap-4'>
          <Mail className='font-bold'/>
            <h1 className='text-4xl'>
              Email
            </h1>

        </div>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    
    </Card>
  )
}




