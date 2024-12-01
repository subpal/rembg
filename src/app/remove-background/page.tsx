'use client';
import Reviews from "@/components/reviews";
import Subtitle from "@/components/subtitle";
import InputFile from "@/components/inputfile";


import React from 'react';

function Page() {
    return (
        <div>
            <Subtitle text= {"Free Remove background from Image"}/>
            <InputFile />
            <Reviews />
        </div>
    );
}

export default Page;
