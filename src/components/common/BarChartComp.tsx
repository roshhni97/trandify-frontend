"use client";

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    LabelList,
    Label
} from "recharts";

const data = [
    {
        name: "Page A",
        "+VE IDENTIFICATIONS": 4000,
        HITS: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        "+VE IDENTIFICATIONS": 3000,
        HITS: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        "+VE IDENTIFICATIONS": 2000,
        HITS: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        "+VE IDENTIFICATIONS": 2780,
        HITS: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        "+VE IDENTIFICATIONS": 1890,
        HITS: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        "+VE IDENTIFICATIONS": 2390,
        HITS: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        "+VE IDENTIFICATIONS": 3490,
        HITS: 4300,
        amt: 2100
    }
];

export default function App() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis stroke="#DAF9F2" dataKey="name" />
                <YAxis stroke="#DAF9F2" />
                {/* <Tooltip /> */}
                <Legend verticalAlign="top" align="right" height={60} iconType="square" iconSize={20} />
                <text x={20} y={20} fill="#DAF9F2" textAnchor="right" dominantBaseline="central" className="central text-2xl">
                    <tspan>HITS OBSERVATIONS</tspan>
                </text>
                <Bar dataKey="HITS" fill="#DAF9F2" />
                <Bar dataKey="+VE IDENTIFICATIONS" fill="#004233" />
            </BarChart>
        </ResponsiveContainer>
    );
}


