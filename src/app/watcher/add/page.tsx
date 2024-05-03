"use client";

import { useState } from "react";
import LeftArrow from "@/assets/left-arrow.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useToast } from "@/components/ui/use-toast";

const imgUrl =
  "https://cdn.discordapp.com/attachments/1228726876013596756/1229053715215028386/661bd11286865d45cbfca821.png?ex=662e4878&is=661bd378&hm=751183956caf2f167b9dd2b43b48dd0df940cf5ac1e42056c0983b3da8cd4243&";

  
const Details = () => {
  const { toast } = useToast();

  const [link, setLink] = useState<string>("");
  const [onSubmit, setOnSubmit] = useState<boolean>(true);
  const [crop, setCrop] = useState<Crop>();
  const [alert, setAlert] = useState<string>("");
  const [value, setValue] = useState<number>(10);

  const handleSubmit = () => {
    if (!link) {
      toast({
        title: "Error",
        description: "Please enter a link",
      });
      return;
    }

    setOnSubmit(false);
    toast({
      title: "Watcher Added",
      description: "You have successfully added a watcher",
    });
  };

  const handleCreateWatcher = () => {
    if (!link || !alert) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    if (!crop) {
      toast({
        title: "Error",
        description: "Please select a snapshot",
      });
      return;
    }

    toast({
      title: "Watcher Created",
      description: "You have successfully created a watcher",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <div>
          <LeftArrow />
        </div>
        <h1 className="text-4xl uppercase">Add Watcher</h1>
      </div>
      <div className="bg-[#0E1A1E] w-full border-2 p-10 border-[#2E5050] flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase">Link</div>
          <Input
            className="w-4/6"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            disabled={!onSubmit}
          />
        </div>

        {onSubmit ? (
          <Button className="w-fit uppercase" onClick={handleSubmit}>
            Next
          </Button>
        ) : (
          <>
            <hr className="-mx-10 opacity-30" />
            <div className="flex flex-col gap-1">
              <div className="text-lg uppercase">Alert for</div>
              <Input
                className="w-4/6"
                placeholder="Spike > 50% in a day"
                value={alert}
                onChange={(e) => setAlert(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-lg uppercase">Sampling Time</div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  className="w-16"
                  value={value}
                  step={5}
                  onChange={(e) => {
                    if (+e.target.value < 0) {
                      setValue(0);
                    } else {
                      setValue(+e.target.value);
                    }
                  }}
                />
                <div className="text-lg uppercase">Minutes</div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-lg uppercase">Snapshot</div>
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                style={{
                  aspectRatio: 144 / 90,
                  position: "relative",
                }}
              >
                <img src={imgUrl} alt="test" />
              </ReactCrop>
            </div>
            <div className="flex gap-2">
              <Button className="w-fit uppercase" variant="ghost">
                Back
              </Button>
              <Button className="w-fit uppercase" onClick={handleCreateWatcher}>
                Create Watcher
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
