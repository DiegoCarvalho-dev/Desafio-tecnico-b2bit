import { Card, CardContent } from "@/components/ui/Card";

export default function Calendar() {
  const events = [
    { id: 1, date: "25/09/2025", event: "Reunião de equipe" },
    { id: 2, date: "28/09/2025", event: "Entrega de relatório" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Calendário</h1>
      {events.map((e) => (
        <Card key={e.id}>
          <CardContent className="flex justify-between p-4">
            <span>{e.date}</span>
            <span>{e.event}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
