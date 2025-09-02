"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Paid", value: 120 },
  { name: "Not Paid", value: 80 },
];

const COLORS = ["#4CAF50", "#F44336"]; // green for paid, red for not paid

export default function StudentPaymentChart() {
  return (
    <div className="flex flex-col justify-center items-center sm:p-4 bg-white shadow rounded-2xl my-4">
      <h2 className="text-2xl text-amber-600 mb-4 text-center">Students Payment Chart</h2>
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

