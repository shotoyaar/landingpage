"use client";
import Image from "next/image";
import { HoveredLink, EmptyMenuItem, Menu, MenuItem, ProductItem } from "../components/navbar";
import { cn } from "../components/utils";
import React, { useState } from 'react';
import { AnimatedHandles } from "../components/contact";
import { m } from "framer-motion";
import { BackgroundBeams } from "../components/backgroundBeams";
import { FlipWords } from "../components/flipText";
import { EvervaultCard } from "../components/borderG";

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

const Gradient = () => {
  return (
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
    />
  );
};

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

        <EmptyMenuItem setActive={setActive} active={active} item="Home"></EmptyMenuItem>

        <EmptyMenuItem setActive={setActive} active={active} item="About"></EmptyMenuItem>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className=" text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="zClass"
              href="https://algochurn.com"
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
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Navbar className="top-2" />
      </div>

      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center">
        <div className="flex flex-row">

          <Image height={575} width={775} src="/leftsidemockup.png" alt="phone" className="absolute left-[200px] top-12" />

          <div className="fixed w-full flex flex-col justify-center font-semibold items-center top-[400px] px-4">
            <h1 className="text-8xl ml-[-1000px]">Automate</h1>
            <div className="text-8xl ml-[-1000px]">
              <FlipWords words={words} />
            </div>

            <div className="ml-[-1000px] mt-10">
              <EvervaultCard text="More" />
            </div>

          </div>
          <BackgroundBeams />
        </div>

      </div>
    </>
  );
};
