import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartEvent
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor?: string;
}

interface LineChartProps {
    labels: string[];
    datasets: Dataset[];
}

const LineChart = ({ labels, datasets }: LineChartProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chartRef = useRef<any>(null);
    const [selectedPoint, setSelectedPoint] = useState<{ label: string; value: number; dataset: string } | null>(null);

    const data = {
        labels,
        datasets: datasets.map((dataset) => ({
            ...dataset,
            borderWidth: 2,
            pointRadius: 1,
            fill: false,
            tension: 0.1, // Smooth line
        })),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
        },
        scales: {
            x: {
                grid: { display: false }, // Hide X grid lines
            },
            y: {
                beginAtZero: true,
            },
        },
        onClick: (event: ChartEvent) => {
            if (!chartRef.current) return;
            const chart = chartRef.current;
            const elements = chart.getElementsAtEventForMode(event, "nearest", { intersect: true }, false);

            if (elements.length > 0) {
                const datasetIndex = elements[0].datasetIndex;
                const dataIndex = elements[0].index;
                
                setSelectedPoint({
                    label: labels[dataIndex],
                    value: datasets[datasetIndex].data[dataIndex],
                    dataset: datasets[datasetIndex].label,
                });
            }
        },
    };

    return (
        <div className="relative w-full h-96">
            <Line ref={chartRef} data={data} options={options} />
            
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
