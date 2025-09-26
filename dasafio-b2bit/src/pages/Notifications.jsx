import { Card, CardContent } from "@/components/ui/card";

export default function Notifications() {
  const notifications = [
    { id: 1, message: "Novo pagamento recebido", time: "2h atrás" },
    { id: 2, message: "Usuário João adicionou um comentário", time: "5h atrás" },
    { id: 3, message: "Atualização de sistema concluída", time: "Ontem" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Notificações</h1>
      {notifications.map((n) => (
        <Card key={n.id}>
          <CardContent className="flex justify-between p-4">
            <span>{n.message}</span>
            <span className="text-sm text-gray-500">{n.time}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
