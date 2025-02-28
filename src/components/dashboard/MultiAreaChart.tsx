import React, { useState } from "react";
import Chart from "react-apexcharts";

interface AreaChartProps {
    series: { name: string; data: number[] }[];
    categories: string[];
    colors?: string[];
}

const MultiAreaChart: React.FC<AreaChartProps> = ({ series, categories, colors = ["#F5B546", "#F8DFC3"] }) => {
    const [selectedPoint, setSelectedPoint] = useState<{ label: string; value: number; dataset: string } | null>(null);

    const options = {
        chart: {
            type: "area" as const,
            toolbar: { show: false },
            zoom: { enabled: false },
            events: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                dataPointSelection: ({ dataPointIndex, seriesIndex }: any) => {
                    setSelectedPoint({
                        label: categories[dataPointIndex],
                        value: series[seriesIndex].data[dataPointIndex],
                        dataset: series[seriesIndex].name,
                    });
                },
            },
        },
        stroke: {
            curve: "smooth" as const,
            width: 2,
        },
        markers: {
            size: 0,
            hover: { size: 6 },
        },
        tooltip: {
            enabled: true,
            x: { format: "dd MMM, yyyy" },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: "bottom" as const,
            horizontalAlign: "center" as const,
        },
        xaxis: {
            categories: categories,
        },
        colors: colors,
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                inverseColors: false,
                opacityFrom: 0.9,
                opacityTo: 0,
                stops: [0, 100],
            }
        }
    };

    return (
        <div className="relative w-full h-70 lg:h-full">
            <Chart options={options} series={series} type="area" height="100%" />

            {selectedPoint && (
                <div className="absolute top-2 left-2 p-3 bg-white shadow-md rounded-md">
                    <p className="text-sm font-semibold">📍 {selectedPoint.dataset}</p>
                    <p className="text-xs">Date: {selectedPoint.label}</p>
                    <p className="text-xs">Value: {selectedPoint.value}</p>
                </div>
            )}
        </div>
    );
};

export default MultiAreaChart;
