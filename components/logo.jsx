import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Logo = ({ height, width }) => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? "/logoWhite.png" : "/logoDark.png"}
        width={height}
        height={width}
        priority
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
