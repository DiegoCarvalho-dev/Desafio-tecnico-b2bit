import Card from "../components/ui/Card";

export default function Billing() {
  const invoices = [
    { id: 1, date: "10/09/2025", amount: "R$ 250,00", status: "Pago" },
    { id: 2, date: "10/08/2025", amount: "R$ 300,00", status: "Pendente" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Faturas</h1>
      {invoices.map((invoice) => (
        <Card key={invoice.id}>
          <CardContent className="flex justify-between p-4">
            <span>{invoice.date}</span>
            <span>{invoice.amount}</span>
            <span
              className={`${
                invoice.status === "Pago" ? "text-green-600" : "text-red-600"
              } font-semibold`}
            >
              {invoice.status}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
