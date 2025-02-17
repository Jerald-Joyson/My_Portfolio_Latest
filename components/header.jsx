"use client";

import React, { useState, useEffect } from "react";
//components
import Logo from "./logo";
import ThemeToggler from "./themeToggler";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-[#ffffff] shadow-lg dark:bg-[#3b4354]"
          : "py-6 dark:bg-[#302a22]"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#f9e5c9]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo height={56} width={54} />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
