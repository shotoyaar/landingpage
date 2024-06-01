"use client";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, EmptyMenuItem, Menu, MenuItem, ProductItem } from "../components/navbar";
import { cn } from "../components/utils";
import React, { useState } from 'react';
import { AnimatedHandles } from "../components/contact";
import { BackgroundBeams } from "../components/backgroundBeams";
import { FlipWords } from "../components/flipText";
import { ButtonsCard } from "@/components/tailwind-buttons";

const people = [
  {
    id: 1,
    name: "Mail us",
    designation: "amara@zvia.tech",
    image: "/gmail.png",
    href: "mailto:amara@zvia.tech"
  },

  {
    id: 2,
    name: "Instagram",
    designation: "@zvia.tech",
    image: "/instagram.jpg",
    href: "https://www.instagram.com/zvia.tech"
  },

  {
    id: 3,
    name: "LinkedIn",
    designation: "Job (?)",
    image: "/linkedin.png",
    href: "https://www.linkedin.com/company/zvia"
  },

  {
    id: 4,
    name: "X",
    designation: "@ZviaTech",
    image: "/x.png",
    href: "https://x.com/ZviaTech"
  },
];

const words = ["announcements", "data entries", "fee updates", "contests", "attendance", "progress reports", "applications", "the repetitive"];

function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mt-20 mb-10 mr-48 w-full">
      <AnimatedHandles items={people} />
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-fit mx-auto z-50", className)}>
      <Menu setActive={setActive}>

        <Link href="#home">
          <Image
            src="/zvia_white.png"
            alt="ZVIA"
            height={70}
            width={70}
          />
        </Link>

        <a href="#about">
          <EmptyMenuItem setActive={setActive} active={active} item="About"></EmptyMenuItem>
        </a>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className=" text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="zClass"
              href="/zclass"
              src="/phone4.png"
              description="Et tu, Brutus?"
            />
          </div>
        </MenuItem>

        <a href="https://blog.zvia.tech/" target="_blank">
          <EmptyMenuItem setActive={setActive} active={active} item="Blog"></EmptyMenuItem>
        </a>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <Tooltip />
        </MenuItem>
      </Menu>
    </div >
  );
};

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Navbar className="top-2" />
      </div>

      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center" id="home">
        <div className="flex flex-row">

          <Image height={575} width={775} src="/leftsidemockup.png" alt="phone" className="absolute left-[200px] top-0" />

          <div className="relative max-w-screen-lg flex flex-col justify-center font-semibold items-center top-[20px] left-[400px] px-4">
            <h1 className="relative text-[80px]">Automate</h1>
            <div className="relative text-[80px]">
              <FlipWords words={words} />
            </div>
            <Link href="/zclass">
              <button className="px-8 py-2 border border-white relative group transition duration-200 bg-transparent mt-10 rounded-3xl z-10">
                <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w0full -z-1- group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative">Try zClass</span>
              </button>
            </Link>
          </div>
          <BackgroundBeams />
        </div>
      </div>

      <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center" id="about">
        <h1 className="text-6xl font-bold mb-20">
          About
        </h1>

        <p className="text-3xl text-center">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </p>

        <BackgroundBeams />
      </div>
    </>
  );
}
