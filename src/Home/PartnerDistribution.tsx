"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { name: "Nigeria", value: 40 },
  { name: "South Africa", value: 30 },
  { name: "United States", value: 15 },
  { name: "Canada", value: 15 }
];

const ChartComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-2">
        Our Partner Distribution So Far
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Africa deserves an agricultural system that prioritizes food security
        and community empowerment. This is a fight for all!
      </p>

      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#59a762">
              {/* Shows percentage on top of bars */}
              <LabelList dataKey="value" position="top" fill="black" fontSize={16} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;
