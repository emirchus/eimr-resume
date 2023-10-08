import { InboxIcon, MarkGithubIcon } from "@primer/octicons-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col max-w-full py-4 border-t-2 border-t-surface0">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-start items-start">
          <p>Emir Ali</p>
          <p className="text-subtext0">Fullstack Developer</p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p>Contacto</p>
          <div className="flex flex-row justify-end items-end text-subtext0 divide-x-2 space-x-4">
            <a
              href="https://github.com/emirchus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-surface2"
            >
              <MarkGithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/emir-ali-31aa711ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-surface2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 256 256"
                className="fill-current"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center text-subtext1">
          ©{new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};
