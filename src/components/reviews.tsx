import React from 'react'
import Marquee from './ui/marquee'
import { cn } from '@/lib/utils';

const Reviews = () => {
    const reviews = [
        {
          name: "Priya Rajput",
          username: "@priya",
          body: "Incredible app! Removed the background from my photos in seconds and with amazing precision. Highly recommend!",
          img: "https://avatar.vercel.sh/jack",
        },
        {
          name: "Jill",
          username: "@jill",
          body: "I’ve tried other background removal tools, but this one is by far the best. Fast, easy, and the results are flawless every time.",
          img: "https://avatar.vercel.sh/jill",
        },
        {
          name: "Aashish Singh",
          username: "@aashish",
          body:"Super impressed with how accurate the background removal is! No need for manual touch-ups, it’s perfect right out of the app.",
          img: "https://avatar.vercel.sh/john",
        },
        {
          name: "Piyush",
          username: "@stony",
          body: "This app saved me so much time! I use it for product photos, and it’s super quick and efficient. A game-changer for my business!",
          img: "https://avatar.vercel.sh/jane",
        },
        {
          name: "Jenny",
          username: "@jenny",
          body: "Absolutely love this background remover! The interface is simple, and the results are professional. My go-to app for all my design projects!",
          img: "https://avatar.vercel.sh/jenny",
        },
        {
          name: "Mohammad",
          username: "@mhmd",
          body: "Amazing tool! It handles even the trickiest backgrounds with ease. I’m a happy customer and will definitely continue using it.",
          img: "https://avatar.vercel.sh/james",
        },
      ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);
    
    const ReviewCard = ({img, name,username, body,}: {
        img: string;
        name: string;
        username: string;
        body: string;
        }) => {
            return (
                <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}
                >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
                </figure>
            );
        };

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}

export default Reviews
