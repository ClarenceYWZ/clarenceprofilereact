import React, { createRef } from "react";
import { RadarOptions } from "./RadarConfig";
import { Radar } from "react-chartjs-2";

export function RadarChart(props) {
  const { radarDatafield } = props;

  const charRef = createRef();
  const RadarData = {
    labels: radarDatafield.map((item) => item.rating_name),
    datasets: [
      {
        label: "Vistors' Review",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: radarDatafield.map((item) => item.average_score),
      },
    ],
  };
  const plugins = {
    legend: {
      labels: {
        font: {
          size: 20,
        },
      },
    },
  };
  return (
    <Radar
      ref={charRef}
      data={RadarData}
      options={RadarOptions}
      plugins={plugins}
    />
  );
}
