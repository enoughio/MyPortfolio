'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


const Navbar = () => {
  const pathname = usePathname()

  const data = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contacts", href: "/contact" },
  ]

  const pathName = usePathname();

  return (
    <nav className="flex justify-evenly w-1/2 h-[4.5rem] max-w-[60%] border-[1px] border-white bg-zinc-600 rounded-full p-4 m-4">
      {data.map((link, index) => (

        <Link
        key={link.name}
        href={link.href}
        className={clsx(`text-2xl `
          ,{
            'bg-blue-200 ' :  pathName === link.href,
          }
        )}
      >
        {link.name}
      </Link>
      ))}
    </nav>
  )
}

export default Navbar;