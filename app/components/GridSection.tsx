"use client";

import Image from "next/image";
import demo from "@/public/Images/Animated DP .png";


export const GridSection = () => {
  return (
    <section className="max-w-5xl p-2 mx-auto mt-10 ">
      <div className="grid grid-cols-3 gap-4 p-4">
        <ComponentSection />
        <ComponentSection />
        <ComponentSection />
        <ComponentSection />
        <ComponentSection />
        <ComponentSection />
      </div>
    </section>
  );
};

export const ComponentSection = () => {
  return (
    <div className="w-full h-full  rounded-2xl overflow-hidden ">
      <div>
        <video
          className="w-full h-full object-cover"
          muted 
          loop
          autoPlay 
        >
          <source src="/Video/Mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="px-2 py-4 ">
        <p>Component- title </p>
      </div>
    </div>
  );
};
