import React from "react";
import { Bar } from "react-chartjs-2";

export const CoronaMap = () => {
  return (
    <React.Fragment>
      <div>
        {""}
        <h1 className="head1">Corona heatmap showing by graphs</h1> {""}
      </div>
      <div>
        <Bar
          data={{
            labels: ["2019", "", "2020", "", "2021", "", "2022", ""  ],
            datasets: [
              {
                label: "COVID-19",
                data: [55, 65, 31, 45, 47, 38, 28, 35],
                backgroundColor: ["rgba(39, 187, 245, 0.8)"],
                borderColor: ["gren"],
                borderWidth: 2,
              },
              {
                label: "Nipah Virus (NiV)",
                data: [55, 65, 31, 45, 47, 38, 28, 35],
                backgroundColor: ["rgba(245, 40, 145, 0.8)"],
                borderColor: ["gren"],
                borderWidth: 2,
              },
              {
                label: "Black Fungle",
                data: [55, 65, 31, 45, 47, 38, 28, 35],
                backgroundColor: ["rgb(0, 0, 255)"],
                borderColor: ["Black"],
                borderWidth: 2,
              },
              {
                label: " SARS-CoV-2",
                data: [55, 65, 31, 45, 47, 38, 28, 35],
                backgroundColor: ["rgba(245, 39, 162, 0.8)"],
                borderColor: ["PINK"],
                borderWidth: 3,
              },
            ],
          }}
          height={520}
          width={620}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: {
                stacked: true,
              },
              yAxes: {
                beginAtZero: true,
                stacked: true,
              },
            },
            legend: {
              labels: {
                fontSize: 35,
              },
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default CoronaMap;
