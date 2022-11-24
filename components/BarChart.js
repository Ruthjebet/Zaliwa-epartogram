import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Tooltip,Legend} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Tooltip,Legend);

const users = [
    {name: "John", items_delivered: 22, miles_driven: 100},
    {name: "Jane", items_delivered: 96, miles_driven: 164},
    {name: "Mary", items_delivered: 40, miles_driven: 106},
    {name: "Bob", items_delivered: 122, miles_driven: 172},
    {name: "Alice", items_delivered: 43, miles_driven: 122},
    {name: "Joe", items_delivered: 74, miles_driven: 110},
    {name: "Sue", items_delivered: 93, miles_driven: 149},
];

function BarChart(){
    return (
        <div className='BarChart' style={{padding: "5rem 10rem" }}>
            <Bar data={{
                labels: users.map(user=>user.name),
                datasets:[
                    {
                        label: "Items Delivered",
                        data: users.map(user=>user.items_delivered),
                        backgroundColor: "rgba(255,99,132)",
                    },
                    {
                        label: "Miles Driven",
                        data: users.map(user=>user.miles_driven),
                        backgroundColor: "rgba(54,162,235)",
                    },
                ]
            }}/>
        </div>
    )
}

export default BarChart;
