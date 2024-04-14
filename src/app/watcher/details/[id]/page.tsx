"use client";

import Navbar from "@/components/common/Navbar";
import LeftArrow from "@/assets/left-arrow.svg";
import { Switch } from "@/components/ui/switch";
import test from "@/assets/test.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TableData = [
  {
    title: "Link",
    value: "https://vercel.com/rajvarsanis-projects/DEMO-APP/analytics",
  },
  {
    title: "Alert",
    value: "Spike > 50% in a day",
  },
  {
    title: "Hit Interval",
    value: "10 Mins",
  },
  {
    title: "Status",
    value: "true",
  },
];

const Stats = {
  successfulHits: 500,
  failedHits: 4,
  altersSent: 9,
};

const Row = ({ title, value }: { title: string; value: string }) => {
  return (
    <tr className="">
      <td className="opacity-40 uppercase pr-5">{title}:</td>
      {title === "Status" ? (
        <td>
          <Switch className="rounded-0" />
        </td>
      ) : (
        <td className="uppercase">{value}</td>
      )}
    </tr>
  );
};

const Details = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="flex gap-2 items-center">
        <LeftArrow />
        <h1 className="text-4xl uppercase">Watcher Details</h1>
      </div>
      <div className="bg-[#0E1A1E] w-full border-2 p-10 border-[#2E5050]">
        <div className="flex w-full justify-between">
          <div>
            <table>
              <tbody className="">
                {TableData.map((data, index) => (
                  <Row key={index} title={data.title} value={data.value} />
                ))}
              </tbody>
            </table>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <div className="opacity-40 uppercase">Snapshot:</div>
                <Image src={test} alt="test" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="opacity-40 uppercase">Stats:</div>
                <div>
                  <li className="uppercase">
                    ✅ {Stats.successfulHits} Successful hits
                  </li>
                  <li className="uppercase">
                    🚨 {Stats.failedHits} Failed hits
                  </li>
                  <li className="uppercase">
                    🚨 {Stats.successfulHits} Alerts Sent
                  </li>
                </div>
              </div>
              <div>CHART</div>
            </div>
          </div>
          <Button className="uppercase">Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
