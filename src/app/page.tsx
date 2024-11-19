'use client';
import { Separator } from "@/components/ui/separator"
import Reviews from "@/components/reviews";
import Subtitle from "@/components/subtitle";
import InputFile from "@/components/inputfile";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Page() {
  return (
    <main>
        <Header />
        <Separator />
        <Subtitle />
        <InputFile />
        <Reviews />
        <Footer/>
    </main>
  );
}
