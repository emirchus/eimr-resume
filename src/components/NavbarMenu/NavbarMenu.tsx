"use client";
import { useSidebar } from "@/hooks/Sidebar";
import { ThreeBarsIcon, XIcon } from "@primer/octicons-react";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarItem } from "../NavbarItem";

interface Props {
  items: { path: string; label: string }[];
}

export const NavbarMenu = ({ items }: Props) => {
  const pathName = usePathname();

  const currentPath = useMemo(() => {
    return items.find((item) => item.path === pathName);
  }, [items, pathName]);

  const { open, toggle } = useSidebar();

  return (
    <div>
      <div className="w-screen flex flex-row justify-between items-center">
        <p className="flex flex-row justify-start items-start m-auto">
          <span className={`text-mauve text-xl`}>/</span>
          <span className="text-lg font-bold">{currentPath?.label}</span>
        </p>
        <button
          onClick={toggle}
          className="flex m-auto border-solid border-surface2 border-2 p-2 rounded hover:bg-surface2 transition-all ease-in-out duration-300 "
        >
          <ThreeBarsIcon size={"small"} className="text-subtext1" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="fixed top-0 left-0 h-screen bg-surface1/90 z-10"
          >
            <div className="flex flex-col w-full h-full space-y-4 pt-8">
              <div className="flex flex-row justify-center">
                <button
                  onClick={toggle}
                  className="flex border-solid border-surface2 border-2 p-2 rounded hover:bg-surface2 transition-all ease-in-out duration-300"
                >
                  <XIcon size={"small"} className="text-subtext1" />
                </button>
              </div>
              <div className="flex flex-col justify-start items-start mx-auto">
                {items.map((navItem) => (
                  <NavbarItem key={navItem.path} {...navItem} />
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
