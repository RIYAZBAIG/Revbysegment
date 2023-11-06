import React from "react";
import { Bar } from "react-chartjs-2";

export const Athomesales=()=>{
    return(
        <React.Fragment>
            <div> <h1 className="head"> Revenue share at Home and out of Home </h1></div>
        <div>
            <Bar
        data={{
          labels: [ "2017",,"2018",,"2019",,"2020",,"2021",,"2022",,"2023",,"2024",,"2025" ],
          datasets: [
            {label: "At Home value share",
                data: [42,,35,,53,,44,,37,,44,,32,,35,,52],
              backgroundColor: [
                'rgba(255, 99, 132, 11)',
                
              ],
              borderColor: [
                
              ],
              borderWidth: 1,
            },
            {
                label: " out of Home value share",
                data: [45,,52,,31,,45,,37,,48,,28,,35,,22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
               
              ],
              borderColor: [
                
              ],
              borderWidth: 1,
            },
            
            
        ],
    }}
    height={400}
    width={600}
    options={{
      maintainAspectRatio: false,
      scales: {
        xAxes:{
            stacked:true
        },
        yAxes: 
           {
              beginAtZero: true,
              stacked:true
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
    )
}