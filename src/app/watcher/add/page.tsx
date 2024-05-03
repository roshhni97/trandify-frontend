"use client";

import { useState } from "react";
import LeftArrow from "@/assets/left-arrow.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useToast } from "@/components/ui/use-toast";
import useSWRMutation from "swr/mutation";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericMutationFetcher } from "@/utils/helpers/swr.helper";
import { useRouter } from "next/router";
  
const Details = () => {
  const { toast } = useToast();

  const [link, setLink] = useState<string>("");
  const [onSubmit, setOnSubmit] = useState<boolean>(true);
  const [crop, setCrop] = useState<Crop>();
  const [alert, setAlert] = useState<string>("");
  const [value, setValue] = useState<number>(10);
  const [imageId, setImageId] = useState<string>("");

  const router = useRouter();

  const { trigger: createWatcher, isMutating: isCreateWatcherLoading } = useSWRMutation(API_CONSTANTS.CREATE_WATCHER, genericMutationFetcher)
  const { trigger: renderImage, isMutating: isRenderImageLoading } = useSWRMutation(API_CONSTANTS.RENDER_IMAGE, genericMutationFetcher)

  const handleSubmit = () => {
    if (!link) {
      toast({
        title: "Error",
        description: "Please enter a link",
      });
      return;
    }

    renderImage({
      type: "post",
      rest: [
        {
          url: link,
        },
      ],
    }).then((res) => {
      console.log(res);
      setImageId(res.data.snapshot);
      setOnSubmit(false);
      toast({
        title: "Watcher Added",
        description: "You have successfully added a watcher",
      });
    }).catch((err) => {
      console.log(err);
      toast({
        title: "Error",
        description: "Please enter a valid link",
      });
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

    createWatcher({
      type: "post",
      rest: [
        {
          url: link,
          alertCondition: alert,
          samplePeriod: value,
          snapshot: imageId,
          isActive: true,
          samplingFrame: {
            top: crop.y,
            left: crop.x,
            width: crop.width,
            height: crop.height,
          }
        },
      ],
    }).then((res) => {
      console.log(res);
      toast({
        title: "Watcher Created",
        description: "You have successfully created a watcher",
      });
      router.push("/watcher/details");
    }).catch((err) => {
      console.log(err);
      toast({
        title: "Error",
        description: "Please enter a valid link",
      });
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
                <img src={`https://api.trendifyapp.tech/api/v1/watchers/snapshots/preview/${imageId}`} alt="test" />
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
