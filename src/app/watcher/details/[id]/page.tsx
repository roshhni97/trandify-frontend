"use client";

import LeftArrow from "@/assets/left-arrow.svg";
import { Switch } from "@/components/ui/switch";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  getElementRects,
  convertCoordinatesDynamicRes,
} from "@/utils/image.utils";
import { useWatcherById } from "@/hooks/watcher.swr";
import { useParams } from "next/navigation";

const Details = () => {
  const { toast } = useToast();
  const { id } = useParams();
  const { errorFetchingWatcherData, isWatcherDataLoading, watcherData: data } = useWatcherById(id.toString());

  const image = useMemo(() => {
    if (!data?.snapshot) return;
    return `data:image/png;base64,${data.snapshot}`;
  }, [data]);

  const [currentRect, setCurrentRect] = useState<{
    width: number;
    height: number;
  } | null>();
  const [checked, setChecked] = useState<boolean>(data?.isActive || false);
  const [crop, setCrop] = useState<Crop>();

  useEffect(() => {
    if (!data?.snapshot) return;
    setCurrentRect(getElementRects("#image"));
    const { newX, newY } = convertCoordinatesDynamicRes({
      currentWidth: 1440,
      currentHeight: 900,
      x: data.samplingFrame.left,
      y: data.samplingFrame.top,
      convertWidth: data.samplingFrame.width,
      convertHeight: data.samplingFrame.height,
    });
  }, [data]);

  if (errorFetchingWatcherData) {
    return <div>Error fetching data</div>;
  }

  if (isWatcherDataLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <LeftArrow />
        <h1 className="text-4xl uppercase">Watcher Details</h1>
      </div>
      <div className="bg-[#0E1A1E] w-full border-2 p-10 border-[#2E5050]">
        <div className="flex w-full justify-between">
          <div>
            <table>
              <tbody className="">
                <tr className="">
                  <td className="opacity-40 uppercase pr-5">Link:</td>
                  <td className="uppercase">{data?.url}</td>
                </tr>
                <tr className="">
                  <td className="opacity-40 uppercase pr-5">Alert:</td>
                  <td className="uppercase">{data?.alertCondition}</td>
                </tr>
                <tr className="">
                  <td className="opacity-40 uppercase pr-5">Hit Interval:</td>
                  <td className="uppercase">{data?.samplePeriod} Minutes</td>
                </tr>
                <tr className="">
                  <td className="opacity-40 uppercase pr-5">Status:</td>
                  <td>
                    <Switch
                      className="rounded-0"
                      checked={checked ? true : false}
                      onCheckedChange={() => {
                        setChecked(!checked);
                        toast({
                          title: "Status Updated",
                          description: `Watcher is now ${
                            checked ? "Active" : "Inactive"
                          }`,
                        });
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <div className="opacity-40 uppercase">Snapshot:</div>
                <ReactCrop
                  crop={crop}
                  onChange={() => {}}
                  style={{
                    aspectRatio: 144 / 90,
                    position: "relative",
                  }}
                  disabled
                >
                  <img id="image" src={image} alt="test" />
                </ReactCrop>
              </div>
              {/* <div className="flex flex-col gap-4">
                <div className="opacity-40 uppercase">Stats:</div>
                <div>
                  <li className="uppercase">
                    ✅ {stats.successfulHits} Successful hits
                  </li>
                  <li className="uppercase">
                    🚨 {stats.failedHits} Failed hits
                  </li>
                  <li className="uppercase">
                    🚨 {stats.successfulHits} Alerts Sent
                  </li>
                </div>
              </div> */}
              <div>CHART</div>
            </div>
          </div>
          <Button
            className="uppercase"
            onClick={() =>
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
            }
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
