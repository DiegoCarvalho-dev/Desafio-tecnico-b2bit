import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function SalesChart({ data, dataKey = "sales", strokeColor = "#3b82f6" }) {
  return (
    <div style={{ 
      width: "100%", 
      height: 300, 
      background: "rgba(30, 41, 59, 0.5)", 
      padding: "10px 6px 18px 10px",
      borderRadius: 12,
      border: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <h3 style={{ marginBottom: 16, color: "#ffffff" }}>Vendas por mês</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart 
          data={data}
          margin={{ top: 10, right: 15, left: 15, bottom: 10 }}
        >
          <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="5 5"/>
          <XAxis 
            dataKey="month" 
            stroke="#cbd5e1"
            fontSize={12}
            tickMargin={5}
          />
          <YAxis 
            stroke="#cbd5e1"
            fontSize={12}
            width={35}
          />
          <Tooltip 
            contentStyle={{
              background: "rgba(30, 41, 59, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: "#ffffff"
            }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={strokeColor} 
            strokeWidth={3}
            dot={{ fill: strokeColor, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: strokeColor }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}