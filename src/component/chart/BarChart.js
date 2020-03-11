import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import myData from './chart.json';

const dbLable = myData.dbLable;
const newLable = [];
dbLable.map(s => newLable.push(s));

const state = {
  labels: newLable,
  fill: true,
  datasets: [
    {
      label: 'vs MODM complete',
      backgroundColor: ['rgba(63, 149, 205,.7)'],
      hoverBackgroundColor: ['rgba(63, 149, 205,.7)'],
      borderColor: 'rgb(63, 149, 205)',
      borderWidth: 1,
      data: [20, 30, 50, 70, 80, 100]
    },
    {
      label: 'vs MODM correct',
      backgroundColor: ['rgba(142, 94, 162,.7)'],
      hoverBackgroundColor: ['rgba(142, 94, 162,.7)'],
      borderColor: 'rgb(142, 94, 162)',
      borderWidth: 1,
      data: [20, 33, 44, 70, 80, 90]
    },
    {
      label: 'vs RODS complete',
      backgroundColor: ['rgba(60, 186, 159, .7)'],
      hoverBackgroundColor: ['rgba(60, 186, 159, .7)'],
      borderColor: 'rgba(60, 186, 159)',
      borderWidth: 1,
      data: [30, 40, 70, 80, 90, 95]
    },
    {
      label: 'vs RODS correct',
      backgroundColor: ['rgba(193, 2, 2, .7)'],
      hoverBackgroundColor: ['rgba(193, 2, 2, .7)'],
      borderColor: 'rgba(193, 2, 2)',
      borderWidth: 1,
      data: [25, 45, 65, 70, 80, 95]
    }
  ]
};

class BarChart extends Component {
  render() {
    return (
      <div className='form_layout border-grid'>
        <p>Tool Report last 6 months in (%)</p>
        <Line
          width={700}
          height={150}
          data={state}
          options={{
            legend: {
              display: true,
              position: 'bottom'
            }
          }}
        />
      </div>
    );
  }
}

export default BarChart;
