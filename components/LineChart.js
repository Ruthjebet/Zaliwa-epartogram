import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Filler, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement,Filler);

function LineChart() {
  const [data,setData] = useState({
    labels: ["3pm","3:30pm", "4pm", "4:30pm", "5pm", "5:30pm", "6pm", "6:30pm", "7pm", "7:30pm", "8pm", "8:30pm"],
    datasets:[
      {
        label: "Fetal Heartrate",
        data:[125,152,132,140,150,142,122,140,130,120,145,140],
        backgroundColor: 'yellow',
        borderColor: 'red',
        tension:0.4,
        pointStyle: 'star',
        pointBorderColor: 'blue',
      }
    ]
  })
  return (
    <div className="LineChart" style={{width:'500px', height:'500px'}}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default LineChart;
