import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Configurações</h1>
      <Card>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border p-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full border p-2 rounded-lg"
              />
            </div>
            <Button>Salvar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
