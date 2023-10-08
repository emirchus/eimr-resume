import React from "react";
import { Carrousel } from "../Carrousel";

export const Cats = () => {
  return (
    <div className="flex flex-col md:px-[20%] justify-center items-center px-4 pt-4">
      <h2 className="text-2xl md:text-3xl text-center">
        ¿Te gustan los gatos?
      </h2>
      <p className="text-lg md:text-xl text-subtext0 text-center">
        Conoce a Quimera y Haru owo
      </p>
      <Carrousel />
    </div>
  );
};
