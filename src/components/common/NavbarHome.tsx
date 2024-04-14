"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/right-arrow.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const notHomeStyles = {
    backgroundColor: "var(--background)",
    color: "var(--white)",
    boxShadow: "var(--shadow)",
    marginTop: "-2.5rem",
    marginLeft: "calc(max(1rem, calc(50vw - 45rem))",
    borderBottom: "2px solid var(--primary)",
    borderOpacity: 0.3,
  };

  return (
    <nav className="py-4">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="text-2xl font-bold uppercase">Trandify</div>
        </div>
        <Button className="uppercase gap-2">
          Login
          <RightArrow />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
