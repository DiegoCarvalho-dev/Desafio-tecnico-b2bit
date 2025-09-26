import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Suporte</h1>
      <Card>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Assunto</label>
              <input
                type="text"
                placeholder="Digite o assunto"
                className="w-full border p-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mensagem</label>
              <textarea
                placeholder="Descreva seu problema"
                className="w-full border p-2 rounded-lg"
              ></textarea>
            </div>
            <Button>Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
