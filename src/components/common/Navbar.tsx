import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/right-arrow.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4 bg-background border-b-2 border-primary border-opacity-1">
      <div className=" mx-auto flex justify-between items-center max-w-[90rem] px-4">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer">
            <Logo />
            <div className="text-2xl font-bold uppercase">Trandify</div>
          </div>
        </Link>
        <Button className="uppercase gap-2">
          Login
          <RightArrow />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
