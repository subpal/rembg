'use client';
import Reviews from "@/components/reviews";
import Subtitle from "@/components/subtitle";
import {MagicCard} from "@/components/ui/magic-card";
import Link from "next/link";

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
                      <MagicCard className={"h-56 w-56 items-center justify-center text-xl"}>
                          Remove background
                      </MagicCard>
                  </Link>
                  <Link href={"/crop"}>
                      <MagicCard className={"h-56 w-56 items-center justify-center text-xl"}>
                          Crop Image
                      </MagicCard>
                  </Link>
              </div>

          <Reviews/>
      </main>
  );
}
