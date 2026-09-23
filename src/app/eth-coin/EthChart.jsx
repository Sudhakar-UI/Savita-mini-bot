"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip,
} from "chart.js";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip
);

export default function EthChart() {
    const [active, setActive] = useState("1D");

    const { isNightMode } = useTheme();

    const labels = ["1", "2", "3", "4", "5", "6", "7", "8"];

    const data = {
        labels,
        datasets: [
            {
                data: [2100, 2150, 2120, 2180, 2200, 2190, 2195, 2194],
                borderColor: isNightMode ? "#44A3DD" : "#11118b",
                backgroundColor: isNightMode ? "#44a2dd52" : "#11118b10",
                fill: true,
                tension: 0.4, // smooth curve
                pointRadius: 0,
                borderWidth: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };

    return (
        <div className="ethcoin-chart-card">
            <div className="ethcoin-chart-header">
                <h2>
                    2,194.67 $ <span className="ethcoin-green">+1.78%</span>
                </h2>
                <p>Price for 1 ETH</p>
            </div>

            <div className="ethcoin-chart-container">
                <Line data={data} options={options} />
            </div>

            <div className="ethcoin-tabs">
                {["1D", "7D", "1M", "1Y", "MAX"].map((item) => (
                    <button
                        key={item}
                        className={active === item ? "ethcoin-active" : ""}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
} 