import React from 'react';
import ImageCropper from "@/components/image-cropper";
import Subtitle from "@/components/subtitle";
import Reviews from "@/components/reviews";

function Page() {
    return (
        <div>
          <Subtitle text= {"Free Crop Image"}/>
          <ImageCropper/>
          <Reviews/>
        </div>
    );
}

export default Page;