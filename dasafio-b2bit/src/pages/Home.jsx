import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Bem-vindo ao nosso sistema 🚀</h1>
      <p className="mb-6 text-gray-600">
        Explore os recursos do desafio B2bit navegando pelo menu lateral.
      </p>
      <Button variant="primary">Começar Agora</Button>
    </div>
  );
}
