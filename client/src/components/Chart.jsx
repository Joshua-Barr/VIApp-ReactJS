import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      backgroundColor: 'rgba(120,200,0,120)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Earnings Per Share',
              fontSize:20,
              position:'right',
            },
            legend:{
              display:false,
            }
          }}
        />
      </div>
    );
  }
}