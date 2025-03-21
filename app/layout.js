import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { navItems, welcomeMessages } from "@/utils/Data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Analytics } from "@vercel/analytics/react"
import { SplashScreen } from "@/components/ui/SplashScreen";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aniket's Portfolio",
  description: "Aniket a full stack developer, and designer. He is passionate about building products that are user-friendly and accessible.",
};



export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <head>
        <meta name="google-site-verification" content="BHRdFfuNPFy9qCc02vXLPelSoPmv3HRl1azmNvxPp6k" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark  flex flex-col items-start bg-background w-full px-2 sm:px-8 lg:px-[16%]`}
      >
        <FloatingNav navItems={navItems} />
        <SplashScreen messages={welcomeMessages} duration={1800} />
        <Analytics />
        {/* <ReactLenis > */}
        {children}
        {/* </ReactLenis> */}
      </body>
    </html>
  );
}
