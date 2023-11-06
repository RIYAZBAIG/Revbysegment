import React from "react";
import { Bar } from "react-chartjs-2";

export const Valumebysegment = () => {
  return (
    <React.Fragment>
      <div>
        {" "}
        <h1 className="head"> Valume by Segment </h1>{" "}
      </div>
      <div>
        <Bar
          data={{
            labels: [
              "2012",
              "",
              "2014",
              "",
              "2016",
              "",
              "2018",
              "",
              "2020",
              "",
              "2022",
              "",
              "2024",
              "",
            ],
            datasets: [
              {
                label: "beer",
                data: [55, 65, 31, 45, 47, 38, 28, 35, 42, 35, 53, 44, 33, 27],
                backgroundColor: ["rgb(0,105,153)"],
                borderColor: [],
                borderWidth: 1,
              },

              {
                label: "cider,perry and rice wine",
                data: [11, 13, 22, 15, 25, 23, 12, 17, 17, 18, 13, 43, 34, 17],
                backgroundColor: ["rgba(255, 99, 132, 11)"],
                borderColor: [],
                borderWidth: 1,
              },
              {
                label: "Hard seltzer",
                data: [1, 13, 2, 15, 5, 3, 2, 7, 17, 18, 13, 4, 3, 1],
                backgroundColor: ["rgb(0, 0, 255)"],
                borderColor: [],
                borderWidth: 1,
              },
              {
                label: "Spirits",
                data: [31, 13, 32, 15, 15, 33, 22, 17, 47, 18, 13, 14, 23, 31],
                backgroundColor: ["rgb(255, 64, 0)"],
                borderColor: [],
                borderWidth: 1,
              },
              {
                label: "wine",
                data: [11, 3, 22, 5, 15, 31, 22, 7, 7, 1, 12, 41, 32, 12],
                backgroundColor: ["rgb(30,0,102)"],
                borderColor: [],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
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
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};
