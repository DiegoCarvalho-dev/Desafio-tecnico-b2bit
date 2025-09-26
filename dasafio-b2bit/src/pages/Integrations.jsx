import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Integrations() {
  const integrations = [
    { id: 1, name: "Google Drive", connected: true },
    { id: 2, name: "Slack", connected: false },
    { id: 3, name: "Notion", connected: false },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Integrações</h1>
      {integrations.map((int) => (
        <Card key={int.id}>
          <CardContent className="flex justify-between items-center p-4">
            <span>{int.name}</span>
            <Button variant={int.connected ? "secondary" : "default"}>
              {int.connected ? "Desconectar" : "Conectar"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
