"use client";

import React from "react";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          const message =
            theme === "dark"
              ? "Welcome to Lightness! "
              : "Welcome to Darkness!";
          toast(message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: theme === "dark" ? "#fff" : "#333",
              color: theme === "dark" ? "#333" : " #fff",
            },
          });
        }}
      >
        <SunIcon className="h-[1.2 rem] w-[1.2 rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2 rem] w-[1.2 rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
