// import BarChartComp from "@/components/common/BarChartComp";
import DashboardSummary from "@/components/dashboard/Summary";
import Watchers from "@/components/dashboard/Watchers";
import dynamic from "next/dynamic";

const BarChartComp = dynamic(() => import("@/components/common/BarChartComp"), { ssr: false });

export default function Page() {
    return (
        <div>
            <h1 className="text-4xl uppercase p-4">Dashboard</h1>
            <div className="w-full h-fit grid gap-3 grid-cols-3">
                <DashboardSummary />
                <div className="col-span-2 bg-[#0E1A1E] p-8 border border-[#2E5050]">
                    <BarChartComp />
                </div>
                <Watchers className="col-span-3 bg-[#0E1A1E] px-8 order border-[#2E5050]" />
            </div>

        </div>
    )
}