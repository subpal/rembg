'use client';
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";


export default function Home() {
  return (
    <main>
      
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 10 }}>
      <Title/>
      <Separator />
      <div className="flex  flex-col items-center">
        <SubTitle/>
        <InputFile/>
      </div>
      <MarqueeDemo/>
      </div>
    </div>
    </main>
  );
}

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Animated Grid Pattern
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}



export function MagicCardDemo({file, newFile}) {
  const { theme } = useTheme();
  if(file !== '' && newFile !== '') {
    return (
      <div
        className={
          "flex h-[600px] w-full flex-col gap-4 lg:h-[500px] lg:flex-row"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <Image className="my-2"
            src={file}
            width={500}
            height={500}
            alt="Image"
          />
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <Image className="my-2"
            src={newFile}
            width={500}
            height={500}
            alt="Image"
          />
        </MagicCard>
      </div>
    );
  }
  if(file !== '') {
    return (
      <div
        className={
          "flex h-[500px] w-[500px] flex-col gap-4 lg:h-[500px] lg:flex-row"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <Image className="my-2"
            src={file}
            width={500}
            height={500}
            alt="Image"
          />
        </MagicCard>
      </div>
    );
  }
  return (
    <div
      className={
        "flex h-[500px] w-[500px] flex-col gap-4 lg:h-[500px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Select Image
      </MagicCard>
    </div>
  );
  
  
}




const reviews = [
  {
    name: "Priya Rajput",
    username: "@priya",
    body: "Incredible app! Removed the background from my photos in seconds and with amazing precision. Highly recommend!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I’ve tried other background removal tools, but this one is by far the best. Fast, easy, and the results are flawless every time.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Aashish Singh",
    username: "@aashish",
    body:"Super impressed with how accurate the background removal is! No need for manual touch-ups, it’s perfect right out of the app.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Piyush",
    username: "@stony",
    body: "This app saved me so much time! I use it for product photos, and it’s super quick and efficient. A game-changer for my business!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Absolutely love this background remover! The interface is simple, and the results are professional. My go-to app for all my design projects!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Mohammad",
    username: "@mhmd",
    body: "Amazing tool! It handles even the trickiest backgrounds with ease. I’m a happy customer and will definitely continue using it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}


export function Line() {
  return (
    <div className="flex justify-center">
      <Separator className="shadow-lg"/>
    </div>
  )
}

export function InputFile() {
  const [file, setFile] = useState('');
  const [newFile, setNewFile] = useState('')
  const uploadedImage = useRef(null);
  const backgroundRemovedImage = useRef(new Blob());

  const handleFileChange = async (event: Event) => {
    setFile('')
    setNewFile('')
    const selectedFile = event.target.files[0]; // Get the first selected file
    if (selectedFile && selectedFile.type.startsWith('image/')) {
  
      setFile(URL.createObjectURL(selectedFile)); // Create a temporary URL for the image

      uploadedImage.current = selectedFile
    } else {
      alert('Please select an image file');
      setFile(''); // Reset file if the selected file is not an imageset
    }
  };



  const removebackground = async () => {
    if(uploadedImage.current != null) {
      const formData = new FormData();
      formData.append('image', uploadedImage.current);
        try {
          const response = await fetch('http://localhost:5000/remove-background', {
            method: 'POST',
            body: formData, // FormData contains the file
          });
          const blob = await response.blob();
          //setNewOriginal(blob)
          backgroundRemovedImage.current = blob
          setNewFile(URL.createObjectURL(blob))
    
        } catch (error) {
          console.log("Error during server rembg")
        }
  
    }
    
  }

  const download =  async () => {    
    // Creating new object of PDF file
    const fileURL =
        window.URL.createObjectURL(backgroundRemovedImage.current);
        
    // Setting various property values
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "download.jpg";
    alink.click();
    
  };
    
  
  return (
    <div className="flex items-center flex-col">
      <MagicCardDemo file={file} newFile={newFile}/>
      <div className="flex-col p-5 items-center">
        <Input id="picture" type="file" onChange={handleFileChange} className=" my-2 w-4/5 h-12 text-xl"/>
        <Button className="my-2 w-4/5 h-12 text-xl" onClick={removebackground}>Remove background</Button>
        <Button className="my-2 w-4/5 h-12 text-xl" onClick={download}>Download</Button>
      </div>
      
    </div>
  )
}

export function Title() {
  return (
    <div className="flex justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-3">
      Image Tools
    </h1>
    </div>
    
  )
}

export function SubTitle() {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight justify-center flex">
      Remove Background Easily
    </h2>
  )
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 justify-center">
      <Skeleton className="h-[500px] w-[500px] rounded-xl my-2 justify-self-center" />
    </div>
  )
}
