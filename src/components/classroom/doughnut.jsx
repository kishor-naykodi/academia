import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const options = {
  clip: 5,
  radius: 90,
  layout: {
    responsive: "true",
    aspectRatio: 0,
    height: 250,
    padding: 20,
    height: 120,
  },
};

export function DoughNut() {
  return (
    <Doughnut
      data={data}
      options={options}
      style={{ position: "relative", height: 150, width: 120 }}
    />
  );
}
