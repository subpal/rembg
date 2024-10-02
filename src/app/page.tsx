'use client';
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Reviews from "@/components/reviews";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import ImageCard from "@/components/image-card";

export default function Home() {
  return (
    <main>
      <Title/>
      <Separator />
      <div className="flex  flex-col items-center">
        <Subtitle/>
        <InputFile/>
      </div>
      <Reviews/>
    </main>
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

  const handleFileChange = async (event) => {
    setFile('')
    setNewFile('')
    if(event.target != null) {
      const selectedFile = event.target.files[0];
      if (selectedFile && selectedFile.type.startsWith('image/')) {
        setFile(URL.createObjectURL(selectedFile)); 
        uploadedImage.current = selectedFile
      } else {
        alert('Please select an image file');
        setFile(''); 
      }
    }
  };

  const removebackground = async () => {
    if(uploadedImage.current != null) {
      const formData = new FormData();
      formData.append('image', uploadedImage.current);
        try {
          const response = await fetch('http://localhost:8000/remove-background', {
            method: 'POST',
            body: formData,
          });
          const blob = await response.blob();
          backgroundRemovedImage.current = blob
          setNewFile(URL.createObjectURL(blob))
    
        } catch (error) {
          console.log("Error during server rembg")
        }
    }
  }

  const download =  async () => {    
    const fileURL = window.URL.createObjectURL(backgroundRemovedImage.current);
    const alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "download.jpg";
    alink.click();
  };
    
  
  return (
    <div className="flex items-center flex-col">
      <ImageCard file={file} newFile={newFile}/>
      <div className="flex-col p-5 items-center">
        <Input id="picture" type="file" onChange={handleFileChange} className=" my-2 w-4/5 h-12 text-xl"/>
        <Button className="my-2 w-4/5 h-12 text-xl" onClick={removebackground}>Remove background</Button>
        <Button className="my-2 w-4/5 h-12 text-xl" onClick={download}>Download</Button>
      </div>
    </div>
  )
}