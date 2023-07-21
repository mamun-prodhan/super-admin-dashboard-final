import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

const Contractors = () => {
    const data = [
        {
          name: '12 Aug',
          uv: 0,
          pv: 2,
          amt: 2400,
        },
        {
          name: '13',
          uv: 2,
          pv: 5,
          amt: 2210,
        },
        {
          name: '14',
          uv: 4,
          pv: 8,
          amt: 2290,
        },
        {
          name: '15',
          uv: 6,
          pv: 3,
          amt: 2000,
        },
        {
          name: '16',
          uv: 16,
          pv: 12,
          amt: 2181,
        },
        {
          name: '17',
          uv: 10,
          pv: 4,
          amt: 2500,
        },
        {
          name: '18',
          uv: 12,
          pv: 10,
          amt: 2100,
        },
        {
          name: '19',
          uv: 14,
          pv: 10,
          amt: 2100,
        },
      ];
    return (
        <div>
      <h3 className="text-xl font-bold p-5">Contractors</h3>
      {/* graph */}
      <div className="p-5 border-2 rounded-xl border-[#F3F7F2]">
        <div className="flex">
          <div className="me-5">
            <p className="text-xs font-bold text-[#1E1EE6]">Users</p>
            <p className="text-xl font-bold">39</p>
            <p className="text-xs font-bold text-[#B5342A]">9.3%</p>
          </div>
          <div className="">
            <p className="text-xs font-bold text-[#606367]">New users</p>
            <p className="text-xl font-bold text-[#606367]">34</p>
            <p className="text-xs font-bold text-[#B5342A]">10.5%</p>
          </div>
        </div>
        <div className="h-[300px] lg:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            axisLine={false}
                tickLine={false}
            margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 20,
            }}
            >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name"/>
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#00AEFF"  />
            <Line yAxisId="right" type="monotone" dataKey="pv" stroke="#00AEFF"  strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-xs font-bold mb-5">
            <span className="font-extrabold text-[#1E1EE6]">— </span>Last 7 days{" "}
            <span className="font-extrabold text-[#1E1EE6]">- -</span>{" "}
            Precending period
          </p>
          <p className="text-xs font-bold">Last 7 days</p>
        </div>
      </div>
    </div>
    );
};

export default Contractors;