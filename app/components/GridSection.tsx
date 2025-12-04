"use client";

import Image from "next/image";
import button from "@/public/Images/buttom.png";
import Link from "next/link";

export const GridSection = () => {
  const ComponentMotion = [
    {
      title: "Animated Button",
    },
    {
      title: "Static Button",
    },
  ];

  return (
    <section className="max-w-5xl p-2 mx-auto mt-10 ">
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="w-full h-full  rounded-2xl overflow-hidden border dark:border-neutral-800 border-neutral-400 ">
          <div>
            <video className="w-full h-full object-cover" muted loop autoPlay>
              <source src="/Video/Mp4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="px-2 py-4 ">
            <p className="text-lg text-neutral-900 dark:text-neutral-300   ">
              Animated Button
            </p>
            <span className="text-sm text-neutral-600">Inspired By : </span> <Link href="https://x.com/mannupaaji">Manu Arora</Link>
          </div>
        </div>

        <div className="w-full h-full  rounded-2xl overflow-hidden border dark:border-neutral-800 border-neutral-400  ">
          <div>
            <Image
              src={ button }
              alt="Picture of the author"
            />
          </div>
          <div className="px-2 py-4 ">
            <p className="ttext-lg text-neutral-900 dark:text-neutral-300 ">Minimal design, refined aesthetics</p>
            <span className="text-sm text-neutral-600">Inspired By : </span> <Link href="https://x.com/mannupaaji">Manu Arora</Link>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center  rounded-2xl overflow-hidden border dark:border-neutral-800 border-neutral-400 ">
          <p>Components Coming Soon</p>
        </div>
      </div>
    </section>
  );
};

export const ComponentSection = () => {
  return (
    <div className="w-full h-full  rounded-2xl overflow-hidden ">
      <div>
        <video className="w-full h-full object-cover" muted loop autoPlay>
          <source src="/Video/Mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="px-2 py-4 ">
        <p>Component- title </p>
      </div>
    </div>
  );
};
