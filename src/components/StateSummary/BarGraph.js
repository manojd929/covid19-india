import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const BarGraph = ({ data }) => {
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Active" fill="#FFD700" />
            <Bar dataKey="Recovered" fill="#008000" />
            <Bar dataKey="Death" fill="#FF0000" />
        </BarChart>
    )
}

export default BarGraph
