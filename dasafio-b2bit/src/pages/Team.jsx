import React from "react";
import Card from "../components/ui/Card";       
import CardContent from "../components/ui/CardContent";
import Button from "../components/ui/Button";

export default function Team() {
  const members = [
    { id: 1, name: "Diego Carvalho", role: "Admin" },
    { id: 2, name: "Maria Silva", role: "Usuário" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Equipe</h1>
      {members.map((m) => (
        <Card key={m.id}>
          <CardContent className="flex justify-between p-4">
            <div>
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
            <Button variant="outline">Editar</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
