import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { NavbarMenu } from "../NavbarMenu";

const navItems = [
  {
    path: "/",
    label: "Inicio",
  },
  {
    path: "/about",
    label: "Sobre mí",
  },
  {
    path: "/projects",
    label: "Proyectos",
  },
  {
    path: "/contact",
    label: "Contacto",
  },
];

export const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="hidden md:flex flex-row justify-center space-x-4">
        {navItems.map((navItem) => (
          <NavbarItem key={navItem.path} {...navItem} />
        ))}
      </div>
      <div className="flex md:hidden">
        <NavbarMenu items={navItems} />
      </div>
    </nav>
  );
};
