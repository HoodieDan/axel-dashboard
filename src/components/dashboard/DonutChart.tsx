import React, { useState } from "react";
import Chart from "react-apexcharts";

interface DonutChartProps {
    series: { name: string; data: number[] }[];
    categories: string[];
    colors?: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ series, categories, colors = ["#252A39", "#B9BCC8", "#F5B546"] }) => {
    const [selected, setSelected] = useState<{ label: string; value: number } | null>(null);

    // Extract data for the chart
    const seriesData = series.flatMap((item) => item.data);

    const options = {
        chart: {
            type: "donut" as const,
            toolbar: { show: false },
            events: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                dataPointSelection: (_event: any, _chartContext: any, config: any) => {
                    setSelected({
                        label: categories[config.dataPointIndex],
                        value: seriesData[config.dataPointIndex],
                    });
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: categories,
        colors: colors,
        legend: { 
            position: "bottom" as const,
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "35%", // Overall donut size
                    labels: {
                        show: false,
                    },
                },
                expandOnClick: true,
                customScale: 1,
                stroke: {
                    width: [5, 2],
                },
            },
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (val: number) => val.toLocaleString(),
            },
        },
    };

    return (
        <div className="relative w-full h-full">
            <Chart options={options} series={seriesData} type="donut" width="100%" height="100%" />

            {selected && (
                <div className="absolute top-2 left-2 p-3 bg-white shadow-md rounded-md">
                    <p className="text-sm font-semibold">📍 {selected.label}</p>
                    <p className="text-xs">Value: {selected.value}</p>
                </div>
            )}
        </div>
    );
};

export default DonutChart;
