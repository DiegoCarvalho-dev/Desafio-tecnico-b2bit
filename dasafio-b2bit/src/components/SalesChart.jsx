import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function SalesChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300, background: "white", padding: 16, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
      <h3 style={{ marginBottom: 16 }}>Vendas por mês</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#02274A" strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
