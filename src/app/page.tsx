'use client';
import Reviews from "@/components/reviews";
import Subtitle from "@/components/subtitle";
import InputFile from "@/components/inputfile";

export default function Page() {
  return (
    <main>
        <Subtitle text= {"Free Remove background from Image"}/>
        <InputFile />
        <Reviews />
    </main>
  );
}
