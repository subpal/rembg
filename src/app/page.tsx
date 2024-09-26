'use client'
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
      <Title/>
      <Separator />
      <div className="flex  flex-col items-center">
        <SubTitle/>
        <InputFile/>
      </div>
      
    </main>
  );
}

export function UploadedImage({file, newFile}) {
  if(file !== '' && newFile !== '') {
    return (
      <div className="flex-row">
        <Image className="my-2"
          src={file}
          width={500}
          height={500}
          alt="Image"
        />
        <Image className="my-2"
          src={newFile}
          width={500}
          height={500}
          alt="Image"
        />
      </div>
    );
  }
  if(file !== '') {
    return (
      <Image className="my-2"
        src={file}
        width={500}
        height={500}
        alt="Image"
      />
    );
  }
  
  return <SkeletonCard/>;
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
  const [original, setOriginal] = useState(null)
  const [newOriginal, setNewOriginal] = useState(null)

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0]; // Get the first selected file
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      // Only allow image files
  
      setFile(URL.createObjectURL(selectedFile)); // Create a temporary URL for the image
      setOriginal(selectedFile)
      
    } else {
      alert('Please select an image file');
      setFile(''); // Reset file if the selected file is not an imageset
  
    }
  };



  const removebackground = async () => {
    if(original != null) {
      const formData = new FormData();
      formData.append('image', original);
        try {
          const response = await fetch('http://54.152.231.33:5000/remove-background', {
            method: 'POST',
            body: formData, // FormData contains the file
          });
          console.log(response)
          const blob = await response.blob();
          setNewOriginal(blob)
          setNewFile(URL.createObjectURL(blob))
          
          console.log(newFile)
    
        } catch (error) {
          console.log("Error during server rembg")
        }
  
    }
    
  }

  const download =  async () => {    
    // Creating new object of PDF file
    const fileURL =
        window.URL.createObjectURL(newOriginal);
        
    // Setting various property values
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "download.jpg";
    alink.click();
    
  };
    
  
  return (
    <div className="flex items-center flex-col">
    <UploadedImage file={file} newFile={newFile}/>
      <Input id="picture" type="file" onChange={handleFileChange} className=" my-2 w-3/5"/>
      <Button className="my-2 w-3/5" onClick={removebackground}>Remove background</Button>
      <Button className="my-2 w-3/5" onClick={download}>Download</Button>
    </div>
  )
}

export function Title() {
  return (
    <div className="flex justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-3">
      Image Tools
    </h1>
    </div>
    
  )
}

export function SubTitle() {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight justify-center flex">
      Remove background
    </h2>
  )
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 justify-center">
      <Skeleton className="h-[500px] w-[500px] rounded-xl my-2 justify-self-center" />
    </div>
  )
}
