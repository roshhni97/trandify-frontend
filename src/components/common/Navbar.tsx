import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/right-arrow.svg";

const Navbar = () => {
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
