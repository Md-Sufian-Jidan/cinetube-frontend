"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
    CartesianGrid
} from "recharts";

interface StatsBarChartProps {
    data: {
        userCount: number;
        mediaCount: number;
        pendingReviewsCount: number;
    };
}

export function StatsBarChart({ data }: StatsBarChartProps) {
    const chartData = [
        { name: "Users", value: data.userCount, color: "#2563eb" },
        { name: "Media", value: data.mediaCount, color: "#EAB308" },
        { name: "Pending", value: data.pendingReviewsCount, color: "#ea580c" },
    ];

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                    />
                    <YAxis axisLine={false} tickLine={false} hide />
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={50}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}