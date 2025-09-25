import Header from "../components/Header";
import Button from "../components/ui/Button"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <Header />

      {/* Seção principal */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bem-vindo ao Nosso Projeto 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl">
          Este é o início da nossa aplicação. Aqui você pode navegar, fazer login e explorar as funcionalidades que vamos construir juntos.
        </p>
        <Button onClick={() => alert("Você clicou em começar!")}>
          Começar Agora
        </Button>
      </main>
    </div>
  );
}
