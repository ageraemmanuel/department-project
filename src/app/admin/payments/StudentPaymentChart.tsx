"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Paid", value: 120 },
  { name: "Not Paid", value: 80 },
];

const COLORS = ["#4CAF50", "#F44336"]; // green for paid, red for not paid

export default function StudentPaymentChart() {
  return (
    <div className="flex justify-center items-center p-4 bg-white shadow rounded-2xl my-4">
      <PieChart width={400} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

