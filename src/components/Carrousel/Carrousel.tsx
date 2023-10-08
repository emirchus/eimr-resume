"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

export const Carrousel = () => {
  const [current, setCurrent] = useState(0);

  const images = useMemo(() => {
    return new Array(48).fill(0).map((_, index) => {
      return `https://ik.imagekit.io/emir/miaus/${index + 1}.jpg`;
    });
  }, []);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden max-w-full">
      <div className="absolute w-full h-full z-[2]">
        <button
          className="absolute flex text-center justify-center top-1/2 transform -translate-y-1/2 left-0 bg-surface1/90 hover:bg-surface2 transition-all ease-in-out duration-300 rounded-md"
          onClick={prevSlide}
        >
          <ChevronLeftIcon size={"medium"} className="text-subtext1" />
        </button>
        <button
          className="absolute  flex text-center justify-center top-1/2 right-0 transform -translate-y-1/2 bg-surface1/90 hover:bg-surface2 transition-all ease-in-out duration-300 rounded-md"
          onClick={nextSlide}
        >
          <ChevronRightIcon size={"medium"} className="text-subtext1" />
        </button>
      </div>
      <AnimatePresence>
        {images.map((child, index) => {
          if (index !== current) return null;
          return (
            <motion.div
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className={
                index === current
                  ? "absolute w-full h-full z-[1] flex flex-col justify-center items-center"
                  : "hidden"
              }
              key={index}
            >
              <Image
                src={child}
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </section>
  );
};
