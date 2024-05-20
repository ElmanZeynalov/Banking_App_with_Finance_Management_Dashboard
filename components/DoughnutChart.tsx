'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts} :DoughnutChartProps) =>{
    const data = {
        labels:['ban1','ban2'],
        datasets: [
            {
                labels: 'banks',
                data: [1250,2134,3115],
                backgroundColor: ['#0747b6', '#2265d8',"#2f91fa"],
            },
        ],
    };
    return <Doughnut
                data={data}
                options={{
                    cutout:"50%",
                    plugins: {
                        legend: {
                            display: false,
                            position: 'bottom',
                        },
                    },
                }}

    />;
}

export default DoughnutChart
