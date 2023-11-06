import React from 'react'
import { Line} from 'react-chartjs-2'


export const ValumeperCapita = () => {   
   
  return (
      <React.Fragment> 
        <div> <h1 className="head"> Volume per Capita </h1> </div>
    <div>
      <Line
        data={{
          labels: ["2012","","2014","","2016","","2018","","2020","","2022","","2024",""],
          datasets: [
            {
                label: "beer",
                data: [55,55,51,57,47,48,48,50,52,51,53,54,53,57],
              backgroundColor: [
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
                "rgb(0,105,153)",
              ],
              borderColor: [
                
              ],
              borderWidth: 1,
            },
            
            {label: "cider,perry and rice wine",
                data: [23, 23, 22, 25,25, 23,22,27,27,28,23,29,24,27],
              backgroundColor: [
                'rgba(255, 99, 132, 11)',
              ],
              borderColor: [
                
              ],
              borderWidth: 1,
            },
            {label: "Hard seltzer",
                data: [31, 33, 32, 35,35, 33,37,37,30,38,33,34,39,31],
              backgroundColor: [
                'rgb(0, 0, 255)',
              ],
              borderColor: [
                
              ],
              borderWidth: 1,
            },
            {label: "Spirits",
                data: [11, 13, 12, 15, 15, 13,12,17,17,18,13,14,13,11],
              backgroundColor: [
                
                'rgb(255, 64, 0)',
                
              ],
              borderColor: [
                
              ],
              borderWidth: 1,
            },
            {
                label: "wine",
                data: [1, 3, 2, 5, 5, 3,2,7,7,1,2,4,3,2],
                backgroundColor: [
                    'rgb(30,0,102)',

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
          plugins:{
            legend:{
            
            },
          },
          scales: {
            xAxes:{
                
                grid:{
                    display:true,
                }
            },
            yAxes: 
               {
                  beginAtZero: true,
                grid:{
                    display:true,
                }
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

