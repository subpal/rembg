import React from 'react'
import { MagicCard } from './ui/magic-card';
import Image from 'next/image';
import { useTheme } from "next-themes";
import Loading from './loading';

const ImageCard = ({file, newFile, isLoading}) => {
    const { theme } = useTheme();
    if (file !== '' && newFile !== '') {
        return (
            <div
                className={
                    "flex flex-col w-3/4 gap-4 sm:w-3/4 sm:flex-row"
                }
            >
                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                    <Image 
                        src={file}
                        width={1000}
                        height={1000}
                        alt="Original image"
                    />
                </MagicCard>
                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                    <Image
                        src={newFile}
                        width={1000}
                        height={1000}
                        alt="Background removed image"
                    />
                </MagicCard>
            </div>
        );
    }
    if (file !== '') {
        return (
            <div
                className={
                    "flex h-[300px] w-[300px] flex-col gap-4 sm:h-[500px] sm:w-[500px] lg:flex-row"
                }
            >
                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                    <Image
                        src={file}
                        width={1000}
                        height={1000}
                        alt="Image"
                    />
                </MagicCard>
                <Loading isLoading={isLoading}/>
            </div>
        );
    }
    return (
        <div
            className={
                "flex h-[300px] w-[300px] flex-col gap-4 sm:h-[400px] sm:w-[400px] lg:flex-row"
            }
        >
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Select Image
            </MagicCard>
        </div>
    );
}

export default ImageCard
