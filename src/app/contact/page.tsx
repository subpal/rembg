import React from 'react';
import Subtitle from "@/components/subtitle";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";

function Page() {
    return (
        <div>
            <Subtitle text= {"Contact Us"}/>
            <Contact/>
            <Reviews/>
        </div>
    );
}

export default Page;