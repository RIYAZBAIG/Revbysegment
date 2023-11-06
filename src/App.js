
import './App.css';
import { Home } from './component/Home';


import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

import React,{useState} from 'react';
import { Tabs,Tab } from "@mui/material";
import { Onlinesales } from './component/0nlinesales';
import { Athomesales } from './component/Athomesales';
import { Valumebysegment } from './component/Valumebysegment';
import { ValumeperCapita } from './component/ValumeperCapita';
import { Price } from './component/Price';
import {CoronaMap} from './component/CoronaMap';


Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);




function App() {
  const[val,setVal]=useState("") 
  return (
    <React.Fragment>
      <h1 className="head"> Alcoholic Drinks </h1>
      
   <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab label="Revenue Share Online / offline" value="online"/>
                <Tab label="Revenue at Home and Out of Home" value="Home"/>
                <Tab label="Valume by segment" value="valume"/>
                <Tab label="Valume per Capita" value="Capita" />
                <Tab label="Price per Capita" value="Price" />
                <Tab label="Geo mapData corona heat map" value="Corona" />

              
            </Tabs>
            {val==="online" && <Onlinesales/>}
            {val==="Home" && <Athomesales/>} 
            {val==="valume" && <Valumebysegment/>}
            {val==="Capita" && <ValumeperCapita/>}
            {val==="Price" && <Price/>}
            {val==="Corona" && <CoronaMap/>}
            <div>
    <Home/>
   </div>
            
      
   </React.Fragment>
  );
}

export default App;
