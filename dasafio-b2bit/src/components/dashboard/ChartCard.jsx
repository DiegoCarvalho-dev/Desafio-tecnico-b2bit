import { Card, CardContent } from "../ui/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 300 },
  { name: "Feb", uv: 500 },
  { name: "Mar", uv: 800 },
];

export default function ChartCard() {
  return (
    <Card>
      <CardContent>
        <h3 className="font-semibold mb-3">Vendas Mensais</h3>
        <div className="w-full h-60">
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uv" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
