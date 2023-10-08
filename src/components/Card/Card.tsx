import React from "react";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const Card = ({ left, right }: Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-start space-y-4 md:space-x-4 md:space-y-0">
      <>{left}</>
      <>{right}</>
    </div>
  );
};
