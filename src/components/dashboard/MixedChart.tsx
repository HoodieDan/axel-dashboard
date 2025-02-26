import React from "react";
import Chart from "react-apexcharts";

interface MixedChartProps {
    series: { name: string; type: string; data: number[]; dashArray?: number }[];
    categories: string[];
}

const MixedChart: React.FC<MixedChartProps> = ({ series, categories }) => {
    const options = {
        chart: {
            type: "line" as const,
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth" as const,
            width: [2, 2], // Both area and line have same stroke width
            dashArray: [0, 5], // Solid area chart, dashed line chart
        },
        markers: {
            size: 0,
        },
        tooltip: {
            enabled: true,
            x: {
                format: "dd MMM, yyyy",
            },
        },
        legend: {
            position: "bottom" as const,
            horizontalAlign: "center" as const,
        },
        xaxis: {
            categories: categories,
        },
        colors: ["#F5B546", "#F8DFC3"], // Area chart (gold) & Line chart (blue)
        fill: { 
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                inverseColors: false,
                opacityFrom: 0.5, // Start at 50% opacity
                opacityTo: 0, // Fade to transparent
                stops: [0, 100], // Start at top (0%), fade at bottom (100%)
            }
        }
    };

    return (
        <div className="w-full h-70 lg:h-full">
            <Chart options={options} series={series} type="line" height="100%" />
        </div>
    );
};

export default MixedChart;
