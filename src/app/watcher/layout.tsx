import Navbar from "@/components/common/Navbar";
import LeftArrow from "@/assets/left-arrow.svg";
import { Switch } from "@/components/ui/switch";
import test from "@/assets/test.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="max-w-[90rem] px-4 mx-auto min-w-[90rem]">{children}</div>
    </div>
  );
};

export default layout;
