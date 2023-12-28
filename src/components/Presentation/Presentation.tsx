import React from "react";
import Image from "next/image";
import yoJPG from "@/images/yo.jpg";

export const Presentation = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8">
      <div className="flex flex-col md:max-w-lg space-y-2 justify-center items-center px-4">
        <h1 className="text-2xl md:text-3xl text-center">
          ¡Hola! Soy <span className="text-mauve">Emir</span>, soy un pibe que
          le encanta <span className="text-mauve underline">programar</span>,
          los <span className="text-mauve underline">gatos</span> y el{" "}
          <span className="text-mauve underline">café</span>.
          <br /> Mi sueño es poder trabajar en una empresa donde pueda
          desarrollar no solo mis habilidades, también ayudar y aprender de los
          demás.
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
