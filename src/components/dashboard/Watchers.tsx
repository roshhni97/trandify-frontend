import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

interface WatcherProps {
    className?: string;
}

const Watchers: FC<WatcherProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col divide-y divide-[#597A79]", className)}>
            <div className="flex justify-between items-center py-7">
                <h1 className="text-3xl">YOUR WATCHERS</h1>
                <Button variant="default" className="uppercase text-lg">Add Watcher <PlusIcon /></Button>
            </div>
            <div className="flex justify-between items-center py-4">
                <div className="left">
                    <div className="link"></div>
                    <div className="StatSummary"></div>
                </div>
                <div className="button"></div>
            </div>
        </div >
    );
}

export default Watchers;