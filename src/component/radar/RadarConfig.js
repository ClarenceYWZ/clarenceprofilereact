export const RadarOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 5,
      stepSize: 1,
      showLabelBackdrop: false,
      // backdropColor: "rgba(203, 197, 11, 1)",
      font: { size: 18 },
    },
    angleLines: {
      color: "#757575",
      lineWidth: 3,
    },
    gridLines: {
      color: "#757575",
      circular: false,
      lineWidth: 3,
    },
    r: {
      ticks: {
        font: { size: 20 },
        color: "black",
      },
    },
  },
  animation: false,
};

export const RadarData = {
  labels: ["Finger Strength", "Power", "Endurance", "Stability", "Flexability"],
  datasets: [
    {
      label: "March",
      backgroundColor: "rgba(34, 202, 236, .2)",
      borderColor: "rgba(34, 202, 236, 1)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      data: [13, 10, 12, 6, 5],
    },
  ],
};
