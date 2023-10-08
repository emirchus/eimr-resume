"use client";
import { usePathname } from "next/navigation";
import React from "react";

export const Title = () => {
  const pathName = usePathname();
  return (
    <div className="">
      <h2 className="text-3xl">
        <span>/</span>
        {pathName.split("/").pop()}
      </h2>
    </div>
  );
};
