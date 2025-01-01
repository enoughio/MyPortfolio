'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


const NavBar = () => {
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

export default NavBar



// import { motion, useScroll, useMotionValueEvent } from "framer-motion"
// import { useRef, useState } from "react";


//   const data = [
//     { name: "Home", href: "/" },
//     { name: "Projects", href: "/projects" },
//     { name: "Blogs", href: "/blogs" },
//     { name: "Contacts", href: "/contact" },
//   ]


// export default function NavBar() {
  
//   return (
//     <div className="min-h-[300vh] bg-gradient-to-b from-[rgba(255,255,255,.1)] to-[rgba(255,255,255,0)]">
//       <Nav />
//     </div>
//   );
// }

// const Nav = () => {
//   const pathName = usePathname();
//   const [isHidden, setIsHidden] = useState(false);
//   const { scrollY } = useScroll();
//   const lastYRef = useRef(0);

//   useMotionValueEvent(scrollY, "change", (y) => {
//     const difference = y - lastYRef.current;
//     if (Math.abs(difference) > 50) {
//       setIsHidden(difference > 0);

//       lastYRef.current = y;
//     }
//   });

//   return (
//     <motion.div
//       animate={isHidden ? "hidden" : "visible"}
//       whileHover="visible"
//       onFocusCapture={() => setIsHidden(false)}
//       variants={{
//         hidden: {
//           y: "-90%",
//         },
//         visible: {
//           y: "0%",
//         },
//       }}
//       transition={{ duration: 0.2 }}
//       className="fixed top-0 z-10 flex w-full justify-center pt-3"
//     >
//       <nav className="flex justify-evenly w-1/2 h-[4.5rem] max-w-[60%] border border-white bg-background rounded-full p-4 m-4">
//       {data.map((link, index) => (

//         <Link
//         key={link.name}
//         href={link.href}
//         className={clsx(``
//           ,{
//             'bg-blue-200 ' :  pathName === link.href,
//           }
//         )}
//       >
//         {link.name}
//       </Link>
//       ))}
//     </nav>
//     </motion.div>
//   );
// };
