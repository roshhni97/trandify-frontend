import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { ExternalLinkIcon, PlusIcon } from "lucide-react";
import { Switch } from "../ui/switch";

interface WatcherProps {
    className?: string;
}

const data = [
    {
        link: "www.vercel.com/myapp/xyz",
        stats: {
            successfulHits: 500,
            failedHits: 4,
            altersSent: 9
        },
    },
    {
        link: "www.vercel.com/myapp/abc",
        stats: {
            successfulHits: 100,
            failedHits: 2,
            altersSent: 5
        },
    },
    {
        link: "www.vercel.com/myapp/def",
        stats: {
            successfulHits: 200,
            failedHits: 3,
            altersSent: 6
        },
    },
    {
        link: "www.vercel.com/myapp/ghi",
        stats: {
            successfulHits: 300,
            failedHits: 1,
            altersSent: 7
        },
    },
    {
        link: "www.vercel.com/myapp/jkl",
        stats: {
            successfulHits: 400,
            failedHits: 2,
            altersSent: 8
        },
    },
]

const Watchers: FC<WatcherProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col divide-y divide-[#597A79]", className)}>
            <div className="flex justify-between items-center py-7">
                <h1 className="text-3xl">YOUR WATCHERS</h1>
                <Button variant="default" className="uppercase text-lg">Add Watcher <PlusIcon /></Button>
            </div>
            {data.map((item) =>
                <div key={item.link} className="flex justify-between items-center py-4">
                    <div>
                        <a href={`http://${item.link}`} target="_blank" rel="noopener noreferrer" className="group">
                            <span className="group-hover:underline">
                                {item.link}
                            </span>
                            <ExternalLinkIcon className="hidden w-5 h-5 group-hover:inline ml-2" />
                        </a>
                        <div className="StatSummary divide-x divide-[#597A79]">
                            <span><span className="opacity-70">{item.stats.successfulHits}</span> <span role="img" aria-label="checkmark">✅ </span></span>
                            <span><span className="opacity-70"> {item.stats.failedHits}</span> <span className="text-[red]">&#33;&#33; </span></span>
                            <span><span className="opacity-70"> {item.stats.altersSent}</span> <span role="img" aria-label="alarm">🚨</span></span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <Switch className="rounded-0" />
                        <span className="uppercase opacity-70">ACTIVE</span>
                    </div>
                </div>)}
        </div>
    )
}

export default Watchers;