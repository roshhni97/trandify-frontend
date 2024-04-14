"use client";

import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import LeftArrow from "@/assets/left-arrow.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/ui/comboBox";
import test from "@/assets/test.png";
import Image from "next/image";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Details = () => {
  const [crop, setCrop] = useState<Crop>();
  console.log(crop);
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="flex gap-2 items-center">
        <LeftArrow />
        <h1 className="text-4xl uppercase">Add Watcher</h1>
      </div>
      <div className="bg-[#0E1A1E] w-full border-2 p-10 border-[#2E5050] flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase">Link</div>
          <Input className="w-4/6"></Input>
        </div>
        <Button className="w-fit uppercase">Next</Button>
        <hr className="-mx-10 opacity-30" />
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase">Alert for</div>
          <Input className="w-4/6"></Input>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase">Sampling Time</div>
          <div className="flex gap-2">
            <Input className="w-24"></Input>
            <ComboboxDemo />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase">Snapshot</div>
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <Image src={test} alt="test" width={1000} height={1000} />
          </ReactCrop>
        </div>
        <div className="flex gap-2">
          <Button className="w-fit uppercase" variant="ghost">
            Back
          </Button>
          <Button className="w-fit uppercase">Create Watcher</Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
