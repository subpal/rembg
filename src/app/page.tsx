'use client';
import Reviews from "@/components/reviews";
import Subtitle from "@/components/subtitle";
import {MagicCard} from "@/components/ui/magic-card";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
      <main>
          <Subtitle text={"Free Image Tools"}/>
              <div
                  className={
                      "flex flex-col w-full gap-7 sm:flex-row p-6 items-center justify-center"
                  }
              >
                  <Link href={"/remove-background"}>
                      <MagicCard className={"h-56 w-56 items-center justify-center text-md group hover:bg-yellow-50 hover:text-xl"}>
                          <div className={"flex flex-col justify-center items-center"}>
                              <Image className={"m-5 group-hover:animate-bounce"} src={"/background.svg"} alt={"crop image"} width={60} height={60}/>
                              Remove background
                          </div>
                      </MagicCard>
                  </Link>
                  <Link href={"/crop"}>
                      <MagicCard className={"h-56 w-56 items-center justify-center text-md group hover:bg-yellow-50 hover:text-xl"}>
                          <div className={"flex flex-col justify-center items-center"}>
                              <Image className={"m-5 group-hover:animate-bounce"} src={"/crop.svg"} alt={"crop image"} width={60} height={60}/>
                              Crop Image
                          </div>
                      </MagicCard>
                  </Link>
              </div>
          <Reviews/>
      </main>
  );
}
