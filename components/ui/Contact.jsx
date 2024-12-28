import { Mail, ArrowUpRight, Download, Eye, Github, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    // <main className="min-h-screen w-full bg-black-to-br from-zinc-100 to-zinc-200 p-6">
      <div className="max-w-screen w-full">
        {/* <h1 className="text-zinc-500 text-2xl mb-6">contact</h1> */}
        
        <div className="bg-black backdrop-blur-sm rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
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
                    <Github className="w-8 h-8" />
                    <span className="sr-only">GitHub Profile</span>
                  </Link>
                  <Link 
                    href="https://twitter.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-8 h-8" />
                    <span className="sr-only">Twitter Profile</span>
                  </Link>
                  <Link 
                    href="https://instagram.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-8 h-8" />
                    <span className="sr-only">Instagram Profile</span>
                  </Link>
                  <Link 
                    href="https://linkedin.com" 
                    className="hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-8 h-8" />
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

          {/* Large circle with arrow */}
          <div className="absolute top-8 right-8 w-64 h-64 border-2 border-black rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-8 h-8 absolute top-4 right-4" />
          </div>
        </div>
      </div>
    // </main>
  )
}

