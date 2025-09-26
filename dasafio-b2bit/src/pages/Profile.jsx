import { Card, CardContent } from "@/components/ui/card";

export default function Profile() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Perfil</h1>
      <Card>
        <CardContent className="space-y-4">
          <p><strong>Nome:</strong> Usuário Exemplo</p>
          <p><strong>Email:</strong> usuario@email.com</p>
          <p><strong>Função:</strong> Administrador</p>
        </CardContent>
      </Card>
    </div>
  );
}
