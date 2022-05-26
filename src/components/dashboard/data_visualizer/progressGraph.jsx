import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "week0",
    progress: 0,
  },
  {
    name: "week1",
    progress: 15,
  },
  {
    name: "week2",
    progress: 35,
  },
  {
    name: "week3",
    progress: 100,
  },
  {
    name: "week4",
    progress: 55,
  },
  {
    name: "week5",
    progress: 100,
  },
];

export default class StudentProgress extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            strokeWidth="2px"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
