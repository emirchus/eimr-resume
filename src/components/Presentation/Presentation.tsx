import React from "react";
import Image from "next/image";
import yoJPG from "@/images/yo.jpg";

export const Presentation = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8">
      <div className="flex flex-col md:max-w-lg space-y-2 justify-center items-center px-4">
        <h1 className="text-2xl md:text-3xl text-center">
          ¡Hola! Soy <span className="text-mauve">Emir</span>, programador{" "}
          <span className="text-mauve underline">fullstack</span>, amante de los{" "}
          <span className="text-mauve underline">gatos</span> y del{" "}
          <span className="text-mauve underline">café</span>
        </h1>
        <p className="text-center text-subtext1">
          Soy un programador fullstack que le encanta aprender cosas nuevas y
          crear proyectos que ayuden a la gente.
        </p>
      </div>
      <Image
        src={yoJPG}
        className="rounded-xl w-4/5 h-[300px] m-auto my-4 object-cover md:w-[500px] md:h-[500px]"
        alt="Foto mía"
        width={500}
        height={500}
      />
    </div>
  );
};
