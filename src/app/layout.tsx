'use client'

import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Header from "@/components/ui/header";
import {Separator} from "@/components/ui/separator";
import Footer from "@/components/ui/footer";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KH9DNV9W "/>
      <head>
        <title>Free Background Removal Tool - Remove Image Background Online</title>
        <meta name="title" content="BG Rem" />
        <meta name="description" content="Easily remove backgrounds from images with our free online tool. Simple, fast, and accurate background removal for photos and images." />

     
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bgrem.in/" />
        <meta property="og:title" content="BG Rem" />
        <meta property="og:description" content="Easily remove backgrounds from images with our free online tool. Simple, fast, and accurate background removal for photos and images." />
        <meta property="og:image" content="/bgrem-meta.png" />

       
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bgrem.in/" />
        <meta property="twitter:title" content="BG Rem" />
        <meta property="twitter:description" content="Easily remove backgrounds from images with our free online tool. Simple, fast, and accurate background removal for photos and images." />
        <meta property="twitter:image" content="bgrem-meta.png" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
      <Header />
      <Separator />
      <Image style={{ position: 'absolute', top: `55%`, left: `15%`, zIndex:-1 }} className={"m-5 group-hover:scale-105 transition-transform duration-300"}
             src={"/fox.svg"} alt={"remove background"} width={150} height={150}/>

      {children}
      <Footer/>
      </body>
    </html>
  );
}
