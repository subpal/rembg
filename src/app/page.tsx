'use client';
import { Separator } from "@/components/ui/separator"
import Reviews from "@/components/reviews";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import InputFile from "@/components/inputfile";

export default function Page() {
  return (
    <main>
      <Title />
      <Separator />
      <Subtitle />  
      <InputFile />
      <Reviews />
    </main>
  );
}
