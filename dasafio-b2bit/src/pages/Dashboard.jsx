import { Card, CardContent } from "../components/ui/Card";
import ChartCard from "../components/dashboard/ChartCard";
import TableCard from "../components/dashboard/TableCard";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Bem-vindo, Usuário 👋</h2>
          <p className="text-gray-600">
            Aqui está um resumo do desempenho da sua empresa.
          </p>
        </CardContent>
      </Card>

      <ChartCard />
      <TableCard />
    </div>
  );
}
