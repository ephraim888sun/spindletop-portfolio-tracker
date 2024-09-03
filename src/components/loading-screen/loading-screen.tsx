"use client";
import { useEffect } from "react";

import Logo from "../../../public/logo.png";
import Image from "next/image";

export const LoadingScreen = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "11px";

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 z-fixed flex items-center justify-center bg-background">
      <div className="size-16 animate-pulse fill-primary-100">
        <Image src={Logo} alt='logo' width={40} height={40} />
      </div>
    </div>
  );
};
