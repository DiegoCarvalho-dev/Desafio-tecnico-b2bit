import { Card, CardContent } from "../ui/Card";

const rows = [
  { id: 1, name: "Cliente A", valor: "R$ 1.200" },
  { id: 2, name: "Cliente B", valor: "R$ 850" },
  { id: 3, name: "Cliente C", valor: "R$ 640" },
];

export default function TableCard() {
  return (
    <Card>
      <CardContent>
        <h3 className="font-semibold mb-3">Últimas Vendas</h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Cliente</th>
              <th className="py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="py-2">{row.name}</td>
                <td className="py-2">{row.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
