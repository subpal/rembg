import React, { useRef, useState } from 'react'
import ImageCard from './image-card';
import { Input } from './ui/input';
import { Button } from './ui/button';

const InputFile:React.FC = () => {
    const [file, setFile] = useState('');
    const [newFile, setNewFile] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const uploadedImage = useRef<File|null>(null);
    const backgroundRemovedImage = useRef<Blob|MediaSource|null>(null);
  
    const handleFileChange = async (event:React.ChangeEvent<HTMLInputElement>) => {
      setFile('')
      setNewFile('')
      if (event.target != null && event.target.files != null) {
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
      const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;
      const backendURL = `https://${backendHost}/backend/remove-background`;
      if (isLoading==false && uploadedImage.current !== null && newFile =='') {
        const formData = new FormData();
        formData.append('image', uploadedImage.current);
        try {
          setIsLoading(true);
          const response = await fetch(backendURL, {
            method: 'POST',
            body: formData,
          });
          const blob = await response.blob();
          backgroundRemovedImage.current = blob
          setNewFile(URL.createObjectURL(blob))
          setIsLoading(false);
        } catch (error) {
          console.log("Error during server rembg")
          setIsLoading(false);
        }
      }
    }
  
    const download = async () => {
      if(backgroundRemovedImage.current != null) {
        const fileURL = window.URL.createObjectURL(backgroundRemovedImage.current);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "download.jpg";
        alink.click();
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center">
        <ImageCard file={file} newFile={newFile} isLoading={isLoading} />
          <div className="flex flex-col p-5 items-center">
              <Input id="picture" type="file" onChange={handleFileChange} className=" my-2 w-full h-12 text-xl"/>
              <Button className="my-2 w-full h-12 text-xl" onClick={removebackground}>Remove background</Button>
              <Button className="my-2 w-full h-12 text-xl" onClick={download}>Download</Button>
          </div>
      </div>
    )
}

export default InputFile
