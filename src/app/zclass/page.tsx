"use client";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/textGenerate";
import { GoogleGeminiEffect } from "@/components/geminiScroll";
import { HeroParallax } from "@/components/parallax";
import { MaskContainer } from "@/components/mask";
import { HoveredLink, EmptyMenuItem, Menu, MenuItem, ProductItem } from "@/components/navbar";
import { AnimatedHandles } from "@/components/contact";
import React, { useState } from "react";
import { cn } from "@/components/utils";

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

        <Link href="/#home">
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
}

const products = [
  {
    title: "zClass",
    link: "/zclass",
    thumbnail: "/zvia_white.png"
  }, {
    title: "zClass",
    link: "/zclass",
    thumbnail: "/zvia_white.png"
  }, {
    title: "zClass",
    link: "/zclass",
    thumbnail: "/z_white.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  },
  {
    title: "zClass",
    link: "/zclass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/z_white.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/z_white.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/z_white.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/z_white.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/z_white.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  }, {
    title: "zClass",
    link: "/zClass",
    thumbnail: "/phone4.png"
  },
];

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Navbar className="top-2" />
      </div>

      <HeroParallax products={products} />

    </>
  );
}
