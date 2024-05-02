"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/right-arrow.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";

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

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <nav className="py-4">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer">
            <Logo />
            <div className="text-2xl font-bold uppercase">Trandify</div>
          </div>
        </Link>
        <Button className="uppercase gap-2" onClick={() => login()}>
          Login
          <RightArrow />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
