import React, { useState } from 'react';
import Chart from "react-apexcharts";

const RevenueGraphs = () => {

  const [state1, setState1] = useState({
    options: {
      colors: ["#ee5561"],
      chart: {
        id: "basic-bar"      
      },
      xaxis: {
        categories: ["London", "Seatle", "Everet", "New York", "Snohomish", "Malibu", "Social Circle"]
      }
    },
    series: [
      {
        name: "$",
        data: [1000, 2200, 2400, 5900, 6300, 13600, 16000]
      }
    ]
  });

  const [state2, setState2] = useState({
    options: {
      colors: ["#ee5561"],
      chart: {
        id: "basic-bar"      
      },
      xaxis: {
        categories: ["Pump", "Fire Extinguisher", "Diagnosis", "Backflow Testing", "Alarm System"]
      }
    },
    series: [
      {
        name: "$",
        data: [1000, 5800, 6200, 15800, 29000]
      }
    ]
  });

  return (
    <div className='revenue_graphs'>
      <div className='revenue_graphs_one'>
        <h3>Revenue By Job Location</h3>
        <Chart
          className='revenue_graphs_one_chart'
          options={state1.options}
          series={state1.series}
          type="bar"
          width="550"          
        />
      </div>
      <div className='revenue_graphs_two'>
        <h3>Revenue By Job Type</h3>
        <Chart
          className='revenue_graphs_two_chart'
          options={state2.options}
          series={state2.series}
          type="bar"
          width="550"
        />
      </div>        
    </div>
  )
}

export default RevenueGraphs