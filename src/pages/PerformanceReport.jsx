import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { barChartData, lineChartData } from "../utils/data";

const PerformanceReport = () => {
  return (
    <main className="p-6 text-xs">
      <h2 className="text-2xl font-semibold mb-8">
        Views and likes of the news feed
      </h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart width={500} data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#8884d8"
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="likes"
            stroke="#82ca9d"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="text-2xl font-semibold mb-8">Engagement rates</h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart width={500} height={300} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="engagement" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
};

export default PerformanceReport;
