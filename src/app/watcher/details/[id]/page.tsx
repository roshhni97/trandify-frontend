"use client";

import LeftArrow from "@/assets/left-arrow.svg";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const dummyData = {
  link: "https://vercel.com/rajvarsanis-projects/DEMO-APP/analytics",
  alert: "Spike > 50% in a day",
  hitInterval: 10,
  status: true,
  image:
    "https://genai-trendify-bucket.s3.eu-north-1.amazonaws.com/661bb4ea2358035a9ed82387/661bd65fdcb583aaa4ee7200.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCmV1LW5vcnRoLTEiRzBFAiEAukkcZdd%2F%2BxLQAc9r7wXdnMxdyR6qXoBlCPojGISlSKICIETLK61DqfVPVhAic8mza9hfPb94aHT0gAlsYi97eVXJKu0CCI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMMjUzMDQ3MTMwMTcwIgwsideIIOIEqWoFZXkqwQJLdBFRPXe17o%2Bwsr%2FI%2Fio5y4uTyFqMs1zZ1in%2B1WR5BdTZzy%2B2c16n0IBUckumAeiPYX1f9J6KM1QUgpevdFLpbKUEwmQ93FJfa4lP%2FdJoX%2Fd%2FnU1UZh9i%2FyfMOY4CHHcM58hN5ENwPDpsSuN9cUcTla0HqBqMy7sOoMyJPB2LyToajVvuUiDRW1EvLHAM%2BGWOaBIJYRjiuQu24%2F%2BpO9TNfo8nDD%2F5YVh7lZYOs6kXJZufiQ7WKh%2BpoWdunRzG6ZkvMQ19kVh7BbQienUkyGnaGTFpZ2Mt0NEm8IypDJwt5IXAiRu2IfpyaBrALCpbvdiG4z6MTblFGXuwvY0VrSuA%2BSVK0DDd83I2vayvYljpHNBGpluX6yh624VtpQjWsv%2BT6Rl1yLKwxkd8%2FmrzfdVB%2BSB7fsyPjxLDCH6mykYU1yYw55XvsAY6swKFOVbjvZyHBUwd5%2FKOpHzl0QnrKys8qJ93nmBjA6%2FYHD0YD%2Fbp9oYnxeaHrrbwMOyPOkX7Oq5MMaZJv41gFDo5Pr8vLcAcFLkYo2pyJO0aC%2FKr1c%2FvGhEHUn2zjNIs%2Brxk8BXb28Whq993pUEnZDtlTidaZDC4jbYGII7Nmsqn21V5G4E4VHLMAPhwiM%2FUCVehdjJKufnUUJcO%2FvTxwzrI4Cypr8%2BS%2BXWpbEkCobBbEDNmkW4oFOeYKvT2Q09D6GTDxl0t%2FO%2FnF1v6K0kaI7j8IUqc8qip4HS2pAXbqUlueTOr0%2BR3QtIyj061ZNNM2IrH69svCCKIGA%2FygNiCT31EBEPyGffmHUIwIGisZ5GkQv8CUu3t6XAg1yUnxGQFEGPvR3gJeZr9bS%2Bie63sbSGhOYoR&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240414T154619Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIATV2WIZA5B4PR3NCJ%2F20240414%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=9c1cef1850d6cbce609de9ae0e67433e325ede9535a17739b9258ed54cfedf6c",
  stats: {
    successfulHits: 500,
    failedHits: 4,
    altersSent: 9,
  },
};

const Details = () => {
  const data = dummyData;
  const { toast } = useToast();
  const { link, alert, hitInterval, status, image, stats } = data;

  const [checked, setChecked] = useState<boolean>(status);

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
                  <td className="uppercase">{link}</td>
                </tr>
                <tr className="">
                  <td className="opacity-40 uppercase pr-5">Alert:</td>
                  <td className="uppercase">{alert}</td>
                </tr>
                <tr className="">
                  <td className="opacity-40 uppercase pr-5">Hit Interval:</td>
                  <td className="uppercase">{hitInterval} Minutes</td>
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
                <img src={image} alt="test" />
              </div>
              <div className="flex flex-col gap-4">
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
              </div>
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
