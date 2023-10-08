"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  label: string;
}

export const NavbarItem = ({ label, path }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${
        pathName === path ? "opacity-100" : "opacity-70"
      } hover:text-mauve transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-row justify-center align-middle items-center">
        <span className={`text-mauve text-2xl`}>/</span>
        <span className="text-lg font-bold">{label}</span>
      </div>
    </Link>
  );
};
