"use client";

import { useState } from "react";
import LeftArrow from "@/assets/left-arrow.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useToast } from "@/components/ui/use-toast";

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
                <img
                  src={
                    "https://genai-trendify-bucket.s3.eu-north-1.amazonaws.com/661bb4ea2358035a9ed82387/661bd65fdcb583aaa4ee7200.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCmV1LW5vcnRoLTEiRzBFAiEAukkcZdd%2F%2BxLQAc9r7wXdnMxdyR6qXoBlCPojGISlSKICIETLK61DqfVPVhAic8mza9hfPb94aHT0gAlsYi97eVXJKu0CCI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMMjUzMDQ3MTMwMTcwIgwsideIIOIEqWoFZXkqwQJLdBFRPXe17o%2Bwsr%2FI%2Fio5y4uTyFqMs1zZ1in%2B1WR5BdTZzy%2B2c16n0IBUckumAeiPYX1f9J6KM1QUgpevdFLpbKUEwmQ93FJfa4lP%2FdJoX%2Fd%2FnU1UZh9i%2FyfMOY4CHHcM58hN5ENwPDpsSuN9cUcTla0HqBqMy7sOoMyJPB2LyToajVvuUiDRW1EvLHAM%2BGWOaBIJYRjiuQu24%2F%2BpO9TNfo8nDD%2F5YVh7lZYOs6kXJZufiQ7WKh%2BpoWdunRzG6ZkvMQ19kVh7BbQienUkyGnaGTFpZ2Mt0NEm8IypDJwt5IXAiRu2IfpyaBrALCpbvdiG4z6MTblFGXuwvY0VrSuA%2BSVK0DDd83I2vayvYljpHNBGpluX6yh624VtpQjWsv%2BT6Rl1yLKwxkd8%2FmrzfdVB%2BSB7fsyPjxLDCH6mykYU1yYw55XvsAY6swKFOVbjvZyHBUwd5%2FKOpHzl0QnrKys8qJ93nmBjA6%2FYHD0YD%2Fbp9oYnxeaHrrbwMOyPOkX7Oq5MMaZJv41gFDo5Pr8vLcAcFLkYo2pyJO0aC%2FKr1c%2FvGhEHUn2zjNIs%2Brxk8BXb28Whq993pUEnZDtlTidaZDC4jbYGII7Nmsqn21V5G4E4VHLMAPhwiM%2FUCVehdjJKufnUUJcO%2FvTxwzrI4Cypr8%2BS%2BXWpbEkCobBbEDNmkW4oFOeYKvT2Q09D6GTDxl0t%2FO%2FnF1v6K0kaI7j8IUqc8qip4HS2pAXbqUlueTOr0%2BR3QtIyj061ZNNM2IrH69svCCKIGA%2FygNiCT31EBEPyGffmHUIwIGisZ5GkQv8CUu3t6XAg1yUnxGQFEGPvR3gJeZr9bS%2Bie63sbSGhOYoR&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240414T154619Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIATV2WIZA5B4PR3NCJ%2F20240414%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=9c1cef1850d6cbce609de9ae0e67433e325ede9535a17739b9258ed54cfedf6c"
                  }
                  alt="test"
                />
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
