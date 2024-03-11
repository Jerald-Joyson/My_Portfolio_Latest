import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? "/Group4.png" : "/Group5.png"}
        width={54}
        height={54}
        priority
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
