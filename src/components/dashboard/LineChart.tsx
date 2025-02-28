import { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface Dataset {
    label: string;
    data: number[];
    color: string;
}

interface LineChartProps {
    labels: string[];
    datasets: Dataset[];
}

const LineChart = ({ labels, datasets }: LineChartProps) => {
    const [selectedPoint, setSelectedPoint] = useState<{ label: string; value: number; dataset: string } | null>(null);

    const series = datasets.map((dataset) => ({
        name: dataset.label,
        data: dataset.data,
    }));

    const options = {
        chart: {
            type: "line" as const,
            toolbar: { show: false },
            zoom: { enabled: false },
            events: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                dataPointSelection: (config: any) => {
                    const { dataPointIndex, seriesIndex } = config;
                    setSelectedPoint({
                        label: labels[dataPointIndex],
                        value: datasets[seriesIndex].data[dataPointIndex],
                        dataset: datasets[seriesIndex].label,
                    });
                },
            },
        },
        xaxis: {
            categories: labels,
        },
        stroke: {
            curve: "straight" as const,
            width: 2,
        },
        markers: {
            size: 0,
            hover: { size: 6 },
        },
        colors: datasets.map((dataset) => dataset.color),
        legend: { position: "bottom" as const },
    };

    return (
        <div className="relative w-full h-70 lg:h-full">
            <ReactApexChart options={options} series={series} type="line" height="100%" />

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

export default LineChart;
