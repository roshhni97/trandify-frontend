import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { FC } from "react";

const foo = {
    interfaceHits: 'Interface HITS',
    successAlerts: 'Success Alerts',
    activeWatchers: 'Active Watchers'
}
type KeyType = keyof typeof foo;
const values: Record<KeyType, number> = {
    interfaceHits: 300,
    successAlerts: 5,
    activeWatchers: 94,
}

interface DashboardSummaryProps {
    className?: string;
}

const DashboardSummary: FC<DashboardSummaryProps> = ({ className }) => {
    return (
        <div className={cn("w-full flex flex-col gap-4 px-[18px] py-[25px] bg-[#2E5050]", className)}>
            <h1 className="text-2xl uppercase">overview</h1>
            {Object.keys(foo).map((key) => (
                <>
                    <hr className="w-full border-[#597A79]" />
                    <div key={key} className="flex justify-between items-start">
                        <div className="flex flex-col gap-[3px] items-start">
                            <span className="text-4xl">{values[key as KeyType]}</span>
                            <span className="text-lg font-light text-[#DAF9F2] opacity-70">{foo[key as KeyType]}</span>
                        </div>
                        <Badge variant="success" className="self-end">-3.5%</Badge>
                    </div>
                </>
            ))}
        </div>
    );
}

export default DashboardSummary;