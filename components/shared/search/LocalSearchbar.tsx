"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClases?: string;
}
const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClases,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px]  w-full grow items-center gap-4 rounded-[10px] px-4 ${otherClases} `}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value={""}
        onChange={(e) => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
