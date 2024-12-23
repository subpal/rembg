'use client';
import Reviews from "@/components/reviews";
import Subtitle from "@/components/subtitle";
import {MagicCard} from "@/components/ui/magic-card";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
      <main>


          <Subtitle text={"Free Image Editing Tools"}/>

          <div
              className={
                  "flex flex-col w-full gap-7 sm:flex-row p-6 items-center justify-center min-h-[500px]"
              }
          >

              <Link href={"/remove-background"}>
                  <MagicCard
                      className={"h-40 w-40 items-center justify-center text-sm group hover:bg-gray-100 hover:text-md hover:scale-105"}>
                      <div className={"flex flex-col justify-center items-center"}>
                          <Image className={"m-5 group-hover:scale-105 transition-transform duration-300"}
                                 src={"/background.svg"} alt={"remove background"} width={65} height={65}/>
                          Remove background
                      </div>
                  </MagicCard>
              </Link>
              <Link href={"/crop"}>
                  <MagicCard
                      className={"h-40 w-40 items-center justify-center text-sm group hover:bg-gray-100 hover:text-md hover:scale-105"}>
                      <div className={"flex flex-col justify-center items-center"}>
                          <Image className={"m-5 group-hover:scale-105 transition-transform duration-300"}
                                 src={"/crop.svg"} alt={"crop image"} width={65} height={65}/>
                          Crop Image
                      </div>
                  </MagicCard>
              </Link>
          </div>
          <Reviews/>
      </main>
  );
}
