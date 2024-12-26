import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/Navbar/page";

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
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-start text-white bg-black w-full px-2 sm:px-8 lg:px-[19%]`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
