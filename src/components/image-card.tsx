import React from 'react'
import { MagicCard } from './ui/magic-card';
import Image from 'next/image';
import { useTheme } from "next-themes";

const ImageCard = ({file, newFile}) => {
    const { theme } = useTheme();
    if (file !== '' && newFile !== '') {
        return (
            <div
                className={
                    "flex h-[600px] w-full flex-col gap-4 lg:h-[500px] lg:flex-row"
                }
            >
                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                    <Image className="my-2"
                        src={file}
                        width={500}
                        height={500}
                        alt="Image"
                    />
                </MagicCard>
                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                    <Image className="my-2"
                        src={newFile}
                        width={500}
                        height={500}
                        alt="Image"
                    />
                </MagicCard>
            </div>
        );
    }
    if (file !== '') {
        return (
            <div
                className={
                    "flex h-[500px] w-[500px] flex-col gap-4 lg:h-[500px] lg:flex-row"
                }
            >
                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                    <Image className="my-2"
                        src={file}
                        width={500}
                        height={500}
                        alt="Image"
                    />
                </MagicCard>
            </div>
        );
    }
    return (
        <div
            className={
                "flex h-[500px] w-[500px] flex-col gap-4 lg:h-[500px] lg:flex-row"
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
