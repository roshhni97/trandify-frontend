import { Button } from "@/components/ui/button";
import RightTopArrow from "@/assets/right-top-arrow.svg";
import VertexAI from "@/assets/vertex-ai.svg";
import Gemini from "@/assets/gemini.svg";

const HeroSection = () => {
  return (
    <div className="h-full pt-32">
      <div className="flex flex-col gap-20 ">
        <div className="flex flex-col gap-5 w-[60%]">
          <div className="text-7xl uppercase">
            Automate Your Dashboard Monitoring
          </div>
          <div className="text-2xl uppercase opacity-40">
            Don&apos;t let vital trends slip through the cracks. Join the
            forefront of proactive dashboard monitoring today. Click the button
            below to start your journey with Trendify and transform the way you
            interact with your data.
          </div>
          <Button className="w-fit text-2xl uppercase gap-2">
            Get Started
            <RightTopArrow />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-lg uppercase opacity-40">Using power of</div>
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-1">
              <VertexAI />
            </div>
            <div className="bg-secondary p-1">
              <Gemini />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
