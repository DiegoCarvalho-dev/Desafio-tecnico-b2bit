import React from "react";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";

export default function Activity() {
  const activities = [
    { id: 1, action: "Login realizado", time: "Hoje, 09:30" },
    { id: 2, action: "Configurações atualizadas", time: "Ontem, 17:20" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Atividades Recentes</h1>
      {activities.map((a) => (
        <Card key={a.id}>
          <CardContent className="flex justify-between p-4">
            <span>{a.action}</span>
            <span className="text-sm text-gray-500">{a.time}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
